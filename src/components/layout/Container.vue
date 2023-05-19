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
import CV from "../sections/CV.vue";
import Hero from "../sections/Hero.vue";
import About from "../sections/About.vue";
import Experience from "../sections/Experience.vue";
import Projects from "../sections/Projects.vue";
import Contacts from "../sections/Contacts.vue";

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

<style scoped lang="scss">
@import "/src/assets/_shared.scss";

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
