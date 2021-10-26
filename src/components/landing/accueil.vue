<template>
<div class="header" >
    <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
  <div class="overlay"></div>

  <!-- The HTML5 video element that will create the background video on the header -->
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="/video.mp4" type="video/mp4">
    Votre navigateur ne prend pas en charge la vidéo HTML.
  </video>

  <!-- The header content -->
  <v-container>
    <v-row> 
      <v-col cols="12" md="6">
        <div class="row justify-content-center" data-aos-once="true" data-aos="flip-left">
            <v-layout class="col-md-12 col-sm-12 text-center ">
                <v-flex  class="lg5-custom p-2">
                <img  class="img-responsive " src="..\..\assets\adn2.png" height="80" width="140" >
                </v-flex>
                <v-flex class="lg5-custom p-2">
                <img  class="img-responsive " src="..\..\assets\adn1.png" height="80" width="140" >
                </v-flex>
                <v-flex class="lg5-custom p-2">
                <img  class="img-responsive " src="..\..\assets\adn3.png" height="80" width="140" >
                </v-flex>
            </v-layout>
            <div class="col-md-12 col-sm-12 text-center mt-5">
                <span style="color: #F38E3B;" class="head1">بشراكة مع كلية الطب والصيدلة و طب الأسنان بفاس</span>
            </div>
            <div class="col-md-12 text-center">
                <span style="color: white;" class="head2"><b>EN PARTENARIAT AVEC LA FACULTÉ DE MÉDECINE,
                 DE PHARMACIE ET DE MÉDECINE DENTAIRE DE FÈS</b>
                </span>
            </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
      <img  class="img-responsive center afficheAdn"  src="..\..\assets\adn.jpg" id="myImg" alt="ADN">
      <!-- The Modal -->
      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
        <div id="caption"></div>
      </div>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>

  export default {
    name: 'accueil',

    mounted() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
    
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
       date:"2021-12-25 00:00:00",
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  },
  methods:{
    click: function() {
        this.$refs.inscriComponent.setValue();

        this.$gtag.event('form d\'inscription', {
        'event_category': 'fr',
        'event_label': 'dernier click',
        'value': 1
      })
    },
  }
  }
</script>
<style >
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.tiemCard{
  padding: 10px;
  width:500px
}
.agenda{
  width:500px
}
.digit {
    font-family: 'Roboto', serif;
    margin-top: 20%;
}
.time {
    font-size: 1em;
    font-family: 'Roboto', serif;
    background-color:#ffffff;
    border-radius: 15px;
}
.datetime{
  font-family: 'Oswald', sans-serif;
  color:#cca900
}
.view{
  text-align: center;
}
.afficheAdn{
  max-width: 350px!important;
}
v-img.back{
  position: relative;
}
nav.bottomNav{
  position: absolute;
  width: 100%;
  bottom: 100px;
}
.head1{
  font-size: 2.5em;
  font-family: 'Almarai', sans-serif !important;
}
.head2{
  font-size: 1.6em;
}
.backImg{
  height: 600px!important;
}
.headOpacity{
  background: rgba(0, 0, 0, 0.6)!important;
  height: 600px!important;
}
.v-parallax__content{
  padding: 0px 0px 0px 0px!important;
}
/* MODAL IMAGE */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 70px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 50%;
  max-width: 450px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top:65px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
/* Large desktop */
@media (min-width: 1250px) {
  .header {
    height: 90vh;
  }
}
/* Large desktop */
@media (min-width: 1200px) {
  .header {
    height: 100vh;
  }
}


/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
@media all and (max-width: 768px) {
  nav.bottomNav{
    bottom: 9px;
  }
  .close {
  position: absolute;
  top:35px;
  }
  .backImg .headOpacity{
    height: 650px!important;
  }
  .head1{
  font-size: 1.53em;
  }
  .head2{
    font-size: .8em;
  }
  
}


/* Portrait tablet to landscape and desktop */
@media (min-width: 766px) and (max-width: 979px) {

  .close {
    top:40px;

  }

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
  .afficheAdn{
    max-width: 250px!important;
  }

}

/* Landscape phones and down */
@media (max-width: 480px) {
.time {
 font-size:0.7em
}
.digit{
  margin-top: 25%;
}
.tiemCard{
  width:400px
}
.agenda{
  width:400px
}
.datetime{
  font-size:1.3em
}
.header {
  position: relative;
  background-color: black;
  height: 90vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}
}

.flip-clock__slot {
  color: #cca900;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.text-block {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
/*header video */
.header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

.header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.header .container {
  position: relative;
  z-index: 2;
}

.header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

/* Media Query for devices withi coarse pointers and no hover functionality */

/* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video element */

@media (pointer: coarse) and (hover: none) {
 
.header {
  position: relative;
  background-color: black;
  height: 90vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}
  
}
@media (max-width: 545px) {
  .header {
    height: 120vh;
  }
}
@media (max-width: 480px) {
.header {
  height: 110vh;
}
}

@media (max-width: 414px) {
  .afficheAdn{
    max-width: 350px!important;
  }
  .header {
    height: 120vh;
  }
}

@media (max-width: 376px) {
  .header {
    height: 135vh;
  }
  .afficheAdn{
    max-width: 300px!important;
  }
}
@media (min-width: 766px) and (max-width: 979px) {
  .header {
    height: 60vh;
  }
 
}
</style>
