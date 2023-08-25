<template>
  <div>
    <div class="container flex-container">

      <label class="form-label"> First Name</label>
      <input type="text" autocomplete="off" required name="firstName" v-model="model.user.firstName" />

      <label class="form-label">Last Name</label>
      <input type="text" class="form-input" autocomplete="off" required name="lastName" v-model="model.user.lastName" />

      <label class="form-label">Age</label>
      <input type="text" autocomplete="off" required name="userAge" v-model="model.user.userAge" />

      <label class="form-label">Gender</label>
      <input type="text" class="form-input" autocomplete="off" required name="Gender" v-model="model.user.Gender" />

      <label class="form-label">Role</label>
      <input type="text"  class="form-input" autocomplete="off" required name="userRole" v-model="model.user.userRole" />

      <label class="form-label">Email address</label>
      <input type="text"  class="form-input" autocomplete="off" required name="emailAdd" v-model="model.user.emailAdd" />

      <label class="form-label">Password</label>
      <input type="text" class="form-input" autocomplete="off" required name="userPass" v-model="model.user.userPass" />

      <label class="form-label">Profile</label>
      <input type="text" class="form-input" autocomplete="off" required name="userProfile" v-model="model.user.userProfile" />

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
        user: {
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
      axios.post("https://zulaigahsapi.onrender.com/user", this.model.user)
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

<style scoped>

.form-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 5px;
 
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #e685e8;
}

.btn-submit {
  padding: 10px 15px;
  background-color: #94407e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #d290d3;
}
</style>
