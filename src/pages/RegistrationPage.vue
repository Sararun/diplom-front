<template>
  <div class="signup-page">
    <div class="signup-page__tittle">
      Регистрация
    </div>
    <form action="#" class="signup-page__form">
      <div class="signup-page__form-group">
        <input type="text" name="name" placeholder="Логин">
        <input type="email" name="email" placeholder="Пароль">
        <input type="password" name="password" placeholder="Фамилия">
        <input type="password" name="confirmPassword" placeholder="Имя">
      </div>
    </form>
    <button type="submit">Регистрация</button>
  </div>
</template>

<script>
export default {
  name: "RegistrationPage"
}
</script>

<style scoped>
*{
  border-color: transparent;
}
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.signup-page__tittle {
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 105px;
}

.signup-page__form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  padding: 3%;
  outline: none;
  background: #D9D9D9;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  margin-bottom: 40px;

}
.signup-page__form{
  width: 100%;
}
button{
  padding: 30px 60px;
  background: #D9D9D9;
  border-radius: 20px;
}
</style>