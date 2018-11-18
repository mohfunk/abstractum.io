<script>
import ref from '@/assets/md/ref.md';
import play from '@/assets/md/play.md';
import Auto from '@/assets/md/auto.md';
export default {
    name: 'Post',
    props: ["src"],
    components: {
        ref,
        play,
        Auto
    },
    mounted() {
    },
    render: function(createElement) {
        return createElement(
        this.src
        )
    }
}
</script>
