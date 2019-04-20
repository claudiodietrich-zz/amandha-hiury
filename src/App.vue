<template>
  <div id="app">
    <hero/>
    <intro/>
    <bride-and-groom/>
    <our-story/>
    <godfathers-and-godmothers/>
    <ceremony-and-reception/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import BrideAndGroom from './components/BrideAndGroom.vue'
import OurStory from './components/OurStory.vue'
import GodfathersAndGodmothers from './components/GodfathersAndGodmothers.vue'
import CeremonyAndReception from './components/CeremonyAndReception.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Intro,
    BrideAndGroom,
    OurStory,
    GodfathersAndGodmothers,
    CeremonyAndReception
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Slab', serif;
}

.title {
  font-family: 'Sacramento', cursive !important;
  font-weight: 400 !important;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
