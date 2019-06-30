module.exports = {
  url: process.env.DATABASE_URL || 'mongodb://localhost/grh-api-ad',
  flags: { useNewUrlParser: 'true', useCreateIndex: 'true' },
};
