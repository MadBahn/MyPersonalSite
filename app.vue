<template>
    <div>
        <!--使用LazyNuxtLayout可能导致组件无法正常工作-->
        <!--当涉及登录注册等操作时，切换至登录布局，否则保持默认布局-->
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

onMounted(() => {
    console.log(route.fullPath);

});

//路由路径更改时，执行检查路由之操作，并根据路由路径决定布局

onUpdated(() => {

});

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0
}
</style>
