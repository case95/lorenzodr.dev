<template>
  <div class="about" id="about">
    <SectionTitle title="About" />
    <div class="about-content">
      <div class="bio">
        <p class="bio-text">
          Hello, I'm Lorenzo, an Italian-Australian software engineer
          specializing in frontend development, and currently working my way to
          be a fullstack developer.<br /><br />
          Since a young age I've always been fascinated by the creative process:
          I was always drawing, painting or 3D modeling. This passion moved me
          to get a bachelor in product design during which I started thinking
          about web development. Upon completing my degree, I dove into web
          development in 2019. While pursuing a Web Development Diploma at
          Holmesglen in Melbourne, I joined and formed groups of developers,
          enhancing our skills through regular discussions on web technologies.
          <br /><br />
          In my free time I'm currently working on personal projects.<b
            >#alwayslearning</b
          >
        </p>
        <div class="skillset">
          <p class="skillset-introduction">
            My skillset is composed by:<br /><br />
          </p>
          <div class="skillset-tables">
            <table>
              <thead>
                <tr>
                  <th>Development</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>(S)CSS</td>
                  <td>Node.js</td>
                </tr>
                <tr>
                  <td>React</td>
                  <td>React Native</td>
                  <td>Next JS</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>TypeScript</td>
                  <td>Nuxt</td>
                </tr>
                <tr>
                  <td>AWS</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Design</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Photoshop</td>
                  <td>ATOMIC design</td>
                </tr>
                <tr>
                  <td>InDesign</td>
                </tr>
                <tr>
                  <td>Illustrator</td>
                </tr>
                <tr>
                  <td>Figma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="portrait">
        <div class="portrait-inner">
          <img
            src="/img/about/profile.png"
            alt="portrait"
            class="portrait-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../customs/SectionTitle.vue";

export default {
  name: "About",
  components: {
    SectionTitle,
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/_shared.scss";

.about {
  //min-height: 100vh;
  padding: 80px 0;
  #{&}-content {
    display: flex;
    flex-direction: column;
    .bio {
      display: inline-block;
      order: 2;
      &-text {
        margin-bottom: 20px;
      }
      .skillset {
        display: table;
        margin: 0 auto;
        &-introduction {
          display: inline-block;
        }
        &-tables {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          table {
            max-width: 300px;
            tr {
              &:nth-child(1) {
                td {
                  padding-top: 10px;
                }
              }
              th {
                display: table-header-group;
              }

              td {
                font-size: 16px;
                min-width: 100px;
                max-width: 120px;
                padding-bottom: 5px;
                &::before {
                  content: "▹ ";
                }
              }
            }

            &:nth-child(1) {
              padding: 0 0 10px 0;
              border-bottom: $my-white 1px solid;
            }
            &:nth-child(2) {
              padding: 10px 0 0 0;
            }
          }
        }
      }
    }
    .portrait {
      width: 80%;
      padding-top: 80%;
      order: 1;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      margin: 0 auto 20px auto;
      min-width: 230px;
      min-height: 230px;
      &-image {
        top: 0;
        position: absolute;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        @include transition-experience(filter);
        filter: grayscale(100);
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
}

@media screen and (min-width: $SM) {
  .about {
    padding: 80px 0;
    #{&}-content {
      display: flex;
      flex-direction: column;
      .bio {
        display: inline-block;
        order: 2;
      }
      .portrait {
        width: 50%;
        padding-top: 50%;
        order: 1;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin: 0 auto 20px auto;
        &-image {
          top: 0;
          position: absolute;
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: $MD) {
  .about {
    padding: 80px 0;
    #{&}-content {
      display: flex;
      flex-direction: row;
      .bio {
        display: inline-block;
        flex: 2;
        order: 1;
        padding-right: 20px;
        .skillset {
          margin: 0;
        }
      }
      .portrait {
        flex: 1;
        order: 2;
        margin: 10% 0 auto 0;
        padding-top: 0;
        &-inner {
          padding-top: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: $LG) {
  .about {
    #{&}-content {
      .bio {
        .skillset-tables {
          flex-direction: row !important;
          table {
            max-width: initial !important;
            th {
              display: table-header-group;
            }
            td {
              font-size: 14px !important;
              min-width: 100px !important;
              max-width: 140px !important;
              &::before {
                content: "▹ ";
              }
            }
            &:nth-child(1) {
              padding: 0 10px 0 0 !important;
              border-bottom: none !important;
              border-right: $my-white 1px solid;
            }
            &:nth-child(2) {
              padding: 0 0 0 10px !important;
            }
          }
        }
      }
      .portrait {
        margin: auto 0;
        padding-top: 0;
      }
    }
  }
}
</style>
