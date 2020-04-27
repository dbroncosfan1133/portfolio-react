const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "..", "portfolio-react/public")
app.use(express.static(publicPath));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});