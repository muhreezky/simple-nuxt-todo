<template>
  <section class="section">
    <task-input />
    <task-list />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
}
</script>
