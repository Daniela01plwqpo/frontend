<template>
  <div>
    <h2>🛒 Lista de Productos</h2>
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id_producto">
          <td>{{ producto.id_producto }}</td>
          <td>{{ producto.nombre }}</td>
          <td>${{ producto.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ProductoList",
  data() {
    return {
      productos: [] as { id_producto: number; nombre: string; precio: number }[],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/producto") // tu backend en Express
      .then((res) => {
        this.productos = res.data;
      })
      .catch((err) => {
        console.error("❌ Error cargando productos:", err);
      });
  },
});
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 70%;
  margin: 20px auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
th {
  background: #0077cc;
  color: rgb(255, 255, 255);
}
td,
th {
  padding: 10px;
  text-align: center;
}
tr:nth-child(even) {
  background: #ffffff;
}
</style>
