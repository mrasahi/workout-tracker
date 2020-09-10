const { model, Schema } = require('mongoose')

const Workout = new Schema({
    workout: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('Workout', Workout)