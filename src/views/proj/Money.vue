<template>
    <div class="post">
        <div class="text">
            <mdown src="Money"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'Money',
    components: {
        mdown,
    },
};
</script>
