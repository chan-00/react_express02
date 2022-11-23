//react hooks
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//user components
import Header from "./component/Header";
import Main from "./component/Main";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
