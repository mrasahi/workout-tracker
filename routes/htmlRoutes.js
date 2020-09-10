const router = require('express').Router()
const { join } = require('path')

// Link to exercise.html
router.get('/exercise', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'exercise.html'))
})

router.get('/stats', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'stats.html'))
})

// Default page to index.html
router.get('/*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})


module.exports = router