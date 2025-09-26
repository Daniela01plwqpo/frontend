<template>
  <div>
    <h1>Lista de Productos</h1>
    <ul>
      <li v-for="producto in productos" :key="producto.id_producto">
        {{ producto.nombre }} - ${{ producto.precio }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const productos = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/productos');
    productos.value = res.data;
  } catch (err) {
    console.error(err);
  }
});
</script>



