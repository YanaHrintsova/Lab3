<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li
            class="nav"
            v-for="(menu, index) in headerMenuList"
            :key="index"
          >
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="menu.path"
            >
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "d",
  props: {
    msg: String,
  },
  data() {
    return {
      headerMenuList: [
        { name: "Меню ресторану", path: "/" },
      ],
    };
  },
};
</script>
<style>
.nav{
  text-align: center;
  font-size: 28px;
  
}
</style>