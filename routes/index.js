// URL Routes localhost:3000/
const router = require("express").Router();
const api = require("./apiRoutes");
const path = require("path");
router.use("/api", api);

// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});









module.exports = router;