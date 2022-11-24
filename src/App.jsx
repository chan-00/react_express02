//react hooks
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//user components
import Header from "./component/Header";
import Main from "./component/Main";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import WriteBoard from "./component/WriteBoard";
//css
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/write" element={<WriteBoard></WriteBoard>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
