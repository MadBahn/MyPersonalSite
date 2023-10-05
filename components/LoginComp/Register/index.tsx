import {IFInput} from "~/components/ImprovedForm";

export default defineComponent(() => {
//    当通过微信首次登录时执行该函数
    const fillWithWeChat = () => {
        
    };
    
    return () => (
        <div>
            register
            <IFInput placeholder="username"/>
            <IFInput placeholder="password"/>
            <IFInput placeholder="repeat password"/>
            <IFInput placeholder="e-mail"/>
            <IFInput placeholder="phone"/>
            <IFInput placeholder="captcha"/>
            <button>register</button>
        </div>
    )
})