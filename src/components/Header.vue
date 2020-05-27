<template>
    <div id="header-component">
        <h1>Fernando Web Developer</h1>
        <p>{{ description }}</p>
        <p> {{ words }}</p>
    </div>    
</template>

<script>
export default {
    name: "Header",
    props:{
        words: String
    },
    data(){
        return{
            description: 'This is the header for Fernando web page portfolio'
        }
    }

}
</script>

<style lang="scss" scoped>
    #header-component{
        background-color: black;
        color: white;
    }
</style>