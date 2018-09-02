<template>
    <div class="CopyRight">
        <p> MIT © {{ date }} {{ cp }}<br><a href="https://github.com/mohfunk/abstractum.io">Fork on
            Github</a></p>

    </div>
</template>

<script>
export default {
    name: "CopyRight",
    props: {
        cp: String,
        date: String,
        loc:  String
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p,a {
    font-family: futura;
    font-size: 12px;
    color: #3e3e3e;
    display: block;
    margin-left:auto;
    margin-right:auto;
    position: fixed;
    line-height: 15px;
    text-align: center;
    vertical-align: middle;
    transform: translate(-50%, 0%);
    top: 90%;
    left: 50%
}

a {
    margin-top: 3px;
    transition: 1000ms;
    text-decoration: underline;

}
a:hover {
animation: none;
transition: 1000ms;
color: #bbbbbb;
}
</style>
