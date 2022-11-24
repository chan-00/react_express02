import {Link, useNavigate} from "react-router-dom";
import { useRecoilState } from "recoil";
import {userID, isLoggedin} from "../Atoms/userID";

function Header() {
    const navigate = useNavigate();

    const [loginID, setLoginID] = useRecoilState(userID);
    const [loginStatus, setLoginStatus] = useRecoilState(isLoggedin);

    const handleLogout = () => {
        setLoginID("");
        setLoginStatus(false);

        alert("로그아웃 되었습니다!");
        navigate("/");
    }

    return (
        <div>
            <Link to="/"><h2>React Mysql Ex Page</h2></Link><br></br>
            {loginStatus
            ? <div>
                <span>현재 로그인된 계정 : {loginID}</span>
                <button onClick={handleLogout}>logout</button>
              </div>
            : <div>
                <Link to="/login"><button>login</button></Link>
                <Link to="/signup"><button>SignUp</button></Link>
              </div>}
        </div>
    )
}

export default Header;