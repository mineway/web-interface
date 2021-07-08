<template>
  <modal
      v-if="isDonateActive"
      @return="isDonateActive = false"
  >
  </modal>
  <header class="header">
    <router-link tag="h1" to="/" class="logo">
      <img src="../assets/logo.svg" alt="Mineway">
    </router-link>
    <nav class="header__nav">
      <router-link
          tag="a"
          v-for="(item, i) in nav"
          :key="i"
          class="nav__link"
          :to="item.to"
          exact
      >
        {{ item.name }}
      </router-link>
    </nav>
    <div class="header__icon-nav">
      <a
          class="icon-nav__link"
          @click="isDonateActive = true"
      >
        <btn type="info" :bold="true" icon="donate">
          Donate
        </btn>
      </a>
      <AddWorker />
      <router-link
          class="icon-nav__link"
          to=""
          exact
          v-tooltip.bottom-start="'Autorefresh (disabled)'"
      >
        <icon-btn icon="stopwatch" />
      </router-link>
      <router-link
          class="icon-nav__link"
          to=""
          exact
          v-tooltip.bottom-start="'Settings'"
      >
        <icon-btn icon="cog" />
      </router-link>
      <router-link
          class="icon-nav__link"
          to=""
          exact
          v-tooltip.bottom-start="'Logout'"
      >
        <icon-btn icon="sign-out-alt" />
      </router-link>
    </div>
  </header>
</template>

<script>
import AddWorker from "./AddWorker";

export default {
  name: "Header",
  components: {
    AddWorker
  },
  data() {
    return {
      nav: [
        { name: "Dashboard", to: "/" },
        { name: "Workers", to: "/workers" },
        { name: "Wallets", to: "/wallets" },
        { name: "Overclocking Templates", to: "/oc" }
      ],
      isDonateActive: false,
    }
  },
}
</script>

<style>
.header {
  width: 100%;
  background-color: var(--main-color);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--main-color-dark-2);
  display: flex;
  align-items: center;
}

.logo {
  background-color: var(--neutral-color);
  height: 61px;
  width: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  padding: var(--spacing-little);
}

.logo:hover {
  transition: background-color 500ms ease-in;
  background-color: var(--neutral-color-dark-1);
}

.logo:active {
  transition: background-color 0s;
  background-color: var(--neutral-color-dark-2);
}

.logo img {
  width: 25px;
}

.header__nav {
  flex: 1;
  display: flex;
  align-items: center;
}

.nav__link {
  padding: var(--spacing-little);
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.nav__link:hover, .nav__link.router-link-exact-active {
  color: var(--text-color-hover);
}

.header__icon-nav {
  display: flex;
  align-items: center;
}

.icon-nav__link {
  padding: var(--spacing-little);
}

.header__nav a, .header__icon-nav a {
  text-decoration: none;
  color: inherit;
}
</style>