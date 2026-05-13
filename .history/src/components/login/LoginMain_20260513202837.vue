<script setup>
import {ref} from "vue";
import PageTitle from '../PageTitle.vue';
import LoginForm from "./LoginForm.vue";

const PageTitleName=ref("TaskBoard");
const switch
</script>

<template>
    <div class="login-main">
        <div class="login-card">
            <PageTitle :name="PageTitleName"/>
            <p class="subtitle">
                Real-time Collaborative Workspace
            </p>
            <LoginForm/>
            <div class="switch-auth">
                Don't have an account?
                <span>
                    Register
                </span> 
            </div>
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
.login-card{
    background-color: black;
    padding: 2vh 4vh;
}
.subtitle{
    text-align: center;
    letter-spacing: 1vh;
    font-size: 1.4vh;
}
</style>