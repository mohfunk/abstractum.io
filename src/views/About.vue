<template>
    <div class="post">
        <div class="text">
            <mdown src="about"></mdown>
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
