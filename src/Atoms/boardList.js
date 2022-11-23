import { atom } from "recoil";

const boardList = atom({
    key: 'boardList',
    default: []
});

export {boardList};