<script>
import ref from '@/assets/md/ref.md';
import play from '@/assets/md/play.md';
import about from '@/assets/md/about.md';
export default {
    name: 'Post',
    props: ["src"],
    components: {
        ref,
        play,
        about
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
