<script setup>
import ApiService from '../composables/apiService'
import Transaction from '../components/Transaction.vue'
import { onBeforeMount, ref } from 'vue'
import { computed } from '@vue/reactivity'

// const users = ref()
const user = ref()
const transactions = ref()
const selectedMenu = ref('all')

// const getUsers = async () => {
//   const response = await ApiService.getUsers()
//   users.value = response.data
// }

const getUser = async () => {
  //constant user because not have backend to login
  const response = await ApiService.getUser(1)
  user.value = response.data
  transactions.value = response.data.transactions
}

onBeforeMount(async () => {
  // await getUsers()
  await getUser()
})

const transferBtn = () => {
  selectedMenu.value = 'transfer'
  console.log(selectedMenu.value)
}

const receiveBtn = () => {
  selectedMenu.value = 'receive'
  console.log(selectedMenu.value)
}

const filterMenu = computed(() => {
  let result = transactions.value
  if (selectedMenu.value == 'transfer') {
    result = result.filter((r) => {
      r.action == 'withdraw' || r.action == 'transfer'
    })
  } else if (selectedMenu.value == 'receive') {
    result = result.filter((r) => {
      r.action == 'deposit'
    })
  } else {
    return result
  }
})
</script>

<template>
  <div class="mt-5">
    <h1 class="text-center text-xl text-blue-500">
      <b>{{ user?.userName }}'s Account</b>
    </h1>

    <!-- <div class="text-center my-5">
      <button class="btn bg-slate-400 p-2 mx-2 rounded-xl" @click="transferBtn">
        Transfer Menu
      </button>
      <button class="btn bg-slate-400 p-2 mx-2 rounded-xl" @click="receiveBtn">
        Receive Menu
      </button>
    </div> -->

    <Transaction :transactions="filterMenu" />
  </div>
</template>

<style></style>