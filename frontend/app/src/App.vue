<template>
    <router-view></router-view>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('tryLogin')
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Khand:wght@300;500&display=swap');
    :root{
        font-size: 16px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Khand', sans-serif;
        color: #353535;
    }

    body{
        font-weight: 400;    
    }

    a{
        text-decoration: none;
    }

</style>