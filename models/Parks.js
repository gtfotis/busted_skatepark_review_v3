const db = require('./conn.js');

class Parks {
    constructor(id, name, address, picture) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.picture = picture;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM parks;`
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getParkData() {
        try {
            const query = `SELECT * FROM parks WHERE id = ${this.id}`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

}

module.exports = Parks;