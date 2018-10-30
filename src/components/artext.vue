<template>
    <div class="ar">
        <h4 v-html="ht"></h4>
    </div>
</template>
<script>
export default {
    name: 'arabic',
    props: {
        txt: String,
    },
    data() {
        return {
            ht: null
        }
    },
    created() {
        var join
        var text = this.txt
        this.ht = this.txt.replace(/ٌ|ّ|ٍ|ُ|َ|ِ|ً/gi, function checkStr(x,y){
            join = (text.charAt(y+1) != " " && text.charAt(y-1) != " ") ? "&zwj;" : "";
            return join + "<span>" + x + "</span>" + join;
        });
    }
}
</script>
