<template>
    
   <div>
    <div class="login-card">
  <div class="card-header">
    <h1>Login</h1>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required="">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required="">
      </div>
      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>
  </div>
</div>

   </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.login-card {
  background-image: url(https://i.postimg.cc/1XvMr9n5/home-image.jpg);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 73px;
  max-width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  text-align: center;
  margin-bottom: 20px;
}

.card-header h1 {
  font-size: 2em;
  color: #333;
  text-shadow: 1px 1px #ddd;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 1.2em;
  color: #555;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  box-sizing: border-box;
  padding: 6px;
  border-radius: 5px;
  border: none;
  background-color: #f0f0f0;
  font-size: 1.2em;
  color: #555;
  box-shadow: inset 0px 2px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  box-shadow: inset 0px 2px 30px rgba(0, 0, 0, 0.3);
  outline: none;
}



.login-button {
  background-color:#D78976;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  padding: 10px;
  width: 17%;
  /* transition: background-color 0.3s ease; */
  /* transition: 0.25s; */
}

.login-button:hover {
  box-shadow: -2px -2px 5px #ccc5b9, 2px 2px 5px#FFFCF2 !important;
}

</style>