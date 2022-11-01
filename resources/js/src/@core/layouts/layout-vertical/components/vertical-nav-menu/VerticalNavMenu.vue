<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow"
    :class="[
      { 'expanded': !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered) },
      skin === 'light'|| skin === 'bordered' ? 'menu-light' : 'menu-dark'
    ]"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)"
  >
    <!-- main menu header-->
    <div class="navbar-header expanded">
      <slot
        name="header"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        :toggleCollapsed="toggleCollapsed"
        :collapseTogglerIcon="collapseTogglerIcon"
      >
        <ul class="nav navbar-nav flex-row">

          <!-- Logo & Text -->
          <li class="nav-item mr-auto">
            <b-link
              class="navbar-brand"
              to="/"
            >
              <span class="brand-logo">
                <b-img
                  :src="appLogoImage"
                  alt="logo"
                />
              </span>
              <h2 class="brand-text">
                {{ appName }}
              </h2>
            </b-link>
          </li>

          <!-- Toggler Button -->
          <li class="nav-item nav-toggle">
            <b-link class="nav-link modern-nav-toggle">
              <feather-icon
                icon="XIcon"
                size="20"
                class="d-block d-xl-none"
                @click="toggleVerticalMenuActive"
              />
              <feather-icon
                :icon="collapseTogglerIconFeather"
                size="20"
                class="d-none d-xl-block collapse-toggle-icon"
                @click="toggleCollapsed"
              />
            </b-link>
          </li>
        </ul>
      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div
      :class="{'d-block': shallShadowBottom}"
      class="shadow-bottom"
    />

    <!-- main menu content-->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="main-menu-content scroll-area"
      tagname="ul"
      @ps-scroll-y="evt => { shallShadowBottom = evt.srcElement.scrollTop > 0 }"
    >
      <vertical-nav-menu-items
        :items="navMenuItems"
        class="navigation navigation-main"
      />
      <ul
        class="navigation navigation-main"
        :class="getClassNavLogo"
      >
        <li class="nav-item navbar-brand">
          <span class="brand-logo">
            <b-img
              :src="appLogoImageLong"
              alt="logo"
              :class="getClassNavLogoSize"
            />
          </span>
        </li>
      </ul>
    </vue-perfect-scrollbar>
    <!-- /main menu content-->
  </div>
</template>

<script>
import navMenuItems from '@/navigation/vertical'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { BLink, BImg } from 'bootstrap-vue'
import { provide, computed, ref } from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'
import { $themeConfig } from '@themeConfig'
import VerticalNavMenuItems from './components/vertical-nav-menu-items/VerticalNavMenuItems.vue'
import useVerticalNavMenu from './useVerticalNavMenu'

export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink,
    BImg,
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true,
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const {
      isMouseHovered,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      updateMouseHovered,
    } = useVerticalNavMenu(props)

    const { skin } = useAppConfig()

    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    const shallShadowBottom = ref(false)

    provide('isMouseHovered', isMouseHovered)

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    const getClassNavLogo = computed(() => (isVerticalMenuCollapsed.value !== true || (isVerticalMenuCollapsed.value === true && isMouseHovered.value === true) ? 'extended-nav-bottom-logo mx-2' : 'bottom-nav-logo my-2'))

    const getClassNavLogoSize = computed(() => (isVerticalMenuCollapsed.value !== true || (isVerticalMenuCollapsed.value === true && isMouseHovered.value === true) ? 'extended-nav-bottom-logo-size' : 'bottom-nav-logo-size'))

    const collapseTogglerIconFeather = computed(() => (collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon'))

    // App Name
    const { appName, appLogoImage, appLogoImageLong } = $themeConfig.app

    return {
      navMenuItems,
      perfectScrollbarSettings,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      isMouseHovered,
      updateMouseHovered,
      collapseTogglerIconFeather,

      // Shadow Bottom
      shallShadowBottom,
      getClassNavLogo,
      getClassNavLogoSize,

      // Skin
      skin,

      // App Name
      appName,
      appLogoImage,
      appLogoImageLong,
    }
  },
}
</script>

<style lang="scss">
@import "~@resources/scss/base/core/menu/menu-types/vertical-menu.scss";

.bottom-nav-logo{
    position: absolute;
    margin-bottom: 20px;
    bottom: 0;
    left: 0;
    color: #7367f0 !important;
    transform: rotate(-90deg);
    transition: all 0.2s ease-out;
}
.extended-nav-bottom-logo{
    position: absolute;
    bottom: 0;
    left: 0;
    color: #7367f0 !important;
    transform: rotate(0deg) !important;
    transition: all 0.2s ease-in;
}
.extended-nav-bottom-logo-size{
    max-width: 100%;
}.bottom-nav-logo-size{
    max-width: 200%;
}
</style>
