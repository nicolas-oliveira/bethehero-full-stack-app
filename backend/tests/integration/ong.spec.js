const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });
    
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
            	name: "Dev Test Jean",
                email: "nicolasm15@hotmail.com.br",
                whatsapp: "3599361184",
                city: "Carmo do Rio Claro",
                uf: "PP"   
            });
            console.log(response.body);
    });
});