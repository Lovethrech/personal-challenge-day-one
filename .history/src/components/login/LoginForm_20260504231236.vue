<script setup>
import {ref} from "vue";
import authDetails from "../data/authDetails.json";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';

const emailValue=ref("");
const passwordValue=ref("IHateYou");
</script>

<template>
    <form action="" class="login-form">
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
    </form>
</template>

<style scoped>
.login-form{
    margin-top: 10vh;
    bg-col
}
</style>