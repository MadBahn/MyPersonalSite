import "./index.scss";
import {NuxtLink} from "#components";

export default defineComponent((props, ctx) => {
    return () => {
        return (
            <div>
                <div class="main">
                    {/*点击可以进入注册访问者信息页面*/}
                    <div class="bg-gray rounded-full">AVATAR</div>
                    <NuxtLink to={`/visitor/123/info`}>
                        <div>visitor info</div>
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/visitor/login_register">
                        Login
                    </NuxtLink>
                </div>
            </div>
        )
    }
});