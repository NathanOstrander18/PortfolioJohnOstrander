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
            <div v-else class="row route-name" :key="$route.name" mode="in-out"><h1>{{$route.name}}</h1></div>
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
                  "I’m a design engineer with a background in mechanical engineering and currently completing my masters in engineering design. I’m passionate about human centered design, computer aided design and design for additive manufacturing.",
                  "In my free time I enjoy hiking, rock climbing, knitting, videogames and making pickles"
              ]
          }
      }
    }
</script>

<style scoped>
    
    a {
        color: rgb(30, 78, 121);
    }
    
    a:hover, .name:hover {
        text-decoration: none;
        opacity: .5;
    }
    
    .about {
        margin-top: 50px;
    }
    
    .contact {
        margin-top: 50px;
    }
    
    .copy {
        position: fixed;
        bottom: 0;
        z-index: 1030;
        font-size: 8pt;
    }
    

</style>
