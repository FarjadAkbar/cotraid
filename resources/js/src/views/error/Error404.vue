<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <cotriad-logo />
      <h2 class="brand-text text-primary ml-1">
        cotriad.ai
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Page Not Found 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Oops! 😖 The requested URL was not found on this server.
        </p>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :to="{path:'/'}"
        >
          Back to home
        </b-button>

        <!-- image -->
        <b-img
          fluid
          :src="imgUrllogo"
          alt="logo"
          style="z-index: 1; opacity: 0.25;"
        />
        <b-img
          fluid
          :src="imgUrl"
          alt="Error page"
          style="z-index: 3; opacity: 0.75;"
        />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BButton, BImg } from 'bootstrap-vue'
import CotriadLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    CotriadLogo,
    BLink,
    BButton,
    BImg,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/error.svg'),
      sideImgLogo: require('@/assets/images/logo/logo-dark.gif'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/error-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
    imgUrllogo() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImgLogo = require('@/assets/images/logo/logo-dark.gif')
        return this.sideImgLogo
      }
      return this.sideImgLogo
    },
  },
}
</script>

<style lang="scss">
@import '@resources/scss/vue/pages/page-misc.scss';
</style>
