<template>
<v-container  fluid>
  <v-row class="fond_row"  no-gutters >
    <v-col cols="2">
      <v-row justify="center">
      <v-btn  @click=" back()" :to="{ name: 'drag' }" width="60px" height="60px" dark icon x-large>
        <v-icon size="70px">mdi-arrow-left-thick</v-icon>
    </v-btn>
      </v-row>
    </v-col>

    <v-col>
      <v-row  justify="center">
      <div class="titles">
        <h2 >{{title[index]}}</h2>
      </div>
      </v-row>
    </v-col>
    
    <v-col cols="2">
      <v-row  justify="center">
      <v-btn @click="next()" :to="{ name: 'puzzle' }" width="60px" height="60px"  dark icon x-large >
        <v-icon size="70px">mdi-arrow-right-thick</v-icon>
      </v-btn>
      </v-row>
    </v-col>
  </v-row>

<v-main style="padding: 0px 0px 0px">
<router-view>

</router-view>
</v-main>
</v-container>

</template>

<style>

.fond_row{
  border-radius: 2px;
  transition: all 0.2s;
  background-color: teal;
}

.fond_row:hover{
  background: rgb(0, 119, 119);
}

.titles h2{
  color: rgba(255, 255, 255);
  font-size:40px;
  border-radius: 20px;
}
</style>


<script>
export default {

  data: () => ({
    title:["ACTIVIDAD 1: AGRUPACÍON", "ACTIVIDAD 2: PUZZLE"],
    index:0,
  }),

  methods:{
    next(){
        this.index=1;
        },

    back(){
      this.index=0;
      }

    },

   

};
</script>
