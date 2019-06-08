<template>
  <section id="presenteie-os-noivos" class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <figure class="image is-96x96 has-image-centered">
            <img src="../assets/gifts/gift.svg">
          </figure>

          <h1 class="title has-text-centered is-size-1">
            Presenteie os Noivos
          </h1>

          <gifts-table/>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GiftsTable from '@/components/GiftsTable.vue'

export default {
  components: {
    GiftsTable
  }
}
</script>
