<template>
    <div class="main_content_container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <img class="main-content-image" src="@/assets/menu_icons/Internships.png">
        <br><br>
        <div v-for="(exp, key) in experiences" :key="key" class="mb-5">
                <h3 class="text-center">{{exp.title}}</h3>
                <h4 class="text-center">{{exp.date}}</h4>
                <p class="text-justify">{{exp.description}}</p>
                <div v-if="exp.imageIndex || exp.imageIndex == 0">
                    <div @click="index = exp.imageIndex">
                        <img :src="images[exp.imageIndex]" class="gallery-image center-image" style=" width: 100%;"/>
                    </div>
                </div>
                <div class="text-center skills font-weight-bold">TOOLS USED</div>
                <p class="text-center skills">{{exp.tools}}</p>
                <div class="text-center skills font-weight-bold">SKILLS LEARNED</div>
                <p class="text-center skills">{{exp.skills}}</p>
                <p class="text-center">
                    <a :href="exp.url" target="_blank">{{exp.url}}</a>
                </p>
        </div>
        <div>
            <VueElevator class="skills text-center" word="Back to Top" duration="1000" mainAudio="" endAudio=""></VueElevator>
        </div>
        <br>
    </div>
</template>

<script>
import EntegrisLogo from "@/assets/Internships/InternshipTitles/Entegris.png"
import GriebLogo from "@/assets/Internships/InternshipTitles/GriebManufacturing.png"
import MotivLogo from "@/assets/Internships/InternshipTitles/MotivDesign.png"
import Gal1 from "@/assets/Internships/MotivDesignImages/Ceremony1.png"
import Gal2 from "@/assets/Internships/MotivDesignImages/Ceremony2.png"
import Gal3 from "@/assets/Internships/MotivDesignImages/Cradle1.png"
import Gal4 from "@/assets/Internships/MotivDesignImages/Cradle2.png"
import Gal5 from "@/assets/Internships/MotivDesignImages/KeurigKold1.png"
import Gal6 from "@/assets/Internships/MotivDesignImages/KeurigKold2.png"
import Gal7 from "@/assets/Internships/MotivDesignImages/KeurigKold3.png"
import Gal8 from "@/assets/Internships/MotivDesignImages/KeurigKoldExplode.jpg"
import Gal9 from "@/assets/Internships/KCFImages/KCFExplode(s).jpg"
import Gal10 from "@/assets/Internships/KCFImages/KCFFrontLines(s).jpg"
import Gal11 from "@/assets/Internships/KCFImages/KCFFrontRender(s).jpg"
import Gal12 from "@/assets/Internships/KCFImages/KCFSideLines(s).png"
import Gal13 from "@/assets/Internships/KCFImages/KCFSideRender(s).jpg"

import VueGallery from 'vue-gallery';
import { VueElevator } from 'vue-elevator';
    
export default {
    name: 'internships',
    data: function () {
        return {
            experiences: [
                {
                    title: "Entegris",
                    date: "Summer 2018",
                    description: "I am currently working with Entegris on an R&D project involving Additive Manufacturing. I conducted extensive research in metal AM processes: Powder Bed Fusion, Directed Energy Deposition and Binder Jetting. I proposed a process that met product requirements and designed experiments to explore potentials of the process.",
                    tools: "ANSYS AM Suite • Netfabb Ultimate • SolidWorks • Microsoft Excel • Mendeley • Ex One X-Lab and R2 Binder Jet systems • Curing Furnace • Sintering Furnace • Ball Mill • Auto Sieve",
                    skills: "Design of Experiments • Design for Additive Manufacturing • Manufacturing Process Design • Literature Review",
                    url: "https://www.entegris.com/content/en/home.html",
                    logo: EntegrisLogo
                },
                {
                    title: "KCF Technologies & Intel",
                    date: "Summer 2017",
                    description: "I designed and manufactured prototypes for a pump flange with an embedded Internet of Things (IoT) module for real time temperature and pressure modeling. I regularly met with the senior technologist at KCF to discuss improvements for the design.",
                    tools: "SolidWorks • SolidWorks Renderer • McMaster-Carr • Microsoft Excel • Pressure and Temperature Sensors • Material Extrusion",
                    skills: "Design for Additive Manufacturing • Embedding Shape Conversion • Tolerancing • Design for Assembly",
                    url: "https://www.kcftech.com/",
                    imageIndex: 8
                },
                {
                    title: "Motiv Design",
                    date: "Summer 2016",
                    description: "Motiv was a fast-paced caffeine-fueled environment that gave me a lot of experience with product design. In my time at Motiv I created CAD rebuilds of existing Keurig designs; I also designed latch, drip tray and premium brewer concepts for Keurig. I helped design packaging for Zarbee’s and iRobot, and I designed massage and heating mechanisms for Sunbeam.",
                    tools: "SolidWorks • Fusion 360 • Hand Sketching • Basic Hand Tools",
                    skills: "Parametric Modeling • Product Dissection • Paper Prototyping • Market Exploration • Design for Manufacturing • Design for Assembly",
                    url: "http://www.the-motiv.com/",
                    logo: MotivLogo,
                    imageIndex: 0
                },
                {
                    title: "Grieb Manufacturing",
                    date: "Summer 2015",
                    description: "Working at Grieb Manufacturing introduced me to more traditional methods of metals manufacturing. I had hands on experience with various machines used to bend, twist, cut and weld metals.",
                    tools: "MIG Welding • TIG Welding • Mill • Lathe • CNC Machining • Grinding",
                    skills: "Zero Mill, Lathe, and CNC Machine • Cutting Parameters • Finishing • MIG and TIG Welding Techniques",
                    url: "http://griebmanufacturing.com/",
                    logo: GriebLogo
                }
            ],
            images: [Gal7,Gal5,Gal6,Gal8,Gal1,Gal2,Gal3,Gal4,Gal10,Gal11,Gal12,Gal13,Gal9],
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
        display: inline-block;
    }
    
    .tile {  
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .motiv-image {
        object-fit: scale-down;
        width: auto;
        height: 95%;
    }

</style>
