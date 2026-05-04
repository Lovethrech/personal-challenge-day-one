<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import authDetails from "../data/authDetails.json";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';
import LoginBtn from "./LoginBtn.vue";

const router=useRouter();
const emailValue=ref("");
const passwordValue=ref("");
const loginErrorMsg=ref("none");
const loading=ref(false);
const handleLogin=async()=>{
    if(((emailValue.value==="") || (passwordValue.value==="")) || ((emailValue.value==="") && (passwordValue.value===""))){

    }
    console.log('Login attempt', emailValue.value);
    router.push('dashboard');
}
</script>

<template>
    <form @submit-prevent="handleLogin" class="login-form">
        <LoginFormLabelAndInput 
            :vModel="emailValue" 
            :name="authDetails[0].name" 
            :nameType="authDetails[0].nameType" 
            :placeholder="authDetails[0].placeholder"
        />
        <LoginFormLabelAndInput 
            :vModel="passwordValue" 
            :name="authDetails[1].name" 
            :nameType="authDetails[1].nameType" 
            :placeholder="authDetails[1].placeholder"
        />
        <br/>
        <p class="auth-error-msg" style="">Fill in all details above.</p>
        <LoginBtn/>
    </form>
</template>

<style scoped>
.login-form{
    margin-top: 10vh;
}
.auth-error-msg{
    color:red;
    font-size: 1.2vh;
    text-align:right;
}
</style>