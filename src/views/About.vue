<template>
  <div>
    <div class="about">
      <navbar></navbar>
      <div>
        <b-jumbotron>
          <template v-slot:header>Thankyou For Visit My Lab</template>

          <template v-slot:lead>
            Ini adalah website sederhana yang di buat untuk latihan
          </template>

          <hr class="my-4">

          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>

          <b-button variant="primary" href="#">Do Something</b-button>
          <b-button variant="success" href="#">Do Something Else</b-button>
        </b-jumbotron>
      </div>
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
