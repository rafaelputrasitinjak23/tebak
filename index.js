require('./index')
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const databasePath = path.join(__dirname, 'database.json');

// Load progress
// Load progress
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/loadProgress', (req, res) => {
    const username = req.query.username;

    fs.readFile(databasePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load progress.' });
        }

        const database = JSON.parse(data);
        const userProgress = database[username] || null;

        res.json(userProgress);
    });
});

// Save progress
app.post('/saveProgress', (req, res) => {
    const { username, progress } = req.body;

    fs.readFile(databasePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save progress.' });
        }

        const database = JSON.parse(data);
        database[username] = progress;

        fs.writeFile(databasePath, JSON.stringify(database, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save progress.' });
            }

            res.json({ message: 'Progress saved successfully.' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});