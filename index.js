const express = require("express"); //웹서버 생성
const mysql = require("mysql"); // 데이터베이스
const bodyParser = require("body-parser"); // 요청정보 처리
const cors = require("cors"); // 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)

const app = express(); // 익스프레스 설정
const PORT = process.env.port || 8000; // 포트번호 설정 포트번호는 0부터 16비트

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // 객체 형식 처리

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키, ...등) 접근
};

app.use(cors(corsOptions)); // 미들웨어 설정 작업

const db = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "1234",
  database: "reactmysqlex",
  multipleStatements: true,
});



app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});