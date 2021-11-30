<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- <h1>{{movies[0]}}</h1>-->
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        {{ index }}-{{ movie.title }}
        <button @click="removeMovie(index)">Delete</button>
        <button @click="editMovie(index)">Edit</button>
      </li>
    </ul>
    <input type="text" v-model="newMovie.title" />
    <button v-if="mode == 'add'" @click="addMovie()">Add</button>
    <button v-if="mode == 'edit'" @click="updateMovie()">Update</button>

    <p>{{indexToUpdate}}-{{newMovie.title}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      indexToUpdate: "",
      mode : "add",
      newMovie: {},
      msg: "Lista de Pelis",
      movies: [{ title: "batman" }, { title: "batman Returns" }],
    };
  },
  /*mounted(){
        axios.get('http://localhost3000/peliculas').then()
        console.log("hola");
    }*/
  methods: {
    addMovie() {
      //this.movies.push(this.newMovie);
      if (!this.newMovie.title) return;
      this.movies = [...this.movies, this.newMovie];
      this.newMovie = {};
    },
    removeMovie(index) {
      //alert(index);
      this.movies.splice(index, 1);
    },
    editMovie(index) {
      this.newMovie = this.movies[index];
      console.log(this.newMovie);
      //this.newMovie.index = index;
      this.indexToUpdate = index;
      this.mode = 'edit';
    },
    updateMovie(){
        //alert ('update');
        this.movies[this.indexToUpdate] = this.newMovie;
        this.newMovie = {};
        this.mode = "add";
        this.indexToUpdate = "";
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
