<script setup>
import { defineProps } from 'vue';

const {vModel, name, nameType, placeholder}=defineProps(["vModel", 'name']);
</script>

<template>
    <div class="login-form-label-and-">
        <label for="email">
            Email:
        </label>
        <input :value="vModel" name="" type="email" placeholder="" required/>
    </div>
</template>