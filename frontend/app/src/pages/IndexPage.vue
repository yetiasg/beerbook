<template>
    <div class="indexPage">
        <the-header></the-header>
        <div class="infoBox">www</div>
        <the-footer></the-footer>
    </div>
</template>

<script>
// import TheCircle from '../components/layout/layoutShapes/TheCircle.vue'
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';
export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style scoped>

    @media screen and (max-width: 360px) {
        .indexPage {
            font-size: 0.8rem;
        } 

        .infoBox{
            width: 92%;
            min-height: 88vh;
        }
    }

    @media screen and (min-width: 361px) and (max-width: 768px){
        .indexPage {
            font-size: 0.9rem;
        } 

        .infoBox{
            width: 88%;
            min-height: 87vh; 
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        .indexPage {
            font-size: 1rem;
        } 

        .infoBox{
            width: 85%;
            min-height: 86vh;
        }
    }

    @media screen and (min-width: 1025px){
        .indexPage {
            font-size: 1rem;
        } 

        .infoBox{
            width:85%;
            max-width: 1024px;
            min-height: 85vh;
        }
    }
    
    .indexPage{
        background-color: #fcf0dae6;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

     .infoBox{
        background-color: white;
        border-radius: 20px;
        padding: 1rem;
     }
</style>