import {useNavigate} from "react-router-dom";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import axios from "axios";

import getList from "../Functions/getList";
import { userID } from "../Atoms/userID";

import "../css/WriteBoard.css";

function WriteBoard() {
    const navigate = useNavigate();

    const titleRef = useRef();
    const contentRef = useRef();
    const writer = useRecoilValue(userID);

    const handleWrite = (e) => {
        e.preventDefault();

        if(titleRef.current.value === "" || titleRef.current.value === undefined) {
            alert("제목을 적지 않았습니다!");
            return false;
        }

        axios.post("http://localhost:8000/write", {
            title: titleRef.current.value,
            content: contentRef.current.value,
            writer: writer,
        }).then((res) => {
            if(res.data.affectedRows === 1) {
                alert("글 작성 성공!");
                getList();
                navigate("/");
            } else {
                alert("글 작성 실패!");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <form>
            title : <input
                type="text"
                name="title"
                size="20"
                defaultValue=""
                ref={titleRef}
                placeholder="제목을 입력하세요"
            ></input>
            <br></br>
            Writer: {writer}
            <br></br>
            Content : <br></br>
            <textarea
                type="text"
                name="content"
                size="100"
                defaultValue=""
                ref={contentRef}
                placeholder="내용을 입력하세요"
            ></textarea>
            <br></br>
            <button onClick={handleWrite}>save</button>
        </form>
    )
}

export default WriteBoard;