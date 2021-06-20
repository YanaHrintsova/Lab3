<template>
  <div class="EconomyText">
    <div class="btn">
      <button @click="show=!show" class="line">Створити нове меню</button>
    </div>
    
    <div v-show="show">
      <AddPolits @add-politics="addTodo" :postPolits="postPolits" />
    </div>
    
    <Loader v-if="loading" />
    <All v-else-if="politics.length" v-bind:politics="politics"  v-bind:postPolits="postPolits" @remove-blog="removeComment"/>
  </div>
</template>

<script>
import All from "../CreateMenu/All";
import AddPolits from "../CreateMenu/AddPolits";
import Loader from "../Loader/Loader";
export default {
  name: "EconomyText",
  data() {
    return {
      politics: [],
      loading: true,
      postPolits: "basic",
      show:false
    };
  },
  mounted() {
    fetch("http://localhost:4000/app/getbasic")
      .then((response) => response.json())
      .then((json) => {
        this.politics = json.polits;
        console.log(json.polits);
        this.loading = false;
      });
  },
  components: {
    All,
    AddPolits,
    Loader,
  },
  methods: {
    addTodo(polits) {
      console.log(polits)
      this.politics.push(polits);
    },
    removeComment(_id){
      this.politics = this.politics.filter(t=>t._id !==_id)
    },
  },
};
</script>
<style>
textarea {
  width: 100%;
  height: 100px;
}
.line{
  font-size: 28px;
  border-radius: 15px;
  margin-left: 50%;
}
.btn{
  width: 100%;
}
</style>