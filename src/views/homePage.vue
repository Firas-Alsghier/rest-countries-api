<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home-container">
    <div class="cards-container" v-if="show">
    <div class="search">
      <div class="flex-container">
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" @keypress="getInputVal" v-model="text" class="search-input" placeholder="Search for a country" />
        </div>
    </div>
    <div class="countries">
      <countryCard :pic="countriesData[0].flags.png" :country="countriesData[0].name.common" :num="countriesData[0].population" :continent="countriesData[0].continents[0]" :capital="countriesData[0].capital[0]"/>
      <countryCard :pic="countriesData[1].flags.png" :country="countriesData[1].name.common" :num="countriesData[1].population" :continent="countriesData[1].continents[0]" :capital="countriesData[1].capital[0]"/>
      <countryCard :pic="countriesData[2].flags.png" :country="countriesData[2].name.common" :num="countriesData[2].population" :continent="countriesData[2].continents[0]" :capital="countriesData[2].capital[0]"/>
      <countryCard :pic="countriesData[3].flags.png" :country="countriesData[3].name.common" :num="countriesData[3].population" :continent="countriesData[3].continents[0]" :capital="countriesData[3].capital[0]"/>
      <countryCard :pic="countriesData[4].flags.png" :country="countriesData[4].name.common" :num="countriesData[4].population" :continent="countriesData[4].continents[0]" :capital="countriesData[4].capital[0]"/>
      <countryCard :pic="countriesData[5].flags.png" :country="countriesData[5].name.common" :num="countriesData[5].population" :continent="countriesData[5].continents[0]" :capital="countriesData[5].capital[0]"/>
      <countryCard :pic="countriesData[6].flags.png" :country="countriesData[6].name.common" :num="countriesData[6].population" :continent="countriesData[6].continents[0]" :capital="countriesData[6].capital[0]"/>
      <countryCard :pic="countriesData[7].flags.png" :country="countriesData[7].name.common" :num="countriesData[7].population" :continent="countriesData[7].continents[0]" :capital="countriesData[7].capital[0]"/>
    </div>
  </div>
  </div>
  <cardDetail/>
</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import countryCard from "../components/countryCard.vue";
import cardDetail from "../views/cardDetail.vue";
export default {

  data() {
    return {
      text: "",
  }
  },
 
  components: {
    countryCard,
    cardDetail,
 },
  computed: {
    show() {
      return this.$store.state.showContainer;
  },
  countriesData() {
    return this.$store.getters.getCountriesData;
  },
 },

 methods: {
  getInputVal(e) {
    if(e.key === "Enter") {
    this.$store.dispatch("dispatchInputVal", this.text);
    this.$store.dispatch("dispatchSpecificCountry", this.text);
    this.$store.state.showContainer = !this.$store.state.showContainer;
    }
  },
 }
};

</script>
<!-- eslint-disable prettier/prettier -->

<style lang="scss" scoped>

.home-container {
  margin-top: 40px;
}

.flex-container {
  display: flex;
  justify-content: center;
  padding: 0 60px;
  .fa-magnifying-glass {
    transform: translateX(45px);
  }
}

.search-input {
  padding: 15px 60px;
  border: none;
  border-radius: 3px;
  outline: none;
  box-shadow: 0 3px 8px -1px hsl(200, 15%, 8%);
}

.countries {
  display: grid;
  grid-template-columns: repeat(4, 270px);
  justify-content: space-evenly;
  margin: 70px 0;
  gap: 25px;
   @media (max-width: 1125px){
    justify-content: center;
    grid-template-columns: repeat(4, 220px);
  }
  @media (max-width: 940px) {
    grid-template-columns: repeat(3, 220px)
  }
  @media (max-width: 730px) {
    grid-template-columns: repeat(2, 300px)
  }
  @media (max-width: 512px) {
    grid-template-columns: 200px
  }
}
</style>