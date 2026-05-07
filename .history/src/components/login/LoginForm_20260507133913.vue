<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import authDetails from "../data/authDetails.json";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';
import LoginBtn from "./LoginBtn.vue";

const router=useRouter();
const disableBtn=ref(false);
const emailValue=ref("");
const passwordValue=ref("");

const handleLogin=async()=>{
    if ((emailValue.value.trim() !=="") && (passwordValue.value.trim())){
        disableBtn.value=true;
        console.log('Login attempt', emailValue.value);
        router.push('/dashboard');
    }
    else{
        disableBtn.value=false;
    }
}
</script>

<template>
    <form class="login-form">
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
        <LoginBtn @click="handleLogin" :disableBtn="disableBtn"/>
    </form>
</template>

<style scoped>
.login-form{
    margin-top: 10vh;
}
</style>