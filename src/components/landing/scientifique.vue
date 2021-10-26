<template>
<v-parallax src="..\..\assets\fes.jpg" class="comiteparrp mt-5">
    <v-container grid-list-xs>
        <v-container>
            <v-row>
                <v-col cols="12" md="4" sm="12" align="center">
                <img  class="img-responsive " src="..\..\assets\adn2.png" height="80" width="200" >
                </v-col>
                <v-col cols="12" md="4" sm="12" align="center" >
                <img  class="img-responsive " src="..\..\assets\adn1.png" height="80" width="200" >
                </v-col>
                <v-col cols="12" md="4" sm="12" align="center">
                <img  class="img-responsive " src="..\..\assets\adn3.png" height="80" width="200" >
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</v-parallax>  
</template>
<script>
export default {
    data() {
        return {
            speakers: [
                 {name:"Aawatif Hayar",cv:"Présidente de l’Université Hassan II de Casablanca",
                  src:"awatif.png",},
                {name:"Hassan Radoine",cv:"Directeur Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique.",
                  src:"hassan.png",},     
            ],
        }
    },
}
</script>
<style >
.compHead{
    font-size: 1.9375rem;
}
.comiteparrp{
    height: 350px!important;
}
@media all and (max-width: 768px) {

  .comiteparrp{
    height: 700px!important;
 }
}

</style>