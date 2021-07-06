<template>
  <div :id="`modal-${_uid}`" class="modal-wrapper">
    <div class="modal">
      <slot />
    </div>
    <div
        class="modal-wrapper__return"
        @click="back"
    />
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    back() {
      document.querySelector(`#modal-${this._uid}`).classList.add("modal-wrapper--fade-out")
      setTimeout(() => {
        this.$emit('return', true)
      }, 300)
    }
  }
}
</script>

<style>
.modal-wrapper {
  position: fixed;
  z-index: 9995;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: modal--fade-in ease-in 300ms;
}

.modal-wrapper--fade-out {
  animation: modal--fade-out ease-in 300ms;
}

.modal-wrapper__return {
  position: absolute;
  z-index: 9996;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: relative;
  z-index: 9997;
  background-color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 8px 0;
  padding: var(--spacing-medium);
  margin: var(--spacing-medium);
  border-radius: var(--radius-medium);
  width: 100%;
  max-width: var(--interface-size-little);
}

@keyframes modal--fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes modal--fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>