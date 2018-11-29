<template>
    <div class="post">
        <div class="text">
            <mdown src="fvsimp"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'fvsimp',
    components: {
        mdown,
    },
};
</script>
