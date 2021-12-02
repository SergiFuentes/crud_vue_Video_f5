import axios from 'axios';

export const moviesApiService = {
    create(movie){
        axios.post('http://localhost:3000/peliculas', movie);
      },
    deleteById (id){
        axios.delete(`http://localhost:3000/peliculas/${id}`);
      },
      
}