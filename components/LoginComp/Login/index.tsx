import _ from "lodash-es";

import {IFInput} from "~/components/ImprovedForm";

export default defineComponent(() => {
    const un = ref("123");
    const un2 = ref("abc");
    
    const doInput = () => {
        _debounce(() => {
            console.log("debounce");
        }, 1000);
    }

//    如果通过微信登录，将会跳转至注册部分，部分项目会被填充

    return () => (
        <div>
            {/*{un.value}*/}
            login
            <IFInput v-model={[un.value, "value"]} placeholder="Username"/>
            <IFInput placeholder="Password"/>
            <input
                v-model={un.value}
                placeholder="debounce input"
                onInput={() => {
                    _.debounce(() => {
                        console.log("do input");
                        
                    }, 1000)
                }}
            />
            <button>login</button>
        </div>
    )
});