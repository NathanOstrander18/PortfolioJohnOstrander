<template>
    <div class="main-content-container">
        <div v-for="(exp, key) in experiences" :key="key" class="row mb-5">
            <div class="col-md-6">
                <div v-if="exp.logo">
                    <p>
                        <img class="title pull-left" :src="exp.logo"/>
                        <span class="date">{{exp.date}}</span>
                    </p>
                </div>
                <div v-else>
                    <p>
                        <h3>{{exp.title}}<small class="date">{{exp.date}}</small></h3>
                    </p>
                </div>
                <p>{{exp.description}}</p>
                <a :href="exp.url">{{exp.url}}</a>
            </div>
            <div v-if="exp.title == 'Motiv Design'" class="col-md-6">
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '150px', height: '100px' }"
                ></div>
            </div>
        </div>
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

import VueGallery from 'vue-gallery';
    
export default {
    name: 'internships',
    data: function () {
        return {
            experiences: [
                {
                    title: "Entegris",
                    date: "Summer 2018",
                    description: "Research and development in Additive Manufacturing (AM). Conducted extensive research in metal AM processes: Powder Bed Fusion, Directed Energy Deposition and Binder Jetting. Selected a process that meets product requirements and designed experiments to explore potentials of the process.",
                    url: "https://www.entegris.com/content/en/home.html",
                    logo: EntegrisLogo
                },
                {
                    title: "KCF Technologies & Intel",
                    date: "Summer 2017",
                    description: "Designed and manufactured prototypes of a pump flange with an embedded IoT module for real time Temperature and Pressure modeling.",
                    url: "https://www.kcftech.com/"
                },
                {
                    title: "Motiv Design",
                    date: "Summer 2016",
                    description: "CAD rebuilds of existing Keurig designs for SolidWorks training. Designed latch, drip tray and premium brewer concepts for Keurig. Package design for Zarbee’s and iRobot. Back massage mechanism, case and fastening design for Sunbeam.",
                    url: "http://www.the-motiv.com/",
                    logo: MotivLogo
                },
                {
                    title: "Grieb Manufacturing",
                    date: "Summer 2015",
                    description: "Gained experience with MIG and TIG Welding, CNC Machining, Mill and Laithe.",
                    url: "http://griebmanufacturing.com/",
                    logo: GriebLogo
                }
            ],
            images: [Gal1,Gal2,Gal3,Gal4,Gal5,Gal6,Gal7,Gal8],
            index: null
        }
    },
    components: {
      'gallery': VueGallery
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
    
    .title {
        width: 200px;
        vertical-align: bottom;
    }

</style>
