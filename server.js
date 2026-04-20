const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Test route (so we know server is alive)
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working" });
});
app.use("/api", (req, res) => {
  res.json({ success: false, message: "API route not implemented" });
});
// Frontend fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
