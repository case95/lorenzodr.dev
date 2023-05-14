<template>
  <div class="cv" id="cv">
    <SectionTitle title="CV" />
    <embed
      src="/Lorenzo Del Rosario's Curriculum.pdf"
      type="application/pdf"
      width="100%"
      class="pdf"
    />
    <div class="cv-button-container">
      <a href="/Lorenzo Del Rosario's Curriculum.pdf" download>
        <Button child="Download Resume" />
      </a>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../customs/SectionTitle";
import Button from "../customs/Button";

export default {
  name: "CV",
  components: {
    SectionTitle,
    Button,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";

.cv {
  padding: 80px 0;
  #{&}-title {
    font-weight: 900;
    font-size: $hero;
    position: relative;
    z-index: 1;
  }
  .pdf {
    aspect-ratio: 1/1;
  }
  #{&}-text {
    margin-top: 20px;
  }
  #{&}-button-container {
    margin-top: 25px;
    text-align: center;
  }
}
</style>
