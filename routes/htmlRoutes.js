const router = require('express').Router()
const { join } = require('path')

router.get('/exercise', (req, res) => {
    res.sendfile(join(__dirname, '..', 'public', 'exercise.html'))
})

module.exports = router