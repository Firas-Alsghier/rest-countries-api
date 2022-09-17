<template>
  <div id="app" :class="{ dark: active }">
    <nav>
      <router-link to="/"></router-link>
      <div class="flex-container">
        <div class="nav-title">
          <h2 class="nav-heading">Where in the world?</h2>
        </div>
        <div class="switching" @click="changeIcon()">
          <i class="fa-regular fa-moon" v-if="!active"></i>
          <i class="fa-regular fa-sun" v-else></i>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("dispatchContries");
  },
  computed: {
    active() {
      return this.$store.state.active;
    },
  },
  methods: {
    changeIcon() {
      this.$store.state.active = !this.$store.state.active;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 5px;
}

.dark {
  background: hsl(207, 26%, 17%);
  .search-input {
    background: hsl(209, 23%, 22%);
    color: hsl(0, 0%, 100%);
    &::placeholder {
      color: hsl(0, 0%, 100%);
    }
  }
  nav {
    background: hsl(209, 23%, 22%);
    box-shadow: 0 3px 5px -1px rgb(14, 13, 13);
    .flex-container {
      .nav-title {
        .nav-heading {
          color: hsl(0, 0%, 100%);
        }
      }
    }
    .switching i {
      color: hsl(0, 0%, 100%);
    }
  }
  .fa-solid {
    color: hsl(0, 0%, 100%);
  }

  .card {
    background: hsl(209, 23%, 22%);
    color: hsl(0, 0%, 100%);
    span {
      color: hsl(0, 0%, 52%);
    }
  }

  .card-container {
    .back {
      background: hsl(209, 23%, 22%);
      box-shadow: 0 3px 5px -1px rgb(14, 13, 13);
      h2 {
        color: hsl(0, 0%, 100%);
      }
    }
    .first-row,
    .second-row {
      color: hsl(0, 0%, 100%);
      span {
        color: hsl(0, 0%, 52%);
      }
    }
  }
}

nav {
  background: hsl(0, 0%, 100%);
  height: 100px;
  box-shadow: 0 3px 5px -1px hsl(0, 0%, 52%);
  .flex-container {
    height: 80%;
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-title {
      .nav-heading {
        color: hsl(200, 15%, 8%);
      }
    }

    .switching {
      display: flex;
      i {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
