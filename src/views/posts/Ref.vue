<template>
    <div class="post">
        <div class="text">
            <mdown src="ref"></mdown>
        </div>
    </div>
</template>

<script>
import mdown from '@/components/mdown.vue';
export default {
    name: 'Ref',
    components: {
        mdown,
    },
};
</script>
