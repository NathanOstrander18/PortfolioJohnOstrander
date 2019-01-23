<template>
    <div class="home">
        <div class="row home-container">
            <div v-for="(tile, index) in tiles" :key="index" @mouseover="hoverTile(index)" @mouseout="hoverTile(-1)" class="col-sm-6">
                <router-link class="tile" :to="tile.source">
                        <img class="tile-image" :class="{'selected': isSelected(index)}" :src="tile.img" :alt="tile.title"> 
                        <div class="tile-title" :class="{'selected': isSelected(index)}" ><h3>{{tile.title}}</h3></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CourseworkIcon from "@/assets/menu_icons/SchoolWork.png"
import DesignThinkingIcon from "@/assets/menu_icons/DesignThinking.png"
import FreelanceCADIcon from "@/assets/menu_icons/FreelanceCAD.png"
import InternshipsIcon from "@/assets/menu_icons/Internships.png"
import LeadershipIcon from "@/assets/menu_icons/Leadership.png"
import ResearchIcon from "@/assets/menu_icons/Research.png"

export default {
    name: 'home',
    data: function () {
        return {
            tiles: [
                {title: "Internships", source: "/Internships", img: InternshipsIcon}, 
                {title: "Coursework", source: "/Coursework", img: CourseworkIcon},
                {title: "Design Thinking", source: "/DesignThinking", img: DesignThinkingIcon}, 
                {title: "Freelance CAD", source: "/FreelanceCAD", img: FreelanceCADIcon},
                {title: "Research", source: "/Research", img: ResearchIcon},
                {title: "Leadership", source: "/Leadership", img: LeadershipIcon}
            ],
            selectedTile: -1
        }
    },
    methods: {
        hoverTile(selectedIndex) {
            this.selectedTile = selectedIndex
        },
        isSelected (tileIndex) {
            return this.selectedTile === tileIndex
        }
    }
}
</script>

<style scoped>
    .home {
        height: 100%;
        overflow: hidden;
    }
    .home-container {
        margin: 2% 10% 3% 10%;
        height: 35%
    }
    .tile {
        height: 90%;
        max-height: 200px;
        max-width: 200px;
        min-width: 10vh;
        display: flex;
        position: relative;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
        transition: height 0.3s, box-shadow 0.3s;
        overflow: hidden;
        /* border-radius: 10px; */
    }
    .tile:hover {
        box-shadow: 20px 20px 40px 0px rgba(0,0,0,0.5);
    }
    .tile-image {
        object-fit: scale-down;
        width: auto;
        height: 75%;
        
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        transition: height 0.3s, opacity 0.3s;
    }
    .tile-image.selected {
        opacity: 0.3;
        height: 100%;
        filter: blur(8px);
        -webkit-filter: blur(8px);
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
    }
    
    .tile-title {
        color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        transition: opacity 0.3;
    }
    .tile-title.selected {
        opacity: 1;
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
    }

</style>
