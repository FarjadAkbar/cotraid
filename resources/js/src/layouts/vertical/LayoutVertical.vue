<template>
  <layout-vertical :nav-menu-items="navMenuItems">

    <router-view />

    <!-- <template #navbar="{ toggleVerticalMenuActive }">
      <navbar :toggle-vertical-menu-active="toggleVerticalMenuActive" />
    </template> -->

    <!-- <app-customizer
      v-if="showCustomizer"
      slot="customizer"
    /> -->
  </layout-vertical>
</template>

<script>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
// import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
// import { $themeConfig } from '@themeConfig'
import navMenuItems from '@/navigation/vertical'

export default {
  components: {
    // AppCustomizer,
    LayoutVertical,
  },
  data() {
    return {
      // showCustomizer: $themeConfig.layout.customizer,
      navMenuItems,
    }
  },
}
</script>
