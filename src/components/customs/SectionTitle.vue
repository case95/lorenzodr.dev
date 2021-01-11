<template>
<div class="title-container">
    <h2 class="title">
        {{title}}
    </h2>
    <div class="title-decoration"></div>
</div>
    
</template>

<script>
export default {
    name: "SectionTitle",
    props: {
        title: String
    }
    
}
</script>

<style scoped lang="scss">
    @import '@/assets/_shared.scss';

    .title-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        .title{
            font-size: $h2;
            text-transform: capitalize;
            margin-right: 10px;
            font-family: 'Inconsolata', monospace;
        }
        .title-decoration {
            height: 1px;
            width: 100%;
            background-color: $my-acqua;
            margin: auto 10px auto 0;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                right:-10px;
                top: -4px;
                border: 2px solid $my-acqua;
                box-sizing: border-box;
            }
        }
    }
    

</style>