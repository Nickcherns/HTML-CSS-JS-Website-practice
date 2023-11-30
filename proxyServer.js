
// RUN:  node proxyServer.js


// proxyServer.js
const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());

// Use dynamic import() syntax for node-fetch
app.get('/osrsApi/:player', async (req, res) => {
    try {
        const { player } = req.params;
        const { default: fetch } = await import('node-fetch');
        const apiUrl = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${player}`;
        const response = await fetch(apiUrl);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
