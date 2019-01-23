<template>
    <div class="main-content-container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/SchoolWork.png">
        <br><br>
        <div class="mb-5" v-for="(section, key) in sections" :key="key">
            <h1 class="text-center">{{section.heading}}</h1>
            <div v-if="section.imageIndex || section.imageIndex == 0">
                <br>
                <div @click="index = section.imageIndex">
                    <img :src="images[section.imageIndex]" class="gallery-image center-image" style=" width: 70%;"/>
                </div>
                <br><br>
            </div>
            <p>{{section.text}}</p>
            <div v-if="section.file">
                <div class="text-center">
                    <a :href="'/' + section.file" target="_blank">{{section.fileTitle}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AMT1 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AnsysModeling.jpg"
import AMT2 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/FootScan.png"
import AMT3 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/FunctionallyGradedLatticeShoe.png"
import AMT4 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/PressureMapping.png"
import AMT5 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/ShoeModel.png"
import AMT6 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/TestPrint.png"

import DFAM1 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/TopologyOptimization.png"
import DFAM2 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/TopOptOnSkateboard.png"
import DFAM3 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/TopOptPrint.jpg"

import DS1 from "@/assets/CourseWork/DesignStudio1and2/AppCurentWeight.png"
import DS2 from "@/assets/CourseWork/DesignStudio1and2/AppWeightHistory.png"
import DS3 from "@/assets/CourseWork/DesignStudio1and2/FEA.png"
import DS4 from "@/assets/CourseWork/DesignStudio1and2/FinalPrototypeNoMat.jpg"
import DS5 from "@/assets/CourseWork/DesignStudio1and2/ScaleRender.png"
import DS6 from "@/assets/CourseWork/DesignStudio1and2/ScalewithattachedWifiModule.jpg"
import DS7 from "@/assets/CourseWork/DesignStudio1and2/StrainGaugeCasing.jpg"
import DS8 from "@/assets/CourseWork/DesignStudio1and2/WaterJetCuttingSteelFrame.jpg"

import VueGallery from 'vue-gallery';

export default {
  name: 'coursework',
  data: function() {
      return {
          sections : [
              {
                  heading: "Design for Additive Manufacturing",
                  text: "Design for Additive Manufacturing (of DfAM) taught both the advantages (free complexity, printed assemblies, mass customization etc.) and disadvantages (bridging, delamination, warping etc.) for both polymer and metal Additive Manufacturing. My final project in this course was to design a battery casing for an electric skateboard with minimal material and maximized strength using topology optimization. ",
                  imageIndex: 0
              },
              {
                  heading: "Additive Manufacturing Technologies",
                  text: "This course reviewed each of the seven additive manufacturing technologies in depth: Powder Bed Fusion, Directed Energy Deposition, Sheet Lamination, Binder Jetting, Material Jetting, Stereolithography, and Material Extrusion. We learned about the material science, process design and major players behind the processes. We also learned about the various tools like CAD and Scanning technologies that may be used with Additive Manufacturing. My final project for this course looked into creating a custom shoe with a functionally graded lattice structure through scanning, meshing, CAD, pressure mapping, and simulation. Scanners used: CreaForm 3D Scanner, Structure 3D Scanner. CAD Packages Used: Geomagic Design X, Autodesk Meshmixer, Autodesk Netfabb, Ansys Workbench, SolidWorks.",
                  imageIndex: 3
              },
              {
                  heading: "Design Studio",
                  text: "Design studio was a fairly open-ended course that taught me about various design, ideation and prototyping methods. My final project in this course was to design a smart scale for Heever Technologies in collaboration with students from Stellenbosch University. For this project we conducted stakeholder interviews, consumer interviews, technology research, product dissection, alpha and beta prototyping, CAD, app development, app-product integration, and a variety of manufacturing methods. The final prototype was sent to Heever Technologies for further iterations. ",
                  imageIndex: 9
              },
              {
                  heading: "Design for Human Variability",
                  text: "This course focused on designing for the various shapes and sizes of various human populations using anthropometric measurements and statistics. The course mainly used the Anthropometric Survey of Army Personnel (ANSUR) and the National Health and Nutrition Examination Survey (NHANES). We learned how to make predictions for a large data set (NHANES) using a smaller more specific Data Set (ANSUR). Attached is a paper I wrote calling for the de-design of VR goggles using Design for Human Variability. (Attached Paper)",
                  file: "DfHVIndividualProjectOstrander.pdf",
                  fileTitle: "Design for Human Variability Paper"
              },
              {
                  heading: "Design Decision Making",
                  text: "In design decision making I learned more about how to evaluate people and control how they think, an important skill when designing experiments with human subjects. The course covers cognitive biases and de-biasing, decision making considerations such as game theory and manipulation, and decision-making tools like technology forecasting and lifecycle assessment. For my final project in this course, I ran a human subjects experiment looking at the effect Immersive and Non-Immersive Virtual Reality can have on engineers’ abilities to make Design for Additive Manufacturing decisions. (Attached Paper)",
                  file: "DDMFinalPaperJohnSnehalLauren.pdf",
                  fileTitle: "Design Decision Making Paper"
              },
              {
                  heading: "Interaction Design",
                  text: "This course dives into the various human-centered design techniques to make a product engaging, and easy to use. The course also reviews various aspects of design thinking to improve team collaboration, as well as consumer and stakeholder interaction."
              }
          ],
          images: [DFAM1, DFAM2, DFAM3, AMT1, AMT2, AMT3, AMT4, AMT5, AMT6, DS3, DS1, DS2, DS4, DS5, DS6, DS7, DS8],
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
