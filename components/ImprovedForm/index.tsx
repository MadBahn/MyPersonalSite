import {debounce} from "~/common/func/utils";
//引用webassembly
import * as wasm from "~/integraded_projects/wasm_demo";

//文本框
//import {debounce} from "lodash";

export const IFInput = defineComponent({
//    在使用上与一般的表单组件保持一致
    props: ["value", "placeholder", "type"],
//    为tsx组件添加v-model支持，格式：update:<变量名称>
    emits: ["update:value"],
    setup: (props, {emit}) => {
//        处理输入事件，将防抖功能整合进去
//        emit("update:value", $e.target.value);
//        const doInput = ref(null);
//        onMounted(() => {
////            下一步：将e对象添加进防抖函数中以方便调用
//            doInput.value = debounce((e: any) => {
//                console.log("input");
//                console.log(this);
//            }, 1000);
//        });
        
        const doInput = debounce((e: any) => {
//            console.log("input");
            console.log(e);
//            wasm.greet();
            emit("update:value", e);
        }, 1000);
        
        const doITrigger = ($e: any) => {
//            console.log($e.target.value);
            doInput($e.target.value);
        }

        return () => {
//        需要添加对v-model的支持
            return (
                <input
                    {...props}
                    onInput={(e) => doITrigger(e)}
                />
            );
        };
    }
});

//多行文本框
export const IFTextarea = defineComponent((props: any, {attrs}) => {
    const doInput = debounce(() => {
        console.log("input");
    }, 1000);

    return () => {
        return (
            <textarea value={props.value} onInput={() => _debounce(() => {
                console.log(props);
            }, 1000)}>
            </textarea>
        );
    };
});