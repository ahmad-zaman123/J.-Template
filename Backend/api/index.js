// Vercel serverless entrypoint — re-exports the Express app.
// Vercel hands the (req, res) directly to the exported handler.
module.exports = require("../app");
