import {defineStore} from "pinia";

export default defineStore("common", () => {
    const id = ref("a");
//    路由路径
    const cur = ref("/");

    const getId = () => {
        return id;
    }

    const getCur = () => cur;


    return {
        id,
        cur,

        getId,
        getCur
    };
});