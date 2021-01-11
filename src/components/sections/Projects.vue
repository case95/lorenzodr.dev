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
                    skills:["React", "Redux", "Firebase"],
                    image:["/img/projects/aeolians_1.png", "/img/projects/aeolians_2.png"],
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
                },
                {
                    title:"The Italian Job",
                    links:{link:"", github:"https://github.com/case95/myjobapp"},
                    skills:["React", "Redux", "Firebase"],
                    image:["/img/projects/theitalianjob_1.png", "/img/projects/theitalianjob_2.png"],
                    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
                },
                // {
                //     title:"Quello",
                //     links:{link:"www.google.com", github:""},
                //     skills:["React", "Redux", "Firebase"],
                //     image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcf94f19-a227-40dc-a067-87032901bef8/de3x91g-6a7f4f52-2fed-493b-aba0-efe32fcaf186.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmNmOTRmMTktYTIyNy00MGRjLWEwNjctODcwMzI5MDFiZWY4XC9kZTN4OTFnLTZhN2Y0ZjUyLTJmZWQtNDkzYi1hYmEwLWVmZTMyZmNhZjE4Ni5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.FdKTHOTtvXnjcfSau_HxWsMbiLJkLd1-AfchjDVj_e4",
                //     description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
                // }
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
    .preview:last-child {
        border-bottom: none !important;
    }
}

</style>