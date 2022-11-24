import axios from "axios";
import getList from "./getList";

function deleteWriting(id, navigate) {
    axios.post("http://localhost:8000/delete", {
        boardID: id
    }).then((res) => {

    }).catch((err) => {

    })
}

export default deleteWriting;