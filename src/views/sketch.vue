<template>
    <div>
        <Cont :rts="[
                            {
                                id: '1',
                                t: 'Spining Cube',
                                d: 'The cube on the Homepage',
                                p: '/spin',
                            },
                            {
                             
                                id: '2', 
                                t: 'Genesis', 
                                d: 'Galaxy Simulator',
                                p:'/galaxy',
                            },
                            {
                                id: '3',
                                t: 'Mayhem 2.0 Characters Generator',
                                d: 'Pixel Art Character Generation',
                                p: '/procgen',
                            
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
  name: 'sk',
  components: {
      Cont
  }
}
</script>

