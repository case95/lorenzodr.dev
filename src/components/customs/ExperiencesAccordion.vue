<template>
    <div class="accordion">
        <div class="accordion-image">
            <img :src='experience.image' :alt="experience.title" class="accordion-image-content">
        </div>
        <div class="accordion-content">
            <p>
                <span class="accordion-content-date"> {{experience.date}}</span><br>
                <span class="accordion-content-institution">{{experience.institution}} </span>
            </p>
            <h2 class="accordion-content-title" v-on:click="openAccordion(id)">{{experience.title}} <span class="arrow" :id="'arrow-'+id">▹</span></h2>
            <p class="accordion-content-text" :id="'accordion-text-'+id">{{experience.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'ExperiencesAccordion',
    props: {
        experience: {
            title: String,
            institution: String,
            date: String,
            image: String,
            description: String,
        },
        id: Number,
    },
    methods:{
        openAccordion(id){
            const text = document.getElementById(`accordion-text-${id}`)
            const arrow = document.getElementById(`arrow-${id}`)
            text.classList.toggle("accordion-content-text-open")
            arrow.classList.toggle("arrow-down")
        }
    }
}
</script>

<style scoped lang='scss'>
@import '@/assets/_shared.scss';

    .accordion {
        display:flex;
        margin-bottom:30px;
        #{&}-image {
            height:75px;
            width:75px;
            min-width: 75px;
            border-radius: 50%;
            overflow: hidden;
            &-content{
                object-fit: cover;
                object-position: center;
                height: 100%;
                width: 100%;
            }
        }
        #{&}-content{
            padding-left: 20px;
            &:hover .accordion-content-title::before{
                width:calc(100% + 15px) !important;
            }
            &-date {
                text-transform: capitalize;
                font-family: 'Inconsolata', monospace;
            }
            &-institution {
                text-transform: capitalize;
                font-family: 'Inconsolata', monospace;
            }
            &-title{
                cursor: pointer;
                text-transform: capitalize;
                position: relative;
                margin-right:10px;
                font-size: clamp(16px, 5vw, 22px);
                display: inline-block;
                &:hover .arrow{
                transform: rotate(90deg);
            }
                &::before{
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    height: 1px;
                    width:0;
                    background-color: $my-acqua;
                    @include transition-experience(width);
                }
            }
            .arrow{
                display: inline-block;
                @include transition-experience(transform);
                &-down{
                    transform: rotate(90deg);
                }            
            }
            &-text{
                margin-top: 10px;
                overflow: hidden;
                height:0px;
                @include transition-experience(height);
                &-open{
                    height: 100%;
                    white-space: pre-wrap;
                }
            }
        }
    }
</style>