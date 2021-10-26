<template>
<v-app>
  <nav style="background-color:#13657E;height:50px" class="pa-2 ">
    <v-layout >
      <v-flex>
      <b style="color:white;" class="titleDate">Rendez-vous du <vue-typer text=' 14 AU 17 OCTOBRE 2021' ></vue-typer></b>
      </v-flex>
      <v-flex style="text-align:right">
      <a href="https://ascrea.ma/" target="_blank" style="text-decoration:none;" class="contactAdn titleDateAs ">Réalisé par ascrea.ma</a><br>
      </v-flex>
    </v-layout>
  </nav>
  <nav style="background-color:white" class="navbar navbar-light navbar-expand-md bg-faded justify-content-center sticky-top ">
    <a href="#" class="d-flex  mr-auto">
      <img  class="img-responsive logonav" src="../assets/adnlogo.png"  >
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="nav navbar-nav  ml-auto justify-content-center first">
          <li>
            <a href="#propos"  >
              <b>À PROPOS</b>
            </a>
          </li>
          <li>
            <a href="#agenda">
              <b>PROGRAMME</b>
            </a>
          </li>
         <li>
            <a href="#speakers">
              <b>SPEAKERS</b>
            </a>
          </li> 
          <li>
            <a href="#sponsors">
              <b>SPONSORS</b>
            </a>
          </li>
          <li class="liveBtn ml-md-3">
            <a href="https://wcongresadn2021.ascreacongres.ma/s'inscrire/" target="_blanc" style="color:white!important">
              <b>LIVE CONGRES</b>
            </a>
          </li>
           <li @click="dialog = true" class="inscriBtn ml-md-3">
            <a>
              <b>VOD</b>
            </a>
          </li>
        </ul>
    </div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 ">
          Cher visiteur
        </v-card-title>
        <v-col>
          La VOD sera bientôt disponible
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="primary"  text  @click="dialog = false">
            Ferme
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</nav>

  <div  data-spy="scroll" data-target="#navbar-app" data-offset="0">
    <div id="accueil">
    <accueil  />
    </div>
    <div>
    <timer/>
    </div>
    <div id="propos">
      <axe2 class="mt-5"/>
    </div>
    <div id="">
      <thematique/>
    </div>
    <div id="axe">
      <scientifique/>
    </div>
    <div id="agenda">
      <agenda class="mt-5" v-on:slidenum="slidenum"/>
    </div>
   <div id="speakers">
    <speakers class="mt-5" :slideshow="slideshow"/>
    </div> 
    <div id="sponsors">
    <sponsors class="mt-5 "/>
    </div>
  </div>
  <div class="social" style="text-align:right">
    <v-card class="social flex pa-1" max-width="40px" color="white">
        <a href="https://web.facebook.com/Congr%C3%A8s-National-de-lADN-115760883680227" target="_blank"><img height="29" width="29" class="img-responsive mb-1" src="../assets/F.png" ></a> 
        <a href="https://www.youtube.com/channel/UCUva7z9km4vmaZemVQ69Wsw" target="_blank"> <img height="29" width="29" class="img-responsive " src="../assets/Y.png" ></a> 
    </v-card>
  </div>
  <v-parallax src="../assets/fes2.jpg" class="footpara" >
  <div class="footparashad">
    <v-row class="safariFlex">
        <v-col cols="12" md="3" sm="12"  align="center" class="mt-5 ">
          <a href="https://ascrea.ma/" target="_blanc"><img  class="img-responsive Logofoter" src="../assets/logo.png" height="100" width="230" ></a>
        </v-col>
        <v-col cols="12" md="9" sm="12" class="mt-sm-15">
           <v-row align="center">
            <v-col cols="12" class="ml-1">
              Directeur du congrès : Dr. Essekkat Nour-Eddine - GSM :
               <a href="tel:+212661422116" style="text-decoration:none;" class="contactAdn">+212 (0) 661 42 21 16</a>
                - E-mail :
               <a href="mailto:dr.essekkat.noureddine@gmail.com" class="contactAdn" style="text-decoration:none;">
               dr.essekkat.noureddine@gmail.com
               </a><br>
                Hébergement & inscription : RTS - Tel : 
                <a href="tel:+212522541963" class="contactAdn" style="text-decoration:none;">+212 (0) 522 54 19 63</a>
                 - Mr. Kaddar Abdenbi - GSM :
                 <a href="tel:+212661248457" class="contactAdn" style="text-decoration:none;">+212 (0) 661 24 84 57</a>
                 - E-mail :
                 <a href="mailto:abdenbi.kaddar@rts.co.ma" class="contactAdn" style="text-decoration:none;">
                 abdenbi.kaddar@rts.co.ma
                  </a>
            </v-col>
           </v-row>
        </v-col>
    </v-row>
  </div>
  </v-parallax>  
</v-app>
</template>

<script>
import thematique from './landing/thematique.vue';
export default {
  components: { thematique },

  data: () => ({
    scrollPosition: null,
    slideshow:"",
    dialog:false,
    vid:"",
    audio:true
  }),
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    goTo(path){
           this.$router.push(path)
        },
    click: function() {
        this.$refs.inscriComponent.setValue();
    },

    slidenum(num){
      this.slideshow=num
     
    },

    
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);

  

   this.slideshow=0

   
},

};
</script>
<style >
html{
  scroll-behavior: smooth;
}
/*.accueil{
  background-image:url('/assets/health.jpg');
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
}*/
.first li a{
  color:#000!important;
  transition: 0.3s;
}
.first li a:hover{
  color:white!important;
  background-color:#0C3D58!important
}

.LGactive li a{
  color:white!important;
  background-color:#E30525!important;
  padding:5px
}
.LGactive li a:hover{
  background-color:#0C3D58!important;
}
.logonav{
  width: 250px;
}
.footpara {
  height: 270px!important;
}
.footparashad{
  background-color: rgba(15, 132, 168, 0.877);
  height: 400px!important;
}
.contactAdn{
  color: white!important;;
}
a:hover{
  color: darkorange!important;;
}

.titleDateAs{
    font-size: 15px;
  }

@media (min-width:900px) {

}


@media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {
  .logonav{
  width: 190px;
}

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
  .inscriBtn{
      width:130px
    }
    .text{
    font-size:3vw;
    text-justify: distribute;
    }
    .Logofoter{
      width:250px
    }
     .logonav{
      width: 150px;
    }
    .footpara {
     height: 490px!important;
    }
    .footparashad{
      height: 600px!important;
    }
}


.footer{
    margin-top:100px;
}
.footText{
  color:white;
  text-align:right;
  font-size: 0.55em;
  color: #fff;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
}
v-img.sponsor{
  position: relative;
}
.footTitle{
    text-align:left;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.0rem;
    font-weight: 500
}
.titlefootline{
  content: "";
    display: block;
    width: 4.375rem;
    height: .25rem;
    background-color: red;
    bottom: 0;
    right: 0;
}
.social{
  position: absolute;
  right: 0px;
  position: fixed;
  width:50px;
  top: 30%;
  z-index: 9;
}
.navbar{
  margin-bottom:0px!important
}
.inscriBtn{
  background-color:#FBB400!important
}
.liveBtn{
  background-color:#ff0800!important;
  color:white!important
}
.vue-typer .custom.char.typed {
  color: #F19840;
  font-size: 20px;
}
.titleDate{
  font-size: 20px;
}
/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
  .vue-typer .custom.char.typed {
    font-size: 10px;
  }
  .titleDate{
    font-size: 10px;
  }
  .titleDateAs{
    font-size: 10px;
  }
}
</style>