require('dotenv').config();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');


class UserController {
    async registration(req, res) {
        try {
            const { email, password, username } = req.body;
    
            // Email validation using a simple regex
            const validEmail = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
            if (validEmail.rows.length > 0) {
                return res.status(400).json({ error: 'User with this email already exists' });
            }
    
            const hashPassword = await bcrypt.hash(password, 10);
            const token = uuidv4();
            const newUser = await db.query(
                `INSERT INTO users (email, password, username, token) VALUES ($1, $2, $3, $4) RETURNING *`,
                [email, hashPassword, username, token]
            );
    
            console.log('JWT_ACCESS_SECRET:', process.env.JWT_ACCESS_SECRET);
            console.log('JWT_REFRESH_SECRET:', process.env.JWT_REFRESH_SECRET);
    

            const accessToken = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15s' });
            const refreshToken = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '30s' });


            console.log("iduser", newUser.rows[0]);
            // Insert the access and refresh tokens into userstoken table
            const newUserToken = await db.query(
                `INSERT INTO userstoken (iduser, accesstoken, refreshtoken) VALUES ($1, $2, $3) RETURNING *`,
                [newUser.rows[0].iduser, accessToken, refreshToken]
            );
    
            console.log(accessToken);
            return res.json({ user: newUser.rows[0], accessToken, refreshToken });
        } catch (error) {
            // Handle errors appropriately (log, send error response, etc.)
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const validEmail = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    
            if (validEmail.rows.length > 0) {
                const isPassEquals = await bcrypt.compare(password, validEmail.rows[0].password);
    
                if (!isPassEquals) {
                    return res.status(400).json({ error: 'Wrong password' });
                }
    
                const accessToken = jwt.sign({ userId: validEmail.rows[0].id }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
                const refreshToken = jwt.sign({ userId: validEmail.rows[0].id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    
                const newUserToken = await db.query(
                    `UPDATE userstoken SET accesstoken = $2, refreshtoken = $3 WHERE iduser = $1 RETURNING *`,
                    [validEmail.rows[0].iduser, accessToken, refreshToken]
                );
                
    
                if (!newUserToken.rows || newUserToken.rows.length === 0) {
                    return res.status(500).json({ error: 'Token insertion failed' });
                }
    
                return res.json({ user: validEmail.rows[0], accessToken, refreshToken });
            } else {
                return res.status(400).json({ error: 'User with this email does not exist' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async getOneUser(req, res) {
        const {iduser} = req.body;
        const user = await db.query(`SELECT * FROM users WHERE iduser = $1`, [iduser]);
        res.json(user.rows[0]);
    }

    async followUser(req, res, next) {
        const {iduser, idfollow} = req.body;
        try{
            const followUser = await db.query(`INSERT INTO usersfollow (iduser, idfollow) VALUES ($1, $2) RETURNING *`, [iduser, idfollow]);
            return res.json(followUser.rows)
        }
        catch(error){
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async deleteFollowUser(req, res, next) {
        const {iduser, idfollow} = req.body;
        try{
            const unfollowUser = await db.query(`DELETE FROM usersfollow WHERE iduser = $1 AND idfollow = $2 `, [iduser, idfollow]);
            return res.json(unfollowUser.rows)
        }
        catch(error){
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async getAllUsersFollow(req, res, next) {
        const { iduser, idfollow } = req.body;
    
        try {
            const checkFollow = await db.query(`SELECT * FROM usersfollow WHERE iduser = $1 AND idfollow = $2`, [iduser, idfollow]);
            return res.json(checkFollow.rows[0]);
        } catch (error) {
            // Обработка ошибки, если не удается выполнить запрос
            console.error("Ошибка при выполнении запроса:", error);
            return res.status(500).json({ error: "Ошибка сервера" });
        }
    }
    
    
    
}

module.exports = new UserController();
