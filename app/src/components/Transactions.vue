<template>
  <table class="table is-striped">
    <thead>
      <tr>
        <th>&nbsp;&nbsp;&nbsp;Animal<span class="icon button is-light" style="float:right;" @click="sort('name')"><font-awesome-icon :icon="sortArrow" /></span></th>
        <th>&nbsp;&nbsp;&nbsp;Color<span class="icon button is-light" style="float:right;" @click="sort('color')"><font-awesome-icon :icon="sortArrow" /></span></th>
        <th>&nbsp;&nbsp;&nbsp;Food<span class="icon button is-light" style="float:right;" @click="sort('food')"><font-awesome-icon :icon="sortArrow" /></span></th>
        <th>&nbsp;&nbsp;&nbsp;Size<span class="icon button is-light" style="float:right;" @click="sort('size')"><font-awesome-icon :icon="sortArrow" /></span></th>
      </tr>
    </thead>
    <tbody>
      <NewTransaction v-on:createTransaction="createTransaction"></NewTransaction>
      <tr v-for="item in tableData">
        <Transaction :text="item.name" v-on:changeData="value => onChangeData({value, prop:'name', id:item.id})"></Transaction>
        <Transaction :text="item.color" v-on:changeData="value => onChangeData({value, prop:'color', id:item.id})"></Transaction>
        <Transaction :text="item.food" v-on:changeData="value => onChangeData({value, prop:'food', id:item.id})"></Transaction>
        <Transaction :text="item.size" v-on:changeData="value => onChangeData({value, prop:'size', id:item.id})"></Transaction>
        <td class="has-centered-text" style="vertical-align:middle;text-align: center;">
          <span class="icon button is-light" @click="handleRemove(item.id)">
            <font-awesome-icon :icon="closeButton" />
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faTimesCircle, faSort } from '@fortawesome/fontawesome-free-solid'

import NewTransaction from './NewTransaction.vue';
import Transaction from './Transaction.vue';

export default {
  components: {
    Transaction,
    NewTransaction,
    FontAwesomeIcon
  },
  computed: {
      closeButton() {
          return faTimesCircle
      },
      sortArrow() {
        return faSort
      }
  },
  props: ['tableData'],
  methods: {
    onChangeData: function({ value, id, prop }) {
      this.$emit('changeTableData', { value, id, prop });
    },
    createTransaction: function(data) {
      this.$emit('createTransaction', data);
    },
    handleRemove: function(index) {
      this.$emit('removeTransaction', index)
    },
    sort: function(by) {
      this.$emit('sortColumn', by)
    }
  },
};
</script>
