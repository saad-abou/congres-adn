<template>
<div>
    <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 style="color:#F38E3C"  class="compHead">SPEAKERS</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-container class="pa-5 carros">
        <carousel :per-page-custom="responsive" :pagination-enabled="false" :navigation-enabled="true"  :scrollPerPage="false" :navigate-to="[slideshow,true]"	>
            <slide v-for="(speaker, index) in speakers" :key="index" :id="index" @click="hideHand" >
                 <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="300" @click="hideHand" @mouseover="hideHand">
                    <v-img aspect-ratio="1"  :src="'../../'+speaker.src" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                        <div class="d-flex v-card--reveal-first white--text"
                                style="height: 80%"
                                v-if="!hover"
                            >
                            <b>{{speaker.name}}</b>
                        </div>
                        <v-expand-transition>
                            <v-overlay  v-if="hover" color="indigo darken-3" class="transition-easy-in-easy-out v-card--reveal white--text  pa-3"
                                style="height: 100%;">
                                <span style="text-align:left;" class="cvtext">{{speaker.cv}}</span>
                            </v-overlay >
                        </v-expand-transition>
                    </v-img>
                    </v-card>
                </v-hover>
            </slide>
        </carousel>
        <h1 class="pulsate" v-if="animation">
          <v-icon color="white" large>mdi-gesture-double-tap</v-icon>
        </h1>
        </v-container>
    </v-container>
