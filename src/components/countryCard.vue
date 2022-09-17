<!-- eslint-disable prettier/prettier -->

<template>
<!-- eslint-disable prettier/prettier -->
	<div class="card">
    <div class="flag">
      <img :src="pic" alt="flag">
    </div>
    <div class="details">
      <h2>{{country}}</h2>
      <p>Population: <span>{{num}}</span></p>
      <p>Regions: <span>{{continent}}</span></p>
      <p>Capital: <span>{{capital}}</span></p>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
 props: ['pic', 'country', 'num', 'continent', 'capital'],

};
</script>
<!-- eslint-disable prettier/prettier -->

<style lang="scss">

.card {
  background: hsl(0, 0%, 100%);
  width: 270px;
  height: 320px;
  border-radius: 5px;
   @media (max-width: 1125px){
    width: 220px;
  }
}

.flag {
  height: 50%;
  img {
    width: 100%;
    height: 90%;
  }
}

.details h2 {
  margin-bottom: 20px;
  font-weight: 800;
}

.details p {
  line-height: 1.8;
  font-weight: 600;
}

</style>
