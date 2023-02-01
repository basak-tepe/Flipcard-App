<template>
  <div>
    <div class="links">
      <router-link class="nav-link" active-class="active"  to="/">
        Home Page
      </router-link>

      <router-link class="nav-link" active-class="active" to="/game">
      Game
    </router-link>

    </div>
    <router-view></router-view>

  </div>
</template>


<script>
import { useStore } from "./stores/store";

export default{
  
  data (){
    return {
      count: 0,
      store: useStore(),
    }
  }
}

</script>

<style></style>