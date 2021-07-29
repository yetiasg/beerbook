<template>
    <div class="mainHeader">
        <the-header></the-header>
    </div>
    <h2><base-button @click="logout" mode="filledBtn">Wyloguj</base-button></h2>
    <div class="footer">
        <the-footer></the-footer>
    </div>
</template>
<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('logout')
            this.$router.replace('/auth')
        }
    }
}
</script>

<style>
    h3, h2{
        color: red;
        position: absolute;
    }
    h2{
        top: 100px;
        right: 50px;
    }
    div.mainHeader{
        position: absolute;
        width:100%;
        top: -140px;
        overflow: hidden;
    }

    div.footer{
        position: absolute;
        width:100%;
        height: 150px;
        bottom: 0;
        overflow: hidden;
    }
</style>