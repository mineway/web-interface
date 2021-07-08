<template>
  <a
      class="icon-nav__link"
      v-tooltip.bottom-start="'Add worker'"
      @click="isComponentEnabled = true"
  >
    <icon-btn icon="plus" />
  </a>
  <modal
      v-if="isComponentEnabled"
      @return="isComponentEnabled = false"
  >
    <modal-title @return="isComponentEnabled = false">
      Add Worker
    </modal-title>
  </modal>
</template>

<script>
export default {
  name: "AddWorker",
  data() {
    return {
      isComponentEnabled: false,
    }
  }
}
</script>

<style scoped>

</style>