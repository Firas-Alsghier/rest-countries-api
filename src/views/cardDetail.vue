<!-- eslint-disable prettier/prettier -->
<template>
	<div class="card-container" v-if="!showContainer">
		<div class="back" @click="back">
			<h2><i class="fa-solid fa-arrow-left-long"></i> Back</h2>
		</div>
		<div class="middle">
			<div class="country-flag">
				<img :src="specificCountryFlags" alt="Flag" />
			</div>
			<div class="first-row">
				<h1 class="country-name">{{ specificCountryName }}</h1>
				<ul>
					<li>
						Native Name: <span>{{ specificCountryNativeName }}</span>
					</li>
					<li>
						population: <span>{{ specificCountryPopulation }}</span>
					</li>
					<li>
						Region: <span>{{ specificCountryRegion }}</span>
					</li>
					<li>
						Capital: <span>{{ specificCountryCapital }}</span>
					</li>
				</ul>
			</div>
			<div class="second-row">
				<ul>
					<li>
						currencies: <span>{{ specificCountryCurrencies }}</span>
					</li>
					<li>
						languages: <span>{{ specificCountryLanguages }}</span>
					</li>
					<li>
						subregion: <span>{{ specificCountrySubregion }}</span>
					</li>
					<li>
						Fifa: <span>{{ specificCountryFifa }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
	computed: {
		showContainer() {
			return this.$store.state.showContainer;
		},
		specificCountryName() {
			return this.$store.state.specificCountry.name;
		},
		specificCountryNativeName() {
			return this.$store.state.specificCountry.nativeName;
		},
		specificCountryPopulation() {
			return this.$store.state.specificCountry.population;
		},
		specificCountryRegion() {
			return this.$store.state.specificCountry.region;
		},
		specificCountryCapital() {
			return this.$store.state.specificCountry.capital;
		},
		specificCountryFlags() {
			return this.$store.state.specificCountry.flag;
		},
		specificCountryCurrencies() {
			return this.$store.state.specificCountry.currencies;
		},
		specificCountryLanguages() {
			return this.$store.state.specificCountry.languages;
		},
		specificCountrySubregion() {
			return this.$store.state.specificCountry.subregion;
		},
		specificCountryFifa() {
			return this.$store.state.specificCountry.fifa;
		},
	},

	methods: {
		back() {
			this.$store.state.showContainer = !this.$store.state.showContainer;
		},
	},
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss">
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
.card-container {
	position: relative;
	width: 90%;
	margin: auto;

	.back {
		cursor: pointer;
		position: absolute;
		background: white;
		box-shadow: 1px 2px 10px 1px hsl(0, 0%, 52%);
		padding: 7px 15px;
		border-radius: 5px;
		@media (max-width: 700px) {
			top: -80px;
		}
	}

	.middle {
		text-align: left;
		display: flex;
		height: 85vh;
		justify-content: space-evenly;
		align-items: center;
		@media (max-width: 700px) {
			display: grid;
			grid-template-columns: 2fr;
			justify-items: center;
			margin-top: 120px;
			text-align: center;
			li {
				font-size: 15px;
			}
		}
		.country-flag {
			width: 50%;
			img {
				width: 80%;
			}
		}
		li {
			line-height: 2.2;
			font-weight: 600;
		}
	}

	.first-row {
		margin-bottom: 75px;
		@media (max-width: 900px) {
			font-size: 14px;
		}
		@media (max-width: 700px) {
			margin: 0;
		}
	}
	.second-row {
		@media (max-width: 900px) {
			font-size: 14px;
		}
	}
}
</style>
