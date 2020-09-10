const router = require('express').Router()
const { Workout } = require('../models')


// GET all workouts
router.get('/workouts', (req, res) => {
    Workout.find()
    .populate('user')
        .then(workouts => res.json(workouts))
        .catch(err => console.log(err))
})

// POST one workout
router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then(workout => {
            User.findByIdAndUpdate(workout.user, { $push: {workouts: workout._id } })
                .then(() => res.json(workout))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

// PUT one workout
router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})

// DELETE one workout
router.delete('/workouts/:id', (req, res) => {
    Workout.findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})


module.exports = router