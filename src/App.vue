<template>
    <div class="container">
        <div class="row app-container">
            <div class="col-sm-4 head">
                <sidebar class="sidebar"/>
            </div>
            <div class="col-sm-8 head">
                <navbar class="row"/>
                <transition name="fade">
                    <router-view v-if="" :key="$route.name"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import sidebar from "@/components/Sidebar.vue";
    import navbar from "@/components/Navbar.vue";

    export default {
      name: 'app',
      components: {
          sidebar,
          navbar
      }
    }
</script>

<style>
/* Screen size is in total 100vh, all components must add up to this total */
    .app-container {
        /* need this to change size of other containers based on the screen size */
        margin-top: 60px;
        height: 90%;
        
    }
    .head {
        /* mess with this to change the sizing of the pottom container */
        height: 100%;
    }
    .nav {
        /* mess with this to change the sizing of the pottom container */
        height: 5vh;
        width: 100%;
        top: 18vh;
        position: fixed;
        /* overflow: hidden; */
    }
    .main-content {
        /* mess with this to change the sizing of the pottom container */
        position: fixed;
        width: 100%;
        /* finely tuned so there is no ovelap over the nav shadow */
        top: 23.30vh;
        height: 76.70vh;
        overflow: scroll;
    }
</style>
