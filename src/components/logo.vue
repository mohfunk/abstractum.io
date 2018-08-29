<template>
        <router-link to="/">Abstractum</router-link>
</template>

<script>
export default {
    name: "Logo",
    props: {
        main: String
    },
    methods: {
        created: function() {
            this.focus();
        }
    }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
}

button {
    font-family: "Anteb";
    font-size: 26px;
    color: #EB3C3C;
    margin: 40px 0 0;
    animation: bout 1000ms linear both;
    display: inline-block;
    background: transparent;
    border: 0px;
}
button:hover {
    animation: sw 1000ms linear both;
    cursor: pointer;
}
button:active {
    border: none;
    border-color: transparent;
}
button:after {
    border: none;
    border-color: transparent;
    border-width: 0px;
    color: #ffffff

}
button:focus {
    outline: 0;
    color: #EB3C3C;

}

button:not(:focus) {
    outline: 0;
    color: #ffffff;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}


</style>
