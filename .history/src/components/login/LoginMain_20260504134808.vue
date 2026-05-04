<script setup>
import {ref} from "vue";
import PageTitle from '../PageTitle.vue';

const PageTitleName=ref("TaskBoard");
</script>

<template>
    <div class="login-main">
        <div class="login-card">
            <PageTitle :name="PageTitleName"/>
        </div>
    </div>
</template>

<style scoped>
.login-main{
    display: flex;
    place-items:center;
    
}
</style>