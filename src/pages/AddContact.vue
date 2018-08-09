<template>
  <div>
    <h3>Add Contact</h3>
    <router-link class="btn btn-danger" to="/">Go to contacts</router-link>
    <h1>{{ $route.params.id}} </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 
}
</script>

