const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("유저 정보 조회")
})

module.exports = router;