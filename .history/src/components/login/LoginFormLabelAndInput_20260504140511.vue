<script setup>
import { defineProps } from 'vue';

const {vModel}=defineProps(["vModel"]);
</script>

<template>
    <div class="login-form-label-and-">
        <label for="email">
            Email:
        </label>
        <input :v-model="" type="email" placeholder="" required/>
    </div>
</template>