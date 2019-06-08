<template>
  <section id="mensagens" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <b-loading
            v-bind:is-full-page="true"
            v-bind:active.sync="isLoading"
            v-bind:can-cancel="false"/>

          <figure class="image is-96x96 has-image-centered">
            <img src="../assets/posts/wedding-vows.svg">
          </figure>

          <h1 class="title has-text-centered is-size-1">
            Mensagens
          </h1>

          <carousel
            v-if="messages.length > 0"
            v-bind:perPage="1"
            v-bind:navigationEnabled="true"
            v-bind:paginationEnabled="false">
            <slide
              v-for="(message, index) in messages"
              v-bind:key="index">
              <p class="has-text-centered">
                {{message.message}}
              </p>

              <p class="has-text-centered" style="margin-top: 15px;">
                {{message.author}}
              </p>
            </slide>
          </carousel>

           <b-field
              label="Seu nome"
              v-bind:type="{ 'is-danger': $v.author.$error }"
              v-bind:message="[ !$v.author.required && $v.author.$error ? 'oops... esse campo é obrigatório':'' ]">
              <b-input
                v-model="author"/>
          </b-field>

          <b-field
            label="Mensagem"
            v-bind:type="{ 'is-danger': $v.message.$error }"
            v-bind:message="[ !$v.message.required && $v.message.$error ? 'oops... esse campo é obrigatório':'',
                              !$v.message.minLength && $v.message.$error ? 'oops... esse campo tem que ter no mínimo 10 caracteres':'',
                              !$v.message.maxLength && $v.message.$error ? 'oops... esse campo tem que ter no máximo 500 caracteres':'' ]">
            <b-input
              v-model="message"
              maxlength="500"
              type="textarea"/>
          </b-field>

          <div class="has-text-centered">
            <b-button type="is-primary"
              v-on:click="submit">
              enviar mensagem
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'
import shuffle from 'shuffle-array'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      author: '',
      message: '',
      messages: [],
      isLoading: false
    }
  },
  validations: {
    author: {
      required
    },
    message: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(500)
    }
  },
  methods: {
    async submit () {
      try {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.isLoading = true

          await axios.post('/messages', { author: this.author, message: this.message })

          this.messages.unshift({ author: this.author, message: this.message })

          this.author = ''
          this.message = ''

          this.$v.$reset()

          this.isLoading = false

          this.$toast.open({
            message: 'Mensagem enviada com sucesso!',
            duration: 5000,
            type: 'is-success'
          })
        }
      } catch (e) {
        this.isLoading = false
        this.$toast.open({
          message: 'Oops... não conseguimos enviar a sua mensagem, tente novamente.',
          duration: 5000,
          type: 'is-danger'
        })
      }
    }
  },
  async created () {
    try {
      const response = await axios.get('/messages')

      this.messages = shuffle(response.data)
    } catch (error) {
      this.$toast.open({
        message: 'Oops... ocorreu um erro ao buscar a lista de mensagens.',
        duration: 5000,
        type: 'is-danger'
      })
    }
  }
}
</script>
