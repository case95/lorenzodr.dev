<template>
  <div class="container">
    <div class="header" id="header">
      <div
        class="hamburger-menu-container hamburger"
        id="hamburger-menu-container"
        v-on:click="open"
      >
        <svg class="hamburger-icon" viewBox="0 0 45 20">
          <rect y="0" />
          <rect y="9" />
          <rect y="18" />
        </svg>
        <div class="navbar-small divider-out" id="navbar-small">
          <ul class="nav-links">
            <a href="#about" class="nav-link">
              <li class="nav-item">About</li>
            </a>
            <a href="#experience" class="nav-link">
              <li class="nav-item">Experience</li>
            </a>
            <a href="#projects" class="nav-link">
              <li class="nav-item">Projects</li>
            </a>
            <a href="#contacts" class="nav-link">
              <li class="nav-item">Contacts</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="nav-logo-container">
        <a href="#hero" class="nav-logo-link">
          <svg
            id="nav-logo"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <circle class="no-fill" cx="50" cy="50" r="44.64" />
            <path
              class="fill"
              d="M50,5.36A44.64,44.64,0,1,1,5.36,50,44.63,44.63,0,0,1,50,5.36M50,0a50,50,0,1,0,50,50A50.06,50.06,0,0,0,50,0Z"
            />
            <circle class="fill" cx="36.13" cy="85.35" r="3.51" />
            <circle class="fill" cx="64.2" cy="85.35" r="3.51" />
            <circle class="no-fill" cx="50" cy="50" r="44.64" />
            <path
              class="fill"
              d="M11.48,80h5.38a6.79,6.79,0,0,1,6.77-6.64c.2,0,.41,0,.61,0l.58,0a17,17,0,0,1,4.64,1.36,66.57,66.57,0,0,1-2.85-6.06A13.75,13.75,0,0,1,25.74,64a14,14,0,0,1,14-14,14.27,14.27,0,0,1,11.38,5.56L53,58.05l2.19-2.31a11.51,11.51,0,0,1,8.45-3.64A11.65,11.65,0,0,1,75.31,63.73c0,.25,0,.5,0,.75a6.65,6.65,0,0,1-2.45,4.36,6.76,6.76,0,0,1,4.08.35,11.12,11.12,0,0,1,6.25,10,8.44,8.44,0,0,1,0,.87H88.5c0-.29,0-.58,0-.87a16.51,16.51,0,0,0-7.89-14.07c0-.45,0-.9,0-1.36A17,17,0,0,0,53.5,50.1a19.82,19.82,0,0,0-13.76-5.53A19.42,19.42,0,0,0,20.85,68.33,12.16,12.16,0,0,0,11.48,80Z"
            />
            <path
              class="fill"
              d="M50.06,12.24h-.12a11.27,11.27,0,0,0-8.5,18.5A11.19,11.19,0,0,1,43.27,34c.4,1.64.49,2.16.5,2.16h0l.08.77v3.13l0,.46c.25,1.56,1.8,4.23,6,4.33h.14c4.24-.1,5.79-2.77,6-4.33l0-3.44.09-.84s.08-.51.51-2.23a11.19,11.19,0,0,1,1.83-3.28,11.27,11.27,0,0,0-8.5-18.5ZM50,41.94c-2.94-.07-3.23-1.87-3.23-1.87V38h6.46v2.12S52.94,41.87,50,41.94Zm6.3-13a14.09,14.09,0,0,0-2.4,4.42c-.33,1.32-.47,2-.53,2.3H46.63c-.06-.31-.2-1-.53-2.3a14.09,14.09,0,0,0-2.4-4.42A8.35,8.35,0,0,1,50,15.17h0a8.35,8.35,0,0,1,6.3,13.72Z"
            />
            <polygon
              class="light"
              points="50 15.17 50 15.17 50 15.17 50 15.17 50 15.17"
            />
            <path class="light" d="M49.94,15.17h0Z" />
            <path
              class="light"
              d="M58.17,22.34c0-.17-.05-.35-.08-.53s-.07-.24-.1-.37a3.25,3.25,0,0,0-.11-.42c-.05-.16-.11-.32-.17-.48s-.07-.19-.1-.28-.17-.36-.26-.54l-.09-.19c-.11-.19-.22-.38-.34-.56l-.08-.12q-.2-.29-.42-.57l-.05-.07c-.16-.19-.33-.38-.51-.56l0,0A8.26,8.26,0,0,0,50,15.17h0a8.26,8.26,0,0,0-5.83,2.46l0,0c-.18.18-.35.37-.51.56l-.05.07q-.22.28-.42.57l-.08.12c-.12.18-.23.37-.34.56l-.09.19c-.09.18-.18.35-.26.54s-.06.19-.1.28-.12.32-.17.48a3.25,3.25,0,0,0-.11.42c0,.13-.07.25-.1.37s0,.36-.08.53,0,.2,0,.3a7.92,7.92,0,0,0,0,.85,8.58,8.58,0,0,0,.52,2.92,8.31,8.31,0,0,0,1.44,2.48,16.33,16.33,0,0,1,1,1.42,14.37,14.37,0,0,1,.8,1.42,8.51,8.51,0,0,1,.6,1.58c.08.31.14.58.2.82a1,1,0,0,1,0,.17c0,.17.08.32.11.46l0,.15c0,.13.06.23.08.33l0,.09c0,.11,0,.21.05.28h6.74c0-.07,0-.17.05-.28l0-.09c0-.1.05-.2.08-.33l0-.15c0-.14.07-.29.11-.46a1,1,0,0,1,0-.17c.06-.24.12-.51.2-.82a8.51,8.51,0,0,1,.6-1.58,14.37,14.37,0,0,1,.8-1.42,16.33,16.33,0,0,1,1-1.42,8.31,8.31,0,0,0,1.44-2.48,8.58,8.58,0,0,0,.52-2.92,7.92,7.92,0,0,0,0-.85C58.2,22.54,58.18,22.44,58.17,22.34Z"
            />
            <path
              class="steel"
              d="M50,41.94c-2.94-.07-3.23-1.87-3.23-1.87V38h6.46v2.12S52.94,41.87,50,41.94Z"
            />
          </svg>
        </a>
      </div>
      <div class="navbar">
        <ul class="nav-links">
          <a href="#about" class="nav-link">
            <li class="nav-item">About</li>
          </a>
          <a href="#experience" class="nav-link">
            <li class="nav-item">Experience</li>
          </a>
          <a href="#projects" class="nav-link">
            <li class="nav-item">Projects</li>
          </a>
          <a href="#contacts" class="nav-link">
            <li class="nav-item">Contacts</li>
          </a>
        </ul>
        <div>
          <a
            href="https://drive.google.com/uc?export=download&id=1MMYxx23ab3xmWlfqkVtdhe57srldX5lo"
            download="Lorenzo Del Rosario Curriculum"
          >
            <Button class="nav-button" child="Resume" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../customs/Button";
