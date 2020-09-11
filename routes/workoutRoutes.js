const router = require('express').Router()
const { Workout } = require('../models')


// GET all workouts
router.get('/workouts', (req, res) => {
    Workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => console.log(err))
})

// POST one workout
router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then(workout => res.json(workout))
        .catch(err => console.log(err))
})

// PUT one workout
router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
        .then(workout => res.json(workout))
        .catch(err => console.log(err))
})

// GET for range?
router.get('/workouts/range', (req, res) => {
    Workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => console.log(err))
})


// DELETE one workout
// router.delete('/workouts/:id', (req, res) => {
//     Workout.findByIdAndDelete(req.params.id)
//         .then(workout => res.json(workout))
//         .catch(err => console.log(err))
// })


module.exports = router