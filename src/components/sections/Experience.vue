<template>
  <div class="experience" id="experience">
    <SectionTitle
      title="My Professional Journey"
      subtitle="(Click on job titles to discover more)"
    />
    <ExperiencesAccordion
      :v-if="placeholder.length > 0"
      v-for="(experience, index) in placeholder"
      :id="index"
      :key="'experience' + index"
      :experience="experience"
    />
    <div class="button-container">
      <a
        href="https://drive.google.com/uc?export=download&id=1MMYxx23ab3xmWlfqkVtdhe57srldX5lo"
        download="Lorenzo Del Rosario Curriculum"
      >
        <Button child="Download Resume" />
      </a>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../customs/SectionTitle";
import Button from "../customs/Button";
import ExperiencesAccordion from "../customs/ExperiencesAccordion";

export default {
  name: "Experience",
  components: {
    SectionTitle,
    Button,
    ExperiencesAccordion,
  },
  data: function () {
    return {
      placeholder: [
        {
          title: "Software Engineer",
          institution: "Sportsbet",
          date: "Dec 2022 - Now",
          image: "/img/experience/sportsbet-logo.png",
          description:
            "This is the biggest company I've worked so far. I'm facing a lot of new challenges as I'm moving form a Front-End engineer to a Full-Stack Engineer role. \nThe Front-End stack mainly uses React.js, React Native and the old Redux (2015 version, Redux Toolkid and nice hooks with automated typings). \nThe Back-End varies across multiple languages (TS, Java, Kotlin, Python) and is fully based on AWS. It's a great experience to get comfortable with cloud-computing technologies.",
        },
        {
          title: "React Developer",
          institution: "GoMarkets",
          date: "Mar 2022 - Dec 2022",
          image: "/img/experience/GO-logo.png",
          description:
            "Development of various tools for internal monitoring & auditing of the business, invoicing tools and optimized performances and accessibility on client side web-apps.",
        },
        {
          title: "React Developer",
          institution: "Blockchain Italia",
          date: "Mar 2021 - Nov 2022",
          image: "/img/experience/BCI-logo.png",
          description:
            "I'm quite fond of this blockchain startup based in Milan. Here I've worked autonomously on the migration of a web-app front-end from Angular 2 to React.js with Typescript. It has been a bit of a challenge but I've managed to learn a lot of new things such as Styled Components and Typescript. I have then worked on the front-end a of a dApp using Flutter. I've decided to get involved in this Flutter project to learn more about strongly typed languages as Dart is very similar to Java and to directly approach OOP while discovering the mobile development. Three birds with one stone!",
        },
        {
          title: "Front-end Apprenticeship",
          institution: "Zucchetti",
          date: "Mar 2021 - Aug 2021",
          image: "/img/experience/zucchetti-logo.png",
          description:
            "As a Front-end apprentice in a big company I had the possibility to approach to Agile mindset and SCRUM methodology. I've mainly worked on bugfixing, developement of new features for the company products and lately I've developed a small company tool to safely interface with spreadsheets using a simple Node.js back-end a React.js front-end with Tailwind.",
        },
        {
          title: "Web Development Diploma",
          institution: "Holmesglen Institute",
          date: "Jul 2020 - Jun 2021",
          image: "/img/experience/holmesglen-logo.png",
          description:
            "The diploma of Web Development at Holmesglen covered in a very practical way a wide variety of Front-end and Back-end topics.\nIn this course I've learned many new skills, especially in Front-end development and made me face for the first time with the Back-end development.\nSome Front-end skills I learned are: React.js, Vue.js, Object Orientated Programming Principles and Techniques, Asynchronous Programming, TypeScript, Git, Scss & Sass, Webpack, Babel.\nSome Back-end topics I had to work with are: Node.js, npm, Express.js, MongoDB, MySQL & Firebase, Restful API Design, Authentications & Authorisation.",
        },
        {
          title: "Graphic and web design intern",
          institution: "Bloo Agency",
          date: "Jul 2019 - Nov 2019",
          image: "/img/experience/bloo-logo.png",
          description:
            "As a graphic and web design intern at Bloo Agency where I've experienced working in a studio environment and scheduling work duties day by day.",
        },
        {
          title: "Web Design Certificate",
          institution: "Infobasic",
          date: "Oct 2018 - Aug 2019",
          image: "/img/experience/infobasic-logo.png",
          description:
            "The web design certificate at Infobasic is the course that allowed me to move my very first steps in the web development. Here I've learned HTML and CSS, the Bootstrap library and the Wordpres CMS.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_shared.scss";

.experience {
  // min-height: 100vh;
  padding: 80px 0;
  .button-container {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
