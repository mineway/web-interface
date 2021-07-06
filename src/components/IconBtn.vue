<template>
  <button
      class="btn--template icon-btn"
      :class="type !== null ? `btn--${type}` : ''"
  >
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  name: "IconBtn",
  props: {
    type: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>
.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-little);
  background-color: var(--default-color);
  border: none;
  outline: none;
  cursor: pointer;
  width: 38px;
  height: 38px;
}

.icon-btn:hover {
  background-color: var(--default-color-dark-1);
}

.icon-btn:active {
  background-color: var(--default-color-dark-2);
}
</style>