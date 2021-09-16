// URL Routes localhost:3000/api
const router = require("express").Router();
const Workout = require("../models/Workout");
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
router.post("/workouts", ({
    body
}, res) => {
    Workout.create(body)
        .then(dbworkout => {
            res.json(dbworkout);
        }).catch(err => { res.status(400).json(err) });
})

router.put("/workouts/:id", ({
    body,
    params
}, res) => {
    Workout.findByIdAndUpdate({ $push: { exercise: {...body } } }, { new: true, runValidatetors: true })
        .then(dbworkout => {
            res.json(dbworkout);
        }).catch(err => { res.status(400).json(err) });
})

router.get("/workouts", (req, res) => {
    Workout.aggregate([
            { $addFields: { totalDuration: { $sum: "$exercises.duration" } } }
        ])
        .then(dbWorkouts => {
            res.json(dbWorkouts);

        })
        .catch(err => {
            res.status(400).json(err)
        });
})

router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
            { $addFields: { totalDuration: { $sum: "$exercises.duration" } } }
        ])
        .sort({ day: -1 })
        .limit(7)

    .then(dbWorkouts => {
            res.json(dbWorkouts);

        })
        .catch(err => {
            res.status(400).json(err)
        });


});

router.delete("/workouts", ({
    body
}, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(dbworkout => {
            res.json(dbworkout);
        }).catch(err => { res.status(400).json(err) })
});












module.exports = router;