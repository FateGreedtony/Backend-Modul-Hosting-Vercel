module.exports = (req, res) => {
  const origin = req.headers.origin || '*';
  // Strip trailing slash from ALLOWED_ORIGIN to match browser origin exactly
  const allowedOrigin = (process.env.ALLOWED_ORIGIN || origin || '*').replace(/\/+$/, '');

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json({
    ok: true,
    message: 'Backend OK',
    timestamp: new Date().toISOString(),
  });
};
