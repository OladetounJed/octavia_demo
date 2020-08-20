<template>
  <div class="home">
    <app-header></app-header>
    <div class="head">
      <section class="landing">
        <div class="landing__con">
          <h1
            class="landing__heading"
          >
            {{ header.text }}
          </h1>
          <p
            class="landing__paragraph"
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
          <h1 class="about__heading"> {{ imageParagraph.text }}</h1>
          <p class="about__paragraph">
           {{ imageText.text }}
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
      imageText: {},
      imageParagraph: {},
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
  
        });
         db.ref("image_paragaph")
        .once("value")
        .then(function(snapshot) {
          that.imageParagraph = snapshot.val();
          console.log(that.imageParagraph);
        });
         db.ref("image_text")
        .once("value")
        .then(function(snapshot) {
          that.imageText = snapshot.val();
          console.log(that.imageText);
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
