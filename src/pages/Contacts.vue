<template>
  <div>
    <h3>Contacts</h3>
    <ContactListProps :contactList="contacts"/>
    <ContactDetails :contact="contact"/>
    
    <button class="btn btn-danger" @click="redButton()">Red button</button>
    <router-link class="btn btn-success" to="add-contact"> Go to Add Contacts</router-link>
  </div>
</template>

<script>
import ContactListProps from '../components/ContactListProps.vue'
import ContactDetails from '../components/ContactDetails.vue'
export default {
  components:{
    ContactListProps,
    ContactDetails
  },

  data(){
    return {
      contacts: [
         { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
         { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
         { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
       ]
    };
  },
 
 methods: {
   redButton(){
     console.log("hi");
   }

 },

 computed:{
   contact(){
     let routeParam = this.$route.params.id;
     return this.contacts.find(contact => contact.id === routeParam);
    //  let returnContact = {};
    //  this.contacts.forEach(contact=> {
    //    if(contact.id === routeParam ){
    //      return returnContact;
       }
    //  })
    //  console.log(this.$toute.params.id);
   }
 }
// }
</script>

