<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <button @click="btnClick">test is: {{number}}</button>
</template>

<script>
import{ ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'Index',
  components: {
    HelloWorld
  },
  setup(props, context){
    const number = ref(0);
    const btnClick =()=>{
      number.value++
    }
    return{
      number,
      btnClick
    }
  },
  /*data(){
    return{
      number: 0
    }
  },
  methods: {
    btnClick(){
      this.number++
    }
  }*/
}
</script>
