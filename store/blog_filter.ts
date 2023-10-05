import {defineStore} from "pinia";

export default defineStore("blog-filter", () => {
    const date = ref("date");

    const setDate = () => {
        console.log("setDate");
    };

    return {
        date,

        setDate
    };
})