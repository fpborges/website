<template>
    <div id="menu-component">
        <h4>{{ menu_text }}</h4>
        <ul>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
            <li>Menu4</li>
        </ul>
    </div>
</template>

<script>
export default { 
    name:"Menu",
    props:{
        menuText: String
    },
    data(){
        return{
            menu_text: 'Text from menu component'
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
        margin: 0 5%;
    }
</style>