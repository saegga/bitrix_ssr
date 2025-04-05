<template>
<div>
<h1>Hello world</h1>
<div v-if="arr">
    <div v-for="item in arr">
        <h3>{{ item.NAME }}</h3>
        <div>{{ item.PREVIEW_TEXT }}</div>
    </div>
</div>
</div>
</template>

<script setup>
useSeoMeta({
    title: 'TEST TITLE',
})
const config = useRuntimeConfig();

const {data, pending, error} = await useFetch(config.public.domain + `/backend/api/index.php`);
let arr = JSON.parse(data.value);
console.log(arr)

</script>