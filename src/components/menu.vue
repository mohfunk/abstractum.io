<template>
    <router-link :to="pth"> 
        <a :class="col"> {{ nm }} </a> 
    </router-link>
</template>

<script>
export default {
    name: "navItem",
    props: {
        nm: String,
        pth: String,
        col: String

    },
    methods: {
        created: function() {
            this.focus();
        }
    }

};
</script>

<style scoped>

a.g, a.b {
    font-family: "Futura";
    font-size: 18px;
    color: #EB3C3C;
    animation: bout 1000ms linear both;
    display: inline-block;
    background: transparent;
    border: 0px;
    position: relative;
    top: -35px;
    margin-left: 15vw;
    margin-right: 15vw;
}
a.g:active {
    border: none;
    border-color: transparent;
    color: #88ED78;

}
a.b:active {
    border: none;
    border-color: transparent;


}
a.b.router-link-exact-active {

}

</style>
