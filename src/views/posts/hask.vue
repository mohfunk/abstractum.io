<template>
    <div class="post">
        <div class="text">
            <mdown src="hask"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'hask',
    components: {
        mdown,
    },
};
</script>
