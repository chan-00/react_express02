

function BoardArticle({ article }) {
    return (
        <div>
            <span>{article.BOARD_NUM}</span>
            <span id={article.BOARD_NUM}>{article.BOARD_TITLE}</span>
            <span>{article.BOARD_WRITER}</span>
            <span>{article.BOARD_DATE}</span>
        </div>
    )
}

export default BoardArticle;