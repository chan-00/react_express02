import {boardArticle} from "../Atoms/boardArticle";
import {userID} from "../Atoms/userID";

import {useNavigate} from "react-router-dom";
import { useRef } from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import update from "../Functions/update";
import deleteWriting from "../Functions/deleteWriting";

function DetailBoard() {
    const navigate = useNavigate();

    const titleRef = useRef();
    const contentRef = useRef();

    const loginID = useRecoilValue(userID);
    const [article, setArticle] = useRecoilState(boardArticle);

    const handleUpdate = (e) => {
        e.preventDefault();
        update(article.BOARD_NUM, titleRef.current.value, contentRef.current.value, navigate);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteWriting(article.BOARD_NUM, navigate);
    }

    if(article.BOARD_WRITER === loginID) {
        return (
            <form>
                title : <input
                    type="text"
                    name="title"
                    size="20"
                    defaultValue={article.BOARD_TITLE}
                    ref={titleRef}
                    placeholder="제목을 입력하세요"
                ></input>
                <br></br>
                Writer: {article.BOARD_WRITER}
                <br></br>
                Content : <br></br>
                <textarea
                    type="text"
                    name="content"
                    size="100"
                    defaultValue={article.BOARD_CONTENT}
                    ref={contentRef}
                    placeholder="내용을 입력하세요"
                ></textarea>
                <br></br>
                <div>
                    <button onClick={handleUpdate}>수정하기</button><br></br>
                    <button onClick={handleDelete}>삭제하기</button>
                </div>
            </form>
        )
    } else {
        return (
            <form>
                    title : <input
                        type="text"
                        name="title"
                        size="20"
                        defaultValue={article.BOARD_TITLE}
                        ref={titleRef}
                        placeholder="제목을 입력하세요"
                        readOnly
                    ></input>
                    <br></br>
                    Writer: {article.BOARD_WRITER}
                    <br></br>
                    Content : <br></br>
                    <textarea
                        type="text"
                        name="content"
                        size="100"
                        defaultValue={article.BOARD_CONTENT}
                        ref={contentRef}
                        placeholder="내용을 입력하세요"
                        readOnly
                    ></textarea>
                    <br></br>
            </form>
        )
    }
}

export default DetailBoard;