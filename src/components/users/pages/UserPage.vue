<template>
  <v-container>
    <img class="imagen1" src="./imagen1.png" />
    <div class="inicio-de-usuarios">
      <div class="blur-background"></div> 
      <div class="hola-de-nuevo-wrapper">
        <h1 class="hola-de-nuevo-container">
          <span class="hola">HOLA</span><br>
          <span class="de-nuevo">DE NUEVO!</span>
        </h1>
      </div>
      <div class="contenedorinicio">
        <v-card class="login-form">
          <h3 class="title">Inicio de Sesión</h3>
          <v-text-field class="accesoemail" label="Email Address" outlined dense></v-text-field>
          <v-text-field class="accesopassword" label="Password" type="password" outlined dense></v-text-field>
          <v-row class="remember-me-checkbox-parent">
            <v-col cols="6">
              <v-checkbox class="remember-me-checkbox" label="Remember Me"></v-checkbox>
            </v-col>
            <v-col cols="6" class="text-right">
              <span class="aun-no-tienes">¿Aún no tienes cuenta?</span>
            </v-col>
          </v-row>
          <v-btn class="sing-me-in-btn" color="primary">Sing me in</v-btn>
        </v-card>
      </div>
      <div class="bottom">
        <div class="la-creacin-es-la-expresin-de-parent">
          <h1 class="la-creacin-es-container">
            <span class="la-creacin-es">"La creación es la expresión de la vida."</span>
          </h1>
          <div class="rollo-may-wrapper">
            <h3 class="rollo-may">
              <span class="rollo-may1">- Rollo May</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'UserPage',
}
</script>

<style scoped>
.imagen1 {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  border-left: solid 120px black;
  border-right: solid 120px black;
}

.accesoemail,
.accesopassword {
  border-radius: 8px !important;
  background-color: #495057 !important;
  width: 800px !important;
  margin-bottom: 15px;
  color: #919191;
  height: 78px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}


.accesoemail .v-input__control,
.accesopassword .v-input__control {
  padding: 10px !important;
  border: none !important; 
  box-shadow: none !important; 
}

.accesoemail .v-input__slot::before,
.accesopassword .v-input__slot::before {
  border: none !important; 
  box-shadow: none !important; 
}

.accesoemail .v-input__slot::after,
.accesopassword .v-input__slot::after {
  border: none !important;
  box-shadow: none !important; 
}

.accesoemail .v-input__append-inner,
.accesopassword .v-input__append-inner {
  border: none !important; 
  box-shadow: none !important;
}

.login-form {
  background-color: transparent !important;
  box-shadow: none !important;
  padding: 20px;
}

.inicio-de-usuarios {
  position: relative;
  color: white;
  text-align: center;
  padding: 50px;
}

.hola-de-nuevo-wrapper {
  position: absolute;
  top: 100px;
  left: -100px;
}

.hola-de-nuevo-container {
  font-size: 80px;
  font-family: Montserrat;
  color: #fff;
  text-align: left;
}

.contenedorinicio {
  position: absolute;
  top: 110px;
  left: 950px;
  transform: translateX(-50%);
  width: 800px;
  z-index: 1;
}

.blur-background {
  position: absolute;
  top: -30px;
  left: 525px;
  width: 850px;
  height: 955px;
  background-color: rgba(217, 217, 217, 0.1);
  backdrop-filter: blur(2px);
}

.title {
  font-weight: bold;
  margin-bottom: 80px;
  color: #FFF;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.remember-me-checkbox-parent {
  margin-top: 30px;
  color: #495057;
}

.aun-no-tienes {
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.bottom {
  margin-top: 540px;
  margin-left: -800px;
}

.la-creacin-es-container {
  margin-bottom: 20px;
}

.la-creacin-es {
  color: #fff;
  text-align: center;
  font-family: "My Soul";
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
}

.rollo-may {
  color: #fff;
  text-align: center;
  font-family: "My Soul";
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
}

.rollo-may-wrapper {
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  left: 280px;
}

.sing-me-in-btn {
  width: 651px;
  height: 81px;
  border-radius: 8px;
  background-color: #FF7A00 !important;
  color: #000 !important;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
