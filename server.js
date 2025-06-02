const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/userRoutes');
const hocPhanRoutes = require('./routes/hocPhanRoutes');
const khoaHocRoutes = require('./routes/khoaHocRoutes');
const kyHocRoutes = require('./routes/kyHocRoutes');
const lopRoutes = require('./routes/lopRoutes');
const lopSinhVienRoutes = require("./routes/lop_sinhvien.route");
const lopGiaoVienRoutes = require("./routes/lop_giaovien.route");
const diemdanhRoutes = require("./routes/diemdanh.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/hocphan', hocPhanRoutes);
app.use('/api/khoahoc', khoaHocRoutes);
app.use('/api/kyhoc', kyHocRoutes);
app.use('/api/lop', lopRoutes);
app.use("/api/lop-sinhvien", lopSinhVienRoutes);
app.use("/api/lop-giaovien", lopGiaoVienRoutes);
app.use("/api/diemdanh", diemdanhRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
