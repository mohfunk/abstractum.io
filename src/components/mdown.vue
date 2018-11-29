<script>
//mdsrc
import fvsimp from "@/assets/md/fvsimp.md";
import sol from "@/assets/md/sol.md";
import ref from '@/assets/md/ref.md';
import play from '@/assets/md/play.md';
import about from '@/assets/md/about.md';
import vis from '@/assets/md/vis.md';
import mohra from '@/assets/md/mohra.md';
import wt from '@/assets/md/wt.md';
export default {
    name: 'Post',
    props: ["src"],
    components: {
        ref,
//mdcomp
fvsimp,
sol,
        play,
        about,
        vis,
        wt,
        mohra
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
