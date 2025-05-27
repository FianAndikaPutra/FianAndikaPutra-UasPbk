<template>
  <div class="dashboard">
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/tentang-kami">Tentang Kami</router-link></li>
      <li><router-link to="/menu">Menu</router-link></li>
      <li><router-link to="/delivery-order">Delivery Order</router-link></li>
    </ul>
     <router-link to="/hubungi-kami">
      <button class="btn-hubungi">Hubungi Kami</button>
    </router-link>
    </nav>

    <div class="overlay-text">
      <h1>Delivery Order & Gratis Ongkir <span>*</span></h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
.dashboard {
  background-image: url('C:\Users\PianTOLL\tugas10\src\assets\download.jpeg'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  font-family: 'Georgia', serif;
  color: white;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.6);
}

.logo img {
  height: 50px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links li a:hover {
  color: gold;
}

.contact-btn {
  background-color: gold;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.contact-btn:hover {
  background-color: #e6b800;
}

/* Text in center */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  color: gold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  text-align: center;
}
</style>
