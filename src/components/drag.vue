<template>
  <v-container class="background1" fluid>
    <v-row justify="center">
      <v-col align="center" cols="1">
        <v-row>
          <div class="box_obj" id="boxObj">
            <img class="img-drag" id="imgDrag8" :draggable="true" @dragover.stop @dragstart="DragStart($event, 8)" @dragend="DragEnd($event)" src="../assets/motriz/Estabilidad/spin.png"/>
            <img class="img-drag" id="imgDrag1" :draggable="true" @dragover.stop @dragstart="DragStart($event, 1)" @dragend="DragEnd($event)" src="../assets/motriz/Locomotriz/craw.png"/>
            <img class="img-drag" id="imgDrag11" :draggable="true" @dragover.stop @dragstart="DragStart($event, 11)" @dragend="DragEnd($event)" src="../assets/motriz/Manipulativa/kick.png"/>
            <img class="img-drag" id="imgDrag5" :draggable="true" @dragover.stop @dragstart="DragStart($event, 5)" @dragend="DragEnd($event)" src="../assets/motriz/Estabilidad/bicycle.png"/>
            <img class="img-drag" id="imgDrag7" :draggable="true" @dragover.stop @dragstart="DragStart($event, 7)" @dragend="DragEnd($event)" src="../assets/motriz/Estabilidad/fitness.png"/>
            <img class="img-drag" id="imgDrag2" :draggable="true" @dragover.stop @dragstart="DragStart($event, 2)" @dragend="DragEnd($event)" src="../assets/motriz/Locomotriz/jump.png"/>
            <img class="img-drag" id="imgDrag9" :draggable="true" @dragover.stop @dragstart="DragStart($event, 9)" @dragend="DragEnd($event)" src="../assets/motriz/Manipulativa/catch.png"/>
            <img class="img-drag" id="imgDrag3" :draggable="true" @dragover.stop @dragstart="DragStart($event, 3)" @dragend="DragEnd($event)" src="../assets/motriz/Locomotriz/run.png"/>
            <img class="img-drag" id="imgDrag12" :draggable="true" @dragover.stop @dragstart="DragStart($event, 12)" @dragend="DragEnd($event)" src="../assets/motriz/Manipulativa/throw.png"/>
            <img class="img-drag" id="imgDrag4" :draggable="true" @dragover.stop @dragstart="DragStart($event, 4)" @dragend="DragEnd($event)" src="../assets/motriz/Locomotriz/walk.png"/>
            <img class="img-drag" id="imgDrag10" :draggable="true" @dragover.stop @dragstart="DragStart($event, 10)" @dragend="DragEnd($event)" src="../assets/motriz/Manipulativa/hit.png"/>
            <img class="img-drag" id="imgDrag6" :draggable="true" @dragover.stop @dragstart="DragStart($event, 6)" @dragend="DragEnd($event)" src="../assets/motriz/Estabilidad/equilibrium.png"/>

          </div>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col align="center">
            <v-row justify="center">
              <h2 class="h2_title mb-1" > LOCOMOTRICES</h2>
              <div class="box_circulo" id="box-drop1" @dragover.prevent @drop.prevent="Drop($event,1,2,3,4)"/>
            </v-row>
          </v-col>
          <v-col align="center">
            <v-row justify="center">
              <h2 class="h2_title mb-1" > ESTABILIDAD</h2>
              <div class="box_circulo" id="box-drop2" @dragover.prevent @drop.prevent="Drop($event,5,6,7,8)"/>
            </v-row>
          </v-col>
          <v-col align="center">
            <v-row justify="center">
              <h2 class="h2_title mb-1" > MANIPULATIVAS</h2>
              <div class="box_circulo" id="box-drop3" @dragover.prevent @drop.prevent="Drop($event,9,10,11,12)"/>
            </v-row>
          </v-col>
           <v-row justify="center">
             <div class="div_p  mb-1">
              <p>Arrastra las <b>Imagenes</b> que tengan relaciónes con las tres <b>clasificaciónes</b> 
                de las Habilidades Motrices Basicas (Locomotrices, Estabilidad y Manipulativa)
              </p>
             </div>
            </v-row>
        </v-row>
      </v-col>
    </v-row>
    
      <v-snackbar
      v-model="snackbar1"
      :timeout="timeout"
      rounded="pill"
      centered
      >
      <h1>
        <v-icon x-large color="#00BCD4">
         mdi-emoticon-outline
        </v-icon>
          ¡PERFECTO!
      </h1>
    </v-snackbar>

    <v-snackbar
      v-model="snackbar2"
      :timeout="timeout"
      rounded="pill"
      >
      <h1>
        <v-icon x-large color="red">
         mdi-emoticon-sad-outline
        </v-icon>
          ¡Oops, MAl!
      </h1>
    </v-snackbar>

  </v-container>
</template>

<style>
* {
  padding: 0;
  margin: o;
  box-sizing: border-box;
}
 .background1{
  background-color: rgba(255, 255, 255, 0.995);
  border-radius: 0px 0px 10px 10px;
  border: 2px solid rgb(0, 66, 66,0.2);
  border-top: 0px;
} 

