import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";

function BoardArticle({ article }) {
    const handleDetail = () => {

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