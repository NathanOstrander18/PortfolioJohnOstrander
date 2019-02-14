<template>
    <div class="main-content-container">
        <gallery :images="fusionDesigns" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/FreelanceCAD.png">
        <br><br>
        <div v-for="(exp, key) in experiences" :key="key" class="mb-5 section">
                <a :href="exp.link" target="_blank"><h3 class="title text-center">{{exp.title}}</h3></a>
                <h4 class="text-center">{{exp.date}}</h4>
                <p class="text-justify">{{exp.description}}</p>
                <div v-if="exp.title == 'fusion 360 student expert'" @click="index = 0">
                    <img class="gallery-image center-image" :src="fusionDesigns[0]" style="width: 100%;">
                    <br>
                </div>
            <div class="video-container" v-if="exp.title == 'XACT Metal'">
                <iframe src="https://www.youtube.com/embed/7zrIU4JL4Sg" class="center-image video" allowfullscreen></iframe>
            </div>
            <div v-if="exp.tools" class="text-center skills font-weight-bold">TOOLS USED</div>
            <p class="text-center skills">{{exp.tools}}</p>
            <div v-if="exp.skills" class="text-center skills font-weight-bold">SKILLS LEARNED</div>
            <p class="text-center skills">{{exp.skills}}</p>
            <br><br>
        </div>
        <div>
            <VueElevator class="skills text-center" word="Back to Top" duration="1000" mainAudio="" endAudio=""></VueElevator>
        </div>
        <br>
    </div>
</template>

<script>
import fd1 from "@/assets/FreelanceCAD/Fusion360StudentExpert/Vacuum1.png"
import fd2 from "@/assets/FreelanceCAD/Fusion360StudentExpert/Vacuum2.png"
import fd3 from "@/assets/FreelanceCAD/Fusion360StudentExpert/WaterBottle1.jpg"
import fd4 from "@/assets/FreelanceCAD/Fusion360StudentExpert/WaterBottle2.jpg"
import fd5 from "@/assets/FreelanceCAD/Fusion360StudentExpert/Watch1.jpg"
import fd6 from "@/assets/FreelanceCAD/Fusion360StudentExpert/Watch2.png"

import AIONIXLogo from "@/assets/FreelanceCAD/AIONX.png"
import XActMetalLogo from "@/assets/FreelanceCAD/XActMetal.png"
import ChartlyticsLogo from "@/assets/FreelanceCAD/Chartlytics.png"


import VueGallery from 'vue-gallery';
import { VueElevator } from 'vue-elevator';


export default {
  name: 'freelanceCAD',
  data: function () {
      return {
          experiences: [
              {
                  title:"AIONX",
                  date:"Summer 2017-Current",
                  description:"AIONX is a growing company with the technology to continuously clean surfaces for high touch areas in hospitals. For over a year now I have been working with AIONX to design PCB cases and hospital bedrail covers fit to their technologies. In addition to designing around PCB geometry, I also work with point cloud scans to fit rail cover designs to real-world geometries. I am often communicating with the engineering and manufacturing leads to ensure a successful product launch. My work cannot be displayed here because it is covered under NDA.",
                  link:"http://aionx.com/",
                  logo: AIONIXLogo,
                  tools: "AutoCAD • Meshmixer • SolidWorks • Material Extrusion • Stereolithography • Thermoforming • Injection Molding",
                  skills: "Manipulating Point Cloud Data • User Centered Design • Tolerancing • Design for Manufacturing"
              },
              {
                  title:"Chartlytics",
                  date:"Summer 2017",
                  description:"Chartlytics is a company focused on behavior tracking in an educational setting. While under contract I was tasked with developing case designs for their tangible product concept. My work cannot be displayed here because it is covered under NDA.",
                  link:"https://www.chartlytics.com/",
                  logo: ChartlyticsLogo,
                  tools: "SolidWorks • Fusion 360 • Material Extrusion • Stereolythography • Material Jetting",
                  skills: "Tolerancing • User Centered Design • Design for Manufacturing• Design for Additive Manufacturing"
              },
              {
                  title:"XACT Metal",
                  date:"Spring 2017-Summer 2017",
                  description:"Xact Metal is a startup company based in State College that designs and manufactures their own metal and polymer Powder Bed Fusion machines. While under contract with this company, I was tasked with designing a demonstration of Xact Metal technology in Virtual Reality for a trade show. The demonstration included printer animations and allowed for user interaction. The final product was used to advertise the technology at Rapid+TCT in Summer 2017.",
                  link:"https://www.xactmetal.com/",
                  logo: XActMetalLogo,
                  tools: "SolidWorks • Blender • Unity • C# • htc VIVE",
                  skills: "Moving Objects from SolidWorks to VR • Coding Interactions • Coding Animations • Unity Colors/Textures/Shaders • Human Computer Interaction"
              },
              {
                  title:"Fusion 360 Student Expert",
                  date:"",
                  description:"For a year I was enrolled in the Fusion 360 Student Expert Program. The program challenged me to come up with original designs containing complex features and multiple bodies. I submitted three designs to the program and received monetary awards for each.",
                  link:"",
                  tools: "Fusion 360 Modeling • Fusion 360 Rendering",
                  skills: "Basic CAD • Design for Assembly • Rendering"
              }
          ],
          fusionDesigns: [fd2, fd1, fd3, fd4, fd5, fd6],
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

    .section {
        height: 100%
    }

    .title:hover {
        text-decoration: none;
        opacity: .5;
    }

</style>
