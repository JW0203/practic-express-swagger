const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/test:
 *   get:
 *     summary: 유저 정보 조회
 *     description: 모든 유저 정보를 조회한다.
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: The user's name
 */

router.get('/test', (req, res) => {
    res.send("유저 정보 조회")
})

module.exports = router;