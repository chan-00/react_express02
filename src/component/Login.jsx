import axios from "axios";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userID, isLoggedin} from "../Atoms/userID";

function Login() {
    const setID = useSetRecoilState(userID);
    const setIsLoggedin = useSetRecoilState(isLoggedin);

    const navigate = useNavigate();

    const idRef = useRef();
    const pwRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();

        if(idRef.current.value === "" || idRef.current.value === undefined) {
            alert("아이디를 입력하지 않았습니다!");
            return false;
        }
        if(pwRef.current.value === "" || pwRef.current.value === undefined) {
            alert("비밀번호를 입력하지 않았습니다!");
            return false;
        }

        axios.post("http://localhost:8000/login", {
            id: idRef.current.value,
            pw: pwRef.current.value,
        }).then((res) => {
            if(res.data[0].cnt === 1) {
                alert("로그인 성공!");
                setID(idRef.current.value);
                setIsLoggedin(true);
                window.sessionStorage.setItem("id", idRef.current.value);
                navigate("/");
            }
            else {
                alert("로그인 실패!!!");
                idRef.current.value = "";
                pwRef.current.value = "";
            }
        }).catch((err) => {
            console.log(err);
        })
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