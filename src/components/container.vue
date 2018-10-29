<template>
    <div class="cont">
        <router-link v-for="item in rts" :key="item.id" :to="item.p">
            <div class="elem">
                <h1>{{item.t}}</h1>
                <h4>{{item.d}}</h4>
                <h6>{{item.date}}</h6>
            </div>
        </router-link>
    </div>
    </div>
</template>


<script>
export default {
    name: 'Con',
    props: {
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
<style lang="sass">
</style>
