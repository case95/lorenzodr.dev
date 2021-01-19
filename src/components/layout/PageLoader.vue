<template>
    <div class="loader" id="loader">
        <div class="logo-container">
            <div class="circle-container">
                <svg class="logo-cropper" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 70 70">
                    <circle cx="30" cy="30" r="35" stroke="white" stroke-width="5" fill="transparent" />
                    <g class='head'>
                        <path class="cls-1" d="M44.88,34.47c0-.29,0-.59,0-.88a11,11,0,0,0-17.65-8.85,12.85,12.85,0,0,0-8.93-3.58A12.59,12.59,0,0,0,6.09,36.57,7.9,7.9,0,0,0,0,44.25H3.49a4.4,4.4,0,0,1,4.4-4.4l.4,0,.38,0a11.17,11.17,0,0,1,3,.88,43,43,0,0,1-1.86-3.94,9.06,9.06,0,0,1,8.53-12.2,9.25,9.25,0,0,1,7.38,3.6L27,29.9l1.42-1.5a7.55,7.55,0,0,1,13,5.19c0,.16,0,.32,0,.48a4.33,4.33,0,0,1-1.59,2.83,4.39,4.39,0,0,1,2.65.23,7.21,7.21,0,0,1,4.05,6.46q0,.29,0,.57l3.48.28c0-.28,0-.56,0-.84A10.71,10.71,0,0,0,44.88,34.47Z"/>
                        <circle class="cls-1" cx="15.96" cy="45" r="2.28"/>
                        <circle class="cls-1" cx="34.17" cy="45" r="2.28"/>
                    </g>
                    <g class='lightbulb'>
                        <path id='lightbulb' class="lightbulb-outline" d="M25,0H25a7.23,7.23,0,0,0-5.47,11.85A7,7,0,0,1,20.68,14c.26,1,.32,1.38.32,1.38h0l.05.49v2l0,.3c.16,1,1.16,2.71,3.88,2.78H25c2.72-.07,3.71-1.78,3.87-2.78v-2.2L29,15.4s.05-.32.33-1.43a7,7,0,0,1,1.16-2.08A7.23,7.23,0,0,0,25,0Zm0,19c-1.88,0-2.07-1.2-2.07-1.2V16.11h4.14v1.73S26.88,19,25,19Zm4-8.37a9.08,9.08,0,0,0-1.54,2.84c-.34,1.35-.37,1.63-.37,1.63l0,.22H22.89l0-.22s0-.28-.37-1.63A9.09,9.09,0,0,0,21,10.68a5.36,5.36,0,0,1,4-8.8h0a5.36,5.36,0,0,1,4,8.8Z"/>
                        <path class="cls-2 light" d="M22.89,15.36l0-.22s0-.28-.37-1.63A9.09,9.09,0,0,0,21,10.68a5.36,5.36,0,0,1,4-8.8h0a5.36,5.36,0,0,1,4,8.8,9.08,9.08,0,0,0-1.54,2.84c-.34,1.35-.37,1.63-.37,1.63l0,.22"/>
                        
                    </g>
                </svg>
                <svg viewBox="-10 -7 70 70" class="light-glow-container">
                    <path class="light-glow" d="M22.89,15.36l0-.22s0-.28-.37-1.63A9.09,9.09,0,0,0,21,10.68a5.36,5.36,0,0,1,4-8.8h0a5.36,5.36,0,0,1,4,8.8,9.08,9.08,0,0,0-1.54,2.84c-.34,1.35-.37,1.63-.37,1.63l0,.22"/>
                </svg>
            </div>
            
            <div class="logotype-container">
            <svg class="logotype" id="logotype"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.31 5.91" ><title>Asset 14</title>
                <g class='ldr'>
                    <path class="cls-3" d="M.52.13v5.6H.13V.13Z"/>
                    <path class="cls-3" d="M1.43,3.75a2,2,0,0,1,2-2.06,2,2,0,0,1,2,2.06,1.93,1.93,0,0,1-2,2A1.93,1.93,0,0,1,1.43,3.75Zm3.63,0A1.6,1.6,0,0,0,3.44,2.07,1.6,1.6,0,0,0,1.81,3.75,1.56,1.56,0,0,0,3.44,5.39,1.56,1.56,0,0,0,5.06,3.75Z"/>
                    <path class="cls-3" d="M6.72,1.77l0,.7A1.39,1.39,0,0,1,8,1.73,1.54,1.54,0,0,1,8.89,2l-.18.32A1.27,1.27,0,0,0,8,2.1a1.31,1.31,0,0,0-1.3,1.32v2.3H6.35V1.77Z"/>
                    <path class="cls-3" d="M9.26,3.75a2,2,0,0,1,2-2,1.85,1.85,0,0,1,2,2.22H9.66a1.55,1.55,0,0,0,1.61,1.46,1.86,1.86,0,0,0,1.42-.6L13,5a2.17,2.17,0,0,1-1.7.76A1.94,1.94,0,0,1,9.26,3.75Zm3.61-.16a1.45,1.45,0,0,0-1.6-1.52A1.58,1.58,0,0,0,9.66,3.59Z"/>
                    <path class="cls-3" d="M14.62,1.77v.7A1.57,1.57,0,0,1,16,1.7a1.65,1.65,0,0,1,1.78,1.74V5.72h-.39V3.45A1.27,1.27,0,0,0,16,2.08a1.37,1.37,0,0,0-1.38,1.44v2.2h-.39V1.77Z"/>
                    <path class="cls-3" d="M18.72,1.77h3v.15L19.2,5.35h2.49v.37h-3.1V5.59l2.52-3.46H18.72Z"/>
                    <path class="cls-3" d="M22.33,3.75a2,2,0,1,1,4,0,2,2,0,1,1-4,0Zm3.63,0a1.62,1.62,0,1,0-3.25,0,1.62,1.62,0,1,0,3.25,0Z"/>
                    <path class="cls-3" d="M33.23.13v5.6h-.38V4.85a1.86,1.86,0,0,1-1.65.94,1.89,1.89,0,0,1-2-2,1.9,1.9,0,0,1,2-2,1.75,1.75,0,0,1,1.64.93V.13ZM29.61,3.75A1.53,1.53,0,0,0,31.23,5.4a1.58,1.58,0,0,0,1.62-1.66,1.58,1.58,0,0,0-1.62-1.66A1.53,1.53,0,0,0,29.61,3.75Z"/>
                    <path class="cls-3" d="M34.23,3.75a2,2,0,0,1,2-2,1.85,1.85,0,0,1,2,2.22H34.63a1.55,1.55,0,0,0,1.61,1.46,1.86,1.86,0,0,0,1.42-.6l.28.22a2.17,2.17,0,0,1-1.7.76A1.94,1.94,0,0,1,34.23,3.75Zm3.61-.16a1.45,1.45,0,0,0-1.6-1.52,1.58,1.58,0,0,0-1.61,1.52Z"/>
                    <path class="cls-3" d="M39.6.13v5.6H39.2V.13Z"/>
                    <path class="cls-3" d="M43.26,1.77l0,.7a1.39,1.39,0,0,1,1.31-.74,1.54,1.54,0,0,1,.85.23l-.18.32a1.27,1.27,0,0,0-.67-.18,1.31,1.31,0,0,0-1.3,1.32v2.3h-.39V1.77Z"/>
                    <path class="cls-3" d="M45.84,3.75a2,2,0,1,1,4,0,2,2,0,1,1-4,0Zm3.63,0a1.62,1.62,0,1,0-3.25,0,1.62,1.62,0,1,0,3.25,0Z"/>
                    <path class="cls-3" d="M53.48,2.49a1.69,1.69,0,0,0-1.23-.42c-.62,0-1.21.22-1.19.73s.7.63,1.2.72c.7.12,1.67.24,1.63,1.16s-.93,1.1-1.62,1.1A2,2,0,0,1,50.53,5l.29-.26a1.75,1.75,0,0,0,1.45.67c.48,0,1.21-.13,1.23-.75s-.64-.68-1.29-.78-1.53-.27-1.54-1.06.77-1.11,1.57-1.1a2.07,2.07,0,0,1,1.47.53Z"/>
                    <path class="cls-3" d="M58.55,1.77V5.72h-.39V4.88a1.85,1.85,0,0,1-1.62.9,2,2,0,0,1-2-2,2,2,0,0,1,2-2,1.79,1.79,0,0,1,1.62.91V1.77Zm-3.62,2A1.59,1.59,0,0,0,56.55,5.4a1.65,1.65,0,0,0,0-3.3A1.58,1.58,0,0,0,54.93,3.75Z"/>
                    <path class="cls-3" d="M60,1.77l0,.7a1.39,1.39,0,0,1,1.31-.74,1.54,1.54,0,0,1,.85.23L62,2.28a1.27,1.27,0,0,0-.67-.18A1.31,1.31,0,0,0,60,3.42v2.3h-.39V1.77Z"/>
                    <path class="cls-3" d="M63.28.48a.32.32,0,0,1-.63,0A.32.32,0,0,1,63.28.48Zm-.52,1.27v4h.39v-4Z"/>
                    <path class="cls-3" d="M64.17,3.75a2,2,0,1,1,4,0,2,2,0,1,1-4,0Zm3.63,0a1.62,1.62,0,1,0-3.25,0,1.62,1.62,0,1,0,3.25,0Z"/>
                </g>
            </svg>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"PageLoader",
}
</script>

