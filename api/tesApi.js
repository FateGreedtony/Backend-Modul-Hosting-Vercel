module.exports = (req, res) => {
  const origin = req.headers.origin || '*';
  const allowedOrigin = process.env.ALLOWED_ORIGIN || origin || '*';

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
module.exports = (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Backend OK",
    timestamp: new Date().toISOString(),
  });
};
