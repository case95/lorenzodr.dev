<template>
  <div class="hero" id="hero">
    <h1 class="hero-text">
      <span class="overtitle">Hi, my name is</span> <br />
      Lorenzo Del Rosario
      <span class="text-secondary">
        and i
        <span class="love">love</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; being a
      </span>
      web developer.
    </h1>
    <p class="introduction">
      “<span class="quote">God is in the details</span>” said Mies van der Rohe,
      one of the fathers of the modern minimalist design and architecture. By
      following this concept I aim to develop pixel-perfect, pleasing and
      functional websites that satisfy the user.
    </p>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";
.hero {
  min-height: 100vh;
  padding: 80px 0;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  #{&}-text {
    margin-top: -40px;
    font-weight: 900;
    font-size: $hero;
    .overtitle {
      font-size: $h2;
      font-family: "Inconsolata", monospace;
    }
    .text-secondary {
      color: $my-gray;
    }
    .love {
      animation: none;
      position: absolute;
      text-decoration: underline $my-acqua;
      @include transition-hero;
      &:hover {
        animation: pump 1.5s ease-in-out forwards infinite;
        color: $my-acqua;
        @include transition-hero;
      }
    }
  }
  .introduction {
    margin-top: 20px;
    .quote {
      color: $my-acqua;
    }
  }
}

@keyframes pump {
  0% {
    font-size: $hero;
  }
  20% {
    font-size: $hero;
    transform: translate(0%, 0%);
  }
  25% {
    font-size: clamp(50px, 9vw, 90px);
    transform: translate(-5%, -5%);
  }
  30% {
    font-size: $hero;
    transform: translate(0%, 0%);
  }
  35% {
    font-size: $hero;
    transform: translate(0%, 0%);
  }
  40% {
    font-size: clamp(50px, 9vw, 90px);
    transform: translate(-5%, -5%);
  }
  45% {
    font-size: $hero;
    transform: translate(0%, 0%);
  }
  100% {
    font-size: $hero;
  }
}

@keyframes heart-color {
  0% {
    color: inherit;
  }

  100% {
    color: $my-acqua;
  }
}
</style>
