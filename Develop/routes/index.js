const router = require("express").Router();
// const apiRoutes = require("./apiRoutes");
const path = require("path");
// router.use(apiRoutes);

// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/status.html"));
});









module.exports = router;