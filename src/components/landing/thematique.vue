<template>
  <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 class="propsHead compHead" style="color:#F38E3C"  >
              Mot du président
            </h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-1" cols="12">
              <v-card>
                  <div style="text-align: left;background-color:white;text-align: justify;text-justify: inter-word;transition: all 4s;" class="pa-5 text">
                  <v-img  class="img-responsive m-3" src="../../assets/nordin.jpg" width="150" style="float: left;">
                  </v-img>
                    Chères consœurs, chers confrères<br>
                    Bienvenue à Fès, capitale culturelle et spirituelle où je vous souhaite un agréable séjour en joignant l’utile à l’agréable.<br>
                    Après de longs mois marqués par la pandémie Covid-19 et qui nous ont bien marqués, nous sommes heureux de vous retrouver en présentiel.<br>
                    Oui, cette année et EL HAMDOU LILLAH, les membres du bureau de l’ADN et moi-même nous sommes contents de l’organisation en présentiel de la 8ème édition du Congrès National annuel de l’ADN au siège de la Faculté de Médecine, de Pharmacie et de Médecine Dentaire.<br>
                    La thématique principale de notre congrès cette année est intitulée : « Les variabilités métaboliques : de leurs définitions à leurs réductions en passant par leurs physiologies et leurs conséquences »<br>
                    Cette thématique est programmée le Vendredi après-midi et sera traitée en visioconférence.
                    <h1 style="text-align: right;" class="blue--text" v-show="!more" @click="more = !more"><b><a>+</a></b></h1>
                    <span style="transition: all 4s;" v-show="more">
                    Je vous invite à être nombreux à assister ; c’est une première.<br>
                    A noter que le programme de notre congrès vous propose également à travers ses sessions, ses symposiums et ses ateliers pratiques, beaucoup d’aspects de la diabétologie moderne et de ses thérapeutiques innovantes.<br>
                    Je tiens à remercier nos aimables conférenciers nationaux et internationaux pour leur participation active au congrès et pour leur engagement continu et soutenu avec l’ADN.<br>
                    Je tiens à remercier M. le Doyen de la Faculté de Médecine, de Pharmacie et de Médecine Dentaire de Fès ainsi que tous ses proches collaborateurs pour leurs efforts et leur grande coopération.<br>
                    Je remercie tous les congressistes ayant participé au congrès ; Je suis certains que par votre présence effective, cette rencontre va connaitre un grand succès auquel vous êtes habitués.<br>
                    Je remercie les laboratoires de l’industrie pharmaceutique pour leur indéfectible engagement et leur   grand soutien.<br>
                    Mes vives remerciements à toutes celles et ceux qui ont contribué à la réussite de cette 8ème édition<br>
                    Bienvenue à tous et à toutes et bon congrès !<br><br>
                    <b >Dr Noureddine Essekkat PRÉSIDENT DE L’ADN</b>
                    </span>
                    <h1 style="text-align: right;" class="blue--text" v-show="more" @click="more = !more"><b><a>-</a></b></h1>
                  </div>  
              </v-card> 
            </v-col>
        </v-row>
        </v-container>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      more:false
    }
  },
}
</script>
<style >
.propo{
    text-align: center;
}

@media all and (max-width: 768px) {
  
  .propsHead{
    font-size: 1.5rem;
    padding: .75rem;
    color:#EC5713
  }
}
</style>