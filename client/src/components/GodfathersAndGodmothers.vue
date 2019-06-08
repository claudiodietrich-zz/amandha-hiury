<template>
  <section id="aos-padrinhos-e-madrinhas" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <figure class="image is-96x96 has-image-centered">
            <img src="../assets/godfathers-and-godmothers/dove.svg">
          </figure>

          <h1 class="title has-text-centered is-size-1">
            Aos Padrinhos e Madrinhas
          </h1>
          <p class="has-text-centered is-size-4">
            "A escolha de cada um de vocês, para que testemunhassem esse momento tão especial em nossas vidas, foi feita com muito carinho . Todas as histórias, brincadeiras, conselhos, e a amizade de cada um, contribuíram de alguma forma para que perseverássemos no caminho do amor, da união e da cumplicidade. E é por esta razão que queremos que vocês dividam conosco a alegria deste dia, no altar, juntos de nós."
          </p>
        </div>
      </div>

      <h1 class="title has-text-centered is-size-1">
        Os padrinhos
      </h1>

      <div class="columns" v-for="(godfathersColumn, index) in godfathersColumns" v-bind:key="index">
        <godfather-and-godmother-column v-bind:person="godfather" v-for="(godfather, index) in godfathersColumn" v-bind:key="index"/>
      </div>

      <h1 class="title has-text-centered is-size-1">
        As madrinhas
      </h1>

      <div class="columns" v-for="(godmothersColumn, index) in godmothersColumns" v-bind:key="index">
        <godfather-and-godmother-column v-bind:person="godmother" v-for="(godmother, index) in godmothersColumn" v-bind:key="index"/>
      </div>
    </div>
  </section>
</template>

<script>
import GodfatherAndGodmotherColumn from '@/components/GodfatherAndGodmotherColumn.vue'

export default {
  components: {
    GodfatherAndGodmotherColumn
  },
  data () {
    return {
      godfathersColumns: {
        godfathersFirstColumn: [
          {
            name: 'Alvaro Falcão',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/alvaro-falcao.jpg')
          },
          {
            name: 'Claudio Dietrich',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/claudio-dietrich.jpg')
          },
          {
            name: 'Daniel Monteiro',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/daniel-monteiro.jpg')
          },
          {
            name: 'Felipe Eduardo',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/felipe-eduardo.jpg')
          },
          {
            name: 'Isaías Erbe',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/isaias-erbe.jpg')
          }
        ],
        godfathersSecondColumn: [
          {
            name: 'Oswaldo Junior',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/oswaldo-junior.jpg')
          },
          {
            name: 'Pedro Santos',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/pedro-santos.jpg')
          },
          {
            name: 'Phelipe Santos',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/phelipe-santos.jpg')
          },
          {
            name: 'Vinícius Guerra',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/vinícius-guerra.jpg')
          },
          {
            name: 'Rafael Silva',
            photo: require('@/assets/godfathers-and-godmothers/godfathers/rafael-silva.jpg')
          }
        ]
      },
      godmothersColumns: {
        godmothersFirstColumn: [
          {
            name: 'Aline Guedes',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/aline-guedes.jpg')
          },
          {
            name: 'Ämilie Erbe',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/amilie-erbe.jpg')
          },
          {
            name: 'Anna Nicolau',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/anna-nicolau.jpg')
          },
          {
            name: 'Gislene Barbosa',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/gislene-barbosa.jpg')
          },
          {
            name: 'Ilana Oliveira',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/ilana-oliveira.jpg')
          }
        ],
        godmothersSecondColumn: [
          {
            name: 'Jessica Mululo',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/jessica-mululo.jpg')
          },
          {
            name: 'Josiane Vargas',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/josiane-vargas.jpg')
          },
          {
            name: 'Natália Greco',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/natalia-greco.jpg')
          },
          {
            name: 'Natalia Fonseca',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/natalia-fonseca.jpg')
          },
          {
            name: 'Yolanda Maia',
            photo: require('@/assets/godfathers-and-godmothers/godmothers/yolanda-maia.jpg')
          }
        ]
      }
    }
  }
}
</script>
