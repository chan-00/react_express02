import axios from "axios";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userID, isLoggedin} from "../Atoms/userID";

function SignUp() {
    const setID = useSetRecoilState(userID);
    const setIsLoggedin = useSetRecoilState(isLoggedin);

    const navigate = useNavigate();

    const idRef = useRef();
    const pwRef = useRef();
    const emailRef = useRef();

    const handleSignUp = (e) => {
        e.preventDefault();

        if(idRef === "" || idRef === undefined) {
            alert("아이디를 입력하지 않았습니다!");
            return false;
        }
        if(pwRef === "" || pwRef === undefined) {
            alert("비밀번호를 입력하지 않았습니다!");
            return false;
        }
        if(emailRef === "" || emailRef === undefined) {
            alert("이메일을 입력하지 않았습니다!");
            return false;
        }

        axios.post("http://localhost:8000/signup", {
            id: idRef.current.value,
            pw: pwRef.current.value,
            email: emailRef.current.value,
        }).then((res) => {
            if(res.data.affectedRows === 1) {
                alert("회원가입 성공!");
                setID(idRef.current.value);
                setIsLoggedin(true);
                navigate("/");
            }
            else {
                alert("회원가입 실패!");
                idRef.current.value = "";
                pwRef.current.value = "";
                emailRef.current.value = "";
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
            email : 
            <input
                type="text"
                ref={emailRef}
                placeholder="이메일을 입력하세요."
            ></input><br></br>
            <button onClick={handleSignUp}>회원가입</button>
        </form>
    )
}

export default SignUp;