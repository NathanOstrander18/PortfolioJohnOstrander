<template>
    <div class="headView">
        <div class="row m-1">
            <div class="col-sm-10">
                <h1>JOHN OSTRANDER<transition name="fade"><small v-if="['Home'].indexOf($route.name) == -1">&nbsp;&nbsp;{{$route.name.toUpperCase()}}</small></transition></h1>
            </div>
            <transition name="fade">
            <div v-if="['Home'].indexOf($route.name) == -1" class="col">
                <table class="menu-table float-right">
                    <caption>Menu</caption>
                    <tr class="spaceUnder">
                        <td>
                            <router-link class="menu-tile" to="/Internships">
                                <img class="menu-tile-img" src="@/assets/menu_icons/Internships.png" title="Internships"/>
                            </router-link>
                        </td>
                        <td>
                            <router-link class="menu-tile" to="/DesignThinking">
                                <img class="menu-tile-img" src="@/assets/menu_icons/DesignThinking.png" title="Design Thinking"/>
                            </router-link>
                        </td>
                        <td>
                            <router-link class="menu-tile" to="/FreelanceCAD">
                                <img class="menu-tile-img" src="@/assets/menu_icons/FreelanceCAD.png" title="Freelance CAD"/>
                            </router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <router-link class="menu-tile" to="/Coursework">
                                <img class="menu-tile-img" src="@/assets/menu_icons/SchoolWork.png" title="Coursework"/>
                            </router-link>
                        </td>
                        <td>
                            <router-link class="menu-tile" to="/Research">
                                <img class="menu-tile-img" src="@/assets/menu_icons/Research.png" title="Research"/>
                            </router-link>
                        </td>
                        <td>
                            <router-link class="menu-tile" to="/Leadership">
                                <img class="menu-tile-img" src="@/assets/menu_icons/Leadership.png" title="Leadership"/>
                            </router-link>
                        </td>
                    </tr>
                </table>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'headView'
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
    
    .row {
        position: relative;
    }

    .bottom-align-text {
        position: absolute;
        bottom: 0;
        right: 0;
    }
    
    .menu-tile {
        display: flex;
        position: relative;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background-color: #D3D3D3;
        height: 5vh;
        width: 5vh;
    }
    
    .menu-tile:hover {
        opacity: .5;
    }
    
    .menu-tile-img {
        object-fit: scale-down;
        width: auto;
        height: 100%;
    }
    
    caption {
        caption-side: top;
        text-align: center;
        font-size: 2vh;
        margin: 0;
        padding: 0;
    }
    
    tr.spaceUnder>td {
      padding-bottom: .5em;
    }
    
    .menu-table {
        
    }
</style>