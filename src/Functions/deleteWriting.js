import axios from "axios";
import getList from "./getList";

function deleteWriting(id, navigate) {
    axios.post("http://localhost:8000/delete", {
        boardID: id
    }).then((res) => {
        alert("삭제되었습니다!");
        getList();
        navigate("/");
    }).catch((err) => {
        console.log(err);
    })
}

export default deleteWriting;