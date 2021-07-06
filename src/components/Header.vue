<template>
  <modal
      v-if="isDonateActive"
      @return="isDonateActive = false"
  >
  </modal>
  <header class="header">
    <h1 class="logo">
      <router-link tag="a" to="/">
        <img src="../assets/logo.svg" alt="Mineway">
      </router-link>
    </h1>
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
      <router-link
          tag="a"
          class="icon-nav__link"
          to=""
          exact
          v-tooltip.bottom-start="'Add worker'"
        >
        <icon-btn icon="plus" />
      </router-link>
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
export default {
  name: "Header",
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
  padding: var(--spacing-little);
  display: flex;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 3rem;
  padding: var(--spacing-little);
}

.logo img {
  width: 50px;
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