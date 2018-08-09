<template>
  <div>
    <h3>Contacts</h3>
    <h1></h1>
    <button class="btn btn-danger" @click="redButton()">Red button</button>
    <router-link class="btn btn-success" to="add-contact"> Go to Add Contacts</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data(){
    return {
      contacts: [
         { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
         { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
         { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
       ]
    }
  },
 
 methods: {
   redButton(){
     console.log("hi");
   }

 }
}
</script>

