<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <figure class="image is-96x96 has-image-centered">
            <img src="../assets/intro/rings.svg">
          </figure>

          <h1 class="title has-text-centered is-size-1">
            R.S.V.P
          </h1>

           <b-field
              label="Nome do convidado"
              v-bind:type="{ 'is-danger': $v.mainGuest.$error }"
              v-bind:message="[ !$v.mainGuest.required && $v.mainGuest.$error ? 'oops... esse campo é obrigatório':'']">
              <b-input
                v-model="mainGuest"/>
          </b-field>

          <b-field
            label="Acompanhantes"
            message="* Considere convidados com idade a partir de 10 anos">
            <b-taginput
              v-model="otherGuests"
              placeholder="Adicionar acompanhante"
              type="is-primary"/>
          </b-field>

          <div class="columns">
            <div class="column">
              <b-field
                label="Telefone"
                v-bind:type="{ 'is-danger': $v.phone.$error }"
                v-bind:message="[ !$v.phone.required && $v.phone.$error ? 'oops... esse campo é obrigatório':'']">
                  <b-input
                    v-model="phone"
                    v-mask="['(##) ####-####', '(##) #####-####']"/>
              </b-field>
            </div>

            <div class="column">
              <b-field
              label="Email"
              v-bind:type="{ 'is-danger': $v.email.$error }"
              v-bind:message="[ !$v.email.required && $v.email.$error ? 'oops... esse campo é obrigatório':'',
                                !$v.email.email && $v.email.$error ? 'oops... esse e-mail não é válido':'' ]">
                <b-input
                  type="email"
                  v-model="email"/>
              </b-field>
            </div>
          </div>

          <div class="has-text-centered">
            <b-button type="is-primary"
              v-on:click="submit">
              confirmar presença
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mask } from 'vue-the-mask'
import { required, email } from 'vuelidate/lib/validators'

export default {
  directives: {
    mask
  },
  data () {
    return {
      mainGuest: '',
      phone: '',
      email: '',
      otherGuests: []
    }
  },
  validations: {
    mainGuest: {
      required
    },
    phone: {
      required
    },
    email: {
      required,
      email
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    }
  }
}
</script>
