<template>
    <div>
        <router-link to="/">
            <div class="name">
                <h1 class="row">John</h1>
                <h1 class="row">Ostrander</h1>
            </div>
        </router-link>
        <transition name="fade" mode="out-in">
            <div v-if="['Home'].indexOf($route.name) == 0" class="row about" key="home"><p>{{about[0]}}<br><br>{{about[1]}}</p></div>
            <div v-else class="row route-name" :key="$route.name" mode="in-out"><h1 style="color: black;">{{$route.name.toLowerCase()}}</h1></div>
        </transition>
        <h2 class="row contact"><a href="/JohnOstranderResume2019.pdf" target="_blank">Resume</a></h2>
        <h2 class="row">Contact:</h2>
        <p>
            Phone: 610-639-4608
            <br>
            Email: <a href="mailto:16jostrander@gmail.com" target="_blank">16jostrander@gmail.com</a>
        </p>
        <p class="row copy">Copyright © 2019 – John Ostrander</p>
    </div>
</template>

<script>

    export default {
      name: 'sidebar',
      data: function() {
          return {
              about:[
                  "I’m a design engineer with a B.S in Mechanical Engineering and M.S in Engineering Design from Penn State. I’m passionate about human centered design, computer aided design and design for additive manufacturing.",
                  "I’m currently working as a graduate researcher for the Engineering Design and Optimizations Group (EDOG) and the Made By Design Lab (MBDL) at Penn State.",
                  "In my free time I enjoy hiking, rock climbing, waterskiing, knitting, board games, and cooking soul food."
              ]
          }
      }
    }
</script>

<style scoped>
    
    .about {
        margin-top: 50px;
    }
    
    .contact {
        margin-top: 50px;
    }
    

</style>
