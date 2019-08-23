<template>
  <HomeHeader />
</template>

<script>
import HomeHeader from '~/components/home/HomeHeader.vue'

export default {
  components: {
    HomeHeader
  },
  data () {
    return {
      searchString: '',
      goHomeMenuActive: false
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/company-badge.scss';

.go-home-menu {
  button {
    width: 64px;
    height: 100%;
    outline: none;
    background: url('~assets/images/svg/menu.svg') center/24px no-repeat;
    border-left: 1px solid rgba(137, 149, 175, 0.1);
    &.active {
      background-color: rgba(137, 149, 175, 0.2);
    }
  }
}
.topsearch {
  display: block !important;
}
</style>
