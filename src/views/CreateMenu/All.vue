<template>
  <div>
    <ul>
      <AllList
        v-for="polits in politics"
        :key="polits._id"
        v-bind:polits="polits"
        v-on:remove-blog="removeTodo"
        v-on:edit-blog-one="editbBlog"
        v-on:edit-blog-two="editbBlog2"
      />
      <Edit v-if="edit" @edit-close="closeBloge" @edit="closeEditBloge" v-bind:message="message"/>
    </ul>
  </div>
</template>
<script>
import AllList from "./AllList";
import Edit from './Edit'
export default {
  props: ["politics","postPolits"],
  data(){
        return {
            edit:false,
            message:{
              name:"",
              describe:"",
              price:""
            },
            id:''
        }
  },
  components: {
    AllList,
    Edit
  },
  methods: {
    removeTodo(_id) {
      // alert(this.postPolits)
      fetch(`http://localhost:4000/app/delete${this.postPolits}/`+_id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      this.$emit("remove-blog", _id);
    },
    editbBlog(id,isShow){
        this.politics = this.politics.map(t=>{
          if(t._id===id){
            fetch(`http://localhost:4000/app/UpDate${this.postPolits}/`+id,{
              method:'PUT',
              headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
              },
              body:JSON.stringify({
                isShow: isShow
                })
            })
            return {  
              ...t,
              isShow: isShow
            }  
          }
          return t;
        })
    },
    editbBlog2(id,name,describe,price){
      if(name&&describe&&price){
        this.message.name=name;
        this.message.describe=describe;
        this.message.price=price;
      }
      this.id=id
      this.edit=true
    },
    closeEditBloge(bool,name,describe,price){
       this.politics = this.politics.map(t=>{
        if(t._id===this.id){
          fetch(`http://localhost:4000/app/UpDateAllDate/`+this.id,{
            method:'PUT',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
               name:name,
               describe,
               price
              })
          })
          return {  
            ...t,
            name,
            describe,
            price
          }  
        }
        return t;
      })
      this.edit=bool
    },
    closeBloge(bool){
      this.edit=bool
      this.message
    }
  },
};
</script>
 
 