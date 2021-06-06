<template>
  <section class="section hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-desktop is-7-tablet is-full-mobile">
            <Form
              formHeader="Log into your account"
              :hasExtraHeader="true"
              formExtraHeader="Welcome Back"
              :hasFooter="true"
            >
              <template v-slot:form-content>
                <b-field label="E-Mail address">
                  <b-input
                    v-model="email"
                    placeholder="Enter your e-maill"
                    type="email"
                    required
                  ></b-input>
                </b-field>
                <b-field>
                  <template #label>
                    <span>Password</span>
                    <span>
                      <router-link to="reset-password">Forgot password?</router-link>
                    </span>
                  </template>
                  <b-input
                    v-model="password"
                    placeholder="Enter your password"
                    type="password"
                    password-reveal
                    required
                  ></b-input>
                </b-field>
                <div class="buttons">
                  <b-button
                    type="is-info"
                    expanded
                    class="is-justify-content-center has-text-weight-medium"
                    >Login</b-button
                  >
                </div>
              </template>
              <template v-slot:form-footer>
                <p class="has-text-grey-light has-text-centered">
                  Not registered yet?
                  <router-link to="register" class="has-text-white">Register</router-link>
                </p>
              </template>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form.vue'
export default {
  components: { Form },
  name: 'Login',
  data: () => {
    return {
      email: null,
      password: null,
    }
  },
}
</script>

<style></style>
