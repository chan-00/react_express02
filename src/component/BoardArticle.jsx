import axios from "axios";
import {useSetRecoilState} from "recoil";
import {boardArticle} from "../Atoms/boardArticle";
import {useNavigate} from "react-router-dom";

function BoardArticle({ article }) {
    const navigate = useNavigate();
    
    const setArticle = useSetRecoilState(boardArticle);

    const handleDetail = (e) => {
        console.log(e.target.id);

        axios.post("http://localhost:8000/detail", {
            id: e.target.id,
        }).then((res) => {
            const { data } = res;
            setArticle(data[0]);
            console.log(data);
            navigate("/detail");
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <span>{article.BOARD_NUM}</span>
            <a href="#" onClick={handleDetail}><span id={article.BOARD_NUM}>{article.BOARD_TITLE}</span></a>
            <span>{article.BOARD_WRITER}</span>
            <span>{article.BOARD_DATE}</span>
        </div>
    )
}

export default BoardArticle;