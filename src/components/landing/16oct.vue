<template>
    <div class="">
        <v-timeline align-top dense>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>8:45-9:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(13)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/benabdennabi.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Faouzi Benabdenabi</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Gestion Péri-Opératoire du patient sous Antithrombotiques</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Abdelmoumen Samir,</b>
                                <b class="ml-1" style="color:#ABA09C">Abderrahim Lachhab</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>09:30-10:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(14)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/ouzzedoun.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Naima Ouzeddoun</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Diabète, HTA et microalbuminurie</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> El Hassan El Mahdaoui,</b>
                                <b class="ml-1" style="color:#ABA09C">El Mostafa Kamal Benjelloun</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6" sm="12" align="right">
                   <img width="120" src="../../assets/spon-01.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>10:00-10:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="10" sm="12"  align="left" >
                    <a href="#speakers" @click="slideTo(15)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/bakhatar.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Abdelaziz Bakhatar</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Place des Fluoroquinolones de 3G dans le traitement 
                        des Infections Respiratoires Aiguës Basses chez le Praticien</span>
                        <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Fatima Nibani,</b>
                                <b class="ml-1" style="color:#ABA09C">Abdellah Belhouari</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-02.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                <strong>10:30-11:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="10" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(16)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/selim.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Selim Jambart</b>
                    </a><br>
                    <span class="sessionTitre ml-14">ISGLT2 & gestion précoce des Complications Cardiovasculaires du DT2</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateur :</b><b class="ml-1" style="color:#ABA09C"> Nour-Eddine Essekkat</b>  
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-03.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="indigo darken-3" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>11:00-11:30</strong>
                </v-col>
                <v-col  cols="11" align="center" >
                    <strong style="color:#F38F3C">PAUSE CAFÉ - VISITE DES STANDS</strong>
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
                <v-col cols="12"  md="10" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(17)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/guendouzz.jpeg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Fayçal El Guendouz</b>
                    </a><br>
                    <span class="sessionTitre ml-14">L’intensification de la basale ; schéma basale plus avec la Glargine U 300</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Abdelmoumen Samir,</b>
                                <b class="ml-1" style="color:#ABA09C">Abderrahim Lachhab</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-04.png" alt="Fabienne"> 
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
                    <a href="#speakers" @click="slideTo(18)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/harmouch.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Hicham Harmouch</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Approche diagnostique et thérapeutique des Douleurs Neuropathiques en Médecine Interne</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Abdelilah El Azrak,</b>
                                <b class="ml-1" style="color:#ABA09C">Driss Rochd</b>
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
                <v-col cols="12" md="10" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(19)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/kevorkian.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Jean-philippe Kevorkian</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Prise en charge de l’Hyperldlémie chez le Patient 
                        Diabétique à haut Risque Cardiovasculaire</span>
                        <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Nour-Eddine Essekkat,</b>
                                <b class="ml-1" style="color:#ABA09C">Khalid Hamamsi</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-05.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>13:00-13:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="10" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(20)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/bennis.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Ahmed Bennis</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Du nouveau dans l’Hypertension Artérielle en 2021 
                        à la lumière des grands essais récents et des nouvelles recommandations</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Belfatmi,</b>
                                <b class="ml-1" style="color:#ABA09C">Khalid Hamamsi</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-06.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="indigo darken-3" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>13:30-15:00</strong>
                </v-col>
                <v-col  cols="10" align="center" >
                    <strong style="color:#F38F3C">DÉJEUNER</strong>
                </v-col>
            </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>15:00-15:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(21)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/bousfiha.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">ذ. أحمد عزيز بوصفيحة</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Quand est ce que la pandémie Covid se terminera ?<br>متى تنتهي جائحة كوفيد</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Abdelilah El Azrak,</b>
                                <b class="ml-1" style="color:#ABA09C">Driss Rochd</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>15:30-16:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="10" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(22)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/rabii.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Redouane Rabii</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Hyperactivité Vésicale chez le diabétique : prise en charge chez le Praticien</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> El Mostafa Kamal Benjelloun,</b>
                                <b class="ml-1" style="color:#ABA09C">Mohamed Lazrak</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-02.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>16:00-16:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(3)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/tazi.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Otman Tazi</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Place de la Linagliptine dans le Traitement du Diabète type 2</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Mohamed Benchekroune,</b>
                                <b class="ml-1" style="color:#ABA09C">Ahmed Bakri</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6" sm="12" align="right">
                   <img width="120" src="../../assets/spon-06.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>16:30-17:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="10" sm="12" align="left" >
                    <a href="#speakers" @click="slideTo(23)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/avatar-homme1.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Laila Bendriss</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Pour quel profil patient proposer l'association Bisoprolol-Amlodipine ?</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> El Hassan El Mahdaoui,</b>
                                <b class="ml-1" style="color:#ABA09C">Mohamed Lazrak</b>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="2" sm="12" align="right">
                   <img width="120" src="../../assets/spon-07.png" alt="Fabienne"> 
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>17:00-17:30</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(24)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/khoubila.jpg" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Pr. Adil Khoubila</b>
                    </a><br>
                    <span class="sessionTitre ml-14">Les Neuroleptiques à faible dose en Médecine Générale</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Said Rizk,</b>
                                <b class="ml-1" style="color:#ABA09C">Hassan Chahid</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="amber darken-4" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>17:30-18:00</strong>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="left" >
                    <a href="#speakers" @click="slideTo(25)" style="text-decoration:none">
                        <v-avatar>
                        <img src="../../assets/khlafa.png" alt="Fabienne">
                        </v-avatar>
                        <b class="ml-2">Dr. Mohamed Khlafa</b>
                    </a><br>
                    <span class="sessionTitre ml-14">L’insulinotherapie chez le Dialysé</span>
                    <v-row class="mt-1">
                        <v-col cols="12" md="12" sm="12" align="left" class="" style="text-justify: inter-word;">
                          <b style="color:#1976D2">Modérateurs :</b><b class="ml-1" style="color:#ABA09C"> Nour-Eddine Essekkat,</b>
                                <b class="ml-1" style="color:#ABA09C">Ahmed Bakri</b>
                        </v-col>
                    </v-row>
                </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item  color="indigo darken-3" small>
            <v-row class="pt-1">
                <v-col cols="12">
                    <strong>18:00-19:00</strong>
                </v-col>
                <v-col  cols="11" align="center" >
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



</style>