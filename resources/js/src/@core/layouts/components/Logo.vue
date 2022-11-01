<template>
    <b-img
      :src="appLogoImage"
       alt="logo"
       style="max-width: 33px; max-height: 30px; line-height: 1.2;"
    />

</template>

<script>
import { $themeConfig } from '@themeConfig'
import { BImg } from 'bootstrap-vue'

export default {
  components: {
    BImg,
  },
  setup(props) {
    // App Name
    const { appLogoImage } = $themeConfig.app
    return {
      appLogoImage,
    }
  },
}
</script>
