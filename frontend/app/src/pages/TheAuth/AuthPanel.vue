<template>
  <base-badge>
    <div class="container">
      <form @submit.prevent="submitForm">
        <p v-if="!formIsValid">nieprawidlowe dane</p>
        <div class="optionsBtn">
          <base-button
            @click.prevent
            @focus.prevent="changeLoginMode"
            :mode="loginMode ? 'filledBtn' : 'borderBtn'"
            :disabled="loginMode"
            >Logowanie</base-button
          >
          <base-button
            @click.prevent
            @focus.prevent="changeLoginMode"
            :mode="loginMode ? 'borderBtn' : 'filledBtn'"
            :disabled="!loginMode"
            >Rejestracja</base-button
          >
        </div>
        <div class="loginInput">
          <label for="email">email</label>
          <input
            @keydown.enter="submitForm"
            type="email"
            name="email"
            autocomplete="username"
            v-model="email"
          />
        </div>
        <div class="passwordInput">
          <label for="password">hasło</label>
          <input
            @keydown.enter="submitForm"
            type="password"
            name="password"
            autocomplete="current-password"
            v-model="password"
            placeholder="*****"
          />
        </div>
        <div class="passwordRepeatInput" v-if="!loginMode">
          <label for="passwordRepeat">powtórz hasło</label>
          <input
            @keydown.enter="submitForm"
            type="password"
            name="passwordRepeat"
            autocomplete="current-password"
            v-model="passwordRepeat"
            placeholder="*****"
          />
        </div>
        <div class="loginBtn" @keydown="submitForm">
          <base-button mode="filledBtn">{{ submitButtonCaption }}</base-button>
        </div>
      </form>
    </div>
  </base-badge>
</template>

<script>
export default {
  data() {
    return {
      loginMode: true,
      email: '',
      password: '',
      passwordRepeat: '',
      formIsValid: true,
      error: null,
    };
  },
  methods: {
    changeLoginMode() {
      this.loginMode = !this.loginMode;
    },
    async submitForm() {
      let actionPayload = null;
      if (this.loginMode) {
        if (!this.email.includes('@') || this.password.length < 8) {
          this.formIsValid = false;
          return;
        }
        actionPayload = {
          email: this.email,
          password: this.password,
        };
      } else {
        if (
          !this.email.includes('@') ||
          this.password.length < 8 ||
          this.password !== this.passwordRepeat
        ) {
          this.formIsValid = false;
          return;
        }
        actionPayload = {
          email: this.email,
          password: this.password,
          passwordRepeat: this.passwordRepeat,
        };
      }
      try {
        console.log(actionPayload);
        if (this.loginMode) {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('register', actionPayload);
        }
        if (this.isLoggedIn) this.$router.replace('/beers');
      } catch (error) {
        this.error = error;
        console.log(error);
      }
    },
  },
  computed: {
    submitButtonCaption() {
      if (this.loginMode) {
        return 'Zaloguj';
      } else {
        return 'Zarejestruj';
      }
    },
    isLoggedIn() {
      return this.$store.state.auth.isAuth;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.optionsBtn {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.loginInput,
.passwordInput,
.passwordRepeatInput {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  margin: 20px 10px 0 10px;
}

.loginInput label,
.passwordInput label,
.passwordRepeatInput label {
  position: relative;
  left: 10px;
}

.loginInput input,
.passwordInput input,
.passwordRepeatInput input {
  width: 100%;
  height: 40px;
  border: 2px solid rgb(255, 255, 255);
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 10px 0;
  outline: none;
  transition: 0.1s linear;
}

.loginInput input:focus,
.passwordInput input:focus,
.passwordRepeatInput input:focus {
  border: 2px solid rgb(246, 227, 193);
}

.loginBtn {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 20px 0px 0px 0px;
}
</style>
