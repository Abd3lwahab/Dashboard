<template>
  <section class="section hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-desktop is-7-tablet is-full-mobile">
            <Form
              formHeader="Reset your password"
              :hasExtraHeader="false"
              :hasFooter="false"
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
                <div class="buttons">
                  <b-button
                    type="is-info"
                    expanded
                    class="is-justify-content-center has-text-weight-medium"
                    >Reset</b-button
                  >
                </div>
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
  name: 'ResetPassword',
  components: { Form },
  data: () => {
    return {
      email: null,
    }
  },
}
</script>

<style></style>
