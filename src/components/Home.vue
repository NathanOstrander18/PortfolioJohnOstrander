<template>
    <div class="home">
        <div class="row home-container">
            <div v-for="(tile, index) in tiles" :key="index" @mouseover="hoverTile(index)" @mouseout="hoverTile(-1)" class="tile col-sm-6">
                <router-link class="menu_link" :to="tile.source">
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
                {title: "internships", source: "/Internships", img: InternshipsIcon},
                {title: "coursework", source: "/Coursework", img: CourseworkIcon},
                {title: "design thinking", source: "/DesignThinking", img: DesignThinkingIcon},
                {title: "freelance cad", source: "/FreelanceCAD", img: FreelanceCADIcon},
                {title: "research", source: "/Research", img: ResearchIcon},
                {title: "leadership", source: "/Leadership", img: LeadershipIcon}
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
        margin: 10px 50px 1% 50px;
        height: 35%
    }
    .tile {
        height: 90%;
        max-height: 225px;
        /* max-width: 200px; */
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
        height: 100%;

        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        transition: height 0.3s, opacity 0.3s, filter 0.3s;
    }
    .tile-image.selected {
      /* change opacity below */
        opacity: 1.0;
        height: 100%;
        /* change blur */
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
        transition: opacity .7s;
    }
    .tile-title.selected {
        opacity: 1;
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
    }
    .menu_link {
        height: 100%
    }

</style>
