<template>
    <div class="header">
        <div class="rt">
            <router-link class="ti" :to="tpath" id="ti">{{ title }}</router-link>
            <router-link v-for="item in rts" :key="item.id"
                         :to="item.p"
                         >{{item.t}}</router-link>
        </div>
        <div class="icn">
            <router-link v-for="item in icn" :key="item.id" :to="item.p"><i
                         :class="item.c"></i></router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Header',
    props: {
        title : String,
        tpath : String,
        rts: Array,
        icn: Array
    },
    data() {
        return {
            msg: null
        }
    }
}
</script>
