<template>
  <div class="home">
    <app-header></app-header>
    <div v-bind:style="{backgroundImage: 'url(' + backgroundImage + ')'}" class="head">
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
          <h1 class="about__heading"> {{ imageText.text }}</h1>
          <p class="about__paragraph">
           
           {{ imageParagraph.text }}
          </p>
        </div>
      </div>
    </section>
    <!-- <section class="featured">
      <h1 class="featured__heading">FEATURED COLLECTION</h1>
    </section> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../components/Header";
import appFooter from "../components/Footer";
import fb from "../firebase";
export default {
  data() {
    return {
      header: {},
      paragraph: {},
      imageText: {},
      imageParagraph: {},
      backgroundImage: ""
    };
  },
  components: {
    appHeader,
    appFooter,
  },
  mounted() {
    this.getData();
    this.getFileUrl()
  },
  methods: {
    getData: function() {
      var that = this;
      var db = fb.database()

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
    getFileUrl() {
     var that = this;
var storage = fb.storage().ref("background");
storage
.getDownloadURL()
.then(function(url) {
  that.backgroundImage = url;
  console.log(that.backgroundImage)
})

}
    
  },
};
</script>
<style lang="scss">
$primary-black: #000;


</style>
