<template>
    <div class="post">
        <div class="text">
            <mdown src="sol"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'sol',
    components: {
        mdown,
    },
};
</script>
