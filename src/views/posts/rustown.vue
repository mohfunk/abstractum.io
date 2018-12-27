<template>
    <div class="post">
        <div class="text">
            <mdown src="rustown"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'rustown',
    components: {
        mdown,
    },
};
</script>
