<template>
<div>
<h1>Hello world</h1>
</div>
</template>
<script setup>


const config = useRuntimeConfig();
console.log(config)
const {data, pending, error} = await useFetch(config.public.domain + `/backend/api/test.php`);
console.log(data)
</script>