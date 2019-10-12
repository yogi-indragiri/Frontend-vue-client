<template>
  <div class="home">
    <Navbar/>
    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Navbar from "../components/Navbar.vue";

export default {
  name: 'home',
  components: {
      Navbar,
      Carousel
  }
}
</script>
