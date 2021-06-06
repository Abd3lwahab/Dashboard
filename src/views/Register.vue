<template>
  <section class="section hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-desktop is-7-tablet is-full-mobile">
            <Form
              formHeader="Create new account"
              :hasExtraHeader="false"
              :hasFooter="true"
            >
              <template v-slot:form-content>
                <b-field label="First name">
                  <b-input
                    v-model="firstName"
                    placeholder="Enter your first name"
                    type="email"
                    required
                  ></b-input>
                </b-field>
                <b-field label="Last name">
                  <b-input
                    v-model="lastName"
                    placeholder="Enter your last name"
                    type="email"
                    required
                  ></b-input>
                </b-field>
                <b-field label="E-Mail address">
                  <b-input
                    v-model="email"
                    placeholder="Enter your e-maill"
                    type="email"
                    required
                  ></b-input>
                </b-field>
                <b-field label="Password">
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
                    >Sign up</b-button
                  >
                </div>
              </template>
              <template v-slot:form-footer>
                <p class="has-text-grey-light has-text-centered">
                  Already have an account?
                  <router-link to="login" class="has-text-white">Login</router-link>
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
  name: 'Register',
  data: () => {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    }
  },
}
</script>

<style></style>
