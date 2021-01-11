<template>
  <div class="container"
  >
    <Hero />
    <About />
    <Experience/>
    <Projects />
    <Contacts/>
  </div>
</template>

<script>


import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contacts from "../sections/Contacts";


export default {
  name: 'Container',
  components: {
    Hero,
    About,
    Experience,
    Projects,
    Contacts
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '@/assets/_shared.scss';

  .container {
    padding: 0 25px;
    color: $my-white;
    background-color: $my-black;
    transition: padding 0.2s ease-in-out;
  }

  @media screen and (min-width: $SM ) {
    .container {
    padding: 0 50px;
    }
  }

  @media screen and (min-width: $MD ) {
    .container {
    padding: 0 100px;
    }
  }

  @media screen and (min-width: $LG ) {
    .container {
    padding: 0 150px;
    }
  }

</style>
