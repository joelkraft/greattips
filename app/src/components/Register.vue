<template>
    <div class="section">
        <h1 class="title">{{heading}}</h1>
        <router-link to="chart">Chart</router-link>
        <div class="level">
            <div class="container is-fluid">
                <Transactions 
                    :table-data="tableData" 
                    v-on:changeTableData="updateTableData" 
                    v-on:createTransaction="createTransaction"
                    v-on:removeTransaction="removeTransaction"
                    v-on:sortColumn="sortByColumn">
                </Transactions>
            </div>
        </div>
    </div>
</template>

<script>
import Transactions from './Transactions.vue'
export default {
  components: {
    Transactions,
  },
  methods: {
      updateTableData: function(update) {
          this.$emit('changeTableData', update)
      },
      createTransaction: function(data) {
          this.$emit('createTransaction',data)
      },
      removeTransaction: function(index) {
          this.$emit('removeTransaction', index)
      },
      sortByColumn: function(by) {
          this.$emit('sortColumn', by)
      }
  },
  data: function() {
      return {
        heading: 'Numbers'
    }
  },
  props: ['tableData']
};
</script>