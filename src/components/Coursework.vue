<template>
    <div class="main-content-container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/SchoolWork.png">
        <br><br>
        <div class="mb-5" v-for="(section, key) in sections" :key="key">
            <h1 class="text-center">{{section.heading}}</h1>
            <p class="text-justify">{{section.text}}</p>
            <div v-if="section.imageIndex || section.imageIndex == 0">
                <br>
                <div @click="index = section.imageIndex">
                    <img :src="images[section.imageIndex]" class="gallery-image center-image" style=" width: 100%;"/>
                </div>
                <br><br>
            </div>
            <div v-if="section.tools" class="text-center skills font-weight-bold">TOOLS USED</div>
            <p class="text-center skills">{{section.tools}}</p>
            <div v-if="section.skills" class="text-center skills font-weight-bold">SKILLS LEARNED</div>
            <p class="text-center skills">{{section.skills}}</p>
            <div v-if="section.file">
                <div class="text-center skills font-weight-bold">READ THE PAPER</div>
                <div class="text-center">
                    <a :href="'/' + section.file" target="_blank">{{section.fileTitle}}</a>
                </div>
            </div>
        </div>
        <div>
            <VueElevator class="skills text-center" word="Back to Top" duration="1000" mainAudio="" endAudio=""></VueElevator>
        </div>
        <br>
    </div>
</template>

<script>
import AMT1 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies1.pptx.png"
import AMT2 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies2.pptx.png"
import AMT3 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies3.pptx.png"
import AMT4 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies4.pptx.png"
import AMT5 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies5.pptx.png"
import AMT6 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies6.pptx.png"
import AMT7 from "@/assets/CourseWork/AdditiveManufacturingTechnologiesFall2018/AdditiveManufacturingTechnologies7.pptx.png"

import DFAM1 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/DesignforAdditiveManufacturing1.png"
import DFAM2 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/DesignforAdditiveManufacturing2.png"
import DFAM3 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/DesignforAdditiveManufacturing3.png"
import DFAM4 from "@/assets/CourseWork/DesignForAdditiveManufacturingFall2017/DesignforAdditiveManufacturing4.png"

import DS1 from "@/assets/CourseWork/DesignStudio1and2/HeeverPoster.jpg"
import DS2 from "@/assets/CourseWork/DesignStudio1and2/DesignStudio1.png"
import DS3 from "@/assets/CourseWork/DesignStudio1and2/DesignStudio2.png"
import DS4 from "@/assets/CourseWork/DesignStudio1and2/DesignStudio3.png"
import DS5 from "@/assets/CourseWork/DesignStudio1and2/ScaleRender.png"

import DDM1 from "@/assets/CourseWork/DesignDecisionMaking/DDMProjectPoster.png"

import DFHV1 from "@/assets/CourseWork/DesignForHumanVariability/DesignforHumanVariability1.png"
import DFHV2 from "@/assets/CourseWork/DesignForHumanVariability/DesignforHumanVariability2.png"
import DFHV3 from "@/assets/CourseWork/DesignForHumanVariability/DfHVCoverImage.png"

import VueGallery from 'vue-gallery';
import { VueElevator } from 'vue-elevator';

