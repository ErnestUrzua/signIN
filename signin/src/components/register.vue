<template>
  <div class="container">
    <div >
    <a><img src="https://ernesturzua.github.io/Docs/signIN_logo.png"></a>
    </div>
  
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Name" v-model="name" name="name">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Email" v-model="email" name="email">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Telephone" v-model="telephone" name="telephone">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Company" v-model="company" name="company">
    </div>
   <div class="checkbox" align="left">
      <input id="officialVisit" type="checkbox">
      <label for="officialVisit">
        Official visit
      </label>
      <p align="left"</p>
    </div>
      
      <div class="checkbox" align="left">
        <input id="escort" type="checkbox" v-model="escort">
        <label for="escort">
          Escort required
        </label>
        <p align="left"</p>
      </div>
    
    <div class="form-group">
      <input type="text" class="form-control" v-if="escort" placeholder="Escort name" v-model="escortName" name="escortName">
    </div>
    <button class="btn btn-primary" type="button" v-on:click="register">
      Register
    </button>
  </div> 
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      telephone: '',
      company: '',
      officialVisit: false,
      escort: false,
      escortName: ''
    }
  },
  methods: {
    // creates new user
    register () {
      // eslint-disable-next-line
      const newUser = {
        name: this.name,
        email: this.email,
        telephone: this.telephone,
        company: this.company,
        officialVisit: this.officialVisit,
        escort: this.escort,
        escortName: this.escortName
      }
      alert('Successfully submitted ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>