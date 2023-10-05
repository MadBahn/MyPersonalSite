<template>
    <div>
        blogs
        <BlogsFilter/>
        <div>
            list
            <BlogsItem :a="1"/>
            <BlogsItem :a="2"/>
            <BlogsItem :a="3"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const a = ref("1");
</script>

<style scoped>

</style>