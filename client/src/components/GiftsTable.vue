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
          <a
            class="button is-fullwidth"
            href="javascript:void(0)"
            v-on:click="toGift(gift.code)">
            presentear
          </a>
          <!-- <button class="button is-fullwidth">presentear</button> -->
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
            class: '',
            code: '5212982A4D4D8F1AA4CA3F93A04B8AE6'
          },
          {
            name: 'Ajuda na cervejinha <br> do noivo',
            value: '90',
            class: '',
            code: '9AB717F5323299C3341D9F9A1AD77688'
          },
          {
            name: 'Sessão de terapia <br> de casal',
            value: '300',
            class: '',
            code: 'A0968C402F2FE8A774C93FB24AA28D07'
          },
          {
            name: 'Dia de compras para a noiva desestressar',
            value: '1.000',
            class: '',
            code: '151EFDEE070734C9942D2F85182B1FCB'
          }
        ],
        [
          {
            name: 'Caneca <br> de choop <br> para o noivo',
            value: '80',
            class: '',
            code: '3F2492AC2D2DAAD33411CF87B46E9F2D'
          },
          {
            name: 'Sessão de massagem <br> para amenizar <br> o estresse',
            value: '200',
            class: '',
            code: 'A01219580000CCEFF4A1FFBB80FC97C9'
          },
          {
            name: 'Tchauzinho <br> para o Papa <br> no Vaticano',
            value: '350',
            class: '',
            code: '0E78F61DE5E59D5DD4925F95BFDDF206'
          },
          {
            name: 'Noite romântica para o casal apaixonado',
            value: '1.200',
            class: '',
            code: '8E975BB4EDED5F65546CCF85B1AAEFFC'
          }
        ],
        [
          {
            name: 'Descascador <br> de milho <br> super útil',
            value: '50',
            class: '',
            code: '1573D805DBDB0B2444E0DFAA400751A0'
          },
          {
            name: 'Abafador <br> de ruídos para <br> momentos de discussão',
            value: '100',
            class: '',
            code: '0BC9F313CDCD8D3FF4894FB2F402E615'
          },
          {
            name: 'Ajuda para <br> pagar a fatura <br> do cartão de crédito',
            value: '600',
            class: '',
            code: 'E10E36E76060E54774FCEF92A2371520'
          },
          {
            name: 'Ajuda na passagem para os noivos visitarem o Brasil',
            value: '2.000',
            class: '',
            code: 'D4A24A5111119CFEE4B38FA50208631C'
          }
        ],
        [
          {
            name: 'Café no aeroporto <br> durante as escalas',
            value: '75',
            class: '',
            code: 'C044E1B06F6FBC0CC4734FBA7BA11DD0'
          },
          {
            name: 'Wi-fi <br> liberado no casório <br> para postar foto no Instagram',
            value: '180',
            class: '',
            code: '290A0A5F090918E55401AF82733FEBB4'
          },
          {
            name: 'Garrafa de vinho <br> para o casal',
            value: '230',
            class: '',
            code: '22D001E60A0A27DEE4CFCFBEB40FBAAF'
          },
          {
            name: 'Um fim de semana em um spa para a noiva',
            value: '750',
            class: '',
            code: '51FC5CD85959E68004E84F93F34DF903'
          }
        ],
        [
          {
            name: 'Chinelos felpudos <br> que não <br> arranham o piso',
            value: '65',
            class: '',
            code: '38789D0F9A9A014AA479CF96EA492A40'
          },
          {
            name: 'Aluguel <br> de um bebê <br> para treinamento',
            value: '150',
            class: '',
            code: 'F69B26A53B3BA74114720FB467432655'
          },
          {
            name: 'Camisa oficial do <br> Fluminense <br> para o noivo',
            value: '250',
            class: '',
            code: '0F139B3A42424A8004545FA991E8F2F4'
          },
          {
            name: 'Ajuda na aposentadoria dos noivos',
            value: '1.500',
            class: '',
            code: '5D215B386868514AA4F0CFBAFCB0DB0C'
          }
        ],
        [
          {
            name: 'Cueca sexy para o noivo <br> usar na noite de núpcias',
            value: '60',
            class: '',
            code: '9E5AD8FBE7E7645BB45CAFA4657E935F'
          },
          {
            name: 'Chocolates para <br> agradar a noiva',
            value: '120',
            class: '',
            code: '8734ABF4C2C26AADD44C9FA729542874'
          },
          {
            name: 'Ajuda para os noivos <br> comprarem euros para a viagem',
            value: '500',
            class: '',
            code: '7BF7683A2D2D45CAA4A81F9122442691'
          },
          {
            name: 'Curso de alemão: aprenda em 30 dias',
            value: '800',
            class: '',
            code: 'AF60C0A12222BD2BB4EE0FA26B93CB04'
          }
        ]
      ]
    }
  },
  methods: {
    toGift: function (code) {
      PagSeguroLightbox(code)
    }
  }
}
</script>
