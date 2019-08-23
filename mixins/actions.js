export default {
  computed: {
    loginLink () {
      return `https://${process.env.VUE_APP_PROD_HOST_NAME}/login`
    },
    registerLink () {
      return `https://${process.env.VUE_APP_PROD_HOST_NAME}/register`
    }
  },
  methods: {
    goLogin () {
      window.location = this.loginLink
    },
    goRegister () {
      window.location = this.registerLink
    }
  }
}
