<template>
    <nav class="navbar">
        <div class="d-flex flex-row">
            <router-link class="ml-3 btn btn-primary-outline nav-link" to="/">Home</router-link>
            <router-link class="ml-3 btn btn-primary-outline nav-link" to="/Resume">Resume</router-link>
            <router-link class="ml-3 btn btn-primary-outline nav-link" to="/WhitePaper">White Paper</router-link>
            <router-link class="ml-3 btn btn-primary-outline nav-link" to="/Contact">Contact</router-link>
        </div>
    </nav>
</template>

<script>

    export default {
      name: 'navbar'
    }
</script>

<style scoped>
    .ml-auto {
        left: auto !important;
        right: 0px;
    }
    .navbar {
        box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.5);
    }


</style>
