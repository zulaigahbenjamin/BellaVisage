<template>
    <tr class="table-row">
      <th class="table-head text-white">{{ product.prodId }}</th>
      <td class="text-white">{{ product.prodName }}</td>
      <td class="text-white">{{ product.quantity }}</td>
      <td class="text-white">R{{ product.amount }}</td>
      <td class="text-white">{{ product.category }}</td>
      <td><img :src="product.prodUrl" alt="" class="prodImg" /></td>
      
      <td class="second-table-data">
        <div class="action">
          <button class="btn-edit">
            <router-link
              :to="{ name: 'admin edit', params: { id: product.prodID } }"
            >
              Edit
            </router-link>
          </button>
          <button class="btn-delete" @click="deleteProduct(product.prodID)">
            Delete
          </button>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: ["product"],
    methods: {
      async deleteProduct(id) {
        try {
          await axios.delete(`https://zulaigahsapi.onrender.com/products${id}`);
          this.$store.dispatch("getProducts");
        } catch (err) {
          alert(err);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .prodImg {
    width: 100px;
  }
  .table-row {
    font-size: 1.125rem;
    border-color: rgba(0, 0, 0, 0.1);
    border-bottom-width: 2px;
  }
  
  .table-head {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .second-table-data {
    gap: 1.25rem;
    align-items: center;
  }
  .action {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }
  .btn-edit {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #00ff6a;
    color: #fff;
    border-radius: 0.125rem;
  }
  .btn-delete {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #fa0000;
    border-radius: 0.125rem;
  }
  
  @media only screen and (min-width: 700px) {
    .prodImg {
    width: 100px;
  }
  .table-row {
    font-size: 1.125rem;
    border-color: rgba(0, 0, 0, 0.1);
    border-bottom-width: 2px;
    width: 1000px !important;
  }
  
  .table-head {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .second-table-data {
    gap: 1.25rem;
    align-items: center;
  }
  .action {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }
  .btn-edit {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #00ff6a;
    color: #fff;
    border-radius: 0.125rem;
  }
  .btn-delete {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #fa0000;
    border-radius: 0.125rem;
  }
  .td {
    width: 500px !important;
    border: 2px solid white;
  }
  }
  </style>
  