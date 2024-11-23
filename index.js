const express = require('express');
const path = require('path');
const app = express();

// Phục vụ các file tĩnh trong thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Các route khác của bạn (nếu có)
app.get('/api/site-info', (req, res) => {
  const data = {
    site: {
      name: "TimHieuPhapLuat",
      description: "Trang thông tin về pháp luật",
      sections: [
        {
          title: "Thông Tin Cuộc Thi",
          content: [
            { title: "Giải thưởng", link: "/708/Giai-thuong.html" },
            { title: "Hướng dẫn", link: "/709/Huong-dan.html" },
            { title: "Thể lệ", link: "/710/The-le.html" }
          ]
        },
        {
          title: "Thông Báo",
          content: [
            { message: "Cuộc thi trực tuyến tìm hiểu pháp luật về phòng, chống ma túy và phòng, chống tác hại của thuốc lá." }
          ]
        }
      ],
      contact: {
        organization: "Sở Tư Pháp Tỉnh Đồng Nai",
        address: "Số 02 Nguyễn Văn Trị, phường Thanh Bình, thành phố Biên Hòa, tỉnh Đồng Nai",
        phone: ["02513941586", "0987705309"],
        email: "ngocphucstp@gmail.com"
      }
    }
  };
  res.json(data);
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

