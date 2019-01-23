<template>
    <div>
        <router-link to="/">
            <h1 class="row">John</h1>
            <h1 class="row">Ostrander</h1>
        </router-link>
        <transition name="fade">
            <div class="row" v-if="['Home'].indexOf($route.name) == 0"><p>{{about[0]}}<br><br>{{about[1]}}</p></div>
            <div class="row route-name" v-else><h1>{{$route.name}}</h1></div>
        </transition>
        <br><br>
        <h2 class="row"><a href="/JohnOstranderResume2019.pdf" target="_blank">Resume</a></h2>
        <h2 class="row">Contact:</h2>
        <p>
            Phone: 610-639-4608
            <br>
            Email: <a href="mailto:16jostrander@gmail.com" target="_blank">16jostrander@gmail.com</a>
        </p>

    </div>
</template>

<script>

    export default {
      name: 'sidebar',
      data: function() {
          return {
              about:[
                  "I’m a design engineer with a background in mechanical engineering and currently completing my masters in engineering design. I’m passionate about human centered design, computer aided design and design for additive manufacturing.",
                  "In my free time I enjoy hiking, rock climbing, knitting, videogames and making pickles"
              ]
          }
      }
    }
</script>

<style scoped>
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
    
    a {
        color: rgb(30, 78, 121);
    }

</style>
