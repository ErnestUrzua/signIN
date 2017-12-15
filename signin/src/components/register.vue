<template>
  <div class="container">
    <div >
    <a href="/register"><img src="https://ernesturzua.github.io/Docs/signIN_logo.png"></a>
    </div>
  
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Name" v-model="Name" name="name">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Email" v-model="email" name="email">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Telephone" v-model="telephone" name="telephone">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Company" v-model="Company" name="company">
    </div>
   <div class="checkbox" align="left">
                        <input id="officialVisit" type="checkbox">
                        <label for="officialVisit">
                            Official visit
                        </label>
                        <p align="left"</p>
                    </div>
      
      <div class="checkbox" align="left">
        <input id="escort" type="checkbox">
        <label for="escort">
          Escort required
        </label>
        <p align="left"</p>
      </div>
    
    <div class="form-group">
      <input type="text" class="form-control" v-validate="'required'" placeholder="Escort name" v-model="escortName" name="escortName">
    </div>
    <button class="btn btn-primary" type="button" v-on:click="register">
      Register
    </button>
  </div> 
</template>

<script>
export default {
  // methods: {
    // creates new user
   /*  register () {
      const newUser = {
        name: this.name,
        email: this.email,
        telephone: this.telephone,
        company: this.company,
        officialVisit: this.officialVisit,
        escort: this.escort,
        escortName: this.escortName
      }
    }
  }
} */
}
</script>