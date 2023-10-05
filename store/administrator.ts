import {defineStore} from "pinia";

export default defineStore("administrator", () => {
    const machine = ref("");
//    与redis联动
    const key = ref("");

    return {
        machine,
        key
    };
});