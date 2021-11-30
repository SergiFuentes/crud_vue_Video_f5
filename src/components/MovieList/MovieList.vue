<template>
    <div>
        <h1>{{msg}}</h1>
        <ul>
            <li v-for="movie in movies">Título</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg:"Lista de Pelis",
            movies: [1,2,3,4]

        }
    }
}
</script>


<style scoped>
ul{
    list-style: none;
}
</style>
   
