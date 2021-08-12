<template>
  <nav>
    <div class="navbar">
      <div>
        <img src="~/assets/logo-blue-dark.png" alt="" :style="{ width: '300px' }">
      </div>
      <div>
        <NuxtLink v-for="(link, index) in links" :key="index" to="#">
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
    links: [
      {
        name: 'Home'
      },
      {
        name: 'Server'
      },
      {
        name: 'Hosting'
      },
      {
        name: 'Domain'
      },
      {
        name: 'Reseller'
      }
    ]
  })
};
</script>

<style lang="scss">

</style>
