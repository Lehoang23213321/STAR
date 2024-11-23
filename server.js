const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware để parse JSON
app.use(express.json());

// Đọc dữ liệu từ file JSON
app.get('/api/users', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Lỗi đọc file JSON' });
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData.users);
    });
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

