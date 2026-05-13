<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';
import LoginBtn from "./LoginBtn.vue";

const authDetails=[
    {
        "id":"1",
        "name":"fullname",
        "nameType":"text",
        "placeholder":"Dolapo Rachael"
    },
    {
        "id":"2",
        "name":"email",
        "nameType":"email",
        "placeholder":"dolapoxxxxx@gmail.com"
    }
]
const router=useRouter();
const disableBtn=ref(false);
const nameValue=ref()
const emailValue=ref("");
const passwordValue=ref("");

const handleLogin=async(event)=>{
    event.preventDefault();
    
    if ((emailValue.value.trim() !=="") && (passwordValue.value.trim() !== "")){
        disableBtn.value=true;
        console.log('Login attempt', emailValue.value);
        router.push('/dashboard');
    }
    else{
        console.warn("Email and/or password is empty");
    }
}
</script>

<template>
    <form @submit.prevent="handleLogin" class="login-form">
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