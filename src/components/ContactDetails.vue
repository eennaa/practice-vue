<template>
  <div>    
    <table border="true">
      <thead>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <td> {{contact.first_name}}  </td>
        <td> {{contact.last_name}}</td>
        <td> {{contact.email}} </td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['contact'],
  
  // methods: {
  //   getContact(id){
  //     this.contact = Contacts.find(this.id);
  //   }
  // }
}
</script>
