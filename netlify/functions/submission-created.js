const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid payload' };
  }

  // Ne traiter que le formulaire guide-ebook
  if (payload.form_name !== 'guide-ebook') {
    return { statusCode: 200, body: 'Ignored' };
  }

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
};
