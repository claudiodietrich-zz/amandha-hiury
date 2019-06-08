<template>
  <div id="app">
    <nav-bar/>
    <hero/>
    <intro/>
    <bride-and-groom/>
    <our-story/>
    <godfathers-and-godmothers/>
    <ceremony-and-reception/>
    <rsvp/>
    <posts/>
    <gifts/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import BrideAndGroom from './components/BrideAndGroom.vue'
import OurStory from './components/OurStory.vue'
import GodfathersAndGodmothers from './components/GodfathersAndGodmothers.vue'
import CeremonyAndReception from './components/CeremonyAndReception.vue'
import Rsvp from './components/RSVP.vue'
import Posts from './components/Posts.vue'
import Gifts from './components/Gifts'

export default {
  name: 'app',
  components: {
    NavBar,
    Hero,
    Intro,
    BrideAndGroom,
    OurStory,
    GodfathersAndGodmothers,
    CeremonyAndReception,
    Rsvp,
    Posts,
    Gifts
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Colors
$primary: #f5e4c6;
$primary-invert: findColorInvert($primary);
$secondary: #fedd57;
$secondary-invert: findColorInvert($secondary);

$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "secondary": ($secondary, $secondary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert)
);

@import "~bulma";
@import "~buefy/src/scss/buefy";

a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active {
    background-color: $primary !important;
}
</style>

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

.button {
  font-family: 'Josefin Slab', serif !important;
}

.input:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .select select:focus, .is-focused.input, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .select select.is-focused, .input:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .select select:active, .is-active.input, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .select select.is-active {
    border-color: #f5e4c6;
    -webkit-box-shadow: 0 0 0 0.125em rgba(245, 228, 198, 0.25);
    box-shadow: 0 0 0 0.125em rgba(245, 228, 198, 0.25);
}
</style>
