<template>
  <div class="d-flex min-vh-100">
    <main class="flex-fill">
      <Header />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.flex-fill {
  margin: 50px 100px 50px 100px;
  background-color: rgb(90, 62, 50);
}
</style>