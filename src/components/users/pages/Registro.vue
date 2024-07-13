<template>
  <v-container>
    <img class="imagen1" src="./image 30.png" />
    <div class="inicio-de-usuarios">
      <div class="blur-background"></div>
      <div class="hola-de-nuevo-wrapper">
        <h1 class="hola-de-nuevo-container">
          <span class="hola">DIGITAL WAITER</span><br>
          <span class="de-nuevo"></span>
        </h1>
      </div>
      <div class="contenedorinicio">
        <v-card class="login-form">
          <h3 class="title">Formulario de registro</h3>
          <div class="create-account">
            <p>Crea tu cuenta, es fácil y gratis.</p>
          </div>
          <div class="inputs-container">
            <div class="input-wrapper">
              <label for="name">Nombre</label><span class="required">*</span>
              <v-text-field id="name" class="accesoemail" outlined dense></v-text-field>
            </div>
            <div class="input-wrapper">
              <label for="ruc">RUC (Opcional)</label>
              <v-text-field id="ruc" class="accesoemail" outlined dense></v-text-field>
            </div>
            <div class="input-wrapper wide-input">
              <label for="email">Correo Electrónico</label><span class="required">*</span>
              <v-text-field id="email" class="accesoemail wide-input-field" outlined dense></v-text-field>
            </div>
            <div class="input-wrapper wide-input">
              <label for="cedula">Número de Cédula</label><span class="required">*</span>
              <v-text-field id="cedula" class="accesoemail wide-input-field" outlined dense></v-text-field>
            </div>
            <div class="input-wrapper wide-input">
              <label for="password">Contraseña</label><span class="required">*</span>
              <v-text-field id="password" class="accesopassword wide-input-field" type="password" outlined dense></v-text-field>
            </div>
          </div>
          <v-row class="remember-me-checkbox-parent">
            <v-col cols="8">
              <v-checkbox class="remember-me-checkbox" label="Al hacer clic en Registrarse, acepta nuestros Términos y que ha leído nuestra Política de Datos, incluido nuestro Uso de Cookies." dense></v-checkbox>
            </v-col>
          </v-row>
          <v-btn class="sing-me-in-btn" color="primary" @click="register">Registrarse</v-btn>
          <div class="login-link">
            <p>Already a member? Click here to login.</p>
          </div>
        </v-card>
      </div>
      <div class="bottom">
        <div class="la-creacin-es-la-expresin-de-parent">
          <h1 class="la-creacin-es-container">
            <span class="la-creacin-es">"El arte de crear es el arte de descubrir." </span>
          </h1>
          <div class="rollo-may-wrapper">
            <h3 class="rollo-may">
              <span class="rollo-may1">- -Pablo Picasso</span>
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
  methods: {
    register() {
      this.$router.push('/usuarios');
    },
  },
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
  width: 370px !important;
  margin-bottom: 15px;
  color: #fff;
  height: 56px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}

.accesoemail .v-input__control,
.accesopassword .v-input__control {
  padding: 10px !important;
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
  left: -200px;
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
  margin-bottom: 20px; 
  color: #fff;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.remember-me-checkbox-parent {
  margin-left: 150px;
  margin-top: 8px;
  color: #ffffff;
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
  background-color: #ff7a00 !important;
  color: #000 !important;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.inputs-container {
  display: flex;
  flex-wrap: wrap;
}

.input-wrapper {
  width: calc(50% - 0px); 
  margin-bottom: 15px;
  text-align: left; 
  position: relative; 
}

.input-wrapper label {
  margin-bottom: 5px;
  display: inline-block;
  font-size: 14px;
  color: #fff; 
  font-weight: bold; 
}

.input-wrapper .required {
  color: red;
  margin-left: 3px;
}


.remember-me-checkbox {
  justify-content: flex-start; 
}

.remember-me-checkbox .v-label {
  margin-left: 10px; 
}


.wide-input {
  width: 100%; 
}

.wide-input-field {
  width: 100% !important;
}

.create-account,
.login-link {
  margin-top: 20px;
  color: white;
  text-align: center;
  font-size: 16px;
}

.create-account p,
.login-link p {
  margin: 5px;
}
</style>
