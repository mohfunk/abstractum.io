<template>
    <div class="post">
        <div class="text">
            <mdown src="wt"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'Wt',
    components: {
        mdown,
    },
};
</script>
