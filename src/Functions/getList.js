import axios from "axios";

const getList = (setBoardList) => {
    axios.get("http://localhost:8000/getlist", {}).then((res) => {
        const { data } = res;
        setBoardList(data);
    }).catch((err) => {
        console.log(err);
    })
}

export default getList;