<template>
  <v-container class="background1" fluid>
    <v-row justify="center">
      <v-col align="center" cols="4">
        <h2 class="title2">Piezas del Puzzle</h2>
        <div id="cont" class="cont_img">
          <img src="../assets/running/puzzle1.png" id="drag1" :draggable="true" @dragover.stop @dragstart="dragStart($event, 1)" @dragend="dragEnd($event, 1)" class="img_drag"/>
          <img src="../assets/running/puzzle4.png" id="drag4" :draggable="true" @dragover.stop @dragstart="dragStart($event, 4)" @dragend="dragEnd($event, 4)" class="img_drag"/>
          <img src="../assets/running/puzzle3.png" id="drag3" :draggable="true" @dragover.stop @dragstart="dragStart($event, 3)" @dragend="dragEnd($event, 3)" class="img_drag"/>
          <img src="../assets/running/puzzle6.png" id="drag6" :draggable="true" @dragover.stop @dragstart="dragStart($event, 6)" @dragend="dragEnd($event, 6)" class="img_drag"/>
          <img src="../assets/running/puzzle8.png" id="drag8" :draggable="true" @dragover.stop @dragstart="dragStart($event, 8)" @dragend="dragEnd($event, 8)" class="img_drag"/>
          <img src="../assets/running/puzzle5.png" id="drag5" :draggable="true" @dragover.stop @dragstart="dragStart($event, 5)" @dragend="dragEnd($event, 5)" class="img_drag"/>
          <img src="../assets/running/puzzle7.png" id="drag7" :draggable="true" @dragover.stop @dragstart="dragStart($event, 7)" @dragend="dragEnd($event, 7)" class="img_drag"/>
          <img src="../assets/running/puzzle2.png" id="drag2" :draggable="true" @dragover.stop @dragstart="dragStart($event, 2)" @dragend="dragEnd($event, 2)" class="img_drag"/>
        </div>
        <div v-show="activador==true">
          <v-row>
            <v-col>

          <h3>¿Que Habilidad Motriz es...?</h3>
          <v-radio-group
            column
            v-model="value">
            <v-radio
              label="Caminar"
              color="teal"
              value="0">
            </v-radio>
            <v-radio
              label="Saltar"
              color="teal"
              value="1">
            </v-radio>
            <v-radio
              label="Correr"
              color="teal"
              value="2">  
            </v-radio>
            <v-radio
              label="Rodar"
              color="teal"
              value="3">
            </v-radio>
            </v-radio-group>
          <v-btn block color="teal" outlined rounded @click="verificar()">
          COMPROBAR
          </v-btn>
            </v-col>
          </v-row>
      </div>
       <v-btn  class=" mt-2" block color="pink" outlined rounded @click="actualizar()">
          Reintentar
          </v-btn>
      </v-col>
      <v-col align="center">
        <v-row justify="center">
          <h3 class="title">
            Completa el Rompecabeza y logra identificar una Habilidad Motriz
            Basica
          </h3>
        </v-row>
        <v-row justify="center">
          <div class="box-img" id="drop1" @dragover.prevent @drop.prevent="drop($event, 1)"/>
          <div class="box-img" id="drop2" @dragover.prevent @drop.prevent="drop($event, 2)"/>
          <div class="box-img" id="drop3" @dragover.prevent @drop.prevent="drop($event, 3)"/>
          <div class="box-img" id="drop4" @dragover.prevent @drop.prevent="drop($event, 4)"/>
        </v-row>
        <v-row justify="center">
          <div class="box-img" id="drop5" @dragover.prevent @drop.prevent="drop($event, 5)"/>
          <div class="box-img" id="drop6" @dragover.prevent @drop.prevent="drop($event, 6)"/>
          <div class="box-img" id="drop7" @dragover.prevent @drop.prevent="drop($event, 7)"/>
          <div class="box-img" id="drop8" @dragover.prevent @drop.prevent="drop($event, 8)"/>
        </v-row>
      </v-col>

      <v-dialog v-model="dialog" persistent max-width="590">
        <template v-slot:activator="{ }"> </template>
        <v-card>
          <v-card-title class="headline">
            <v-icon x-large color="#009688">
              mdi-check
            </v-icon>
            Locomotrices: ¡Correr!
          </v-card-title>
          <v-card-text>
            Movimiento que tiene como objetivo principal 
            llevar al cuerpo de un lado a otro del espacio con esfuerzo fisico.
            </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false, actualizar()">
              Continuar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

      <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      rounded="pill"
      >
      <h2>
        <v-icon x-large color="#00BCD4">
         mdi-emoticon-outline
        </v-icon>
          ¡PERFERCTO!
      </h2>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>


    <v-snackbar
      v-model="snackbar2"
      :timeout="timeout"
      rounded="pill"
      >
      <h2>
        <v-icon x-large color="#FF5722">
         mdi-emoticon-sad-outline
        </v-icon>
          ¡MAL!
      </h2>
    </v-snackbar>

  </v-container>