</div>  
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    data() {
        return {
            overlay: false,
            selectslide:5,
            speakers: [
                {name:"Pr. Asmaa Morjane",cv:"Professeur Assistante en Biochimie, Faculté de Médecine et de Pharmacie de Casablanca",
                  src:"morjane.png"},
                {name:"Dr. Abdellatif Saada",cv:"Médecin généraliste \n Manager Pyramid center",
                  src:"saada.jpg"},
                {name:"Mme Hinde Benziane",cv:"- Diplôme  en chirurgie de l’ongle de l’université de Barcelone \n - Fondatrice de L’Association Marocaine Scientifique des Podologues (AMSP) \n - Membre à la Fédération Marocaine du Diabète \n - Podologue vacataire à l’académie Mohamed 6 de foot ball depuis sa création",
                  src:"benziane.jpg",},
                {name:"Dr. Otman Tazi",cv:"- Spécialisé en endocrinologie et métabolisme \n - Médecin qualifié en diabétologie.",
                  src:"tazi.png",},
                {name:"Pr. Jaafar Heikel",cv:"- Professeur de Médecine Préventive \n - Docteur en Médecine Spécialiste en Maladies infectieuses et en Médecine Préventive . \n - Diplômé Universitaire en Nutrition et maladies métaboliques \n - Diplômé Universitaire en Diabétologie  \n - Maîtrise En Sciences en Santé communautaire , \n - PhD (Doctorat) en Epidémiologie  \n - MBA en finances et organisation  \n - Doctorant en Sciences Economiques ",
                  src:"heikel.png"},
                {name:"Dr. Hayat Najih",cv:"- Médecin Cardiologue au secteur libéral",
                  src:"najih.jpg",},
                {name:"Pr. Mustapha Benazzouz",cv:"- Ancien Maître assistant en médecine interne du CHU de Rabat. \n - Professeur titulaire en Hépato Gastro entérologie à la faculté de médecine de Rabat \n - Ancien chercheur à l’universtié Yamamashi au Japon \n - Membre de la société Européenne d’hépatologie \n - Vice-président de la société Marocaine d’endoscopie",
                  src:"benazzouz.png",},
                {name:"Pr. Louis Monnier",cv:"- Professeur émérite en Endocrinologie et Diabète à la Faculté de Médecine de Montpellier, Université Montpellier I, France \n - Diplômé en Médecine Nucléaire, Saclay, France (1970-1971) Diplômé en biomathématiques (1969-1970) \n - Chercheur au Laboratoire National de Brookhaven, Upton, NY, USA (1972-1973) \n - Auteur ou coauteur de plus de 200 articles publiés dans des journaux comme Diabetes Care, Diabetes, Diabetologia, JAMA, Am J clin Nutr, Eur J Clin Invest ..... \n - Secrétaire général de l'ALFEDIAM (actuel SFD) de 1980 à 1987",
                  src:"monnier.png",}, 
                {name:"Pr. Jean-louis Schlienger",cv:"- Chef de service de médecine interne, endocrinologue au CHU de Strasbourg \n - Professeur honoraire à la Faculté de Médecine de l'Université de Strasbourg",
                  src:"jean.png"},
                {name:"Pr. Bernard Bauduceau",cv:"- Professeur au Val de Grâce \n - Ancien chef de Service d'Endocrinologie à I‘Hôpital Bégin",
                  src:"bernard.png",},
                {name:"",cv:"",
                  src:"avatar-homme1.png",},
                {name:"",cv:"",
                  src:"avatar-homme1.png",}, 
                {name:"Pr. Olivier Ziegler",cv:"Endocrinologue diabétologue Vandoeuvre-les-nancy",
                  src:"ziegler.jpg",},
                {name:"Dr. Faouzi Benabdenabi",cv:"- Directeur Médical Hôpital Cheikh Khalifa \n - Secrétaire général de la société marocaine des sciences médicales \n - Medical Chief Officer auprès d’ODM",
                  src:"benabdennabi.png",},
                {name:"Pr. Naima Ouzeddoun",cv:"- Professeur en Néphrologie \n - Membre de la société marocaine des sciences médicales \n - Membre de la Société Marocaine de Néphrologie \n - Membre de l’Association des Insuffisants Rénaux Chroniques. \n - Reviewer pour la revue Néphrologie et Thérapeutique. \n - Membre du comité scientifique de la Revue Marocaine de Néphrologie (RMN)",
                  src:"ouzzedoun.jpg",},
                {name:"Pr. Abdelaziz Bakhatar",cv:"Médecin Pneumologue",
                  src:"bakhatar.jpg",},
                {name:"Dr. Selim Jambart",cv:"- Professeur honoraire d’endocrinologie, ancien vice-doyen and ancien chef du département d’endocrinologie-métabolisme à la faculté de médecine de l’Université St-Joseph, Beyrouth, Liban. \n - Fellow de l’American College of Endocrinology. \n - Membre de l’Endocrine Society, de l’American Association of Clinical Endocrinologists, de l’European Society of Endocrinology, de la Société Française d’Endocrinologie, de l’European Atherosclerosis Society et de l’European Association for the Study of Diabetes.",
                  src:"selim.jpg",}, 
                {name:"Dr. Fayçal El Guendouz",cv:"Chef de service d’Endocrinologie à l’hôpital Militaire Moulay Ismail – Meknes",
                  src:"guendouzz.jpeg",},
                {name:"Pr. Hicham Harmouch",cv:"Professeur de l’Enseignement Supérieur en Médecine Interne CHU Avicenne – Rabat",
                  src:"harmouch.png",},
                {name:"Dr. Jean-philippe Kevorkian",cv:"Cardiologue au service de diabétologie à l’hôpital Lariboisière (Paris)",
                  src:"kevorkian.jpg",},
                {name:"Pr. Ahmed Bennis",cv:"Professeur de cardiologie de la Faculté de Médecine de Casablanca",
                  src:"bennis.jpg"},
                {name:"ذ. أحمد عزيز بوصفيحة",cv:"رئيس قسم الأمراض التعفنية و المناعاتية عند الطفل \n مدير مختبر البحث في المناعة السريرية و الإلتهاب و الأرجية LICIA \n المشفى الجامعي ابن رشد، كلية الطب و الصيدلة، جامعة الحسن الثاني، الدار البيضاء \n مدير المجلة الصحية المغربية التي تصدرها الجمعية المغربية للتواصل الصحي ",
                  src:"bousfiha.jpg",},
                {name:"Pr. Redouane Rabii",cv:"Spécialiste en Urologie et chirurgie urologique à Casablanca",
                  src:"rabii.jpg",},
                {name:"Pr. Laila Bendriss",cv:"",
                  src:"avatar-homme1.png",},
                {name:"Pr. Adil Khoubila",cv:"Professeur Agrégé de Psychiatrie",
                  src:"khoubila.jpg"},
                {name:"Dr. Mohamed Khlafa",cv:"Endocrinologue Libéral à Mohammedia",
                  src:"khlafa.png"},
                {name:"Pr. Asmaa Morjane",cv:"Professeur Assistante en Biochimie, Faculté de Médecine et de Pharmacie de Casablanca",
                  src:"morjane.png"},
                {name:"Dr. Abdellatif Saada",cv:"Médecin généraliste \n Manager Pyramid center",
                  src:"saada.jpg"},
                {name:"Mme Hinde Benziane",cv:"- Diplôme  en chirurgie de l’ongle de l’université de Barcelone \n - Fondatrice de L’Association Marocaine Scientifique des Podologues (AMSP) \n - Membre à la Fédération Marocaine du Diabète \n - Podologue vacataire à l’académie Mohamed 6 de foot ball depuis sa création",
                  src:"benziane.jpg",},
                {name:"Dr. Otman Tazi",cv:"- Spécialisé en endocrinologie et métabolisme \n - Médecin qualifié en diabétologie.",
                  src:"tazi.png",},
                {name:"Pr. Jaafar Heikel",cv:"- Professeur de Médecine Préventive \n - Docteur en Médecine Spécialiste en Maladies infectieuses et en Médecine Préventive . \n - Diplômé Universitaire en Nutrition et maladies métaboliques \n - Diplômé Universitaire en Diabétologie  \n - Maîtrise En Sciences en Santé communautaire , \n - PhD (Doctorat) en Epidémiologie  \n - MBA en finances et organisation  \n - Doctorant en Sciences Economiques ",
                  src:"heikel.png"},
                {name:"Dr. Hayat Najih",cv:"- Médecin Cardiologue au secteur libéral",
                  src:"najih.jpg",},
                {name:"Pr. Mustapha Benazzouz",cv:"- Ancien Maître assistant en médecine interne du CHU de Rabat. \n - Professeur titulaire en Hépato Gastro entérologie à la faculté de médecine de Rabat \n - Ancien chercheur à l’universtié Yamamashi au Japon \n - Membre de la société Européenne d’hépatologie \n - Vice-président de la société Marocaine d’endoscopie",
                  src:"benazzouz.png",},
                {name:"Pr. Louis Monnier",cv:"- Professeur émérite en Endocrinologie et Diabète à la Faculté de Médecine de Montpellier, Université Montpellier I, France \n - Diplômé en Médecine Nucléaire, Saclay, France (1970-1971) Diplômé en biomathématiques (1969-1970) \n - Chercheur au Laboratoire National de Brookhaven, Upton, NY, USA (1972-1973) \n - Auteur ou coauteur de plus de 200 articles publiés dans des journaux comme Diabetes Care, Diabetes, Diabetologia, JAMA, Am J clin Nutr, Eur J Clin Invest ..... \n - Secrétaire général de l'ALFEDIAM (actuel SFD) de 1980 à 1987",
                  src:"monnier.png",}, 
                {name:"Pr. Jean-louis Schlienger",cv:"- Chef de service de médecine interne, endocrinologue au CHU de Strasbourg \n - Professeur honoraire à la Faculté de Médecine de l'Université de Strasbourg",
                  src:"jean.png"},
                {name:"Pr. Bernard Bauduceau",cv:"- Professeur au Val de Grâce \n - Ancien chef de Service d'Endocrinologie à I‘Hôpital Bégin",
                  src:"bernard.png",},
                {name:"",cv:"",
                  src:"avatar-homme1.png",},
                {name:"",cv:"",
                  src:"avatar-homme1.png",}, 
                {name:"Pr. Olivier Ziegler",cv:"Endocrinologue diabétologue Vandoeuvre-les-nancy",
                  src:"ziegler.jpg",},
                {name:"Dr. Faouzi Benabdenabi",cv:"- Directeur Médical Hôpital Cheikh Khalifa \n - Secrétaire général de la société marocaine des sciences médicales \n - Medical Chief Officer auprès d’ODM",
                  src:"benabdennabi.png",},
                {name:"Pr. Naima Ouzeddoun",cv:"- Professeur en Néphrologie \n - Membre de la société marocaine des sciences médicales \n - Membre de la Société Marocaine de Néphrologie \n - Membre de l’Association des Insuffisants Rénaux Chroniques. \n - Reviewer pour la revue Néphrologie et Thérapeutique. \n - Membre du comité scientifique de la Revue Marocaine de Néphrologie (RMN)",
                  src:"ouzzedoun.jpg",},
                {name:"Pr. Abdelaziz Bakhatar",cv:"Médecin Pneumologue",
                  src:"bakhatar.jpg",},
                {name:"Dr. Selim Jambart",cv:"- Professeur honoraire d’endocrinologie, ancien vice-doyen and ancien chef du département d’endocrinologie-métabolisme à la faculté de médecine de l’Université St-Joseph, Beyrouth, Liban. \n - Fellow de l’American College of Endocrinology. \n - Membre de l’Endocrine Society, de l’American Association of Clinical Endocrinologists, de l’European Society of Endocrinology, de la Société Française d’Endocrinologie, de l’European Atherosclerosis Society et de l’European Association for the Study of Diabetes.",
                  src:"selim.jpg",}, 
                {name:"Dr. Fayçal El Guendouz",cv:"Chef de service d’Endocrinologie à l’hôpital Militaire Moulay Ismail – Meknes",
                  src:"guendouzz.jpeg",},
                {name:"Pr. Hicham Harmouch",cv:"Professeur de l’Enseignement Supérieur en Médecine Interne CHU Avicenne – Rabat",
                  src:"harmouch.png",},
                {name:"Dr. Jean-philippe Kevorkian",cv:"Cardiologue au service de diabétologie à l’hôpital Lariboisière (Paris)",
                  src:"kevorkian.jpg",},
                {name:"Pr. Ahmed Bennis",cv:"Professeur de cardiologie de la Faculté de Médecine de Casablanca",
                  src:"bennis.jpg"},
                {name:"ذ. أحمد عزيز بوصفيحة",cv:"رئيس قسم الأمراض التعفنية و المناعاتية عند الطفل \n مدير مختبر البحث في المناعة السريرية و الإلتهاب و الأرجية LICIA \n المشفى الجامعي ابن رشد، كلية الطب و الصيدلة، جامعة الحسن الثاني، الدار البيضاء \n مدير المجلة الصحية المغربية التي تصدرها الجمعية المغربية للتواصل الصحي ",
                  src:"bousfiha.jpg",},
                {name:"Pr. Redouane Rabii",cv:"Spécialiste en Urologie et chirurgie urologique à Casablanca",
                  src:"rabii.jpg",},
                {name:"Pr. Laila Bendriss",cv:"",
                  src:"avatar-homme1.png",},
                {name:"Pr. Adil Khoubila",cv:"Professeur Agrégé de Psychiatrie",
                  src:"khoubila.jpg"},
                {name:"Dr. Mohamed Khlafa",cv:"Endocrinologue Libéral à Mohammedia",
                  src:"khlafa.png"},
                {name:"Pr. Asmaa Morjane",cv:"Professeur Assistante en Biochimie, Faculté de Médecine et de Pharmacie de Casablanca",
                  src:"morjane.png"},
                {name:"Dr. Abdellatif Saada",cv:"Médecin généraliste \n Manager Pyramid center",
                  src:"saada.jpg"},
                {name:"Mme Hinde Benziane",cv:"- Diplôme  en chirurgie de l’ongle de l’université de Barcelone \n - Fondatrice de L’Association Marocaine Scientifique des Podologues (AMSP) \n - Membre à la Fédération Marocaine du Diabète \n - Podologue vacataire à l’académie Mohamed 6 de foot ball depuis sa création",
                  src:"benziane.jpg",},
                {name:"Dr. Otman Tazi",cv:"- Spécialisé en endocrinologie et métabolisme \n - Médecin qualifié en diabétologie.",
                  src:"tazi.png",},
                {name:"Pr. Jaafar Heikel",cv:"- Professeur de Médecine Préventive \n - Docteur en Médecine Spécialiste en Maladies infectieuses et en Médecine Préventive . \n - Diplômé Universitaire en Nutrition et maladies métaboliques \n - Diplômé Universitaire en Diabétologie  \n - Maîtrise En Sciences en Santé communautaire , \n - PhD (Doctorat) en Epidémiologie  \n - MBA en finances et organisation  \n - Doctorant en Sciences Economiques ",
                  src:"heikel.png"},
                {name:"Dr. Hayat Najih",cv:"- Médecin Cardiologue au secteur libéral",
                  src:"najih.jpg",},
                {name:"Pr. Mustapha Benazzouz",cv:"- Ancien Maître assistant en médecine interne du CHU de Rabat. \n - Professeur titulaire en Hépato Gastro entérologie à la faculté de médecine de Rabat \n - Ancien chercheur à l’universtié Yamamashi au Japon \n - Membre de la société Européenne d’hépatologie \n - Vice-président de la société Marocaine d’endoscopie",
                  src:"benazzouz.png",},
                {name:"Pr. Louis Monnier",cv:"- Professeur émérite en Endocrinologie et Diabète à la Faculté de Médecine de Montpellier, Université Montpellier I, France \n - Diplômé en Médecine Nucléaire, Saclay, France (1970-1971) Diplômé en biomathématiques (1969-1970) \n - Chercheur au Laboratoire National de Brookhaven, Upton, NY, USA (1972-1973) \n - Auteur ou coauteur de plus de 200 articles publiés dans des journaux comme Diabetes Care, Diabetes, Diabetologia, JAMA, Am J clin Nutr, Eur J Clin Invest ..... \n - Secrétaire général de l'ALFEDIAM (actuel SFD) de 1980 à 1987",
                  src:"monnier.png",}, 
                {name:"Pr. Jean-louis Schlienger",cv:"- Chef de service de médecine interne, endocrinologue au CHU de Strasbourg \n - Professeur honoraire à la Faculté de Médecine de l'Université de Strasbourg",
                  src:"jean.png"},
                {name:"Pr. Bernard Bauduceau",cv:"- Professeur au Val de Grâce \n - Ancien chef de Service d'Endocrinologie à I‘Hôpital Bégin",
                  src:"bernard.png",},
                {name:"",cv:"",
                  src:"avatar-homme1.png",},
                {name:"",cv:"",
                  src:"avatar-homme1.png",}, 
                {name:"Pr. Olivier Ziegler",cv:"Endocrinologue diabétologue Vandoeuvre-les-nancy",
                  src:"ziegler.jpg",},
                {name:"Dr. Faouzi Benabdenabi",cv:"- Directeur Médical Hôpital Cheikh Khalifa \n - Secrétaire général de la société marocaine des sciences médicales \n - Medical Chief Officer auprès d’ODM",
                  src:"benabdennabi.png",},
                {name:"Pr. Naima Ouzeddoun",cv:"- Professeur en Néphrologie \n - Membre de la société marocaine des sciences médicales \n - Membre de la Société Marocaine de Néphrologie \n - Membre de l’Association des Insuffisants Rénaux Chroniques. \n - Reviewer pour la revue Néphrologie et Thérapeutique. \n - Membre du comité scientifique de la Revue Marocaine de Néphrologie (RMN)",
                  src:"ouzzedoun.jpg",},
                {name:"Pr. Abdelaziz Bakhatar",cv:"Médecin Pneumologue",
                  src:"bakhatar.jpg",},
                {name:"Dr. Selim Jambart",cv:"- Professeur honoraire d’endocrinologie, ancien vice-doyen and ancien chef du département d’endocrinologie-métabolisme à la faculté de médecine de l’Université St-Joseph, Beyrouth, Liban. \n - Fellow de l’American College of Endocrinology. \n - Membre de l’Endocrine Society, de l’American Association of Clinical Endocrinologists, de l’European Society of Endocrinology, de la Société Française d’Endocrinologie, de l’European Atherosclerosis Society et de l’European Association for the Study of Diabetes.",
                  src:"selim.jpg",}, 
                {name:"Dr. Fayçal El Guendouz",cv:"Chef de service d’Endocrinologie à l’hôpital Militaire Moulay Ismail – Meknes",
                  src:"guendouzz.jpeg",},
                {name:"Pr. Hicham Harmouch",cv:"Professeur de l’Enseignement Supérieur en Médecine Interne CHU Avicenne – Rabat",
                  src:"harmouch.png",},
                {name:"Dr. Jean-philippe Kevorkian",cv:"Cardiologue au service de diabétologie à l’hôpital Lariboisière (Paris)",
                  src:"kevorkian.jpg",},
                {name:"Pr. Ahmed Bennis",cv:"Professeur de cardiologie de la Faculté de Médecine de Casablanca",
                  src:"bennis.jpg"},
                {name:"ذ. أحمد عزيز بوصفيحة",cv:"رئيس قسم الأمراض التعفنية و المناعاتية عند الطفل \n مدير مختبر البحث في المناعة السريرية و الإلتهاب و الأرجية LICIA \n المشفى الجامعي ابن رشد، كلية الطب و الصيدلة، جامعة الحسن الثاني، الدار البيضاء \n مدير المجلة الصحية المغربية التي تصدرها الجمعية المغربية للتواصل الصحي ",
                  src:"bousfiha.jpg",},
                {name:"Pr. Redouane Rabii",cv:"Spécialiste en Urologie et chirurgie urologique à Casablanca",
                  src:"rabii.jpg",},
                {name:"Pr. Laila Bendriss",cv:"",
                  src:"avatar-homme1.png",},
                {name:"Pr. Adil Khoubila",cv:"Professeur Agrégé de Psychiatrie",
                  src:"khoubila.jpg"},
                {name:"Dr. Mohamed Khlafa",cv:"Endocrinologue Libéral à Mohammedia",
                  src:"khlafa.png"},
                
            ],
            responsive: [
                [200, 1],[767, 2],[1000, 4]
            ],
            animation:true
        }
    },
    props: ['slideshow'],
    components: {
        Carousel,
        Slide
    },
    methods: {
      hideHand(){
        this.animation = false
      }
    },

    mounted() {
      
    
  },
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.v-card--reveal-first {
  align-items: center;
  top: 120px;
  justify-content: center;
  position: absolute;
  width: 100%;
  font-size:1.2em
}
.cvtext{
    display: block;
    font-size:0.8em;
    white-space: pre-line
}
@media (min-width: 800px) and (max-width: 1100px) {
  .cvtext{
   display: block;
   font-size:1.1vw;
}
.v-card--reveal-first {
  font-size:1em
}
}
@media (max-width: 767px) {
  .cvtext{
  display: block;
   font-size:0.9em;
}
}
@media (max-width: 767px) {
  .cvtext{
  display: block;
   font-size:0.9em;
}
}
@media (max-width: 400px) {
  .cvtext{
  display: block;
   font-size:0.8em;
}
}
@media (max-width: 360px) {
  .cvtext{
  display: block;
   font-size:0.7em;
}
}
.carros{
  position: relative;
}
@-webkit-keyframes pulsate {
  from {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.pulsate {
  position: absolute;
  top: 50%;
  left: 12.5%;
  animation-name: pulsate;
  animation: pulsate 5s infinite;
  animation-duration: 5s;
}

@media (max-width: 480px) {
  .pulsate {
      left: 45%;
    }
}




</style>