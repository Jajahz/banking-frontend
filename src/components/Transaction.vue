<script setup>
const props = defineProps({
  transactions: {
    type: Object,
    default: {},
  },
})
</script>

<template>
  <div class="overflow-x-auto relative mt-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Date/Time</th>
          <th scope="col" class="py-3 px-6">Action</th>
          <th scope="col" class="py-3 px-6">From/To</th>
          <th scope="col" class="py-3 px-6">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="(transaction, index) in transactions"
          :key="index"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ new Date(transaction.dateTime).toLocaleString() }}
          </th>
          <td class="py-4 px-6">{{ transaction.action }}</td>
          <td class="py-4 px-6">{{ transaction.toBookingId }}</td>
          <td class="py-4 px-6">{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
