<template>
  <div class="auth-content">
    <div class="auth-modal">
      <b-img src="./static/img/logo-rocket-bit.png" alt="Logo" class="image"></b-img>
      <hr>
      <div class="auth-title">Login</div>

      <input v-model="user.usuario" type="text" name="usuario" placeholder="usuário ou cpf">
      <input v-model="user.password" type="password" name="senha" placeholder="senha">

      <button @click="signin">Entrar</button>

      <span>Desenvolvido por: <strong>Rocket bit</strong></span>
    </div>
  </div>
</template>

<script>
import { userKey, baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
  name: 'Auth',
  data: function () {
    return {
      user: {}
    }
  },
  methods: {
    signin () {
      axios.post(`${baseApiUrl}/signin`, this.user)
        .then(res => {
          this.$store.commit('setUser', res.data)
          localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$router.push({ path: '/' })
        })
        .catch(showError)
    },

    signup () {
      axios.post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.user = {}
        })
        .catch(showError)
    }
  }
}
</script>

<style>
  .auth-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth-modal {
    background-color: #FFF;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 110px;
    height: 100px;
  }

  .auth-title {
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .auth-modal input {
    border: 1px solid #BBB;
    width: 100%;
    margin-bottom: 15px;
    padding: 3px 8px;
    outline: none;
  }

  .auth-modal button {
    align-self: flex-end;
    background-color: #2460ae;
    color: #FFF;
    padding: 5px 15px;
  }

  .auth-modal span {
    align-self: flex-end;
    margin-top: 35px;
  }

  .auth-modal hr {
    border: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right,
      rgba(120, 120, 120, 0),
      rgba(120, 120, 120, 0.75),
      rgba(120, 120, 120, 0));
  }
</style>
