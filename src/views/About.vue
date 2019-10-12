<template>
  <div>
    <div class="about">
      <navbar></navbar>
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    import Navbar from "../components/Navbar.vue";

    export default {
        name: 'home',
        components: {
            Navbar
        }
    }
</script>
