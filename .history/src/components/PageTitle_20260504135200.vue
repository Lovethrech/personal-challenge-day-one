<script setup>
import { defineProps } from 'vue';

const {name}=defineProps(["name"]);
</script>

<template>
    <h1 class="page-title">
        {{ name }}
    </h1>
</template>

<style scoped>
.page-title{
    
}
</style>