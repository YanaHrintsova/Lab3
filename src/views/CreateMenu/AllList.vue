<template>
  <div class="list">
    <ul >
      <li v-if="polits.isShow">
        <p>name:{{ polits.name }}</p>
        <p>describe:{{ polits.describe }}</p>
        <p>price:{{polits.price}}</p>
      </li>
      <span>
        <input  class="input" type="checkbox" v-model="polits.isShow" v-on:click="Edit(polits._id,polits.isShow)"/>
        <button v-if="polits.isShow" v-on:click="Edit2(polits._id,polits.name,polits.describe,polits.price)" >edit</button> 
        <button v-on:click="Delete(polits._id)" > &#10006;</button> 
      </span>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      checked:Boolean()
    }
    
  },
  props: {
    polits: {
      type: Object,
      required: true,
    },
  },
  methods:{
      Delete(id){
          this.$emit('remove-blog',id)
      },
      Edit(id,checked){
          this.checked=!checked;
          this.$emit('edit-blog-one',id,this.checked)
      },
      Edit2(id,name,describe,price){
          this.$emit('edit-blog-two',id,name,describe,price)
      }
  }
};
</script>
<style scoped>
.list{
  margin-bottom: 20px;
}
ul {
  border: 0.5px solid #ccc;
  padding: 1rem 1rem;
  margin-bottom: 30px;
}
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
}
span{
 float: right;
}
button{
  margin: 5px;
}
.input{
  width: 20px;
  height: 20px;
}
.done {
  text-decoration: line-through;
}
input {
  margin-right: 1rem;
}
img {
  width: 50%;
}
p {
  line-height: 1px;
}
</style>