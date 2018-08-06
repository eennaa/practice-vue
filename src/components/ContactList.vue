<template>
  <div class="hello">
    <h1>Contact List</h1>
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="(contact, key) in contacts" :key="key">
          <td> {{ contact.name }} </td>
          <td> {{contact.email }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data(){
    return {
      contacts: [
        {name: "John", email: "example@mail.com"},
        {name: "Jack", email: "example2@mail.com"},
        {name: "Susan", email: "example3@mail.com"},
        {name: "Jasmin", email: "example4@mail.com"},
                
      ]
    };
  }
  
}
</script>


// export const test = function() {
//   ...
// }
