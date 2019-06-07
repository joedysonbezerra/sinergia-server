module.exports = {
  url: process.env.DATABASE_URL || "mongodb://localhost/grh-api-ad",
  flag: { useNewUrlParser: "true", useCreateIndex: "true" }
};
