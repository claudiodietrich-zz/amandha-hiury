<template>
  <section id="como-tudo-aconteceu" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <figure class="image is-96x96 has-image-centered">
            <img v-bind:src="img">
          </figure>

          <h1 class="title has-text-centered is-size-1">
            {{ title }}
          </h1>
          <div class="timeline is-centered">
            <div class="timeline-item" v-for="(item, index) in items" v-bind:key="item.title" v-bind:style="{ paddingBottom: item.timelineItem.paddingBottom + 'em' }">
              <div class="timeline-marker is-image is-200x200">
                <img v-bind:src="item.photo">
              </div>
              <div class="timeline-content" v-bind:class="[index % 2 === 0 ? 'right':'left']">
                <figure class="image is-96x96">
                  <img v-bind:src="item.img">
                </figure>
                <h1 class="heading title is-size-2"> {{ item.title }} </h1>
                <p class="is-size-5"> {{ item.body }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/assets/our-story/photos.svg'),
      title: 'Como tudo aconteceu',
      items: [
        {
          img: require('@/assets/our-story/music.svg'),
          title: 'Como se conheceram...',
          body: 'Foi através de um amigo em comum, que trabalhava com ele, e que também já havia trabalhado com ela. Ele diz que se encantou por ela desde o primeiro contato que tiveram, e ela... Bem, ela se faz de difícil e diz que nem tanto, rs.',
          photo: require('@/assets/our-story/1.jpeg'),
          timelineItem: {
            paddingBottom: 12
          }
        },
        {
          img: require('@/assets/our-story/love-sing.svg'),
          title: 'O primeiro encontro!',
          body: 'Bom, é lógico que o primeiro encontro seria em um lugar muito propício para se iniciar um relacionamento sério: uma típica noitada carioca, na Barra da Tijuca! Onde tinha música, cerveja, para dar coragem, e saída de emergência, caso desse alguma coisa errada. Depois de algumas horas de quadradinhos (dele) e um salto quebrado (dela) eis que acontece o primeiro beijo... Mesmo ele um pouco ansioso e ela um tanto distraída, ao som de Melanina Carioca e uma trilha sonora romântica ideal, fizeram o que dizia a música e se deixaram envolver!',
          photo: require('@/assets/our-story/2.jpeg'),
          timelineItem: {
            paddingBottom: 12
          }
        },
        {
          img: require('@/assets/our-story/wedding-vows.svg'),
          title: 'O pedido de namoro...',
          body: 'Dali pra frente, foi pura sintonia, cumplicidade, paciência (mais dele do que dela) pra fazer dar certo, paciência (mais dela do que dele) pra fazer continuar dando certo e, cabe ressaltar, investimento (afinal a gente precisa conquistar os amigos também!! Haha). Ambos relatam que, desde sempre, parecia que se conheciam há anos. Dizendo em suas próprias palavras: parece que nunca não se conheceram! Um diz não se lembrar de como era antes de existir o outro em sua vida. E, foi por isso que, depois de 3 pedidos (na mesma noite), ela aceitou se render de vez aos encantos dele e começaram a namorar.',
          photo: require('@/assets/our-story/3.jpeg'),
          timelineItem: {
            paddingBottom: 12
          }
        },
        {
          img: require('@/assets/our-story/proposal.svg'),
          title: 'E, finalmente, o casamento!',
          body: 'Já não era sem tempo! Diz ela ao Rubens. Afinal, depois de tantas coisas juntos, tantas despedidas e "até logo", estava ficando cada vez mais improvável. Mas, ainda bem que Deus sempre esteve à frente dessa relação e que Ele faz tudo no tempo Dele - porque é assim que dá certo! Ainda bem que ela é paciente também... Haha. E, ainda bem que eles têm pessoas maravilhosas torcendo e olhando por eles: amigos, pais, mães, irmãs, avós, tios, sobrinhos, madrinhas e padrinhos, que não estão medindo esforços para que saia tudo do jeitinho que eles querem e merecem! Os dois agradecem por todo o carinho e amor dispensados a eles, e reconhecem que, sem vocês, esse sonho não seria tão lindo como está sendo. Então, como não poderia deixar de ser, os noivinhos contam com sua presença especial neste momento tão importante em suas vidas!',
          photo: require('@/assets/our-story/4.jpeg'),
          timelineItem: {
            paddingBottom: 0
          }
        }
      ]
    }
  }
}
</script>

<style>
.heading {
  text-transform: none !important;
}
.is-200x200 {
  height: 200px !important;
  width: 200px !important;
}

.timeline .timeline-item .timeline-content.right {
    padding: 9em 0 0 9em !important;
}

.timeline .timeline-item .timeline-content.left {
    padding: 9em 9em 0 0 !important;
}

.timeline.is-centered .timeline-item::before {
    background-color: #f5e4c6 !important;
}

.timeline .timeline-item .timeline-marker {
  background-color: #f5e4c6!important;
  border-color: #f5e4c6!important;
}
</style>
