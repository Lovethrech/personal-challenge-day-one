<script setup>
import {defineProps} from "vue";

const {disableBtn} = defineProps(["disableBtn"]);
</script>

<template>
    <div class="login-btn">
        <button type="submit">
            Submit
        </button>
    </div>
</template>

<style scoped>
.login-btn, .login-btn button{
    width: 100%;
    color: #ffffff;
}
.login-btn button{
    text-transform: uppercase;
    background-color: #ffffff;
    color: #000000;
    padding: 1vh;
    font-size: 1.6vh;
    transition: transform .2s ease-in-out;
}
.login-btn button:disabled{
    background-color: #88858575;
    color: #ffffff;
}
.login-btn button:hover{
    cursor: pointer;
    transform: scale(0.98);
}
</style>