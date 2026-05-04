<script setup>
import {ref} from "vue";
import LoginFormLabelAndInput from './LoginFormLabelAndInput.vue';

const emailVModel=ref("Emailllll")
</script>

<template>
    <form action="" class="login-form">
        <LoginFormLabelAndInput :v-Model/>
    </form>
</template>