
const db = require('../db');

class UserController {

    async getNfts(req, res) {
        try {
            const nfts = await db.query(`SELECT *
            FROM nft
            JOIN users ON nft.iduser = users.iduser;
            `);
            return res.json(nfts.rows);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async createNft(req, res) {
        try {
            const { iduser, name, description, ethername, originals, image, price, highest } = req.body;
            const newNft = await db.query(
                `INSERT INTO nft (iduser, name, description, ethername, originals, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [iduser, name, description, ethername, originals, image]
            );
            return res.json(newNft.rows[0]);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async updateNft(req, res) {
        try {
            const { idnft, iduser, name, description, ethername, originals, image } = req.body;
    
            const updateNft = await db.query(
                `UPDATE nft SET name = $1, description = $2, ethername = $3, originals = $4, image = $7 WHERE idnft = $5 AND iduser = $6 RETURNING *`,
                [name, description, ethername, originals, idnft, iduser]
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
    async getOneNft(req, res) {
        const { idnft } = req.body;
      
        try {
          const nft = await db.query(`
            SELECT *
            FROM nft
            JOIN users ON nft.iduser = users.iduser
            WHERE idnft = $1;
          `, [idnft]);
      
          return res.json(nft.rows);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }
        
    async getUserNFt(req, res, next) {
        const {iduser} = req.body
        try {
            const userId = req.params.userId; // Assuming user ID is passed as a parameter
            const nfts = await db.query(`
                SELECT *
                FROM nft
                JOIN users ON nft.iduser = users.iduser
                WHERE nft.iduser = $1;
            `, [iduser]);
    
            return res.json(nfts.rows);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async  getNftByName(req, res, next) {
        const { names } = req.body;
        try {
            const nfts = await db.query(
                `SELECT *
                FROM nft
                JOIN users ON nft.iduser = users.iduser
                WHERE nft.name ILIKE '%${names}%';`
            );
    
            return res.json(nfts.rows);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    
    
    
    
    
    
}

module.exports = new UserController();
