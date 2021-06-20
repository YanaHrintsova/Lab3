<template>
  <div class="Basic">
   
    <MenuProfile />
  </div>
</template>

<script>
import MenuProfile from "./MenuProfile";
export default {
  name: "Basic",
  components: {
    MenuProfile,
  },
};
</script>
<style>
textarea {
  width: 100%;
  height: 100px;
}
.line {
  margin: 10px 0px 10px 0px;
  border-bottom: 1px solid rgb(36, 33, 33);
}
</style>