<template>
  <div class="home">
    <!-- Sección About Us -->
    <div class="button-container about-us">
      <div class="button">
        <div class="button-parent">
          <a href="#" class="button-text">ABOUT US</a>
          <div class="underline"></div>
        </div>
      </div>
    </div>

    <!-- Sección Menu -->
    <div class="button-container menu">
      <div class="button">
        <div class="button-parent">
          <a href="#" class="button-text">Menu</a>
          <div class="underline"></div>
        </div>
      </div>
    </div>

    <!-- Sección Registrarse -->
    <div class="button-container registrarse">
      <div class="button">
        <div class="button-parent">
          <a href="#" class="button-text">REGISTRARSE</a>
          <div class="underline"></div>
        </div>
      </div>
    </div>

    <!-- Sección Empieza a Crear -->
    <div class="button-container empezar-crear">
      <div class="button">
        <div class="button-parent">
          <a href="#" class="button-text">EMPIEZE A CREAR</a>
          <div class="underline"></div>
        </div>
      </div>
    </div>

    <!-- Sección Iniciar Sesión -->
    <div class="button-container iniciar-sesion">
      <div class="button">
        <div class="button-parent">
          <a href="#" class="button-text">INICIAR SESIÓN</a>
          <div class="underline"></div>
        </div>
      </div>
    </div>

    <!-- Imágenes -->
    <img src="./image 8.png" class="section-image image-1" style="top:180px; right: 937px; width: 620px; height: 300px;" />
    <img src="./image 11.png" class="section-image image-2" style="top: 480px; right:750px; width: 340px; height: 180px;" />
    <img src="./image 12.png" class="section-image image-3" style="top: 480px; left:800px; width: 267px; height: 470px;" />
    <img src="./image 13.png" class="section-image image-4" style="top: 660px; left: 200px; width: 600px; height: 170px;" />
    <img src="./image 14.png" class="section-image image-5" style="bottom: 100px; left: 0px; width: 240px; height: 170px;" />
    <img src="./image 15.png" class="section-image image-6" style="bottom: 130px; left: 1065px; width: 490px; height: 650px;" />
    <div class="image-container image-7-container" style="bottom: 100px; left: 0px; width: 240px; height: 170px;">
      <img src="./image 25.png" class="section-image image-7" />
    </div>
    <img src="./image 29.png" class="section-image image-8" style="top: 0px; right: 487px; width: 451px; height: 254px;" />
  </div>
</template>

<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 930px; 
  width: 1855px; 
  background-color: var(--color-gray); 
  top: -10px;
  right: 340px; 
  border-left: 150px solid var(--color-black); 
  border-right: 150px solid var(--color-black); 
}

.button-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  border-radius: var(--br-5xs); 
}

.button-text {
  text-decoration: none;
  color: #FFF; 
  text-align: center;
  font-family: "Readex Pro";
  font-size: 22.286px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.underline {
  width: 100%;
  height: 2px;
  background-color: #FFF;
  margin-top: 5px;
}

.section-image {
  position: absolute;
  object-fit: cover; 
  z-index: 1; 
}

.about-us {
  top: 39%; 
  left: 54%; 
  transform: translate(-50%, -50%);
  width: 470px;
  height: 240px;
}

.menu {
  bottom: 780px;
  right: -10px; 
  width: 500px;
  height: 150px;
}

.registrarse {
  top: 480px; 
  left: -10px; 
  width: 500px;
  height: 180px;
}

.empezar-crear {
  top: 830px; 
  right: 708px; 
  width: 997px;
  height: 120px;
}

.iniciar-sesion {
  bottom: -20px; 
  left: 1065px; 
  width: 636px;
  height: 150px;
}

.image-container {
  position: absolute;
  background-color: black; 
}

.image-7-container {
  bottom: 750px !important;
  left: -70px !important;
  width: 700px!important;
  height: 180px !important;
}

.image-1 {
  top: 180px;
  right: 937px;
  width: 620px;
  height: 300px;
}

.image-2 {
  top: 480px;
  right: 750px;
  width: 340px;
  height: 180px;
}

.image-3 {
  top: 480px;
  left: 800px;
  width: 267px;
  height: 470px;
}

.image-4 {
  top: 660px;
  left: 200px;
  width: 600px;
  height: 170px;
}

.image-5 {
  bottom: 100px;
  left: 0px;
  width: 240px;
  height: 170px;
}

.image-6 {
  bottom: 130px;
  left: 1065px;
  width: 490px;
  height: 650px;
}

.image-7 {
  width: 100%;
  height: 100%;
}

.image-8 {
  top: 0px;
  right: 487px;
  width: 451px;
  height: 254px;
}
</style>
