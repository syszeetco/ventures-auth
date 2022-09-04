module.exports = {
  title: 'Authentic Ventures',
  port: process.env.PORT || 3000,
  api: {
    base: '/api',
    mock: false
  },
  foundation: {
    plugins: []
  },
  accessToken: process.env.REG_TOKEN || 'av2017',
  env: process.env.NODE_ENV || 'production'
};
