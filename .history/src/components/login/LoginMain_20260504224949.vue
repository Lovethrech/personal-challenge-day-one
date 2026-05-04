<script setup>
import {ref} from "vue";
import PageTitle from '../PageTitle.vue';
import LoginForm from "./LoginForm.vue";

const PageTitleName=ref("TaskBoard");
</script>

<template>
    <div class="login-main">
        <div class="login-card">
            <PageTitle :name="PageTitleName"/>
            <p class="subtitle">
                Real-time Collaborative Workspace
            </p>
            <LoginForm/>
        </div>
    </div>
</template>

<style scoped>
.login-main{
    width: 100%;
    min-height: 100vh;
    padding: 4vh 4vw;
    display: flex;
    place-items:center;
    justify-content: center;
}
.subtitle{
    text-align: center;
    letter-spacing: ;
}
</style>