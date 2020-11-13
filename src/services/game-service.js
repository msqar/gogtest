import { mockedGames } from './mocked-data';

export const GameService = {
    getGames: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockedGames);
            }, 2000);
        });
    }
}