<template>
    <div class="main-content-container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/Research.png">
        <br><br>
        <h3 class="text-center">{{intro.heading}}</h3>
        <p class="text-justify">{{intro.text1}}<a href="https://www.lulzbot.com/learn/tutorials/experience-virtual-reality-3d-printing" target="_blank">(shown here)</a>{{intro.text2}}</p>
        <div @click="index = 0">
            <img :src="images[0]" class="center-image gallery-image" style="width: 100%;">
        </div>
        <br><br>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/1Oqb0TOvV7k" class="center-image video" allowfullscreen></iframe>
        </div>
        <br><br>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/WYoEBgohg1I" class="center-image video" allowfullscreen></iframe>
        </div>
        <br><br>
        <div class="text-center skills font-weight-bold">TOOLS USED</div>
        <p class="text-center skills">{{tools}}</p>
        <div class="text-center skills font-weight-bold">SKILLS LEARNED</div>
        <p class="text-center skills">{{skills}}</p>
        <div class="text-center skills font-weight-bold">PUBLICATIONS</div>
        <p class="text-center">
            <a :href="publication" target="_blank">{{publication}}</a>
        </p>
        <br>
        <div>
            <VueElevator class="skills text-center" word="Back to Top" duration="1000" mainAudio="" endAudio=""></VueElevator>
        </div>
    </div>
</template>

<script>
import { VueElevator } from 'vue-elevator';
import VueGallery from 'vue-gallery';

import workflow from "@/assets/Research/workflowImg.png"

export default {
  name: 'research',
  data: function() {
      return {
          intro: {
                  heading: "thesis research",
                  text1: "For the past two years I have been conducting research on how Virtual Reality may be used to further STEM education with a focus on Additive Manufacturing. In doing this research I have had the opportunity to present at Rapid+TCT 2017, inspire the development of similar VR-AM experiences ",
                  text2: ", run human subjects studies with over 100 participants, present at IDETC 2018, submit work to the Journal of Mechanical Design, and mentor Graduate and Undergraduate students to take my research to the next level! "      
          },
          tools: "SolidWorks • Blender • Unity • C# • htc VIVE • SPSS • Microsoft Excel • Microsoft Word • Mendeley • Google Forms • Lulzbot Open Source Library • Material Extrusion",
          skills: "Human Computer Interaction • Design for Additive Manufacturing • Lesson Plan Design •  Design of Experiments • Human Subjects Research • Quantitative and Qualitative Data Analysis • Writing Conventions for Conference and Journal Publications",
          publication: "https://proceedings.asmedigitalcollection.asme.org/proceeding.aspx?articleID=2713334",
          images: [workflow],
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
