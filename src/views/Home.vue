<template>
  <div class="home">
    <div class="head">
      <app-header></app-header>
      <section class="landing">
        <div class="landing__con">
          <h1 v-bind:style="{fontSize: header.fontSize + 'px' }" class="landing__heading">{{header.text}}</h1>
          <button v-bind:style="{fontSize: paragraph.fontSize + 'px' }" class="landing__know-us btn">{{paragraph.text}}</button>
          <p class="landing__paragraph">
            Secure your money safely with Octavia three-factor authentication
            and sleep tight every night and We understand your business and
            personal needs, so We help protect your funds from Cyber criminals.


          </p>
        </div>
      </section>
    </div>

    <section class="about">
      <h1 class="about__header"><span>About</span> Us</h1>
      <div class="about__con">
        <div class="about__child">
          <img src="../assets/images/fingerprint.svg" class="about__img" />
        </div>
        <div class="about__child">
          <p class="about__paragraph">
            Download the app, sign up in Seconds and start converting your currency.
             That’s all you need to make the right money moves. No sweat.
            Whatever you want to do with your money, you can do it from the app.
            We’ll make sure it’s done better and hassle-free.
          </p>
          <button class="about__know-us btn">Find Out About Us</button>
        </div>
      </div>
      <div class="about__con about__con-2">
        <div class="about__child">
          <p class="about__paragraph">
             Download the app, sign up in Seconds and start converting your currency.
             That’s all you need to make the right money moves. No sweat.
            Whatever you want to do with your money, you can do it from the app.
            We’ll make sure it’s done better and hassle-free.
          </p>
          <button class="about__know-us about__know-us--active btn">
            Find Out About Us
          </button>
        </div>
        <div class="about__child">
          <img src="../assets/images/power.svg" class="about__img" />
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
  data(){
    return {
      header : {},
      paragraph: {}
    }
  },
  components: {
    appHeader,
    appFooter
  },
  mounted(){
    this.getData()
    
    },
    methods: {
  getData: function(){
          var that = this;

     db.ref("header")
        .once("value")
        .then(function(snapshot) {
          that.header = snapshot.val()
          console.log(that.header);
        })
         db.ref("paragraph")
        .once("value")
        .then(function(snapshot) {
          that.paragraph = snapshot.val()
          console.log(that.paragraph);
        })
       
  }
}
}


</script>
<style lang="scss">
$primary-black: #000;

.head {
  background-image: linear-gradient(
      to bottom,
      rgba($primary-black, 0.6),
      rgba($primary-black, 0.8)
    ),
    url("../assets/images/background.jpg");
}
</style>
