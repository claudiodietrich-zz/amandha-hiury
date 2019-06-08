<template>
  <div>
    <div
      class="pricing-table"
      v-for="(giftsList, index) in giftsLists"
      v-bind:key="index">
      <div
        class="pricing-plan"
        v-bind:class="gift.class"
        v-for="(gift, index) in giftsList"
        v-bind:key="index">
        <div
          class="plan-header"
          v-html="gift.name">
        </div>

        <div class="plan-price">
          <span class="plan-price-amount">
            <span class="plan-price-currency">R$</span>{{ gift.value }}</span>, 00
        </div>

        <div class="plan-footer">
          <button class="button is-fullwidth">presentear</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      giftsLists: [
        [
          {
            name: 'Só pra não dizer <br> que não dei nada',
            value: '35',
            class: ''
          },
          {
            name: 'Ajuda na cervejinha <br> do noivo',
            value: '90',
            class: ''
          },
          {
            name: 'Sessão de terapia <br> de casal',
            value: '300',
            class: ''
          },
          {
            name: 'Dia de compras para a noiva desestressar',
            value: '1.000',
            class: ''
          }
        ],
        [
          {
            name: 'Caneca <br> de choop <br> para o noivo',
            value: '80',
            class: ''
          },
          {
            name: 'Sessão de massagem <br> para amenizar <br> o estresse',
            value: '200',
            class: ''
          },
          {
            name: 'Tchauzinho <br> para o Papa <br> no Vaticano',
            value: '350',
            class: ''
          },
          {
            name: 'Noite romântica para o casal apaixonado',
            value: '1.200',
            class: ''
          }
        ],
        [
          {
            name: 'Descascador <br> de milho <br> super útil',
            value: '50',
            class: ''
          },
          {
            name: 'Abafador <br> de ruídos para <br> momentos de discussão',
            value: '100',
            class: ''
          },
          {
            name: 'Ajuda para <br> pagar a fatura <br> do cartão de crédito',
            value: '600',
            class: ''
          },
          {
            name: 'Ajuda na passagem para os noivos visitarem o Brasil',
            value: '2.000',
            class: ''
          }
        ],
        [
          {
            name: 'Café no aeroporto <br> durante as escalas',
            value: '75',
            class: ''
          },
          {
            name: 'Pensar em alguma coisa!',
            value: '180',
            class: ''
          },
          {
            name: 'Garrafa de vinho <br> para o casal',
            value: '230',
            class: ''
          },
          {
            name: 'Um fim de semana em um spa para a noiva',
            value: '750',
            class: ''
          }
        ],
        [
          {
            name: 'Chinelos felpudos <br> que não <br> arranham o piso',
            value: '65',
            class: ''
          },
          {
            name: 'Aluguel <br> de um bebê <br> para treinamento',
            value: '150',
            class: ''
          },
          {
            name: 'Camisa oficial do <br> Fluminense <br> para o noivo',
            value: '250',
            class: ''
          },
          {
            name: 'Ajuda na aposentadoria dos noivos',
            value: '1.500',
            class: ''
          }
        ],
        [
          {
            name: 'Cueca sexy para o noivo <br> usar na noite de núpcias',
            value: '60',
            class: ''
          },
          {
            name: 'Chocolates para <br> agradar a noiva',
            value: '120',
            class: ''
          },
          {
            name: 'Ajuda para os noivos <br> comprarem euros para a viagem',
            value: '500',
            class: ''
          },
          {
            name: 'Curso de alemão: aprenda em 30 dias',
            value: '800',
            class: ''
          }
        ]
      ]
    }
  }
}
</script>
