<template>
    <div class="contact">
      <main id="main-Section">
        <div id="contact" class="row">
          <div class="col first">
            <div class="card left">
              <div class="hijab">
                <img
                  src="https://i.postimg.cc/mZHF14HT/contact.png"
                  loading="lazy"
                  class="pfp"
                />
              </div>
  
              <div class="text-center pb-3 add-pad bot">
                <h4><strong style="color: #8F7E18 !important;">𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆</strong></h4>
                <em>Contact Details:</em> <br />
                <br />
                Number: 021 362 010 <br />
                Email: 𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆@gmail.com<br />
                <br />
                <p>
                  We at 𝑩𝒆𝒍𝒍𝒂 𝑽𝒊𝒔𝒂𝒈𝒆 store care about our customer's <br> feedback as we strive to serve nothing but the best.
                </p>
              </div>
            </div>
          </div>
  
          <div id="form-box" class="col-md-8 p-2">
            <div class="card border-2 mt-5 second" id="contact-box">
              <form action="https://i.postimg.cc/HsbqzZy5/Bv-1.png" method="POST">
                <h2
                  id="slideInLeft"
                  class="card p-3 heading-text pink-bg border-2 text-center"
                  style="border: none"
                >
                  Contact Me!
                </h2>
                <div class="input-ting">
                  <label class="form-label heading-text">Name:</label>
                  <input
                    type="text"
                    name="Name"
                    class="form-control light-bg border-2"
                    placeholder="Please enter your name"
                    required
                  />
                </div>
  
                <div class="input-ting">
                  <label class="form-label heading-text">Email:</label>
                  <input
                    type="email"
                    name="Email"
                    class="form-control light-bg border-2"
                    placeholder="Please Enter your email"
                    required
                  />
                </div>
  
                <div class="input-ting">
                  <label class="form-label heading-text">Enter message:</label>
                  <textarea
                    name="Message"
                    class="form-control light-bg border-2"
                    rows="5"
                    placeholder="We would like to hear from you"
                  ></textarea>
                </div>
                <div class="bttn">
                  <button type="submit" class="btn submit-btn submitting">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- contact form done -->
      </main>
    </div>
  </template>
  <script>
  export default {
      
  }
  </script>
  
  
  <style scoped>
  *{
    font-family: "Poppins";
  }
  /* Image styling for contact page */
  
  .col {
    padding: 30px;
  }
  
  .pfp {
    width: 100%;
    border-radius: 50%;
    box-shadow: 8px 8px 15px whitesmoke, -4px -4px 15px silver;
    background: whitesmoke;
  }
  .bttn {
    width: 90%;
  }
  
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .input-ting {
    width: 90%;
  }
  
  .second {
    margin-bottom: 5rem;
    background-color: pink;
    color: #8F7E18;
    text-align: start;
  }
  
  form h2 {
    background-color: #D78976;
    color: white;
    margin: 5px;
  }
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* height: 600px; */
    margin-bottom: 1px;
    padding-top: 20px;
    padding-bottom: 0px ;
    line-height: 65px;
  
  }
  #contact-box {
    margin-top: 1rem !important;
    padding-bottom: 0px;
  }
  
  .bot {
    padding-top: 1rem;
    background-color: pink;
    color: white;
  }
  
  .bot p {
    color: black;
  }
  
  .hijab img {
    width:26rem;
    height:18rem;
  }
  
  .submit-btn {
    width: 100% !important;
    position: relative !important;
    display: flex !important;
    margin-left: 0 !important;
    margin-top: 80px !important;
  }
  #contact {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 20px;
  }
  
  .hijab {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  
  #contactPage {
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
  }
  
  #main-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .submitting {
    background-color: #D78976;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2.4rem;
    color: white;
  }
  .submitting:hover {
    box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFFCF2;
  }
  
  #form-box {
    margin-top: 28px;
    line-height: 40px;
  }
  @keyframes slideInLeft {
    from {
      transform: translateX(-300px);
    }
    to {
      transform: translateX(0);
    }
  }
  
  #slideInLeft {
    animation: slideInLeft 1s ease-in;
  }
  
  @media (max-width: 300px) {
    .hijab img {
      width: 100%;
      height: 100%;
      border-style: none;
    }
    .hijab {
      padding: 10px;
    }
  
  }
  
  .text-reset {
    text-decoration: none !important;
    color: #484848 !important;
  }
  
  .text-uppercase {
    color: black !important;
  }
  /* end of footer */
  
  /* about */
  strong {
    color: black !important;
    font-family: "Caveat", cursive !important;
    font-family: "Poppins", sans-serif !important;
  }
  
  span {
    color: pink !important;
    font-family: "Caveat", cursive !important;
    font-family: "Poppins", sans-serif !important;
  }
  /* about end */
  </style>
  
  
  
  
  
  
  
  
  
  