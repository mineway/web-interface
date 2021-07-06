<template>
  <div class="block">
    <h3 v-if="title" class="block__title">
      <font-awesome-icon v-if="icon" :icon="icon" /> {{ title }}
    </h3>
    <div class="block__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    title: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    }
  }
}
</script>

<style>
.block {
  padding: var(--spacing-medium);
}

.block__title {
  font-weight: bold;
  font-size: 2rem;
}

.block__content {
  margin-top: var(--spacing-medium);
  background-color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  padding: var(--spacing-medium);
  border-radius: var(--radius-little);
}
</style>