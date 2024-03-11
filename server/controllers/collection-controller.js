
const db = require('../db');

class CollectionController {

    async getCollection(req, res) {
        try {
            const collection = await db.query(`SELECT *
            FROM collection
            JOIN users ON collection.iduser = users.iduser;
            `);
            return res.json(collection.rows);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async createCollection(req, res) {
        try {
            const { iduser, name, description, ethername, originals, image,price, highhest } = req.body;
            const newCollection = await db.query(
                `INSERT INTO collection (iduser, name, description, ethername, originals,image, price, highhest) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
                [iduser, name, description,image, ethername, originals, price, highhest]
            );
            return res.json(newCollection.rows[0]);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async updateCollection(req, res) {
        try {
            const { idnft, iduser, name, description, ethername, originals, image } = req.body;
    
            const updateNft = await db.query(
                `UPDATE collection SET name = $1, description = $2, image = $3, ethername = $4, originals = $5 WHERE idnft = $6 AND iduser = $7 RETURNING *`,
                [name, description,image, ethername, originals, idnft, iduser]
            );
    
            if (!updateNft.rows || updateNft.rows.length === 0) {
                return res.status(404).json({ error: 'NFT not found for the specified user' });
            }
    
            return res.json({ updatedNft: updateNft.rows[0] });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async getOneCollection(req, res) {
        try {
            const { idcollection } = req.body;
    
            const collectionResult = await db.query('SELECT * FROM collection WHERE idcollection = $1', [idcollection]);
    
            if (!collectionResult.rows || collectionResult.rows.length === 0) {
                return res.status(404).json({ error: 'NFT not found' });
            }
    
            const collectionRes = collectionResult.rows[0];
            return res.json({ collectionRes });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }  
    async getUserCollection(req, res, next) {
        const {iduser} = req.body
        try {
           
            const collection = await db.query(`
                SELECT *
                FROM collection
                JOIN users ON collection.iduser = users.iduser
                WHERE collection.iduser = $1;
            `, [iduser]);
    
            return res.json(collection.rows);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }  
    async  getCollectionByName(req, res, next) {
        const { names } = req.body;
        try {
            const nfts = await db.query(
                `SELECT *
                FROM collection
                JOIN users ON collection.iduser = users.iduser
                WHERE collection.name ILIKE '%${names}%';`
            );
    
            return res.json(nfts.rows);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
}

module.exports = new CollectionController();
