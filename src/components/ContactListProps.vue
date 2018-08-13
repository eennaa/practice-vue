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
        {{contact.first_name}}  {{contact.last_name}} <br>
    </router-link> <br>


  </div>
</template>

<script>
export default {
  props: ['contactList']
}
</script>
