<script setup>
import {ref} from "vue";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';

const emailVModel=ref()
</script>

<template>
    <form action="" class="login-form">
        <LoginFormLabelAndInput/>
    </form>
</template>