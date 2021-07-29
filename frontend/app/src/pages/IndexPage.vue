<template>
    <div class="indexPage">
        <header>
            <div class="logo"><router-link to="/">beerbook</router-link></div>
            <base-button link mode="clearBtn" :to="whereToRedirect">konto</base-button>
        </header>
        <div class="infoBox"></div>
        <div class="footer"><p>created by <a href="https://cherryvue.com">cherryvue.com</a></p></div>
        <div class="circle1"><the-circle></the-circle></div>
        <div class="circle2"><the-circle></the-circle></div>
        <div class="circle3"><the-circle></the-circle></div>
        <div class="circle4"><the-circle></the-circle></div>
        <div class="circle5"><the-circle></the-circle></div>
        <div class="circle6"><the-circle></the-circle></div>
    </div>
    
</template>

<script>
import TheCircle from '../components/layout/layoutShapes/TheCircle.vue'
export default {
    components: {TheCircle},
    computed:{
        whereToRedirect(){
            return this.$route.path + 'auth';
        }
    }
}
</script>

<style scoped>
    .logo{
        font-size: 2rem;
    }
    
    .indexPage{
        background-color: #fcf0dae6;
        width: 100%;
        height: calc(100vh);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    header{
        background-color: transparent;
        width: 1100px;
        display: flex;
        position: absolute;
        top: 50px;
        justify-content: space-between;
        align-items: center
    }

    .infoBox{
        background-color: white;
        border-radius: 20px;
        width: 1100px;
        height: 80vh;
    }

    .footer{
        background-color: transparent;
        height: 50px;
        width: 1100px;
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        bottom: 25px;
    }

    div.circle1{
        width: 110px;
        height: 110px;
        position: absolute;
        top: 12%;
        left: 5%;
    }

    div.circle2{
        width: 90px;
        height: 90px;
        position: absolute;
        top: calc(50%-45px);
        left: 14%;
    }

    div.circle3{
        width: 110px;
        height: 110px;
        position: absolute;
        bottom: 12%;
        left: 5%;
    }

    div.circle4{
        width: 110px;
        height: 110px;
        position: absolute;
        top: 12%;
        right: 5%;
    }

    div.circle5{
        width: 90px;
        height: 90px;
        position: absolute;
        top: calc(50%-45px);
        right: 14%;
    }

    div.circle6{
        width: 110px;
        height: 110px;
        position: absolute;
        bottom: 12%;
        right: 5%;
    }
</style>