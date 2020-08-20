<template>
  <div class="home">
    <app-header></app-header>
    <div class="head">
      <section class="landing">
        <div class="landing__con">
          <h1
            v-bind:style="{ fontSize: header.fontSize + 'px' }"
            class="landing__heading"
          >
            {{ header.text }}
          </h1>
          <p
            class="landing__paragraph"
            v-bind:style="{ fontSize: paragraph.fontSize + 'px' }"
          >
            {{ paragraph.text }}
          </p>
        </div>
      </section>
    </div>

    <section class="about">
      <div class="about__con">
        <div class="about__child">
          <img src="../assets/images/More-info_image.png" class="about__img" />
        </div>
        <div class="about__child">
          <h1 class="about__heading">Image with text</h1>
          <p class="about__paragraph">
            This section should contain a flagship product that can express your
            brand better and a short description about your brand and your
            journey. The header of this section should be a “call to action”
            text like Building Shoes With Passion.
          </p>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../components/Header";
import appFooter from "../components/Footer";
import db from "../firebase";
export default {
  data() {
    return {
      header: {},
      paragraph: {},
    };
  },
  components: {
    appHeader,
    appFooter,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      var that = this;

      db.ref("header")
        .once("value")
        .then(function(snapshot) {
          that.header = snapshot.val();
          console.log(that.header);
        });
      db.ref("paragraph")
        .once("value")
        .then(function(snapshot) {
          that.paragraph = snapshot.val();
          console.log(that.paragraph);
        });
    },
  },
};
</script>
<style lang="scss">
$primary-black: #000;

.head {
  background-image: url("../assets/images/Landing.png");
}
</style>
