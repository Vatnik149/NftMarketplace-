const db = require('../db');

class CreatorsController {
    async createCreatorsSales(req, res) {
        const {iduser, salesnumber} = req.body;
        const newSales = await db.query(`INSERT INTO creatoesales (iduser, salesnumber) VALUES ($1, $2) RETURNING *`, [iduser, salesnumber]);
        res.json(newSales.rows[0]);
    }
    async getTopCreatorsSales(req, res) {
        const usersWithSalesInfo = await db.query(`
            SELECT users.*, creatoeSales.salesNumber
            FROM users
            JOIN creatoeSales ON users.iduser = creatoeSales.iduser
            ORDER BY creatoeSales.salesNumber DESC
        `);
        res.json(usersWithSalesInfo.rows);
    }
    async getTopCreatorsSalesToday(req, res) {
        const usersWithSalesInfo = await db.query(`
            SELECT users.*, creatoeSales.salesNumber
            FROM users
            JOIN creatoeSales ON users.iduser = creatoeSales.iduser
            WHERE DATE(creatoeSales.date) = CURRENT_DATE
            ORDER BY creatoeSales.salesNumber DESC
        `);
        res.json(usersWithSalesInfo.rows);
    }

    async  getTopCreatorsSalesPastWeek(req, res) {
        try {
            const topCreatorsSales = await db.query(`
                SELECT users.*, SUM(creatoeSales.salesNumber) AS totalSales
                FROM users
                JOIN creatoeSales ON users.iduser = creatoeSales.iduser
                WHERE creatoeSales.date >= current_date - interval '7 days'
                GROUP BY users.iduser
                ORDER BY totalSales DESC
                LIMIT 10; -- Здесь можно указать нужное количество пользователей в топе
            `);
    
            res.json(topCreatorsSales.rows);
        } catch (error) {
            console.error("Ошибка при получении данных о продажах пользователей:", error);
            res.status(500).json({ error: "Внутренняя ошибка сервера" });
        }
    }
    
    async getTopCreatorsSalesPastMonth(req, res) {
        const usersWithSalesInfo = await db.query(`
            SELECT users.*, creatoeSales.salesNumber
            FROM users
            JOIN creatoeSales ON users.iduser = creatoeSales.iduser
            WHERE creatoeSales.date BETWEEN CURRENT_DATE - INTERVAL '1 month' AND CURRENT_DATE
            ORDER BY creatoeSales.salesNumber DESC
        `);
        res.json(usersWithSalesInfo.rows);
    }
    
    
    
}
module.exports = new CreatorsController();
