<template>
  <div class="addPost">
    <input v-model="name" required placeholder="name"/>
    <input v-model="describe" required placeholder="describe"/>
    <input v-model="price" required placeholder="price"/>
    <input class="inp" type="checkbox" v-model="isShow" />
    <button type="submit" class="addButton" v-on:click="onSubmit(postPolits)">Send</button>
  </div>
</template>
<script>
export default {
  props: ["postPolits"],
  data() {
    return {
      name: "",
      describe:"",
      price:"",
      isShow:Boolean()
    };
  },
  methods: {
    onSubmit(postPolits) {
        const newTodo = {
          _id: Date.now(),
          name: this.name,
          describe:this.describe,
          price:this.price,
          isShow:this.isShow
        };
        console.log(newTodo);
        fetch(`http://localhost:4000/app/` + postPolits, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }).then((res) => res.json());
        this.$emit("add-politics", newTodo);
        this.text = "";
      }
    }
};
</script>
<style>
textarea {
  width: 100%;
  height: 100px;
}
.text {
  align-self: start;
}
.addPost{
  color:red;
  margin: 30px;
}
</style>
<style scoped>
.addPost{
  display: flex;
}
.addButton{
  width: 40%;
}
.inp{
  width: 20px;
  height: 20px;
  margin: 10px;
}
</style>