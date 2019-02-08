<template>
    <div class="main-content-container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/DesignThinking.png">
        <br><br>
        <h3 class="text-center">hasso-plattner-institute school of design thinking</h3>
        <h2 class="text-center">Sept. 2017, March 2018</h2>
        <p class="text-justify">{{intro}}</p>
        <br><br>
        <div @click="index = 0">
            <img class="gallery-image center-image" src="@/assets/DesignThinking/DesignThinkingCollage2.png" style="width: 100%;">
        </div>
        <br><br>
        <div v-for="(section, key) in sections" :key="key" class="mb-5">
                <h3 class="text-center">{{section.heading}}</h3>
                <div v-if="section.designChallenge">
                    <p>Design Challenge: "<i>{{section.designChallenge}}</i>"</p>
                </div>
                <p class="text-justify">{{section.text}}</p>
                <div v-if="section.tools" class="text-center skills font-weight-bold">TOOLS USED</div>
                <p class="text-center skills">{{section.tools}}</p>
                <div v-if="section.skills" class="text-center skills font-weight-bold">SKILLS LEARNED</div>
                <p class="text-center skills">{{section.skills}}</p>
        </div>
        <div>
            <VueElevator class="skills text-center" word="Back to Top" duration="1000" mainAudio="" endAudio=""></VueElevator>
        </div>
        </br>
    </div>
</template>

<script>
import gal1 from '@/assets/DesignThinking/BrainstormingPictures/Week1Ideation.png';
import gal2 from '@/assets/DesignThinking/BrainstormingPictures/Week1InterviewingElectrician.png';
import gal3 from '@/assets/DesignThinking/BrainstormingPictures/Week2BreakingDownInterviews.jpg';
import gal4 from '@/assets/DesignThinking/BrainstormingPictures/Week2Prioritizing.jpg';
import gal5 from '@/assets/DesignThinking/BrainstormingPictures/Week2Tired.jpg';

import VueGallery from 'vue-gallery';
import { VueElevator } from 'vue-elevator';

export default {
  name: 'designThinking',
  data: function() {
      return {
          intro: "In the first year of my Engineering Design Program at Penn State, we were sent to the Hasso-Plattner-Institute School of Design Thinking in Potsdam Germany. I participated in the schools Global Design Thinking week in August 2017 and March 2018.",
          sections: [
              {
                  heading: "March 22-28, 2018",
                  designChallenge: "Redesign the 3-S Experience (service, security, cleanliness) for relevant stakeholders on railway stations in a world which digitization is radically changing user’s needs as well as interactions.",
                  text: "For this challenge we were tasked with redesigning the train station experience in Berlin Germany. I was placed in a group where we had to design 30 years into the future. This required us to look to current trends in technology and make dramatic predictions for how technology and society will evolve. In other words, the week was focused on designing realistic solutions for an exaggerated future. We also conducted field research to observe current technologies within the train stations and to interview frequent users."
              },
              {
                  heading: "September 21-27, 2018",
                  designChallenge: "Redesign skilled craft trade businesses and its associations in an era of digital transformation: Electricians.",
                  text: "This week my team and I were challenged with the digitizing the Electrician craft sector in Germany. We interviewed both electricians and customers to gain insight to how the profession currently operates and communicates and how it might be improved. We then broke down our interviews into various personalities for role playing to ideate and prototype solutions for improved digitization in the craft. Lastly we presented prototypes to stakeholders and made iterations based on their feedback.",
                  tools: "White Boards • Markers • LOTS of Sticky Notes • Coffee",
                  skills: "Paper Prototyping • Interviewing • Ethnographic Research • Divergent-Convergent Thinking • Mind Mapping • Story Telling • Timed Exercises • Role Playing • Problem Framing"
              }
          ],
          images: [gal1,gal2,gal3,gal4,gal5],
          index: null
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
