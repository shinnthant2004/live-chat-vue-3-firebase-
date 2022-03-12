<template>

  <h2>Login</h2>

  <form @submit.prevent="login">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error" v-if="error">{{error}}</div>
    <button>Login</button>
  </form>

</template>

<script>

import {getTransitionRawChildren, ref} from 'vue';
import useLogin from "@/composables/useLogin";

export default {
  name: "Login",
  setup(props, context){
    let email=ref("");
    let password=ref("");

    let {error,signIn} = useLogin();

    let login=async ()=>{
       let ref=await signIn(email.value,password.value);
       if(ref){
         context.emit("enterChatroom")
       }
    };
    return {email,password,login,error}
  }
}
</script>

<style scoped>

</style>