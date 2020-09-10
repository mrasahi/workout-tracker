const { model, Schema } = require('mongoose')

const Workout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            requred: true
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }]
})

module.exports = model('Workout', Workout)