<style scoped lang='scss'>
    @import '@/assets/_shared.scss';
    
    .cls-1{fill:white;}
    .cls-2{fill:#efda18;}
    .cls-3{ stroke-miterlimit:10; stroke-width:0.1px;}

    .loader {
        position: fixed;
        display: flex;
        align-content: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9000;
        background-color: $my-black;
        transition: opacity 0.3s ease-in-out;;
    }

    .bg-dark {
        background-color: $my-black;
        height: 100vh;
        width: 100%;
        position: relative;
    }

    @media screen and (orientation: portrait) {
        .logo-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: unset !important;
            width: 80% !important;
        }
        
        .head {

            transform: translate(5px, 39px);
            animation: head 3s ease forwards, animation,
            bounce-head 1.5s ease-in-out forwards 3.5s infinite;
        }
        .lightbulb {
            transform: translate(5px, 5px);
            animation: bounce 1.5s ease-in-out forwards 3.5s infinite;
        }

        .lightbulb-outline {
            stroke-dasharray: 56.4px;
            stroke-dashoffset: 56.4px;
            stroke: white;
            stroke-width: 0.5px;
            fill: transparent;
            animation: lightbulb 2.5s ease forwards, fill 0.5s ease forwards 2.5s;
        }

        .light {
            opacity: 0;
            animation: lights-on 0.5s ease-in forwards 3s;
        }

        // .light-glow-container {
        //     width: 75% !important;
        //     position: absolute;
        //     top: 6% !important;
        //     opacity: 0;
        //     filter: blur(25px);
        //     animation: lights-on 0.5s ease-in forwards 3s,
        //     bounce-glow 1.5s ease-in-out forwards 3.5s infinite;
        //     mix-blend-mode: hard-light;
        // }

        .light-glow {
            top: 0;
            left: 0;
            fill: #efda18;
            opacity: 1;
        }

        .logotype {
            width: 100% !important;
            fill: transparent;
            stroke: white;
            animation: logotype-fill 0.5s ease-in forwards 3s;
            margin-top: 20px;
            overflow: visible;
        }
        .logotype-container {
            position: relative;
            width: 100%;
        }
        .logotype-container::after {
            position: absolute;
            width: 100% !important;
        }
    }

    @media screen and (orientation: landscape) {
        .circle-container {
            width: 70% !important;
            padding-top: 70% !important;
        }
        .logo-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: unset !important;
            width: unset !important;
        }
    }

    .logo-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .circle-container {
        width: 90%;
        height: 0;
        padding-top: 90%;
        text-align: center;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
    }

    .logo-cropper {
        width: 100%;
        background-color: $my-black;
        position: absolute;
        top: 0;
        left: 0;
    }
    .head {
        transform: translate(5px, 39px);
        animation: head 3s ease forwards, animation,
            bounce-head 1.5s ease-in-out forwards 3.5s infinite;
    }
    .lightbulb {
        transform: translate(5px, 5px);
        animation: bounce 1.5s ease-in-out forwards 3.5s infinite;
    }

    .lightbulb-outline {
        stroke-dasharray: 56.4px;
        stroke-dashoffset: 56.4px;
        stroke: white;
        stroke-width: 0.5px;
        fill: transparent;
        animation: lightbulb 2.5s ease forwards, fill 0.5s ease forwards 2.5s;
    }

    .light {
        opacity: 0;
        animation: lights-on 0.5s ease-in forwards 3s;
    }

    .light-glow-container {
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 6%);
        opacity: 0;
        filter: blur(25px);
        animation: lights-on 0.5s ease-in forwards 3s,
            bounce-glow 1.5s ease-in-out forwards 3.5s infinite;
        mix-blend-mode: hard-light;
    }

    .light-glow {
        fill: #efda18;
        opacity: 1;
    }

    @keyframes bounce-glow {
        0% {
            transform: translate(-50%, 6%);
            filter: blur(25px);
        }
        50% {
            transform: translate(-50%, 0);
            filter: blur(10px);
        }
        100% {
            transform: translate(-50%, 6%);
            filter: blur(25px);
        }
    }

    @keyframes lightbulb {
        0% {
            stroke-dashoffset: 56.4px;
        }
        70% {
            stroke-dashoffset: 56.4px;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes bounce {
        0% {
            transform: translate(5px, 5px);
        }
        50% {
            transform: translate(5px, 2px);
        }
        100% {
            transform: translate(5px, 5px);
        }
    }

    @keyframes head {
        0% {
            transform: translate(5px, 39px);
        }
        20% {
            transform: translate(5px, 39px);
        }
        100% {
            transform: translate(5px, 10px);
        }
    }

    @keyframes bounce-head {
        0% {
            transform: translate(5px, 10px);
        }
        50% {
            transform: translate(5px, 12px);
        }
        100% {
            transform: translate(5px, 10px);
        }
    }

    @keyframes fill {
        0% {
            fill: transparent;
        }
        100% {
            fill: white;
        }
    }

    @keyframes lights-on {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .logotype {
        fill: transparent;
        stroke: white;
        width: 100%;
        animation: logotype-fill 0.5s ease-in forwards 3s;
        position: relative;
        margin-top: 20px;
    }

    .logotype-container {
        position: relative;
    }

    .logotype-container::after {
        content: "";
        background-image: url("/logotype.svg");
        background-repeat: no-repeat;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 100%;
        opacity: 0;
        filter: blur(3px);
        animation: neon 0.5s ease-in forwards 3s, neon-bzz 6s forwards 3.5s infinite;
        z-index: -1;
    }

    #logotype path:nth-child(1) {
        stroke-dasharray: 11.98px;
        stroke-dashoffset: 11.98px;
        animation: letter-animation 1s ease-in-out forwards;
    }
    #logotype path:nth-child(2) {
        stroke-dasharray: 23.19px;
        stroke-dashoffset: 23.19px;
        animation: letter-animation 1s ease-in-out forwards 0.1s;
    }
    #logotype path:nth-child(3) {
        stroke-dasharray: 13.35px;
        stroke-dashoffset: 13.35px;
        animation: letter-animation 1s ease-in-out forwards 0.2s;
    }
    #logotype path:nth-child(4) {
        stroke-dasharray: 27.89px;
        stroke-dashoffset: 27.89px;
        animation: letter-animation 1s ease-in-out forwards 0.3s;
    }
    #logotype path:nth-child(5) {
        stroke-dasharray: 21.51px;
        stroke-dashoffset: 21.51px;
        animation: letter-animation 1s ease-in-out forwards 0.4s;
    }
    #logotype path:nth-child(6) {
        stroke-dasharray: 20.53px;
        stroke-dashoffset: 20.53px;
        animation: letter-animation 1s ease-in-out forwards 0.5s;
    }
    #logotype path:nth-child(7) {
        stroke-dasharray: 22.78px;
        stroke-dashoffset: 22.78px;
        animation: letter-animation 1s ease-in-out forwards 0.6s;
    }
    #logotype path:nth-child(8) {
        stroke-dasharray: 30.68px;
        stroke-dashoffset: 30.68px;
        animation: letter-animation 1s ease-in-out forwards 0.7s;
    }
    #logotype path:nth-child(9) {
        stroke-dasharray: 27.91px;
        stroke-dashoffset: 27.91px;
        animation: letter-animation 1s ease-in-out forwards 0.8s;
    }
    #logotype path:nth-child(10) {
        stroke-dasharray: 12px;
        stroke-dashoffset: 12px;
        animation: letter-animation 1s ease-in-out forwards 0.9s;
    }
    #logotype path:nth-child(11) {
        stroke-dasharray: 13.33px;
        stroke-dashoffset: 13.33px;
        animation: letter-animation 1s ease-in-out forwards 1s;
    }
    #logotype path:nth-child(12) {
        stroke-dasharray: 22.78px;
        stroke-dashoffset: 22.78px;
        animation: letter-animation 1s ease-in-out forwards 1.1s;
    }
    #logotype path:nth-child(13) {
        stroke-dasharray: 22.31px;
        stroke-dashoffset: 22.31px;
        animation: letter-animation 1s ease-in-out forwards 1.2s;
    }
    #logotype path:nth-child(14) {
        stroke-dasharray: 27.03px;
        stroke-dashoffset: 27.03px;
        animation: letter-animation 1s ease-in-out forwards 1.3s;
    }
    #logotype path:nth-child(15) {
        stroke-dasharray: 13.36px;
        stroke-dashoffset: 13.36px;
        animation: letter-animation 1s ease-in-out forwards 1.4s;
    }
    #logotype path:nth-child(16) {
        stroke-dasharray: 10.56px;
        stroke-dashoffset: 10.56px;
        animation: letter-animation 1s ease-in-out forwards 1.5s;
    }
    #logotype path:nth-child(17) {
        stroke-dasharray: 22.78px;
        stroke-dashoffset: 22.78px;
        animation: letter-animation 1s ease-in-out forwards 1.6s;
    }

    @keyframes letter-animation {
        to {
            stroke-dashoffset: 0px;
        }
    }

    @keyframes logotype-fill {
        to {
            fill: white;
        }
        }

        @keyframes neon {
        0% {
        }
        100% {
            opacity: 0.7;
        }
    }

    @keyframes neon-bzz {
        0% {
            opacity: 0.5;
        }
        20% {
            opacity: 0.7;
        }
        22% {
            opacity: 0.2;
            filter: blur(1px);
        }
        24% {
            opacity: 0.7;
            filter: blur(3px);
        }
        60% {
            opacity: 0.7;
        }
        61% {
            opacity: 0.2;
            filter: blur(1px);
        }
        62% {
            opacity: 0.7;
            filter: blur(3px);
        }
        70% {
            opacity: 0.7;
        }
        71% {
            opacity: 0.2;
            filter: blur(1px);
        }
        72% {
            opacity: 0.5;
            filter: blur(3px);
        }
    }

    @keyframes neon-bzz-typo {
        0% {
            opacity: 0.7;
        }
        20% {
            opacity: 1;
        }
        22% {
            opacity: 0.2;
            filter: blur(1px);
        }
        24% {
            opacity: 1;
            filter: blur(3px);
        }
        60% {
            opacity: 1;
        }
        61% {
            opacity: 0.2;
            filter: blur(1px);
        }
        62% {
            opacity: 1;
            filter: blur(3px);
        }
        70% {
            opacity: 1;
        }
        71% {
            opacity: 0.2;
            filter: blur(1px);
        }
        72% {
            opacity: 0.7;
            filter: blur(3px);
        }
    }
</style>
