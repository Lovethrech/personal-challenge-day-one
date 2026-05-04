<script setup>
import { defineProps } from 'vue';

const {vModel, name, nameType, placeholder}=defineProps(["vModel", 'name', 'nameType', 'placeholder']);
</script>

<template>
    <div class="login-form-label-and-">
        <label :for="name">
            {{name}}
        </label>
        <input :value="vModel" :name="name" :type="nameType" :placeholder="placeholder" required/>
    </div>
</template>

<style scoped>
.login-form-label-and-
</style>