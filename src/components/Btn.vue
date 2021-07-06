<template>
  <button
      class="btn--template btn"
      :class="(type !== null ? `btn--${type}` : '') + (bold ? ' btn--bold' : '')"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="btn__icon" />
    <slot />
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    type: {
      type: String,
      default: null
    },
    bold: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style>
.btn {
  padding: var(--spacing-little);
}

.btn__icon {
  margin-right: var(--spacing-little);
}
</style>