<template>
    <div class="experience" id="experience">
        <SectionTitle title="Experience" />

        <ExperiencesAccordion 
        :v-if="placeholder.length > 0 "
        v-for="(experience, index) in placeholder" 
        :id="index"
        :key="'experience'+index"
        :experience="experience"
        />
        
        
        <div class="button-container">
            <a href="/img/download/Lorenzo Del Rosario's Curriculum.pdf" download> <Button child="Download Resume"/> </a>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../customs/SectionTitle'
import Button from '../customs/Button'
import ExperiencesAccordion from '../customs/ExperiencesAccordion'

export default {
    name: "Experience",
    components:{
        SectionTitle,
        Button,
        ExperiencesAccordion
    },
    data:function () {
        return {
            placeholder:[
                {
                    title:"Web Development Diploma",
                    institution: "Holmesglen Institute",
                    date: "Jul 2020 - Now",
                    image:"/img/experience/holmesglen-logo.png",
                    description:"The diploma of Web Development at Holmesglen covered in a very practical way a wide variety of Front-end and Back-end topics.\nIn this course I've learned many new skills, especially in Front-end development and made me face for the first time with the Back-end development.\nSome Front-end skills I learned are: React.js, Vue.js, Object Orientated Programming Principles and Techniques, Asynchronous Programming, TypeScript, Git, Scss & Sass, Webpack, Babel.\nSome Back-end topics I had to work with are: Node.js, npm, Express.js, MongoDB, MySQL & Firebase, Restful API Design, Authentications & Authorisation."
                },
                {
                    title:"Graphic and web design intern",
                    institution: "Bloo Agency",
                    date: "Jul 2019 - Nov 2019",
                    image:"/img/experience/bloo-logo.png",
                    description:"As a graphic and web design intern at Bloo Agency where I've experienced working in a studio environment and scheduling work duties day by day."
                },
                {
                    title:"Web Design Certificate",
                    institution: "Infobasic",
                    date: "Oct 2018 - Aug 2019",
                    image:"/img/experience/infobasic-logo.png",
                    description:"The web design certificate at Infobasic is the course that allowed me to move my very first steps in the web development. Here I've learned HTML and CSS, the Bootstrap library and the Wordpres CMS."
                },
            ]
        }
    },
    
}
</script>

<style scoped lang="scss">

    @import '@/assets/_shared.scss';

    .experience{
        // min-height: 100vh;
        padding: 80px 0;
        .button-container {
            margin-top: 20px;
            text-align: center;
        }
    }

</style>