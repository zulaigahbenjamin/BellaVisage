<template>
  <div>
    <div class="container flex-container">
      <label> First Name</label>
      <input type="text" autocomplete="off" required name="firstName" v-model="model.users.firstName" />
      <label>Last Name</label>
      <input type="text" autocomplete="off" required name="lastName" v-model="model.users.lastName" />
      <label>Age</label>

      <input type="text" autocomplete="off" required name="userAge" v-model="model.users.userAge" />

      <label>Gender</label>
      <input type="text" autocomplete="off" required name="Gender" v-model="model.users.Gender" />
      <label>Role</label>
      <input type="text" autocomplete="off" required name="userRole" v-model="model.users.userRole" />
      <label>Email address</label>
      <input type="text" autocomplete="off" required name="emailAdd" v-model="model.users.emailAdd" />
      <label>Password</label>
      <input type="text" autocomplete="off" required name="userPass" v-model="model.users.userPass" />
      <label>Profile</label>
      <input type="text" autocomplete="off" required name="userProfile" v-model="model.users.userProfile" />

      <button @click="addUser" class="btn-submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      model: {
        users: {
          firstName: "",
          lastName: "",
          userAge: "",
          Gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "",
        }
      }

    };
  },
  methods: {
    addUser() {
      axios.post("https://zulaigahsapi.onrender.com/user", this.model.users)
        .then(response => {
          console.log("User added:", response.data);

          // Emit an event to notify parent component to close the modal
          this.$emit('ToggleModal');
        })
        .catch(error => {
          console.error("Error adding user:", error);
          alert("An error occurred while adding the user.");
          
        });
    },
  }
  };
</script>

<style scoped;></style>
