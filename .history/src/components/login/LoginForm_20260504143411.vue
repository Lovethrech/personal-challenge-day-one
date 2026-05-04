<script setup>
import {ref} from "vue";
import authDetails from ""
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';

const emailValue=ref("Emailllll")l
const passwordValue=ref("IHateYou");
</script>

<template>
    <form action="" class="login-form">
        <LoginFormLabelAndInput :vModel="emailValue"/>
    </form>
</template>