export default {
  name: 'coursework',
  data: function() {
      return {
          sections : [
              {
                  heading: "additive manufacturing technologies",
                  text: "This course reviewed each of the seven Additive Manufacturing technologies in depth. We learned about the material science, process design and major players behind the processes. We also learned about the various tools like CAD and Scanning technologies that may be used with Additive Manufacturing. My final project for this course looked into creating a custom shoe with a functionally graded lattice structure through scanning, meshing, CAD, pressure mapping, and simulation.",
                  imageIndex: 4,
                  tools: "Geomagic Design X • Autodesk Meshmixer • Autodesk Netfabb • Ansys Workbench • SolidWorks • CreaForm 3D Scanner • Structure 3D Scanner • Material Extrusion",
                  skills: "Transforming Meshed Body to Smooth Solid Body • Pressure and Force Simulation • Scanning Techniques • User Centered Design"
              },
              {
                  heading: "design for additive manufacturing",
                  text: "This course taught the various restrictions and opportunities a designer will face when designing a product for additive manufacturing. My final project in this course was to design a battery casing for an electric skateboard with minimized material and maximized strength using topology optimization.",
                  imageIndex: 0,
                  tools: "SolidWorks • Fusion 360 • Material Extrusion • Hand Sketching",
                  skills: "Opportunistic Design • Restrictive Design • Topology Optimization • Customer Needs Evaluation • Post Processing"
              },
              {
                  heading: "design studio",
                  text: "Design studio was a fairly open-ended course that taught me about various design, ideation and prototyping methods. My final project in this course was to design a smart scale for Heever Technologies in collaboration with students from Stellenbosch University. The final prototype was sent to Heever Technologies for further iterations.",
                  imageIndex: 11,
                  tools: "SolidWorks • Hand Sketching • Basic Hand Tools • Laser Cutting • Water Jetting • Material Extrusion • Arduino",
                  skills: "Stakeholder Interviews • Consumer Interviews • Technology Research • Product Dissection • Alpha and Beta Prototyping • UI Design • App-Product integration • User Centered Design"
              },
              {
                  heading: "design for human variability",
                  text: "This course focused on designing for the shapes and sizes of various human populations using anthropometric measurements and statistics. The course mainly used the Anthropometric Survey of Army Personnel (ANSUR) and the National Health and Nutrition Examination Survey (NHANES). For my final project I wrote a proposition calling for the de-design of VR goggles using Design for Human Variability.",
                  file: "DfHVIndividualProjectOstrander.pdf",
                  fileTitle: "Design for Human Variability Paper",
                  imageIndex: 16,
                  tools: "ANSUR • NHANES • R • Microsoft Excel",
                  skills: "Predict for a large data set (NHANES) using a smaller more specific Data Set (ANSUR) • Anthropometric Measurements • Human Subjects Research"
              },
              {
                  heading: "design decision making",
                  text: "In design decision making I learned more about how to evaluate people and better understand how they think, an important skill when designing experiments with human subjects. The course covers cognitive biases and de-biasing, decision making considerations such as game theory and manipulation, and decision-making tools like technology forecasting and lifecycle assessment. For my final project in this course, I ran a human subjects experiment looking at the effect CAD and VR can have on engineers’ abilities to make Design for Additive Manufacturing decisions.",
                  file: "DDMFinalPaperJohnSnehalLauren.pdf",
                  fileTitle: "Design Decision Making Paper",
                  imageIndex: 19,
                  tools: "Unity • C# • htc VIVE • GrabCAD • DfAM Worksheet • Microsoft Excel • SPSS",
                  skills: "Identifying Cognitive Biases • De-Biasing • Active Learning • Game Theory • Design of Experiments • Human Subjects Research"
              },
              {
                  heading: "interaction design",
                  text: "This course dives into the various human-centered design techniques to make a product engaging, and easy to use. The course also reviews various aspects of design thinking to improve team collaboration, as well as consumer and stakeholder interaction. For my final project in this course I am working with a medical company who designed the LCNIS (Low Cost haptic force Needle Insertion Simulator). My task is to identify primary and secondary users, identify needs for the product through interviews, and design a curriculum around the device to be used in a lab setting.",
                  tools: "Paper Prototypes • Mendeley • SPSS",
                  skills: "Qualitative and Quantitative Analysis • Human Subjects Research • Human Centered Design • Activity Centered Design • Problem Framing • Ethnographic Research"
              }
          ],
          images: [DFAM1, DFAM2, DFAM3, DFAM4, AMT1, AMT2, AMT3, AMT4, AMT5, AMT6, AMT7, DS3, DS1, DS2, DS4, DS5, DFHV3, DFHV2, DFHV1, DDM1],
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
