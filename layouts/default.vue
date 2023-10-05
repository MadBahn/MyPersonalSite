<template>
    <div class="media">
        <header class="p-2 m-2 w-1/6">
            <h1 class="font-bold text-3xl">Welcome to my site</h1>
            <!--<h3>{{ $route.params }}</h3>-->
            <div class="toolbar py-1 border-l">
                <ToolbarVisitor/>
                <NuxtLink v-for="(i, index) in front.series" :to="`${front.base}${i.url}`">
                    <!--    icon-->
                    {{ i.title }}
                </NuxtLink>
                <!--    如果处于后台，则显示返回前台链接-->
                <div>settings</div>
            </div>
        </header>
        <section class="m-2 p-2 w-4/6">
            <slot/>
        </section>
    </div>
    <footer>
        hello world
    </footer>
</template>

<script setup lang="ts">
import {front, backstage} from "~/common/cfg/nav_routes.json";

//通过判断路由路径决定导航栏的内容

</script>

<style scoped>
.media, .toolbar {
    display: flex;
}

.toolbar {
    overflow: hidden;
    flex-flow: column;
}

@media (min-width: 45rem) {
    .media {
        flex-flow: row;
        height: 90vh;
    }
}

@media (max-width: 45rem) {
    .media {
        flex-flow: column;
    }

    header {
        width: 100vw;
        /*        height: 40%;*/
        /*        height: fit-content;*/
    }
}
</style>