<template>
<div class="login-page">
  <div class="login-page__title">
    Авторизация
  </div>

  <form action="#" class="login-page__form">
    <div class="login-page__form-group">
      <input type="email"  placeholder="Email"/>
      <input type="password"  placeholder="Пароль"/>
    </div>
  </form>
  <button type='submit' class="login-page__button">Войти</button>

  <router-link :to="{ name: ROUTE_NAMES.RegistrationPage }" class="router-link">
    Вы не зарегистрированы?
  </router-link>
</div>
</template>

<script setup>
import {ROUTE_NAMES} from "@/constants/routeNames.js";
</script>

<style scoped>
*{
  border-color: transparent;
}
.login-page__form{
  width: 100%;
}
.login-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-page__title {
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 105px;
}
.login-page__form-group{
display:flex;
flex-direction:column;
justify-content:center;
}
input {
  padding: 3%;
  outline: none;
  background: #D9D9D9;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  margin-bottom: 40px ;
}

button{
  padding: 30px 60px;
  background: #D9D9D9;
  border-radius: 20px;
}
.router-link{
margin: 3%;
}
</style>