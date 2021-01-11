<template>
    <li class="project">
        <h2 class="project-title">{{project.title}}
            <span class="links">
                <a v-if="project.links.github !== ''" :href="project.links.github" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
                <a v-if="project.links.link !== ''" :href="project.links.link" target="_blank" rel="noopener noreferrer"><i class="fa fa-external-link-square" aria-hidden="true"></i></a>
            </span>
        </h2>
        <ul class="project-skillset">
            <li class="skill" v-for="(skill, index) in project.skills" :key="'skill-'+index">{{skill}}</li>
        </ul>
        <div class="project-content">
            <div class="project-content-cropper">
                <img :src="project.image[0]" :alt="project.title" class="project-content-cropper-image">
                <img v-if="project.image[1]" :src="project.image[1]" :alt="project.title" class="project-content-cropper-image">
            </div>
            <p class="project-content-description">{{project.description}}</p>
        </div>        
    </li>
</template>

<script>
export default {
    name:"ProjectPreview",
    props: {
        project: {
            title: String,
            links: Array,
            skills: Array,
            image: String,
            description: String
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/_shared.scss';

.project {
    padding: 20px 0;
    border-bottom: 1px solid $my-white;
    #{&}-title {
        display: flex;
        justify-content: space-between;
        .links {
            a:nth-child(1){
                margin-right: 10px;
            }
        }
    }
    #{&}-skillset {
        display: flex;
        margin-bottom:20px;
        .skill {
            font-family: 'Inconsolata', monospace;
            padding-right: 10px;
        }
    }
    #{&}-content {

        &-cropper {
            display: flex;
            width: 100%;
            padding-top: $ratio-16-9;
            position: relative;
            &-image {
                position: absolute;
                top:0;
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
                transition: opacity 0.3s ease-in-out;
                &:nth-child(2) {
                    opacity: 0;
                }
                &:hover {
                    &:nth-child(2) {
                        opacity: 1;
                    }
                }
            }
            }
            &-description {
                padding: 20px 0 0 0;
        }
    }
}

@media screen and (min-width: $MD) {
    .project-content {
        display:flex;
        &-cropper {
            flex-basis: 66.66%;
            padding-top: $ratio-16-9-flex-2-3 !important;
        }
        &-description {
            flex-basis: 33.34%;
            padding: 0 0 0 20px !important;
        }
    }
}
</style>