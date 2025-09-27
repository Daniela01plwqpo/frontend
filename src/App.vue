<template>
  <div id="app">
    <header>
      <h1>Frontend con Vue + Backend (Productos)</h1>
    </header>

    <main>
      <ClienteList />
    </main>
  </div>
</template>

<script lang="ts">
import ClienteList from './components/producto.vue';

export default {
  name: 'App',
  components: {
    ClienteList
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background: #ffffff;
  min-height: 100vh;
  padding: 20px;
  color: black; /* todas las letras negras */
}

header {
  background: #eaeaea;
  color: black;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

main {
  display: flex;
  justify-content: center;
}
</style>
