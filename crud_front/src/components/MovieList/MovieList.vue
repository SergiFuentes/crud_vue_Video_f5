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
import {moviesApiService} from '@/services/moviesApiService.js'
export default {
  data() {
    return {
      indexToUpdate: "",
      mode : "add",
      newMovie: {},
      msg: "Lista de Pelis",
      movies: [],
    };
  },
  mounted(){
    this.fetchAll();
    },
  methods: {
    addMovie() {
      //this.movies.push(this.newMovie);
      if (!this.newMovie.title) return;
      moviesApiService.create(this.newMovie);
      //this.movies = [...this.movies, this.newMovie];
      this.fetchAll();
      this.newMovie = {};
    },
    removeMovie(index) {
      //alert(index);
      const id = this.movies[index].id;
      moviesApiService.deleteById(id);
      //this.movies.splice(index, 1);
      this.fetchAll();
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
    },
    fetchAll(){
      axios.get('http://localhost:3000/peliculas').then((res) =>(this.movies = res.data))//.then(res=>console.log(res));
    },
    
    
 
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
