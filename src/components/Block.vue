<template>
  <div class="block">
    <h3 v-if="title" class="block__title">
      <p><font-awesome-icon v-if="icon" :icon="icon" /> {{ title }}</p>
      <span v-if="rightData">{{ rightData }}</span>
    </h3>
    <div class="block__content" :class="noPadding ? 'block__content--no-padding' : ''">
      <loading :is="loading">
        <slot />
      </loading>
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
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    rightData: {
      type: String,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.block__title span {
  font-size: 1.3rem;
  font-weight: normal;
  color: var(--text-color-light-2);
}

.block__content {
  margin-top: var(--spacing-medium);
  background-color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  padding: var(--spacing-medium);
  border-radius: var(--radius-little);
  overflow: hidden;
}

.block__content--no-padding {
  padding: 0;
}
</style>