
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }
    // Simulate successful login (store in DB in real case)
    res.json({ success: true, user: { name, email } });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
