
<template>

	<div>
	<h1>Register</h1>

	<input
		type="email"
		name="email"
		v-model="email"
		placeholder="email" />
	<br>
	<input
		type="password"
		name="password"
		v-model="password"
		placeholder="password" />
	<br>
	<button
		@click="register">
		Register
	</button>
	</div>
</template>

<script>

// import AuthenticationService from '../servises/AuthenticationService.js'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
    watch: {
  	  email (value) {
  		  console.log('email changed ' , value)
  	  }
    },
  	mounted () {
	  	setTimeout(() => {
			this.email = 'hello world'
	  	},2000)
  	}
}
</script>
