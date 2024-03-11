const db = require('../db');

class CategoriesController {
    async createCategories(req, res) {
        const {name, image} = req.body;
        const newCat = await db.query(`INSERT INTO categories (name, image) VALUES ($1, $2) RETURNING *`, [name, image]);
        res.json(newCat.rows[0]);
    }

    async getallCat(req, res) {
        const categories = await db.query(`SELECT * FROM categories RETURNING *;`);
        res.json(categories.rows);
    }
}
module.exports = new CategoriesController();
