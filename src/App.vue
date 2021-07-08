<template>
  <Header />
  <router-view class="content" />
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body {
  min-height: 100vh;
  color: var(--text-color);
  background-color: var(--main-color-dark-1);
  overflow-x: hidden;
}

.content {
  width: 100%;
  max-width: var(--interface-size);
  padding: 0 var(--spacing-medium);
  margin: var(--spacing-medium) auto;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  min-height: 50px;
  background-color: #dadce0;
  background-clip: padding-box;
  border: 4px solid transparent;
  border-radius: inherit;
  box-shadow: none;
}

::-webkit-scrollbar-track {
  background: none;
  border: none;
}
</style>
