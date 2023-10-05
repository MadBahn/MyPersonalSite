import {defineStore} from "pinia";

export default defineStore("visitor", () => {
//    在游客未登录时显示登录按钮
    const name = ref("");

    return {
        name
    };
});