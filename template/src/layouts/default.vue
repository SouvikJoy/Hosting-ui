<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
export default {
  components: { Footer, Header }
};
</script>
