/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
const userRoutes = (app, fs) => {
    //TODO: FIGURE OUT A WAY TO UPDATE CHROME DRIVER TO USE THIS PATH: const dataPath = './axe/webpage-results/results.json';
    // const dataPath = './axe/infoLinkData/infoData.json';
    const dataPath = './axe/webpage-results/results.json';

    // READ
    app.get('/data', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = userRoutes;
