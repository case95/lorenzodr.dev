<template>
    <div class="footer">
        <p class="footer-copyright">
            Designed and developed by Lorenzo Del Rosario  <i class="fa fa-linkedin"></i>
        </p>
    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped lang="scss">

@import '@/assets/_shared.scss';

.footer{
    padding: 0 25px 20px 25px;
    transition: padding 0.2s ease-in-out;
    background-color: $my-black;
    color: $my-gray;
    text-align: center;
    z-index: 2;
    #{&}-copyright {
        font-family: 'Inconsolata', monospace;
        padding-top: 20px;
        border-top: 1px solid $my-white;
        .fa {
            background-color: $my-acqua;
            padding: 2px;
            border-radius: 2px;
            color: $my-black;
            position: relative;
            z-index: 2;
            &::after{
                content: "";
                position: absolute;
                top: -1px;
                left: -1px;
                bottom: -1px;
                right: -1px;
                border-radius: 2px;
                z-index: 1;
                box-sizing: border-box;
                animation: none;
                filter: blur(2px) ;
                opacity: 0;
                @include transition-button(opacity);
            }
            &:hover{
            background-color: $my-white;
            &::after {
                    opacity: 1;
                    border: $my-acqua 2px solid;
                    animation: neon-bzz 3s forwards infinite;
                }
            }
        }
    }
}

    @media screen and (min-width: $SM ) {
        .footer {
            padding: 20px 50px;
        }
    }

    @media screen and (min-width: $MD ) {
        .footer {
            padding: 20px 100px;
        }
    }

    @media screen and (min-width: $LG ) {
        .footer {
            padding: 20px 150px;
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