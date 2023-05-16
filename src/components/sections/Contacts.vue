<template>
  <div class="contacts" id="contacts">
    <SectionTitle title="Contacts" />
    <p class="contacts-title">
      Let's get in
      <span class="touch">touch</span
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
    </p>
    <p class="contacts-text">
      Wether You have a job opportunity, a project to collaborate on or You just
      want to have a chat and exchange some ideas feel free to contact me!
    </p>
    <div class="contacts-button-container">
      <a href="mailto:lorenzodr.design@gmail.com" class="button-email">
        <Button child="Send Email" />
      </a>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../customs/SectionTitle";
import Button from "../customs/Button";

export default {
  name: "Contacts",
  components: {
    SectionTitle,
    Button,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";

.contacts {
  padding: 80px 0;
  #{&}-title {
    font-weight: 900;
    font-size: $hero;
    position: relative;
    z-index: 1;
    .touch {
      animation: none;
      text-decoration: underline $my-acqua;
      position: absolute;
      color: $my-acqua;
      @include transition-hero;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 0px;
        width: 0px;
        border-radius: 50%;
        border: 3px solid $my-white;
        z-index: -1;
        animation: touch 1.5s ease-in-out forwards infinite;
      }
    }
  }
  #{&}-text {
    margin-top: 20px;
  }
  #{&}-button-container {
    margin-top: 50px;
    text-align: center;
  }
}

@keyframes touch {
  0% {
    opacity: 1;
    height: 0px;
    width: 0px;
    padding-top: 0%;
  }

  70% {
    opacity: 0.5;
  }

  90% {
    opacity: 0;
  }

  100% {
    padding-top: 100%;
    width: 100%;
    opacity: 0;
  }
}
</style>
