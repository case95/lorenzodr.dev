<template>
  <div class="container">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <CV />
    <Contacts />
  </div>
</template>

<script>
import CV from "../sections/CV";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contacts from "../sections/Contacts";

export default {
  name: "Container",
  components: {
    CV,
    Hero,
    About,
    Experience,
    Projects,
    Contacts,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/_shared.scss";

.container {
  padding: 0 25px;
  color: $my-white;
  transition: padding 0.2s ease-in-out;
  max-width: $XXL;
  margin: 0 auto;
}

@media screen and (min-width: $SM) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (min-width: $MD) {
  .container {
    padding: 0 100px;
  }
}

@media screen and (min-width: $LG) {
  .container {
    padding: 0 150px;
  }
}
</style>
