<template>
  <PageLoader v-if="!isLoaded"/>
  <Header />
  <Container v-if="content"/>
  <Footer />
</template>

<script>
  import Container from './components/layout/Container'
  import PageLoader from './components/layout/PageLoader'
  import Header from './components/layout/Header.vue';
  import Footer from './components/layout/Footer.vue';
  export default {
    name:"App",
    components:{Container, PageLoader, Header, Footer},
    data () {
        return {
            isLoaded: false,
            content: false
        }
    },
    mounted() {
        document.onreadystatechange = () => {
          const loader = document.getElementById("loader")
            setTimeout(() => {
                if (document.readyState === 'complete') {
                    this.content = true
                    loader.style.opacity = 0
                    setTimeout(() => {
                      this.isLoaded = true
                    }, 300)
                }
            }, 5000)
        }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/_shared.scss';

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    a{
      text-decoration: none;
      color: $my-white;
    }
    *{
      list-style-type: none !important;
    }
    
    *::marker{
        content:'' !important;
        display:none !important;
        width: 0 !important;
        height:0 !important;
      }
  }


</style>
