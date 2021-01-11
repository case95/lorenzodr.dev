<template>
    <div class="projects" id="projects">
        <SectionTitle title="Projects" />
        <ProjectPreview 
        :v-if="placeholder.length > 0 "
        v-for="(project, index) in placeholder" 
        :key="'project'+index"
        :project="project"
        class="preview"
        />
    </div>
</template>

<script>
import SectionTitle from '../customs/SectionTitle'
import ProjectPreview from '../customs/ProjectPreview'

export default {
    name: "Projects",
    components:{
        SectionTitle,
        ProjectPreview
    },
    data:function () {
        return {
            placeholder:[
                {
                    title:"Aeolians",
                    links:{link:"https://www.aeoliansholiday.com/", github:"https://github.com/case95/aeolians"},
                    skills:["React.js", "Redux", "Firebase"],
                    image:["/img/projects/aeolians_1.png", "/img/projects/aeolians_2.png"],
                    description:"Aeolians is an italian rental company for holiday houses in Eolie Islands. \nMy work has been to design the visual identity of the website and develope it in React.js, connecting the website to a firebase database and develop a custom CMS to allow the business owner to manage the apartments informations like descriptions, photos, services, booking links. \nThe main challenge has been understanding and working with a NOSQL database and manage the authentication on Firebase rules.",
                },
                {
                    title:"The Italian Job",
                    links:{link:"", github:"https://github.com/case95/myjobapp"},
                    skills:["React.js", "Redux", "Node.js", "Express", "JWT token"],
                    image:["/img/projects/theitalianjob_1.png", "/img/projects/theitalianjob_2.png"],
                    description:"TheItalianJob project is a platform thought for italian people linving abroad who are looking for other italian workers. \nTIt has born looking in italian groups of people living abroad: there's an high request of workers with the same backgound. It features an authentication system to create your profile so the employers can search for their best fit. \nIt is in development phase and covers some full-stack development skills, an intresting challenge for myself.",
                },
                {
                    title:"Portfolio 1.0.0",
                    links:{link:"", github:"https://github.com/case95/lorenzodr.dev"},
                    skills:["Vue.js", "SCSS"],
                    image:["/img/projects/lorenzodr_1.png", "/img/projects/lorenzodr_2.png"],
                    description:"This portfolio has been a fun and easy project that allowed me to focus on learning the basicts of Vue.js framework, SVG animations and move my first steps with SCSS functions, mixins and variables.",
                },
            ]
        }
    },
    
}
</script>

<style scoped lang="scss">
@import '@/assets/_shared.scss';
.projects{
    // min-height: 100vh;
    padding: 80px 0;
    .preview{
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