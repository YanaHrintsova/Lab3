<template>
    <div :class='true?"modal active":"modal"'>
        <div :class='active?"modal_content active":"modal_content"'>
            <textarea v-on:change="ChangeMessage(message.name)" v-model="message.name" placeholder="name"/>
            <textarea v-on:change="ChangeMessage(message.describe)" v-model="message.describe" placeholder="describe"/>
            <textarea v-on:change="ChangeMessage(message.price)" v-model="message.price" placeholder="price"/>
            <!-- <p>{{message}}</p> -->
            <button class="buttonClose"  v-on:click="closeEdit()">Close</button>
            <button class="buttonSave"  v-on:click="editBlog(message)">Save</button>
        </div>
    </div>
</template>
<script>
export default {
    props:['message'],
    methods:{
        editBlog(message){
            this.$emit('edit',false,message.name,message.describe,message.price)
            // this.$emit('save-change')
        },
        closeEdit(){
            // alert(mess)
            this.$emit('edit-close',false)
        }
    }
}
</script>
<style>
.modal{
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
}
.modal.active{
    opacity: 1;
    pointer-events: all;
}
.modal_content{
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    height: 500px;
    width: 1200px;
    transform: scale(0.5);
    transition: 0.4s all;
}
.modal_content.active{
    transform: scale(1);
}
.buttonSave{
    width:50%;
    height:100px;
}
.buttonClose{
    width:50%;
    height:100px;
}
textarea{
    width: 100%;
    height:200px;
    font-size: 18px;
}
button{
     font-size: 18px;
}
</style>