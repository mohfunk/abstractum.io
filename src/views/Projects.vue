<template>
  <div class="projects">
        <Cont :rts="[
                            {
                                id: '2',
                                t: 'Wild Thieves',
                                d: 'Robbery Action Game',
                                p: '',
                                date: 'Spring 2019'
                            },
                            {
                             
                                id: '1', 
                                t: 'The Mohra Programming Language', 
                                d: 'An Arabic Programming Langage',
                                p:'',
                                date: 'Early in Development'
                            },
                            {
                                id: '3',
                                t: 'Solitude',
                                d: 'A narrative-driven Game based on a classic Arabic Novel',
                                p: '',
                                date: '2021'
                            
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
  name: 'projects',
  components: {
    Cont 
  }
}
</script>
