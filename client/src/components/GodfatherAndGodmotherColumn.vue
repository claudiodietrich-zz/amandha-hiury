<template>
  <div class="column">
    <figure class="image">
      <img class="is-rounded" v-bind:src="person.photo">
    </figure>

    <p class="title has-text-centered" style="margin-top: 10px">
      {{ person.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['person']
}
</script>
