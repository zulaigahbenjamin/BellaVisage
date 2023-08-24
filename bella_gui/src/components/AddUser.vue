script>
export default {
  data() {
    return {
      model: {
        user: {
            firstName: "",
            lastName: "",
            userAge: "",
            gender:"",
            userRole:"",
            userPass:"",
            userProfile:"",
            emailAdd : ""
        },
      },
    };
  },
  methods: {
    registerUser() {
      console.log("reached");
      this.$store.dispatch("registerUser", this.model.user);
      console.log("Dispatched registerUser action")
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
};
</script>