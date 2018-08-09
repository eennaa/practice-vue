<template>
  <div>
    <!-- {{ contact }} -->
    <!-- <h3>TEST</h3> -->
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <td> {{contact.name}} </td>
        <td> {{contact.email}} </td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>
