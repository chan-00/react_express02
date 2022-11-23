import { atom } from "recoil";

const userID = atom({
    key: 'id',
    default: ""
});

const isLogined = atom({
    key: 'isLogined',
    default: false
});

export { userID, isLogined };