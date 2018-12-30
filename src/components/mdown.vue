<script>
//mdsrc
import sinkingmen from "@/assets/md/projects/sinkingmen.md";
import rustown from "@/assets/md/blog/rustown.md";
import fvsimp from "@/assets/md/blog/fvsimp.md";
import sol from "@/assets/md/games/sol.md";
import ref from '@/assets/md/blog/ref.md';
import play from '@/assets/md/blog/play.md';
import about from '@/assets/md/about/about.md';
import vis from '@/assets/md/projects/vis.md';
import mohra from '@/assets/md/projects/mohra.md';
import wt from '@/assets/md/games/wt.md';
export default {
    name: 'Post',
    props: ["src"],
    components: {
        //mdcomp
        ref,
        sinkingmen,
        rustown,
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
