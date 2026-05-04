<script setup>
import {ref} from "vue";
import authDetails from "../data/authDetails.json";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';

const emailValue=ref("Emailllll");
const passwordValue=ref("IHateYou");
console.log()
</script>

<template>
    <form action="" class="login-form">
        <LoginFormLabelAndInput :vModel="emailValue" :name="authDetails[0].items.name"/>
    </form>
</template>