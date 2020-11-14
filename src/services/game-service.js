import { mockedGames } from './mocked-data';

export const GameService = {
    /**
     * This endpoint gets all game products
     * @returns {Promise}
     */
    getGames: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockedGames);
            }, 300);
        });
    },

    /**
     * This endpoint gets a product by its ID
     * @param {Boolean} id
     * @returns {Promise}
     */
    getGameById: (id) => {
        return new Promise((resolve, reject) => {
            const response = mockedGames.filter((game) => game.id === id);
            resolve(response);
        })
    }
}