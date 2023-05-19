<template>
  <div class="section-title-container">
    <div class="title-container">
      <h2 class="title">
        {{ title }}
      </h2>
      <div class="title-decoration"></div>
    </div>
    <h2 :v-if="subtitle !== undefined" class="subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/_shared.scss";
.section-title-container {
  margin-bottom: 20px;
  .title-container {
    display: flex;
    flex-direction: row;
    .title {
      font-size: $h1;
      text-transform: capitalize;
      margin-right: 10px;
      font-family: "Inconsolata", monospace;
      min-width: max-content;
    }
    .title-decoration {
      height: 1px;
      width: 100%;
      background-color: $my-acqua;
      margin: auto 10px auto 0;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        right: -10px;
        top: -4px;
        border: 2px solid $my-acqua;
        box-sizing: border-box;
      }
    }
  }
  .subtitle {
    font-size: $h3;
    margin-top: 10px;
    text-transform: capitalize;
    font-family: "Inconsolata", monospace;
  }
}
</style>
