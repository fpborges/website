<template>
    <div id="footer-component">
        <ul>
            <li>Footer1</li>
            <li>Footer2</li>
            <li>Footer3</li>
        </ul>
        <p>{{ footerCopyright }} </p>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props:{
        footerText: String
    
    },
    data(){
        return{
            footerCopyright: "Copyright to Fernando Pereira Borges - 2020"
        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding: 0;
}
li{
    display: inline-block;
    margin: 0 20px;
}
</style>