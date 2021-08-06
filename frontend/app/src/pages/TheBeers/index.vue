<template>
    <section>
        <the-header></the-header>
        <div class="infoBox"></div>
        <the-footer></the-footer>
</section>

</template>
<script>
import TheHeader from '../../components/layout/TheHeader.vue';
import TheFooter from '../../components/layout/TheFooter.vue';
export default {
    components:{
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
    
     .infoBox{
        background-color: rgb(240, 240, 240);
     }

    section{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>