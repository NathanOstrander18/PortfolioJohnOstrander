<template>
    <div class="main-content-container">
        <img class="main-content-image" src="@/assets/menu_icons/FreelanceCAD.png">
        <br><br>
        <div v-for="(exp, key) in experiences" :key="key" class="mb-5">
                <h3 class="text-center">{{exp.title}}</h3>
                <h4 class="text-center">{{exp.date}}</h4>
                <p class="text-center">{{exp.description}}</p>
                <p class="text-center">
                    <a :href="exp.link" target="_blank">{{exp.link}}</a>
                </p>
            <div class="row" v-if="exp.title == 'Fusion 360 Student Expert'">
                <gallery :images="fusionDesigns" :index="index" @close="index = null"></gallery>
                <div
                    class="col-sm-4 mb-4"
                    v-for="(image, imageIndex) in fusionDesigns" 
                    :key="imageIndex" 
                    @click="index = imageIndex">
                    <img :src="image" class="gallery-image center-image" style="width: 100%;"/>
                </div>
            </div>
            <div v-if="exp.title == 'XACT Metal'">
                <iframe src="https://www.youtube.com/embed/7zrIU4JL4Sg" class="center-image" allowfullscreen></iframe>
            </div> 
            <br><br>
        </div>
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


export default {
  name: 'freelanceCAD',
  data: function () {
      return {
          experiences: [
              {
                  title:"AIONX",
                  date:"Summer 2017-Current",
                  description:"Case and rail cover design. Modeled original and edited existing designs. Worked with point cloud data to fit product to existing geometries. Communicated designs to engineering and manufacturing leads. Design tools & processes used: AutoCAD, Meshmixer, SolidWorks, Material Extrusion, Stereolithography, Thermoforming, Injection Molding.",
                  link:"http://aionx.com/",
                  logo: AIONIXLogo
              },
              {
                  title:"Chartlytics",
                  date:"Summer 2017",
                  description:"Iterative electronics case design and prototyping. Design tools & processes used: Fusion 360, SolidWorks, Material Extrusion, PolyJet, Stereolithography.",
                  link:"https://www.chartlytics.com/",
                  logo: ChartlyticsLogo
              },
              {
                  title:"XACT Metal",
                  date:"Spring 2017-Summer 2017",
                  description:"Modeled a demonstration of XACT Metal 3D Printing Technology in Virtual Reality. Included printer animations and allowed for user interaction. Used to advertise the technology at Rapid+TCT in Summer 2017. Design tools used: SolidWorks, Blender, Unity, HTC Vive.",
                  link:"https://www.xactmetal.com/",
                  logo: XActMetalLogo
              },
              {
                  title:"Fusion 360 Student Expert",
                  date:"",
                  description:"Awarded for the following designs submitted through the student expert program",
                  link:""
              }
          ],
          fusionDesigns: [fd1, fd2, fd3, fd4, fd5, fd6],
          index: null
      }
  },
  components: {
    'gallery': VueGallery
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
