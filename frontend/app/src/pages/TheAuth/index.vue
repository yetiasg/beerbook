<template>
    <div class="mainHeader">
        <the-header></the-header>
        <header>
            <div class="logo"><router-link to="/"><p>beerbook</p></router-link></div>
        </header>
    </div>
    <div class="container">
        <auth-panel></auth-panel>
    </div>
    
    <div class="footer">
        <the-footer></the-footer>
    </div>
</template>

<script>
import AuthPanel from './AuthPanel.vue'
export default {
    components: {AuthPanel}
}
</script>

<style scoped>
    div.mainHeader{
        position: absolute;
        width:100%;
        top: -140px;
        overflow: hidden;
    }

    header{
        background-color: transparent;
        display: flex;
        position: absolute;
        left: 28.5%;
        top: 200px;
        width: 1100px;
        justify-content: flex-start;
        align-items: center;
    }

    .logo{
        font-size: 2rem;
    }

    div.container{
        width:100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.footer{
        position: absolute;
        width:100%;
        height: 150px;
        bottom: 0;
        overflow: hidden;
    }
</style>