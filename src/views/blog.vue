<template>
    <div>
        <Cont :rts="[
                            {
                                id: '2',
                                t: 'We Are But Reformers',
                                d: 'My thoughts on the current Situation in Saudi Arabia',
                                p: '/r',
                                date: 'Nov 2018'
                            },
                            {
                             
                                id: '1', 
                                t: 'Play', 
                                d: 'On the Importance of Play',
                                p:'/b',
                                date: 'July 2017'
                            }
                            ]"/>
        
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </div>
</template>

<script>
import Cont from '../components/container.vue';
export default {
    name: 'bpost',
    components: {
        Cont
    }
}
</script>
