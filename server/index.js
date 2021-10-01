const express = require("express");
const cors = require("cors");

const app = express();

// Using this npm package we set an Access-Control-Allow-Origin header on every response.
app.use(
    cors({
        origin: "http://127.0.0.1:5500",
    })
);

app.get("/data", (req, res) => {
    res.json({ name: "David", age: 20 });
});

app.listen(3000, () => console.log("Server running at port 3000"));
