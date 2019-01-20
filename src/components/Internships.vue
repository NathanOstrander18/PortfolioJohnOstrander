<template>
    <div class="main-content-container">
        <div v-for="(exp, key) in experiences" :key="key" class="row m-3">
            <h3>{{exp.title}}<small>&nbsp;&nbsp;{{exp.date}}</small></h3>
            <hr>
            <div class="col-md-4">
                <p>{{exp.description}}</p>
                <a :href="exp.url">{{exp.url}}</a>
            </div>
            <div class="col-md-2">
                <img class="tile" :src="exp.logo"/>
            </div>
        </div>
    </div>
</template>

<script>
import EntegrisLogo from "@/assets/Internships/InternshipTitles/Entegris.png"
import GriebLogo from "@/assets/Internships/InternshipTitles/GriebManufacturing.png"
import MotivLogo from "@/assets/Internships/InternshipTitles/MotivDesign.png"
    
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
                    title: "KCF Technologies & Intel:",
                    date: "Summer 2017",
                    description: "Designed and manufactured prototypes of a pump flange with an embedded IoT module for real time Temperature and Pressure modeling.",
                    url: "https://www.kcftech.com/",
                    logo: EntegrisLogo
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
            ]
        }
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

</style>