.box_obj {
  background-color: rgba(255, 255, 255, 0.999);
  width: 100%;
  height: 500px;
  border-radius: 5px;
  overflow-y: hidden;
  overflow: scroll;
  overflow-x: hidden;
}

.box_circulo {
  background-color: rgba(188, 255, 233, 0.1);
  border-radius: 100%;
  position: static;
  z-index: 1;
  border: 3px dashed rgba(0, 0, 0, 0.7);
  width: 390px;
  height: 390px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.h2_title{
  width: 95%;
  border-top:2px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.8);
}

.img-drag {
  opacity: 0.6;
  width: 85%;
  cursor: grab;
  transition: all 0.2s;
}

.img-drag:hover{
   width: 87%;
   opacity: 1;
}

.img-drop {
  opacity: 0.9;
  width: 100px;
  cursor: grab;
}

.img-drop:hover{
   opacity: 1;
   width: 102px;
   opacity: 1;
}

.div_p{
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0,0.9);
  padding: 5px;
  border-radius:10px ;
  border: 1px solid teal;
  font-size: 17px;
}



/* Tamaño del scroll */
.box_obj::-webkit-scrollbar {
  width: 8px;
}

/* Estilos barra (thumb) de scroll */
.box_obj::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.box_obj::-webkit-scrollbar-thumb:active {
  background-color: #999999;
}

.box_obj::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Estilos track de scroll */
.box_obj::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 4px;
}

.box_obj::-webkit-scrollbar-track:hover,
.box_obj::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
</style>

<script>
export default {
  data: () => ({
    snackbar1:false,
    snackbar2:false,
    timeout:1000,
    contador:12,
    drop1:null,
    drop2:null,
    drop3:null,
    drop4:null,
    drag:null,
    win:{
      n1: false,
      n2: false,
      n3: false,
      n4: false,
      n5: false,
      n6: false,
      n7: false,
      n8: false,
      n9: false,
      n10: false,
      n11: false,
      n12: false,
    }
     
  }),

  methods: {

    intentos(){
      const element=document.getElementById("boxObj");
      this.contador=element.children.length;
    },

    verificar(){
      if(this.contador<=1){
        if(this.win.n1==true&&
           this.win.n2==true&&
           this.win.n3==true&&
           this.win.n4==true&&
           this.win.n5==true&&
           this.win.n6==true&&
           this.win.n7==true&&
           this.win.n8==true&&
           this.win.n9==true&&
           this.win.n10==true&&
           this.win.n11==true&&
           this.win.n12==true){
            this.snackbar1=true;
            window.location.reload();
           }else{
              this.snackbar2=true;
           }
      }
    },

    comprobar(){
      switch (this.drag) {
        case 1: 
          if(this.drag==this.drop1){
              this.win.n1=true;
          }else{
            this.win.n1=false;
          }
        break;

        case 2: 
          if(this.drag==this.drop2){
              this.win.n2=true;
          }else{
            this.win.n2=false;
          }
        break;

        case 3: 
          if(this.drag==this.drop3){
              this.win.n3=true;
          }else{
            this.win.n3=false;
          }
        break;

        case 4: 
          if(this.drag==this.drop4){
              this.win.n4=true;
          }else{
            this.win.n4=false;
          }

        break;

// ------------------------------------------

        case 5: 
          if(this.drag==this.drop1){
              this.win.n5=true;
          }else{
            this.win.n5=false;
          }
        break;

        case 6: 
          if(this.drag==this.drop2){
              this.win.n6=true;
          }else{
            this.win.n6=false;
          }
        break;

        case 7: 
          if(this.drag==this.drop3){
              this.win.n7=true;
          }else{
            this.win.n7=false;
          }
        break;

        case 8: 
          if(this.drag==this.drop4){
              this.win.n8=true;
          }else{
            this.win.n8=false;
          }
        break;

// ------------------------------------------

        case 9: 
          if(this.drag==this.drop1){
              this.win.n9=true;
          }else{
            this.win.n9=false;
          }
        break;

        case 10: 
          if(this.drag==this.drop2){
              this.win.n10=true;
          }else{
            this.win.n10=false;
          }
        break;

        case 11: 
          if(this.drag==this.drop3){
              this.win.n11=true;
          }else{
            this.win.n11=false;
          }
        break;

        case 12: 
          if(this.drag==this.drop4){
              this.win.n12=true;
          }else{
            this.win.n12=false;
          }
        break;
      }
      this.verificar();
    },

    Drop(e,n1,n2,n3,n4) {
      const element = e.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("img-drop");
      data.draggable=true;
      e.target.appendChild(data);
      this.drop1=n1;
      this.drop2=n2;
      this.drop3=n3;
      this.drop4=n4;
      this.comprobar();
      this.intentos();
    },


    DragStart(e,n) {
      const target = e.target;
      e.dataTransfer.setData("element", target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
      this.drag=n;
    },

    DragEnd(e) {
      const target = e.target;
      e.dataTransfer.setData("element", target.id);
      target.style.display = "block";
    },
  },
};
</script>
