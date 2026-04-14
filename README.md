# 🚀 Redireccionamiento a nuestros otros repositorios:
- 🗄️ **Base de datos**  
  👉 [Base de datos](https://github.com/Jmurcia435/shopping-cart-bd/tree/dev)

- 💻 **Frontend**  
  👉 [Frontend](https://github.com/Jmurcia435/shopping-cart-frontend/tree/dev)

- ⚙️ **Backend (Servicios distribuidos)**  
  👉 [Backend](https://github.com/Jmurcia435/shopping-cart-backend/tree/dev)

---

# 💻 Frontend React

Interfaz de usuario desarrollada en React para el sistema, enfocada en la gestión de productos, carrito de compras y proceso de checkout, con integración directa al backend mediante API.

## 📖 Descripción del Proyecto

El Frontend React permite a los usuarios interactuar con el sistema de ventas de manera intuitiva y eficiente.

Incluye funcionalidades clave como:

- 🛍️ Visualización de productos disponibles
- 🛒 Gestión de carrito de compras
- 💳 Proceso de checkout
- 🔗 Integración con servicios backend mediante API

Está diseñado con un enfoque responsive y moderno para adaptarse a diferentes dispositivos.

---

# ✨ Funcionalidades

## 🛍️ Gestión de Productos
- Visualización de todos los productos desde el backend
- Información detallada: nombre, descripción, precio, categoría y stock
- Diseño en cuadrícula responsive

## 🛒 Carrito de Compras
- Agregar productos al carrito
- Ajustar cantidades (+ / -)
- Eliminar productos
- Resumen de compra (subtotal, impuestos, total)

## 💳 Checkout
- Registro de órdenes en la base de datos
- Notificación de compra exitosa
- Limpieza automática del carrito

---

# 🗂️ Estructura del Proyecto

## 🧩 Componentes Principales
### App.jsx
Componente principal encargado de:
- Manejo del estado de productos
- Gestión del carrito
- Consumo de la API
- Proceso de checkout

### ProductList.jsx
Encargado de mostrar los productos:
- Tarjetas de producto
- Información detallada
- Botón para agregar al carrito

### ShoppingCart.jsx
Carrito lateral que incluye:
- Lista de productos seleccionados
- Control de cantidades
- Eliminación de productos
- Resumen del pedido
- Botón de checkout
