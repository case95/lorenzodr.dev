<template>
  <div class="cv" id="cv">
    <SectionTitle title="CV" />
    <div class="pdf-container">
      <embed :src="pdfLink" type="application/pdf" class="pdf" />
    </div>
    <div class="cv-button-container">
      <a href="/cv.pdf" download="Lorenzo Del Rosario Curriculum">
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
  computed: {
    pdfLink() {
      return `${process.env.VUE_APP_SERVER_URL}cv.pdf`;
    },
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
  .pdf-container {
    display: flex;
    justify-content: center;
    .pdf {
      width: 300px;
      max-width: 300px;
      aspect-ratio: 20/29.33;
    }
  }
  #{&}-text {
    margin-top: 20px;
  }
  #{&}-button-container {
    margin-top: 25px;
    text-align: center;
  }

  @media screen and (min-width: $SM) {
    .pdf-container {
      .pdf {
        width: 500px;
        max-width: 500px;
      }
    }
  }
  @media screen and (min-width: $LG) {
    .pdf-container {
      .pdf {
        width: 600px;
        max-width: 600px;
      }
    }
  }
  @media screen and (min-width: $XL) {
    .pdf-container {
      .pdf {
        width: 800px;
        max-width: 800px;
      }
    }
  }
}
</style>
