import axios from "axios";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const idRef = useRef();
    const pwRef = useRef();

    const handleLogin = () => {

    }

    return (
        <form>
            ID : 
            <input
                type="text"
                ref={idRef}
                placeholder="id를 입력하세요."
            ></input><br></br>
            PW : 
            <input
                type="password"
                ref={pwRef}
                placeholder="pw를 입력하세요."
            ></input><br></br>
            <button onClick={handleLogin}>로그인</button>
        </form>
    )
}

export default Login;