</template>

<style>
* {
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}

.cont_img {
  border: 5px dashed #004D40;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.box-img {
  display: flex;
  border: 1px dashed rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 290px;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.img_drag {
  width: 30%;
  height: 30%;
  cursor: grab;
  opacity: 0.009;
  transition: all 0.2s;
}
.img_drag:hover {
  opacity: 1;
  width: 40%;
  height: 40%;
}

.img_drop {
  width: 200px;
  cursor: grab;
  height: 290px;
  opacity: 1;
}

.img_drop:hover {
  width: 205px;
  cursor: grab;
  height: 295px;
}

.title {
  background-color: #090e49ad;
  color: white;
  width: 800px;
}

.title2 {
  background-color: #004D40;
  color: white;
  width: 100%;
}
</style>

<script>


export default {
  data: () => ({
    title: "ACTIVIDAD: PUZZLE",
    dialog: false,
    snackbar: false,
    snackbar2: false,
    timeout: 2000,

    value:null,
    activador: false,
    refer: {
      n1: null,
      n2: null,
    },
    win: {
      n1: false,
      n2: false,
      n3: false,
      n4: false,
      n5: false,
      n6: false,
      n7: false,
      n8: false,
    },
  }),

  methods: {

    actualizar(){
      window.location.reload();
    },

    verificar() {
      if(this.value==2){
        this.dialog=true;
      }else{
        this.snackbar2=true;
      }
    },

    comprobar() {
      if (this.refer.n1 == 1 && this.refer.n2 == 1) {
        this.win.n1 = true;
      } else if (this.refer.n1 == 2 && this.refer.n2 == 2) {
        this.win.n2 = true;
      } else if (this.refer.n1 == 3 && this.refer.n2 == 3) {
        this.win.n3 = true;
      } else if (this.refer.n1 == 4 && this.refer.n2 == 4) {
        this.win.n4 = true;
      } else if (this.refer.n1 == 5 && this.refer.n2 == 5) {
        this.win.n5 = true;
      } else if (this.refer.n1 == 6 && this.refer.n2 == 6) {
        this.win.n6 = true;
      } else if (this.refer.n1 == 7 && this.refer.n2 == 7) {
        this.win.n7 = true;
      } else if (this.refer.n1 == 8 && this.refer.n2 == 8) {
        this.win.n8 = true;
      }
        if (
        this.win.n1 &&
        this.win.n2 &&
        this.win.n3 &&
        this.win.n4 &&
        this.win.n5 &&
        this.win.n6 &&
        this.win.n7 &&
        this.win.n8 == true
      ) {
        this.snackbar= true;
        this.activador = true;
      }
    },

    drop(e, n1) {
      const element = e.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("img_drop");
      e.target.appendChild(data);
      this.refer.n1 = n1;
      this.comprobar();
    },

    dragStart(e, n2) {
      const target = e.target;
      e.dataTransfer.setData("element", target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
      this.refer.n2 = n2;
    },

    dragEnd(e) {
      const target = e.target;
      e.dataTransfer.setData("element", target.id);
      target.style.display = "block";
    },
  },
};
</script>
