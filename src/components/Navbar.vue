<template>
    <div class="navbar">
        <div class="col-sm-2 textwrap">
            <router-link class="menu-tile" to="/Internships">
                <img class="menu-tile-img" src="@/assets/menu_icons/Internships.png"/>
            </router-link>
            <p class="tile1 text-center">Internships</p>
        </div>
        <div class="col-sm-2 textwrap">
            <router-link class="menu-tile" to="/DesignThinking">
                <img class="menu-tile-img" src="@/assets/menu_icons/DesignThinking.png"/>
            </router-link>
            <p class="tile2 text-xs-center">Design Thinking</p>
        </div>
        <div class="col-sm-2 textwrap">
            <router-link class="menu-tile" to="/FreelanceCAD">
                <img class="menu-tile-img" src="@/assets/menu_icons/FreelanceCAD.png"/>
            </router-link>
            <p class="tile3 text-center">Freelance CAD</p>
        </div>
        <div class="col-sm-2 textwrap">
            <router-link class="menu-tile" to="/Coursework">
                <img class="menu-tile-img" src="@/assets/menu_icons/SchoolWork.png"/>
            </router-link>
            <p class="tile4 text-center">Coursework</p>
        </div>
        <div class="col-sm-2 textwrap">
            <router-link class="menu-tile" to="/Research">
                <img class="menu-tile-img" src="@/assets/menu_icons/Research.png"/>
            </router-link>
            <p class="tile5 text-center">Research</p>
        </div>
        <div class="col-sm-2 textwrap">
            <router-link class="menu-tile" to="/Leadership">
                <img class="menu-tile-img" src="@/assets/menu_icons/Leadership.png"/>
            </router-link>
            <p class="tile6 text-center">Leadership</p>
        </div>
    </div>
</template>

<script>

    export default {
      name: 'navbar'
    }
</script>

<style scoped>
    .menu-tile {
        display: block;
        position: relative;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 5vh;
        width: 5vh;
        min-height: 53px;
        min-width: 53px;
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        transition: opacity .3s;
    }
    .menu-tile:hover {
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        opacity: .3;
    }
    
    .menu-tile-img {
        object-fit: scale-down;
        width: auto;
        height: 100%;
    }
    
    .tile1, .tile2, .tile3, .tile4, .tile5, .tile6 {
        white-space:nowrap;
        opacity: 0;
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        transition: opacity .7s;
    }
    
    .textwrap:hover .tile1, .textwrap:hover .tile2, .textwrap:hover .tile3, .textwrap:hover .tile4, .textwrap:hover .tile5, .textwrap:hover .tile6 { 
        opacity: 1;
        transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
    }
    
    .navbar {
        margin-top: 12px;
    }
    
    p {
        font-size: 10px;
    }
    


</style>
