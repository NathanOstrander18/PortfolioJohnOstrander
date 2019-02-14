<template>
    <div class="main-content-container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/Leadership.png">
        <br><br>
        <h3 class="text-center">{{intro.heading}}</h3>
        <h4 class="text-center">{{intro.date}}</h4>
        <br>
        <p class="text-justify">{{intro.text}}</p>
        <p>{{intro.linkText}}: <a :href="intro.link" target="_blank">{{intro.link}}</a></p>
        <br>
        <div @click="index = 0">
            <img src="@/assets/Leadership/LeadershipMainImage.png" class="center-image gallery-image" style="width: 100%;">
        </div>
        <br>
        <div class="text-center skills font-weight-bold">TOOLS USED</div>
        <p class="text-center skills">{{tools}}</p>
        <div class="text-center skills font-weight-bold">SKILLS LEARNED</div>
        <p class="text-center skills">{{skills}}</p>
        <div class="text-center skills font-weight-bold">CO.SPACE ACTIVITIES</div>
        <p class="text-center skills">{{activities}}</p>
        <div>
            <VueElevator class="skills text-center" word="Back to Top" duration="1000" mainAudio="" endAudio=""></VueElevator>
        </div>
        <br>
    </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import { VueElevator } from 'vue-elevator';

import img1 from "@/assets/Leadership/BeforeIdieWall.jpg"
import img2 from "@/assets/Leadership/BuildingWall.jpg"
import img3 from "@/assets/Leadership/CoSpaceRetreat.jpg"
import img4 from "@/assets/Leadership/Dinner.jpg"
import img5 from "@/assets/Leadership/MeandCO.jpg"

export default {
  name: 'leadership',
  data: function() {
      return {
          intro: {
              heading: "co.space house manager",
              date: "Summer 2017-Summer 2018",
              text: "I spent a year managing a house filled with 20 incredible honors students, graduate students, and young professionals. As house manager I was responsible for managing monthly pitch dinners, weekly house meetings, cleaning blitz, family dinners, retreats, house maintenance, guest dinners and plenty of spontaneous events! There is a lot of work involved in keeping a big house functional, especially when you are in grad school, but I had a lot of fun doing it and I wouldn’t trade my co.space experience for anything.",
              linkText: "You can find me on the co.space website in class of 2018",
              link: "http://thecospace.com/people/"
          },
          images: [img5, img3, img4, img2, img1],
          index: null,
          tools: "Slack • Google Calendar • Co.Space App + Backend • Home Renovation Tools",
          skills: "Group Facilitation • Logistics • Empathy • Ideation • Personal Development • Pitching and Launching Projects • Cooking for 20 People!",
          activities: "Journey Jumps • Deep Listening • Coffee Stains • Cleaning Blitz • Family Dinners • Guest Dinners • Pitch Dinners"
      }
  },
  components: {
      'gallery': VueGallery,
      'VueElevator': VueElevator
  }
}
</script>

<style scoped>
    hr {
        width: 100%;
        color: black;
        height: 1px;
        background-color:black;
    }

    .tile {
        background-color: #D3D3D3;
        height: 100%;
        min-height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
