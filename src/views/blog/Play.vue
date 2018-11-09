<template>
    <div class="post">
        <div class="text">
            <Post src="play"></Post>
        </div>
    </div>
</template>

<script>
import Post from '@/components/post.vue';
export default {
    name: 'Play',
    components: {
        Post,
    },
}
</script>
