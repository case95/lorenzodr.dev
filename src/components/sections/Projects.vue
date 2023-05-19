<template>
  <div class="projects" id="projects">
    <SectionTitle title="Projects" />
    <ProjectPreview
      :v-if="placeholder.length > 0"
      v-for="(project, index) in placeholder"
      :key="'project' + index"
      :project="project"
      class="preview"
    />
  </div>
</template>

<script>
import SectionTitle from "../customs/SectionTitle.vue";
import ProjectPreview from "../customs/ProjectPreview.vue";

export default {
  name: "Projects",
  components: {
    SectionTitle,
    ProjectPreview,
  },
  data: function () {
    return {
      placeholder: [
        {
          id: "PORTFOLIO_V2",
          title: "Portfolio v2",
          links: {
            link: "",
            github: "https://github.com/case95/lorenzodr.dev",
          },
          skills: ["Vue 3", "Astro.js"],
          image: [
            "/img/projects/portfolio_v2_1.png",
            "/img/projects/portfolio_v2_2.png",
          ],
          description: `The previous version of this website was slow, very slow.
          
As I've worked with Next 13, my interest for SSR frameworks grew up and I took the chance to migrate my portfolio from SPA to SSR while studying Astro.js.
To minimize possible version issues the migration process involved a first migration to Vue 2 to Vue 3 and a subsequent migration to Astro.js.

This allowed the website DOMContentLoaded to shrink from 4-5 seconds to less than 0.200ms.`,
        },
        {
          id: "GO_NPM",
          title: "RSG UI Packge",
          skills: [
            "React",
            "Typescript",
            "Chakra UI",
            "Formik",
            "GitHub Actions",
            "GitHub Packages",
            "Rollup",
          ],
          links: { link: "", github: "" },
          image: ["/img/projects/npm.png"],
          description: `In order to maintain a uniform and harmonious UI along with synchronized functionalities across two of our major web applications - GoMarkets Invoicing Tool and GoMarkets Customer Service (CS) Tool, I created a proprietary NPM package. 
\nThis was as an essential step as we started to incorporate new developers with no prior Front End experience. 
To facilitate their initiation into the development process and to ensure that the aesthetics and operability of our web apps remained consistent, I've included all the reusable components developed following the ATOMIC design system. 
\nThis package was hosted on GitHub Packages and was set to be private for our organization.`,
        },
        {
          id: "GO_CS",
          title: "GoMarkets CS Tool",
          skills: [
            "React",
            "Typescript",
            "Chakra UI",
            "RESTfull API",
            "SWR",
            "Chart.js",
            "React-DnD",
            "GitHub Actions",
            "Figma",
          ],
          links: { link: "", github: "" },
          image: [
            "/img/projects/application_manager/application_manager_1.png",
            "/img/projects/application_manager/application_manager_2.png",
            "/img/projects/application_manager/application_manager_3.png",
            "/img/projects/application_manager/application_manager_4.png",
            "/img/projects/application_manager/application_manager_5.png",
            "/img/projects/application_manager/application_manager_6.png",
            "/img/projects/application_manager/application_manager_7.png",
            "/img/projects/application_manager/application_manager_8.png",
            "/img/projects/application_manager/application_manager_9.png",
            "/img/projects/application_manager/application_manager_10.png",
            "/img/projects/application_manager/application_manager_11.png",
            "/img/projects/application_manager/application_manager_12.png",
            "/img/projects/application_manager/application_manager_13.png",
            "/img/projects/application_manager/application_manager_14.png",
            "/img/projects/application_manager/application_manager_15.png",
            "/img/projects/application_manager/application_manager_16.png",
          ],
          description: `The Application Manager Tool is an internal app used to manage new clients build on top of the RSG proprietary NPM package.
I had the responsability of picking the Front End tech-stack, create the design system and develop the web app.

The Application Manager Tool allows to monitor, update, approve or decline new client applications and keeps track of all historical subscription data (legislation, location, status and much more). 

The web app dashboard allows to create a personalized experience through dag and dropping a series of customizable widgets.
This decision was made to allow every employee to pick autonomously the amount, type and layout of data depending on his/her task and maximize their productivity removing any possible barrier in their app journey.`,
        },
        {
          id: "GO_INVOICE",
          title: "GoMarkets Invoicing Tool",
          skills: [
            "React",
            "Typescript",
            "Chakra UI",
            "RESTfull API",
            "SWR",
            "GitHub Actions",
            "Figma",
          ],
          links: { link: "", github: "" },
          image: [
            "/img/projects/invoice_tool/invoice_tool_1.png",
            "/img/projects/invoice_tool/invoice_tool_2.png",
            "/img/projects/invoice_tool/invoice_tool_3.png",
            "/img/projects/invoice_tool/invoice_tool_4.png",
            "/img/projects/invoice_tool/invoice_tool_5.png",
            "/img/projects/invoice_tool/invoice_tool_6.png",
            "/img/projects/invoice_tool/invoice_tool_7.png",
            "/img/projects/invoice_tool/invoice_tool_8.png",
            "/img/projects/invoice_tool/invoice_tool_9.png",
            "/img/projects/invoice_tool/invoice_tool_10.png",
            "/img/projects/invoice_tool/invoice_tool_11.png",
          ],
          description: `The Invoicing Tool is an internal tool to send invoices to clients and partners.
I had the responsability of picking the Front End tech-stack, create the design system and develop the web app.

Despite the project's relatively brief duration of a few months, it presented a challenge: simultaneously developing three distinct applications, each necessitating similar UI functions and a unified design system across different repositories.

This predicament led to the creation of the proprietary the RSG proprietary NPM package, a solution that ensured consistency across all applications and ease the job of other developers.`,
        },
        {
          id: "HP",
          title: "Helppay Headless Website",
          links: { link: "https://helppay.com.au/", github: "" },
          skills: ["Vue", "Nuxt", "Acoustic Content CMS", "Node.js"],
          image: [
            "/img/projects/helppay/helppay_hero.png",
            "/img/projects/helppay/helppay_section.png",
          ],
          description:
            "The headless website has been developed as the main point of contact for the acquisition of new clients.\nHelpPay is  a mobile and web app for turning your bills into links to share with the people that can help you pay.",
        },
        {
          id: "DEDIT",
          title: "Dedit (currently in testing)",
          links: { link: "http://dev.dedit.io/signup", github: "" },
          skills: [
            "React",
            "Typescript",
            "Styled Components",
            "Encryption / Decryption",
          ],
          image: [
            "/img/projects/Dedit_notarizations.png",
            "/img/projects/Dedit_notarization.png",
          ],
          description:
            "Dedit is a Blockchain Italia product and it consists in a notarization app that allows the user to notarize, store and encrypt almost any kind of file. \nIts first version has been realized in Angular2 and my role was to migrate the old front-end to a more user-friendly and functional one developed in React-Typescript. \nThe application currently works but it's still in the testing phase.",
        },
        {
          id: "AEOL",
          title: "Aeolians (decommissioned)",
          links: {
            link: "https://www.aeoliansholiday.com/",
            github: "https://github.com/case95/aeolians",
          },
          skills: ["React", "Redux", "Firebase", "Firebase-auth"],
          image: [
            "/img/projects/aeolians_1.png",
            "/img/projects/aeolians_2.png",
          ],
          description: `Aeolians is an italian rental company for holiday houses in Eolie Islands. \nMy work has been to design the visual identity of the website and develope it in React.js, connecting the website to a Firebase database and develop a little CMS to allow the business owner to manage the apartments informations like descriptions, photos, services, booking links.
The main challenge has been understanding and working with a noSQL database and manage the authentication on Firebase rules.`,
        },
        {
          id: "THE_IT_JOB",
          title: "The Italian Job",
          links: { link: "", github: "https://github.com/case95/myjobapp" },
          skills: ["React", "Redux", "Node", "Express", "JWT-auth"],
          image: [
            "/img/projects/TheItalianJob_1.png",
            "/img/projects/TheItalianJob_2.png",
          ],
          description: `TheItalianJob project is a platform thought for italian people linving abroad who are looking for other italian workers. 
This project has born looking in italian groups of people living abroad: there's an high request of workers with the same backgound.
It features an authentication system to create your profile so the employers can search for their best fit. 
It is in development phase and covers some full-stack development skills, an intresting challenge for myself.`,
        },
        {
          id: "PORTFOLIO",
          title: "Portfolio v1",
          links: {
            link: "",
            github: "https://github.com/case95/lorenzodr.dev",
          },
          skills: ["Vue", "SCSS"],
          image: [
            "/img/projects/portfolio_v1_1.png",
            "/img/projects/portfolio_v1_2.png",
          ],
          description:
            "This portfolio has been a fun and easy project that allowed me to focus on learning the basics of Vue 2 framework, SVG animations and move my first steps with SCSS functions, mixins and variables.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/_shared.scss";
.projects {
  // min-height: 100vh;
  padding: 80px 0;
  .preview {
    &:last-child {
      border-bottom: none !important;
      padding-bottom: 0;
    }
    &:nth-child(2) {
      padding-top: 0 !important;
    }
  }
}
</style>
