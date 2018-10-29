<template>
    <div>
        <vue-markdown>
        </vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'bp',
    components: {
        VueMarkdown
    },
    data: function() {
        return {
           sr: "../md/t.md"
        }
    }
}
</script>

<style>
@import '../assets/sass/md.sass'
</style>
