<script setup>
import {ref} from "vue";
import PageTitle from '../PageTitle.vue';

const PageTitleName=ref("TaskBoard");
</script>

<template>
    <div class="login-main">
        <div class="login-card">
            <PageTitle :name="PageTitleName"/>
            .subtitle
        </div>
    </div>
</template>

<style scoped>
.login-main{
    padding: 4vh 4vw;
    display: flex;
    place-items:center;
    justify-content: center;
}
</style>