import { atom } from "recoil";

const userID = atom({
    key: 'id',
    default: ""
});

const isLoggedin = atom({
    key: 'isLoggedin',
    default: false
});

export { userID, isLoggedin };