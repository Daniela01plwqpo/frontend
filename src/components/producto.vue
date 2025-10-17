<template>
  <div class="container">
    <h1>Gestión de Productos</h1>

    <form @submit.prevent="agregarProducto" class="form">
      <input v-model="nombre" type="text" placeholder="Nombre del producto" required />
      <input v-model="precio" type="number" step="0.01" placeholder="Precio" required />
      <button type="submit">Agregar</button>
    </form>

    <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>

    <table v-if="productos.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in productos" :key="p.id_producto">
          <td>{{ p.id_producto }}</td>
          <td>{{ p.nombre }}</td>
          <td>{{ parseFloat(p.precio).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No hay productos para mostrar.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Cambia esta URL si usas Railway
const apiUrl = 'http://localhost:3000/api/productos'

const productos = ref([])
const nombre = ref('')
const precio = ref('')
const mensaje = ref('')

// Cargar productos
async function cargarProductos() {
  try {
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error('Error al cargar productos')
    const data = await res.json()
    productos.value = data
    mensaje.value = ''
  } catch (err) {
    console.error(err)
    mensaje.value = 'No se pudieron cargar los productos.'
  }
}

// Agregar producto
async function agregarProducto() {
  if (!nombre.value || !precio.value) {
    mensaje.value = 'Debes ingresar nombre y precio'
    return
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: nombre.value, precio: precio.value })
    })
    const data = await res.json()
    if (res.ok) {
      mensaje.value = data.message || 'Producto insertado correctamente'
      nombre.value = ''
      precio.value = ''
      await cargarProductos()
    } else {
      mensaje.value = data.error || 'Error al insertar producto'
    }
  } catch (err) {
    console.error(err)
    mensaje.value = 'Error de conexión al servidor'
  }
}

onMounted(cargarProductos)
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #95c7ff;
  border-radius: 4px;
  background-color: #95c7ff;
}

button {
  padding: 8px 15px;
  background-color: white;
  color: black;
  border: 1px solid #3074c1;
  border-radius: 4px;
  cursor: pointer;
}

.mensaje {
  margin-bottom: 10px;
  color: green;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #3074c1;
  color: white;
}
</style>
