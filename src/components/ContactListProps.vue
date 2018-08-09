<template>
  <div class="list-group">
    <!-- {{ contactList }} -->
    <router-link 
      class="list-group-item list-group-item-action"
      v-for="(contact, index) in contactList" 
      :key="index" 
      :to="{ name: 'contact-details', params: {id: contact.id}}"
      tag= "button"
      exact-active-class= "active" >
        {{ contact.name }} <br>
    </router-link> <br>
<!-- <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="contact in contactList" :key="contact.id">       
      <td> {{ contact.id }} </td>
      <td> {{ contact.name }} </td>
      <td> {{contact.email }} </td>
      <td> {{contact.number }} </td>        
    </tr>
  </tbody>
</table> -->

  </div>
</template>

<script>
export default {
  props: ['contactList']
}
</script>
