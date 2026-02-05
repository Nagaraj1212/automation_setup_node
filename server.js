const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Node CI/CD App Running 🚀");
});

// Sample API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Nagaraj" },
    { id: 2, name: "John" }
  ]);
});

// POST API
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully",
    data
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
