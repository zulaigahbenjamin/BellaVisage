<template>
    <div>
      <div class="container flex-container" v-if="user">
        <label for="firstName">Name</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="firstName"
          name="firstName"
          v-model="user.firstName"
          :placeholder="user.firstName"
        />
        <label for="lastName">Surname</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="lastName"
          name="lastName"
          v-model="user.lastName"
          :placeholder="user.lastName"
        />
  
        <label for="userAge">Age</label>
        <input
          type="number"
          autocomplete="off"
          required
          id="userAge"
          name="userAge"
          v-model="user.userAge"
          :placeholder="user.userAge"
        />
  
        <label for="Gender">Gender</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="Gender"
          name="Gender"
          v-model="user.Gender"
          :placeholder="user.Gender"
        />
  
        <label for="userRole">Role</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userRole"
          name="userRole"
          v-model="user.userRole"
          :placeholder="user.userRole"
        />
        <label for="emailAdd">Email Address</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="emailAdd"
          name="emailAdd"
          v-model="user.emailAdd"
          :placeholder="user.emailAdd"
        />
  
        <label for="userPass">Password</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userPass"
          name="userPass"
          v-model="user.userPass"
          :placeholder="user.userPass"
        />
        <label for="userProfile">Profile URL</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userProfile"
          name="userProfile"
          v-model="user.userProfile"
          :placeholder="user.userProfile"
        />
  
        <button @click="updateUser" class="btn-submit">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        userAge: "",
        Gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      };
    },
    methods: {
      async updateUser() {
        try {
          await axios.put(
            `https://zulaigahsapi.onrender.com/products/${this.$route.params.id}`,
            {
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              userAge: this.user.userAge,
              Gender: this.user.Gender,
              userRole: this.user.userRole,
              emailAdd: this.user.emailAdd,
              userPass: this.user.userPass,
              userProfile: this.user.userProfile,
            }
          );
          this.firstName = "";
          this.lastName = "";
          this.userAge = "";
          this.Gender = "";
          this.userRole = "";
          this.emailAdd = "";
          this.userPass = "";
          this.userProfile = "";
  
          this.$router.push("/admin");
        } catch (err) {
          console.log(err);
        }
      },
    },
    props: ["id"],
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
    mounted() {
      this.$store.dispatch("getUser", this.id), this.$store.dispatch("getUsers");
    },
  };
  </script>
  
  <style scoped>

  </style>
  