<script setup>
import {ref} from "vue";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';

const emailValue=ref("Emailllll")
</script>

<template>
    <form action="" class="login-form">
        <LoginFormLabelAndInput :vModel="emailValue"/>
    </form>
</template>