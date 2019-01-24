<script>
//mdsrc
import csdegree from "@/assets/md/blog/csdegree.md";
import Money from "@/assets/md/projects/Money.md";
import sinkingmen from "@/assets/md/projects/sinkingmen.md";
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
        csdegree,
        Money,
        ref,
        sinkingmen,
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
