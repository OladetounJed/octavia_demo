<template>
    <header class="header">
        <div class="header__left">
          <router-link to="/"
            ><a>ListBuy</a></router-link>
        </div>
        <div class="header__middle">
          <ul>
            <li><router-link to=""  class="header__link">Home</router-link></li>
            <li><router-link to=""  class="header__link">Catalogue</router-link></li>
          </ul>
        </div>
        <div class="header__right">
          <img
            src="../assets/images/search-icon.png"
            alt="Menu Icon"
          />
          <img
            src="../assets/images/shop-icon.png"
            alt="Menu Icon"
          />
        </div>
      </header>
</template>

<script>
export default {
    data() {
    return {
      navStyle: {}
    };
  },
    methods: {
    openNav() {
      this.navStyle = { display: "block" };
    },
    closeNav() {
      this.navStyle = { display: "none" };
    }
  }
}
</script>

<style lang="scss">

</style>