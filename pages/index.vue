<template>
    <div>
        index
        <IFInput v-model="v"/>
    </div>
</template>

<script setup lang="ts">
import {IFInput} from "~/components/ImprovedForm";

import init from "~/integraded_projects/wasm/wasm_demo.wasm?init";

const v = ref(1234);

onMounted(() => {
//    wasm.greet();
    init().then((ins) => {
        console.log(ins);
    })
})
</script>

<style scoped>

</style>