import {Link, useNavigate} from "react-router-dom";
import {boardList} from "../Atoms/boardList";
import {useRecoilState, useRecoilValue} from "recoil";
import { useEffect } from "react";
import { isLoggedin } from "../Atoms/userID";
//function import
import getList from "../Functions/getList";
//component import
import BoardArticle from "../component/BoardArticle";

function Main() {
    const [boardlist, setBoardList] = useRecoilState(boardList);
    const getIsLoggedIn = useRecoilValue(isLoggedin);

    useEffect(() => {
        getList(setBoardList);
    }, []);

    console.log(getIsLoggedIn);

    if(boardlist.length === 0) {
        return (
            <div>
                게시글이 없습니다.<br></br>
                {getIsLoggedIn
                ? <Link to="/write"><button>글 작성</button></Link>
                : null }
            </div>
        )
    } else {
        return (
            <div>
                {boardlist.map((article) => {
                    return (
                        <BoardArticle
                        article={article}
                        key={article.BOARD_NUM}
                        ></BoardArticle>
                    );
                })}
                {getIsLoggedIn
                ? <Link to="/write"><button>글 작성</button></Link>
                : null }
            </div>
        )
    }
}

export default Main;