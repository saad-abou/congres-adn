<template>
    <div class="">
        <v-timeline align-top dense>
        <v-row>
        <v-col class="titreline"  >
            <b  >ATELIERS</b>
        </v-col>
        </v-row>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>9:00-10:00</strong>
                </v-col>
            </v-row>
            <v-row>     
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(0)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/morjane.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Asmaa Morjane</b>
                    </a><br>
                    <span class="sessionTitre ml-14">A1 : Quand est-ce qu’on ne peut pas se fier au dosage de l’hémoglobine glyquée ?</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Benchekroune,</b>
                                <b class="ml-1" style="color:#ABA09C">Mohamed Lazrak</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(1)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/saada.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Abdellatif Saada</b>
                    </a><br>
                    <span class="sessionTitre ml-14">A2 : la prise en charge nutritionnelle du patient Diabétique </span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Belfatmi,</b>
                                <b class="ml-1" style="color:#ABA09C">El Mostafa Kamal Benjelloun</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(2)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/benziane.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Mme Hinde Benziane</b>
                    </a><br>
                    <span class="sessionTitre ml-14">A3 : L' examen du pied d'un patient diabétique "Gestes essentiels" </span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Fatima Nibani,</b>
                                <b class="ml-1" style="color:#ABA09C">Driss Rochd</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-row>
        <v-col cols="10" class="titreline" >
            <b >SÉANCES PLÉNIÈRES</b>
        </v-col>
        </v-row>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>10:00-10:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(3)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/tazi.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Otman Tazi</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Grossesse et Diabète</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Allach,</b>
                                <b class="ml-1" style="color:#ABA09C">El Hassan El Mahdaoui</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="indigo darken-3" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>10:30-11:00</strong>
                </v-col>
                <v-col  cols="11" align="center" >
                    <strong style="color:#F38F3C">PAUSE CAFÉ - VISITE DES STANDS</strong>
                </v-col>
            </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>11:00-11:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(0)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/morjane.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Asmaa Morjane</b>
                    </a><br>
                    <span class="sessionTitre ml-14">‘’Avantages et inconvénients de la Glycémie Veineuse Versus Capillaire’’</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Said Rizk,</b>
                                <b class="ml-1" style="color:#ABA09C">Khalid Hamamsi</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>11:30-12:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(4)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/heikel.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Jaafar Heikel</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Covid-19 et maladies métaboliques</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Belfatmi,</b>
                                <b class="ml-1" style="color:#ABA09C">Abdellah Belhouari</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>12:00-12:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(5)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/najih.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Hayat Najih</b>
                    </a><br>
                    <span class="sessionTitre ml-14">L'Ischémie Myocardique chez le Patient Diabétique</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Benchekroune,</b>
                                <b class="ml-1" style="color:#ABA09C">Ahmed Bakri</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>12:30-13:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(6)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/benazzouz.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Mustapha Benazzouz</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Gastroparésie du diabétique ; diagnostic et prise en charge</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Abdelilah El Azrak,</b>
                                <b class="ml-1" style="color:#ABA09C">Driss Rochd</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="indigo darken-3" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>13:00-15:00</strong>
                </v-col>
                <v-col  cols="8" align="center" >
                    <strong style="color:#F38F3C">PAUSE PRIÈRE ET DÉJEUNER</strong>
                </v-col>
            </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="">
                <v-col cols="12">
                    <strong>15:00-16:00</strong>
                </v-col>
                <v-col cols="12" align="center" >
                    <strong class="sessionTitre titreline2 text-center" >Inauguration Officielle du Congrès</strong>
                </v-col>
            </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>16:00-16:10</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(7)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/monnier.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Louis Monnier</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Introduction : les Variabilités Métaboliques : 
                        vagues dangereuses ou ondulations lentes marqueuses de danger ?</span>
                        <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Abdelilah El Azrak,</b>
                                <b class="ml-1" style="color:#ABA09C">Nour-Eddine Essekkat</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>16:10-16:50</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(8)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/jean.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Jean-louis Schlienger</b>
                    </a><br>
                    <span class="sessionTitre ml-14">La Variabilité Pondérale, est-elle un marqueur de Risque Cardio-Métabolique ?</span>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>16:50-17:30</strong>
                </v-col>
            </v-row>
             <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(9)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/bernard.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Bernard Bauduceau</b>
                    </a><br>
                    <span class="sessionTitre ml-14">La Variabilité de la Pression Artérielle au cours du Diabète : causes et conséquences</span>
                </v-col>
            </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>17:30-18:15</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(7)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/monnier.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Louis Monnier</b>
                    </a><br>
                    <span class="sessionTitre ml-14">La Variabilité Glycémique, un facteur de risque à conjuguer au pluriel</span>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>18:15-19:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(12)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/ziegler.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Olivier Ziegler</b>
                    </a><br>
                    <span class="sessionTitre ml-14">La Variabilité des Triglycérides Plasmatiques</span>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="indigo darken-3" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>19:00-20:00</strong>
                </v-col>
                <v-col  cols="12" align="center" >
                    <strong style="color:#F38F3C">PAUSE CAFÉ DÎNATOIRE - VISITE DES STANDS</strong>
                </v-col>
            </v-row>
        </v-timeline-item>
        </v-timeline>
    </div>
</template>
<script>
export default {

    metaInfo() {
        return{
        
      }
    },
    methods: {
        slideTo(num){
            this.$emit('gotoslide',num)
        }
    },
    
}
</script>
<style >

.sessionTitre{
    color: #007DA4;
}
.titreline{
    margin-left: 60px!important;
    color: #F28F3D;
    font-size:1.5em 
}
.titreline2{
    margin-left: 60px!important;
    color: #1B84A5;
    font-size:1.5em 
}

@media all and (max-width: 768px) {
  
  .horaire{
      font-size: 0.9em;
      padding-left: 1px!important;
    }
    .titreline{
        margin-left: 60px!important;
        color: #F28F3D;
        font-size:1em 
    }
    .titreline2{
        margin-left: 20px!important;
        color: #1B84A5;
        font-size:1.2em 
    }

    .sessionTitre{
        font-size: 0.9em;
    }
  
}


@media all and (max-width: 280px) {
  
  
    .sessionTitre{
        font-size: 0.6em;
    }
  
}


</style>