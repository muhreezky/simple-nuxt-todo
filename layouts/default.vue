<template>
  <div class="main-cont">
    <nav
      class="navbar header has-shadow is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/"
        >
          WhatShouldIDo
        </nuxt-link>
      </div>
    </nav>

    <section class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
      ]
    }
  }
}
</script>

<style scoped>
  .main-cont {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>