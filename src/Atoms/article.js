import { atom } from "recoil";

const article = atom({
    key: 'article',
    default: {}
});

export {article};