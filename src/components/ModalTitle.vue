<template>
  <div class="modal-title">
    <slot />
    <font-awesome-icon icon="times" @click="$emit('return', true)" />
  </div>
</template>

<script>
export default {
  name: "ModalTitle",
}
</script>

<style>
.modal-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 2.4rem;
}

.modal-title svg {
  cursor: pointer;
}
</style>