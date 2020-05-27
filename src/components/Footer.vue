<template>
    <div id="footer-component">
        <ul>
            <li>Footer1</li>
            <li>Footer2</li>
            <li>Footer3</li>
        </ul>
        <p>Copyright to Fernando Pereira Borges - 2020</p>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props:{
        footerText: String
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    padding: 0;
}
li{
    display: inline-block;
    margin: 0 20px;
}
</style>