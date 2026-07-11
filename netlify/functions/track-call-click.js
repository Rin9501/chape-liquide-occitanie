// Insère un clic sur un lien tel: dans Supabase (table clics_appel).
// Appelée en fire-and-forget côté client via navigator.sendBeacon — voir
// src/components/TelClickTracker.astro. Même pattern d'accès Supabase que
// submission-created.js (clé service-role, jamais exposée au client).
exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid payload' };
  }

  const page = typeof data.page === 'string' ? data.page.slice(0, 200) : null;
  const section = typeof data.section === 'string' ? data.section.slice(0, 100) : null;

  if (!page || !section) {
    return { statusCode: 400, body: 'Missing page or section' };
  }

  const supabaseRes = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/clics_appel`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ page, section }),
    }
  );

  if (!supabaseRes.ok) {
    console.error('Supabase insert error (clics_appel):', supabaseRes.status, await supabaseRes.text());
    return { statusCode: 502, body: 'Insert failed' };
  }

  return { statusCode: 200, body: 'ok' };
};
