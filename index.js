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

//login 백엔드
app.post("/login", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;

  const sqlQuery = "select count(*) as cnt from member where userID = ? and userPW = ?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    if(err) console.log(err.message);
    res.send(result);
  })
})

//signup 백엔드
app.post("/signup", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const email = req.body.email;

  const sqlQuery = "insert into member(userID, userPW, userEmail) values(?, ?, ?);";
  db.query(sqlQuery, [id, pw, email], (err, result) => {
    if(err) console.log(err.message);
    res.send(result);
  })
})

//getlist 백엔드
app.get("/getlist", (req, res) => {
  const sqlQuery = "select BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE from board_tbl;";

  db.query(sqlQuery, (err, result) => {
    if(err) console.log(err.message);
    res.send(result);
  })
})

//write 백엔드
app.post("/write", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const writer = req.body.writer;

  const sqlQuery = "insert into board_tbl(BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, BOARD_DATE) values(?, ?, ?, now());";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    if(err) console.log(err.message);
    res.send(result);
  })
})

//detail 백엔드
app.post("/detail", (req, res) => {
  const boardNum = req.body.id;

  const sqlQuery = "select * from board_tbl where board_num = ?;";
  db.query(sqlQuery, [boardNum], (err, result) => {
    if(err) console.log(err.message);
    console.log(result);
    res.send(result);
  })
})

//update 백엔드
app.post("/update", (req, res) => {
  const boardID = req.body.boardID;
  const boardTitle = req.body.boardTitle;
  const boardContent = req.body.boardContent;

  const sqlQuery = "update board_tbl set board_title = ?, board_content = ? where board_num = ?;";
  db.query(sqlQuery, [boardTitle, boardContent, boardID], (err, result) => {
    if(err) console.log(err.message);
    res.send(result);
  })
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});