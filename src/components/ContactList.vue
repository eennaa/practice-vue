<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <!-- <form @submit.prevent>
      <label>First name</label>
      <input v-model="newContact.first_name" type="text" placeholed="name"> <br>
      <label>Last name</label>
      <input v-model="newContact.last_name" type="text" placeholed="name"> <br>
      <label>Email</label>
      <input v-model="newContact.email" type="text" placeholed="email"> <br>
      <button @click="addContact"  type="submit">Add Contact</button> 
    </form> <br> -->

    <table border=1 align="center">
      <thead>
        <th>First name</th>
        <th> Last name</th>
        <th>Email</th>
        
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
        <!-- <tr v-for="(contact, key) in contacts" :key="key"> -->
          <td> {{contact.first_name}} </td>
          <td> {{contact.last_name}} </td>
          <td> {{contact.email }} </td>
          <td> <button @click="deleteContact(contact)">Delete</button> </td>
        </tr>
      </tbody>
    </table>
    <button @click="callParentMethod()"> Parent Methon Button</button>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  props: [
    "title",
  ],

  data(){
    return {
      newContact: {},
      contacts: [
        // {name: "John", email: "example@mail.com"},
        // {name: "Jack", email: "example2@mail.com"},
        // {name: "Susan", email: "example3@mail.com"},
        // {name: "Jasmin", email: "example4@mail.com"},
                
      ],
  
    };
  },
  methods: {
    addContact (){
      this.contacts.push(this.newContact);
      this.newContact = {}    
    },
    deleteContact (contact){

      let indexOfContactForDeleting = this.contacts.indexOf(contact);
      this.contacts.splice(indexOfContactForDeleting, 1);
    },

    callParentMethod(){
      this.$emit("parentMtd", 'Aleksandar');
    }
  }
  
}
</script>


// export const test = function() {
//   ...
// }