export default {
  name: "Header",
  components: {
    Button,
  },
  methods: {
    open() {
      const navbar = document.getElementById("navbar-small");
      const menuLogo = document.getElementById("hamburger-menu-container");
      navbar.classList.toggle("navbar-small-open");
      navbar.classList.toggle("divider-out");
      menuLogo.classList.toggle("hamburger-menu-container-open");
      menuLogo.classList.toggle("hamburger-menu-container");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";

.container {
  box-shadow: 0px 7px 7px rgba($color: #000000, $alpha: 0.7);
  .header {
    padding: 0 25px;
    transition: padding 0.2s ease-in-out;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: $my-black;
    max-width: $XXL;
    margin: 0 auto;
    @include transition-header(padding margin top, 0s 0s 0s);
    // transition: padding 0.2s ease-in-out, margin 0.2s ease-in-out, top 0.2s ease-in-out;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    .hamburger {
      margin: auto 0;
      width: 45px;
      height: 20px;
      position: relative;
      &-icon {
        fill: $my-acqua;
        position: relative;
        rect {
          height: 2px;
          @include transition-header(height width, 0.2s 0.4s);
          // transition: height 0.2s ease-in-out 0.2s, width 0.2s ease-in-out 0.4s ;
        }
        rect:nth-child(1) {
          width: 35px;
        }
        rect:nth-child(2) {
          width: 40px;
        }
        rect:nth-child(3) {
          width: 45px;
        }
      }
      .navbar-small {
        position: fixed;
        top: 100px;
        left: 0;
        width: 100%;
        height: 0;
        background-color: $my-black;
        @include transition-header(height, 0.2s);
        // transition: height 0.2s ease-in-out 0.2s,;
        overflow: hidden;
        box-shadow: 0px 7px 7px rgba($color: #000000, $alpha: 0.7);
        .nav-links {
          list-style: none;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-wrap: wrap;
          height: 100%;
          transition: padding 0.3s ease-in-out;
          .nav-link {
            display: inline-flex;
            .nav-item {
              display: flex;
              position: relative;
              margin: 0 auto 0 0;
              font-family: "Inconsolata", monospace;
              &::after {
                content: "";
                display: flex;
                position: absolute;
                left: 0;
                bottom: -2px;
                height: 0.5px;
                background-color: $my-acqua;
                width: 0;
                @include transition-header(width, 0s);
                // transition: width  0.2s ease-in-out;
              }
              &:hover::after {
                width: 100%;
              }
            }
          }
        }
      }
      .navbar-small-open {
        height: 150px;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          width: 0;
          height: 1px;
          display: inline-block;
          background-color: $my-acqua;
          animation: navbar-divider 0.2s ease-in-out forwards 0.2s;
        }
      }
      .divider-out::before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        display: inline-block;
        background-color: $my-acqua;
        animation: navbar-divider-out 0.2s ease-in-out forwards;
      }
    }
    .hamburger-menu-container {
      &::after {
        content: "Menu";
        position: absolute;
        top: 2px;
        left: 4px;
        height: 16px;
        width: 0;
        font-weight: 600;
        color: $my-acqua;
        box-sizing: border-box;
        overflow: hidden;
        font-family: "Inconsolata", monospace;
        @include transition-header(width padding, 0s 0s);
        // transition: width 0.2s ease-in-out, padding 0.2s ease-in-out;
      }
      &:hover {
        height: 100%;
        .hamburger-icon {
          margin: 40px 0;
        }
        rect {
          width: 4px !important;
          height: 10px !important;
          @include transition-header(height width, 0.4s 0.2s);
          // transition: height 0.2s ease-in-out 0.4s, width 0.2s ease-in-out 0.2s ;
        }
        &::after {
          content: "Menu";
          position: absolute;
          top: 42px;
          left: 4px;
          padding: 0 10px;
          height: 16px;
          width: 55px;
          font-family: "Inconsolata", monospace;
          @include transition-header(width padding, 0.6s 0.6s);
          // transition: width 0.2s ease-in-out 0.6s, padding 0.2s ease-in-out 0.6s;
        }
      }
      &-open {
        margin: auto 0;
        width: 45px;
        position: relative;
        height: 100%;
        .hamburger-icon {
          margin: 40px 0;
        }
        rect {
          width: 4px !important;
          height: 10px !important;
          @include transition-header(height width, 0.4s 0.2s);
          // transition: height 0.2s ease-in-out 0.4s, width 0.2s ease-in-out 0.2s ;
        }
        &::after {
          content: "Close Menu";
          font-family: "Inconsolata", monospace;
          position: absolute;
          top: 42px;
          left: 4px;
          right: 0;
          padding: 0 10px;
          height: 16px;
          width: 125px;
          color: $my-acqua;
          overflow: hidden;
          animation: close-menu 0.4s ease-in-out forwards;
        }
      }
    }
    .nav-logo-container {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: auto 0;
      #nav-logo {
        height: 70px;
        width: 70px;
        .no-fill {
          fill: transparent;
        }
        .fill {
          fill: $my-white;
        }
        .light {
          fill: #efda18;
          display: none;
        }
        .steel {
          fill: #b5b5b4;
          display: none;
        }
      }
    }
    .navbar {
      margin: auto 0;
      display: flex;
      .nav-links {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        align-content: center;
        display: none;
      }
      .nav-item {
        display: flex;
        padding: 10px;
        margin: 0 5px;
        color: $my-white;
        position: relative;
        font-family: "Inconsolata", monospace;
        &::after {
          content: "";
          display: flex;
          position: absolute;
          left: 0;
          bottom: 5px;
          height: 0.5px;
          background-color: $my-acqua;
          width: 0;
          @include transition-header(width, 0s);
          // transition: width  0.2s ease-in-out;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    .nav-button {
      margin: 0;
      span {
        display: none;
      }
      i {
        display: block;
      }
    }
  }
}

@media screen and (min-width: $SM) {
  .container {
    .header {
      padding: 0 50px;
      .navbar-small {
        .nav-links {
          padding: 25px 50px !important;
        }
      }
    }
  }
}

@media screen and (min-width: $MD) {
  .container {
    .header {
      padding: 0 100px;
      .nav-logo-container {
        position: unset;
        left: 0%;
        top: 0%;
        transform: translate(0, 0);
      }
      .nav-links {
        display: flex !important;
      }
      .hamburger-menu-container {
        display: none;
      }
      .hamburger-menu-container-open {
        display: none;
      }
      .nav-button {
        margin: 0 0 0 15px;
        span {
          display: block;
        }
        i {
          display: none;
        }
      }
    }
  }
}

@media screen and (min-width: $LG) {
  .container {
    .header {
      padding: 0 150px;
    }
  }
}

@keyframes navbar-divider {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes navbar-divider-out {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

@keyframes close-menu {
  0% {
    padding: 0;
    width: 0px;
  }

  100% {
    padding: 0 10px;
    width: 125px !important;
  }
}
</style>
