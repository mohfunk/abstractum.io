<template>
    <div class="post">
        <div class="text">
            <mdown src="play"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'Play',
    components: {
        mdown,
    },
};
</script>
