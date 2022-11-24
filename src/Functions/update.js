import axios from "axios";
import getList from "./getList";

function update(id, title, content, navigate) {
    console.log(id, title, content);

    if(title === "" || title === undefined) {
        alert("제목이 비어 있습니다!");
    }

    axios.post("http://localhost:8000/update", {
        boardID: id,
        boardTitle: title,
        boardContent: content,
    }).then((res) => {
        if(res.data.affectedRows === 1) {
            alert("글 수정 성공!");
            getList();
            navigate("/");
        } else {
            alert("글 수정 실패!");
        }
    }).catch((err) => {
        console.log(err);
    })
}

export default update;