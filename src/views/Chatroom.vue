<template>
<div class="container">
  <Navbar></Navbar>
  <ChatWindow></ChatWindow>
  <NewChatForm></NewChatForm>
</div>
</template>

<script>
import { watch } from 'vue';
import Navbar from '../components/Navbar'
import getUser from "../composables/getUser"
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm";
import ChatWindow from "@/components/ChatWindow";
export default {
  components: {ChatWindow, NewChatForm, Navbar },
  setup(){
    let {user}=getUser();
    let router=useRouter();
    watch(user,()=>{
      if(!user.value){
        // redirect welcome
        router.push("/");
      }
    })
  }
}

</script>

<style>

</style>