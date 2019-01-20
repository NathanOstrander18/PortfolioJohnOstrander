<template>
  <div class="app-container">
    <headView class="headView"/>
    <navbar class="nav"/>
    <div class="main-content">
        <router-view/>
    </div>
    <footer class="footer"/>
  </div>
</template>

<script>
    import headView from "@/components/headView.vue";
    import navbar from "@/components/Navbar.vue";

    export default {
      name: 'app',
      components: {
          headView,
          navbar
      }
    }
</script>

<style>
/* Screen size is in total 100vh, all components must add up to this total */
    .app-container {
        /* need this to change size of other containers based on the screen size */
        height: 100vh;
    }
    .headView {
        /* mess with this to change the sizing of the pottom container */
        width: 100%;
        height: 18vh;
        top: 0;
        position: fixed;
        overflow: hidden;
    }
    .nav {
        /* mess with this to change the sizing of the pottom container */
        height: 10vh;
        width: 100%;
        top: 18vh;
        position: fixed;
        overflow: hidden;
    }
    .main-content {
        /* mess with this to change the sizing of the pottom container */
        position: fixed;
        width: 100%;
        /* finely tuned so there is no ovelap over the nav shadow */
        top: 28.30vh;
        height: 71.70vh;
        /* overflow: scroll; */
    }
</style>
