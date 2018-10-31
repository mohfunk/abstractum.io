<template>
    <div class="post">
        <div class="text">
            <Post/>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Post from '../components/post.vue';
import tpost from '../assets/md/bp1.md';
export default {
    name: 'poster',
    components: {
        Post,
        VueMarkdown
    },
}
</script>

<style lang="sass">
</style>
