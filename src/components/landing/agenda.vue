<template>
    <v-container>
    <v-row>
    <v-col align="center">
        <h1 style="color:#F38E3C"  class="compHead">PROGRAMME</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row>
    <v-col>
        <nav style="background-color:white" class="navbar navbar-light navbar-expand bg-faded justify-content-center ">
                <ul class="nav navbar-nav  justify-content-center child " style="text-align:center">
                   <li class="agendaLink mr-1"><router-link to="/landingpage/15oct"><b>VENDREDI 15 OCTOBRE </b></router-link></li>
                    <li class="agendaLink2"><router-link to="/landingpage/16oct"><b>SAMEDI 16 OCTOBRE </b></router-link></li>      
                </ul>
        </nav>
        <div class="mt-5">
            <router-view v-on:gotoslide="getslide"></router-view>
        </div>
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    methods: {
      getslide(num){
          this.$emit('slidenum',num);
      }
    },
    
}
</script>
<style>
.agendaLink{
    color:white;
    background-color:#0C3D58;
}
.agendaLink2{
    color:white;
    background-color:#0C3D58;
}
.child li a{
  color:#fff!important;
  transition: 0.3s;
  width:200px;
  padding:8px!important
}
.child li a:hover{
  color:white!important;
  background-color:#F19840!important
}
a.router-link-exact-active{
   background-color:#F19840!important
}

@media (max-width: 480px) {

.child li a{
  width:150px;
  padding:2px!important;
  font-size:0.7em
}

}

@media (max-width: 390px) {

.child li a{
  width:120px;
  padding:1px!important;
  font-size:0.6em
}

}
</style>