<template>
  <div v-if="is" class="loading">
    <img src="../assets/loading.svg" alt="loading" />
  </div>
  <slot v-else />
</template>

<script>
export default {
  name: "Loading",
  props: {
    is: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading {
  padding: var(--spacing-medium);
}
</style>