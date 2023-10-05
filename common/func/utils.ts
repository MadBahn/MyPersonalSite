//防抖，在VDOM框架中使用时需要注意在页面更新后的唯一性
export const debounce = (fn: Function, delay: number = 1000) => {
//    console.log("debounce");
    let t: NodeJS.Timeout;
//    问题：由于在使用时会产生新的匿名函数，闭包并未被执行
    return (...args: any) => {
        if(t) clearTimeout(t);
        t = setTimeout(() => {
            // @ts-ignore
            fn.apply(this, args);
//            fn.call(this, args);
        }, delay);
        console.log(t);
    };
}
//
////节流
export const throttle = (fn: any, delay: number) => {
    let t = true;
    return (...args: any) => {
        setTimeout(function () {
            // @ts-ignore
            fn.call(this, args);
            //        等待一定时间后将控制变量重设为true
            t = true;
        }, delay);
        //    执行后立即将控制变量设为false以实现在一定时间内不执行相同之操作
        t = false;
    }
    
}