import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countriesData: [],
    showContainer: true,
    inputVal: "",
    active: false,
    specificCountry: {
      name: "",
      nativeName: "",
      population: 0,
      region: "",
      flag: "",
      capital: "",
      currencies: "",
      languages: "",
      subregion: "",
      fifa: "",
    },
  },
  getters: {
    getCountriesData(state) {
      return state.countriesData;
    },
  },
  mutations: {
    MUT_CONTRIES(state, val) {
      state.countriesData = val;
    },

    MUT_INPUT_VAL(state, val) {
      state.inputVal = val;
    },

    MUT_SELECTED(state, val) {
      state.selected = val;
    },

    MUT_SPECIFIC_COUNTRY(state, val) {
      state.specificCountry.name = val.name.common;
      state.specificCountry.nativeName =
        val.name.nativeName[Object.keys(val.languages)[0]].common;
      state.specificCountry.population = val.population;
      state.specificCountry.region = val.region;
      state.specificCountry.capital = val.capital[0];
      state.specificCountry.flag = val.flags.png;
      state.specificCountry.currencies = Object.entries(
        val.currencies
      )[0][1].name;
      state.specificCountry.languages = Object.values(val.languages)[0];
      state.specificCountry.subregion = val.subregion;
      state.specificCountry.fifa = val.fifa;
    },
  },
  actions: {
    async dispatchContries({ commit }) {
      const [first, second, third, forth, fifth, sixth, seventh, eighth] =
        await Promise.all([
          axios.get("https://restcountries.com/v3.1/name/libya"),
          axios.get("https://restcountries.com/v3.1/name/algeria"),
          axios.get("https://restcountries.com/v3.1/name/egypt"),
          axios.get("https://restcountries.com/v3.1/name/tunisia"),
          axios.get("https://restcountries.com/v3.1/name/germany"),
          axios.get("https://restcountries.com/v3.1/name/italy"),
          axios.get("https://restcountries.com/v3.1/name/spain"),
          axios.get("https://restcountries.com/v3.1/name/switzerland"),
        ]);
      commit("MUT_CONTRIES", [
        first.data[0],
        second.data[0],
        third.data[0],
        forth.data[0],
        fifth.data[0],
        sixth.data[0],
        seventh.data[0],
        eighth.data[0],
      ]);
    },

    dispatchInputVal({ commit }, value) {
      commit("MUT_INPUT_VAL", value);
    },

    dispatchSelected({ commit }, val) {
      commit("MUT_SELECTED", val);
    },

    async dispatchSpecificCountry({ commit }, val) {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/${val}`
      );
      commit("MUT_SPECIFIC_COUNTRY", data.data[0]);
      console.log(data.data[0]);
    },
  },
  modules: {},
});
