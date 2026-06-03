const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

exports.handler = async function (event) {
  let payload;
  try {
    payload = JSON.parse(event.body).payload;
  } catch {
    return { statusCode: 400, body: 'Invalid payload' };
  }

  // ─── Guide ebook ──────────────────────────────────────────────────────────
  if (payload.form_name === 'guide-ebook') {
    const email = payload.data?.email;
    if (!email) {
      return { statusCode: 400, body: 'No email in payload' };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const siteUrl = 'https://chapeliquide-occitanie.fr';

    await transporter.sendMail({
      from: '"Chape Liquide Occitanie" <contact@chapeliquide-occitanie.fr>',
      to: email,
      subject: 'Votre guide chape liquide est prêt ✓',
      html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Votre guide chape liquide</title>
</head>
<body style="margin:0;padding:0;background:#F5F0EB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F0EB;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#2C2C2C;padding:28px 40px;">
              <span style="display:inline-block;background:#C4522A;color:#fff;font-weight:800;font-size:15px;padding:6px 10px;border-radius:3px;letter-spacing:0.02em;">CLO</span>
              <span style="color:rgba(255,255,255,0.7);font-size:13px;margin-left:12px;">Chape Liquide Occitanie</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 24px;font-size:22px;font-weight:700;color:#2C2C2C;line-height:1.2;">
                Votre guide est prêt.
              </p>
              <p style="margin:0 0 16px;font-size:15px;color:#444;line-height:1.6;">
                Merci pour votre intérêt. Vous trouverez ci-dessous le lien de téléchargement de votre guide gratuit :
              </p>
              <p style="margin:0 0 16px;font-size:14px;font-weight:600;color:#2C2C2C;">
                <strong>Chape liquide : le guide pour choisir sans se tromper — Édition 2026</strong>
              </p>
              <p style="margin:0 0 8px;font-size:13px;color:#7A736C;">8 chapitres · les 3 modes de pose · séchage · erreurs à éviter · comment choisir son applicateur</p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td style="background:#C4522A;border-radius:3px;">
                    <a href="${siteUrl}/guide-chape-liquide-2026.pdf"
                       style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:0.01em;">
                      ⬇ Télécharger le guide PDF
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:13px;color:#7A736C;line-height:1.6;">
                Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br />
                <a href="${siteUrl}/guide-chape-liquide-2026.pdf" style="color:#C4522A;">${siteUrl}/guide-chape-liquide-2026.pdf</a>
              </p>

              <hr style="border:none;border-top:1px solid #DDD2C2;margin:28px 0;" />

              <p style="margin:0 0 8px;font-size:14px;color:#2C2C2C;font-weight:600;">Un projet de chape en Ariège, Aude ou Haute-Garonne ?</p>
              <p style="margin:0 0 16px;font-size:13px;color:#7A736C;line-height:1.6;">
                Devis gratuit sous 48 h · Visite préalable · Applicateur agréé Sika
              </p>
              <p style="margin:0;font-size:13px;color:#2C2C2C;">
                📞 <a href="tel:0687613987" style="color:#C4522A;font-weight:700;">06 87 61 39 87</a>
                &nbsp;·&nbsp;
                <a href="${siteUrl}" style="color:#C4522A;">chape-liquide-occitanie.fr</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F0EB;padding:20px 40px;border-top:1px solid #DDD2C2;">
              <p style="margin:0;font-size:11px;color:#7A736C;line-height:1.6;">
                EURL Balussou Cyril · Mirepoix, Ariège (09) · SIRET 533 165 684 00028<br />
                Cet email vous a été envoyé car vous avez téléchargé le guide sur notre site. Il n'y aura pas de suite.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return { statusCode: 200, body: 'Email sent' };
  }

  // ─── Demande de devis ──────────────────────────────────────────────────────
  if (payload.form_name === 'demande-devis') {
    const d = payload.data || {};
    const { nom, telephone, email, departement, surface_m2, type_chape, message } = d;

    // 1. Insert dans Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    const { error: dbError } = await supabase.from('leads').insert({
      nom,
      telephone,
      email,
      departement,
      surface_m2: parseInt(surface_m2) || 0,
      type_chape,
      message: message || null,
    });
    if (dbError) {
      console.error('Supabase insert error:', dbError);
    }

    // 2. Email notification à Cyril
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"Chape Liquide Occitanie" <contact@chapeliquide-occitanie.fr>',
      to: process.env.CYRIL_EMAIL,
      subject: `🔔 Nouveau lead — ${nom} · ${surface_m2}m² · ${type_chape} · Dept ${departement}`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#F5F0EB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F0EB;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;">
          <tr>
            <td style="background:#2C2C2C;padding:24px 40px;">
              <span style="display:inline-block;background:#C4522A;color:#fff;font-weight:800;font-size:15px;padding:6px 10px;border-radius:3px;">CLO</span>
              <span style="color:rgba(255,255,255,0.7);font-size:13px;margin-left:12px;">Nouvelle demande de devis</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 20px;font-size:20px;font-weight:700;color:#2C2C2C;">
                Nouveau lead entrant
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr style="border-bottom:1px solid #EDE6DC;">
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;width:140px;">Nom</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;font-weight:600;">${nom || '—'}</td>
                </tr>
                <tr style="border-bottom:1px solid #EDE6DC;">
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;">Téléphone</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;font-weight:600;">
                    <a href="tel:${telephone}" style="color:#C4522A;">${telephone || '—'}</a>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #EDE6DC;">
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;">Email</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;">
                    <a href="mailto:${email}" style="color:#C4522A;">${email || '—'}</a>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #EDE6DC;">
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;">Département</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;font-weight:600;">${departement || '—'}</td>
                </tr>
                <tr style="border-bottom:1px solid #EDE6DC;">
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;">Surface</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;font-weight:600;">${surface_m2 || '—'} m²</td>
                </tr>
                <tr style="border-bottom:1px solid #EDE6DC;">
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;">Type de chape</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;font-weight:600;">${type_chape || '—'}</td>
                </tr>
                ${message ? `<tr>
                  <td style="padding:10px 0;font-size:12px;color:#7A736C;vertical-align:top;">Message</td>
                  <td style="padding:10px 0;font-size:14px;color:#2C2C2C;">${message}</td>
                </tr>` : ''}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#F5F0EB;padding:20px 40px;border-top:1px solid #DDD2C2;">
              <p style="margin:0;font-size:11px;color:#7A736C;">
                Lead enregistré dans Supabase — chapeliquide-occitanie.fr
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return { statusCode: 200, body: 'Lead processed' };
  }

  return { statusCode: 200, body: 'Ignored' };
};
