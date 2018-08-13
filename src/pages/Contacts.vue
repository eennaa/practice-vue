<template>
  <div>
    <h3>Contacts</h3>
    <ContactListProps :contactList="contacts"/>
    <ContactDetails v-for="contact in contacts" :key="contact.id" :contact="contact"/>
    
    <button class="btn btn-danger" @click="redButton()">  Red button</button>
    <router-link class="btn btn-success" to="add-contact"> Go to Add Contacts</router-link>
  </div>
</template>

<script>
import ContactListProps from '../components/ContactListProps.vue'
import ContactDetails from '../components/ContactDetails.vue'
import { contacts } from './../services/Contacts.js'

export default {
  components:{
    ContactListProps,
    ContactDetails
  },

  data(){
    return {
      contacts: []
    }
  },

  beforeRouteEnter(to, from, next) {
    contacts
    .getAll()
    .then(response=> {
      next (vm=> {
       vm.contacts = response.data
       })
    })
    .catch(err =>console.log(err))    
  },
 
 methods: {
   redButton(){
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
    
   }
 }
// }
</script>

