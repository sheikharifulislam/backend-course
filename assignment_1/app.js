const express = require("express");
const cors = require("cors");
const app = express();
const generateRandomNumber = require("./utils/generateRandomNumber");
const convertStringToNumber = require("./middleware/convertStringToNumber");

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.status(200).json({
        message: "well Come",
    });
});

app.get("/generate", convertStringToNumber, (req, res) => {
    const { min, max } = req.query;
    const start = Date.now();
    const result = generateRandomNumber(min, max);
    const end = Date.now();
    res.status(200).json({
        success: true,
        generateTime: `${end - start}ms`,
        data: result,
    });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`The server is running at port ${PORT}`));
