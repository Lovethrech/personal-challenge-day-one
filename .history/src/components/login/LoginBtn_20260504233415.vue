<template>
    <div class="login-btn">
        <button type="submit" disabled=false>
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
    padding: 1vh;
    font-size: 1.6vh;
}
.login-btn button:disabled{
    background-color: #88858575;
}
.login-btn button:hover{
    
}
</style>