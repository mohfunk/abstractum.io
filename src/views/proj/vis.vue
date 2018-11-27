<template>
    <div class="post">
        <div class="text">
            <mdown src="vis"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'Vis',
    components: {
        mdown,
    },
};
</script>
