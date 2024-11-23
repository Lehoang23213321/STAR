const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Cấu hình phục vụ các file tĩnh trong thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route để trả về file 'thai.html' khi truy cập /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thai.html'));
});

// Route API để trả về dữ liệu từ db.json
app.get('/api/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Không thể đọc file db.json' });
        }
        res.json(JSON.parse(data));
    });
});

// Lắng nghe trên cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


