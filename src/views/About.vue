<template>
    <div class="post">
        <div class="text">
            <mdown src="about"></mdown>
        </div>
        <div class="icns">
            <a href="https://twitter.com/mohfunk"><i class="t fab fa-twitter"/></a>
            <a href="https://github.com/mohfunk"><i class="g fab fa-github"/></a>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'About',
    components: {
        mdown,
    },
};
</script>
