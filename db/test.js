const { DESCRIBE } = require('sequelize/types/query-types');
const {db} = require('./db')
const {Board, Cheese, User} = require('./index')

describe('Cheese, Board and User tests', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    })

    test('can create a user', async () => {
        const testUser = await User.create ({
            name: 'Barry',
            
        })
        expect(testUser.name).toBe('Barry')
        
    }) 













})