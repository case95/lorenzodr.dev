<template>
    <button class="button" :data-child="child">{{child}}</button>
</template>

<script>
export default {
    name:"Button",
    props:{
    child:String,
  }
}
</script>

<style scoped lang="scss">
    @import '@/assets/_shared.scss';

    .button {
        cursor: pointer;
        padding: 10px;
        background-color: transparent;
        color: $my-acqua;
        font-family: 'Inconsolata', monospace;
        font-weight: 600;
        font-size: $button;
        max-width: 100px;
        border: $my-acqua 1px solid;
        border-radius: 5px;
        @include transition-button(color);
        //transition: color 0.15s ease-in;
        @include transition-button(border);
        // transition: border 0.15s ease-in;
        position:relative;
        &:hover {
            color: $my-white;
            border-color: $my-white;
            &::after {
                opacity: 1;
                border: $my-acqua 1px solid;
                color: $my-acqua;
                animation: neon-bzz 3s forwards infinite;
            }
        }
        &::after {
            content: attr(data-child);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: $my-acqua 1px solid;
            color: $my-acqua;
            border-radius: 5px;
            opacity: 0;
            @include transition-button(opacity);
            // transition: opacity 0.15s ease-in; 
            animation: none;
            filter: blur(2px) brightness(150%);
        }
    }


    @keyframes neon-bzz {
        0% {
            opacity: 1;
        }
        20% {
            opacity: 0.7;
        }
        22% {
            opacity: 0.4;
            filter: blur(1px) brightness(100%);
        }
        24% {
            opacity: 0.7;
            filter: blur(2px) brightness(150%);
        }
        60% {
            opacity: 1;
        }
        61% {
            opacity: 0.4;
            filter: blur(1px) brightness(100%);
        }
        62% {
            opacity: 1;
            filter: blur(2px) brightness(150%);
        }
        70% {
            opacity: 1;
        }
        71% {
            opacity: 0.4;
            filter: blur(1px);
        }
        72% {
            opacity: 1;
            filter: blur(2px) brightness(150%)
        }
    }
    
    

</style>