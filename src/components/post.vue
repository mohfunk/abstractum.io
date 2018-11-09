<script>
import ref from '@/assets/md/ref.md';
import play from '@/assets/md/play.md';
export default {
    name: 'Post',
    props: ["src"],
    components: {
        ref,
        play
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
