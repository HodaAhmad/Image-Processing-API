import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint response', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    })

    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api/img');
        expect(response.status).toBe(404);
        done();
    }
    )
});
