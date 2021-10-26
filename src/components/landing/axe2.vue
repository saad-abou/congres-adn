<template>
    <div class="p-5">
        <v-row>
            <v-col align="center">
            <h1 style="color:#F38E3C"  class="compHead">THÈME</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row class="safariFlex">
            <v-col cols="12" md="6" sm="12" align="center" class=" safariFlex-colum"  >
                <v-img  src="../../assets/fes2.jpg"
                data-aos-once="true" width="100%"
                aspect-ratio="1.4"
                alt="REGENERATION URBAINE"
                data-aos="fade-down" > 
                </v-img>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="pa-md-10  safariFlex-colum"  >           
                <div class="propotext mt-md-10" style="list-style-type: square;text-align: left;color:#027EA4">
                   " Les variabilités métaboliques : De leurs définitions à leurs
                    réductions en passant par leurs physiopathologies et leurs conséquences "<br>
                </div>
                <div class="propotext head1 mt-5" style="list-style-type: square;text-align: right;color:#027EA4">
                    <b>التغايرات الأيضية : من التعريفات إلى التقليص مرورا بالأعراض و العواقب</b>
                </div>
            </v-col>
        </v-row>
    </div>  
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>

.axeHead{
    text-align:left;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.9375rem;
    font-weight: 800
}
.titleLine {
    content: "";
    display: block;
    width: 4.375rem;
    height: .25rem;
    background-color: #FBB400;
    bottom: 0;
    left: 0;
}
.propotext{
    font-size: 1.5em;
    font-weight: bold;
}
.safariFlex{
    margin: auto;
}

   .orderFix #bf   {order: 1;}
    .orderFix #af {order: 2;}
    .orderFix #df   {order: 1;}
    .orderFix #cf {order: 2;}

    .orderFix #bf   {-webkit-order: 1;}
    .orderFix #af {-webkit-order: 2;}
    .orderFix #df   {-webkit-order: 1;}
    .orderFix #cf {-webkit-order: 2;}

@media screen and (min-width: 770px) {

    .safariFlex{
        display: flex;
        display: -webkit-box;
         display:-webkit-flex; 
    }
    .safariFlex-colum{
        flex: 0 0 50%;
    }
    .safariFlex-colum-foter{
         flex: 0 0 70%;
    }
  

}

@media all and (max-width: 767px) {

    .orderFix #bf   {order: 2;}
    .orderFix #af {order: 1;}
    .orderFix #df   {order: 2;}
    .orderFix #cf {order: 1;}

    .orderFix #bf   {-webkit-order: 2;}
    .orderFix #af {-webkit-order: 1;}
    .orderFix #df   {-webkit-order: 2;}
    .orderFix #cf {-webkit-order: 1;}

    .propotext{
        font-size: 0.8em;
    
    }
}
@media (max-width: 980px) {

    .axeHead{
        font-size: 1rem!important;     
    }

}

@media (max-width: 390px) {

    .axeHead{
        font-size: 1.5rem!important;     
    }

}

</style>