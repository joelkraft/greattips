<template>
  <router-view 
                    :table-data="tableData" 
                    v-on:changeTableData="updateTableData" 
                    v-on:createTransaction="createTransaction"
                    v-on:removeTransaction="removeTransaction"
                    v-on:sortColumn="sortByColumn"></router-view>
</template>

<script>
import VueRouter from 'vue-router';

import Register from './components/Register.vue';
import Chart from './components/Chart.vue';

import Utils from './Utils';
// import './libs/fa'

// import data from './data.json'

const API = {
  root: () => 'http://localhost:3000',
  get: (resource, param) =>
    `${API.root()}/${resource}${param ? '/' + param : ''}`,
};

const routes = [
  {
    path: '/',
    component: {
      template: '<router-link to="register">Register</router-link>',
    },
  },
  { path: '/register', component: Register },
  { path: '/chart', component: Chart },
];
const router = new VueRouter({ routes });

export default {
  el: '#app',
  mounted: function() {
    fetch(API.get('animals'))
      .then(r => r.json())
      .then(json => (this.tableData = json.data));
  },
  data: {
    tableData: [],
    sortBy: {
      column: 'name',
      direction: false, // true = up, false = down
    },
  },
  methods: {
    updateTableData: function({ value, id, prop }) {
      fetch(API.get('animals', id), {
        body: `{ "${prop}": "${value}" }`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(r => {
          if (r.status === 200) return r;
          throw new Error(r.statusText);
        })
        .then(r => r.json())
        .then(json => {
          this.tableData.map(row => row.id === id && Object.assign(row, {[prop]: value}))
        })
        .catch(err => console.log(err));
    },
    createTransaction: function(data) {
      fetch(API.get('animals'), {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(r => {
          if (r.status === 201) return r;
          throw new Error(r.statusText);
        })
        .then(r => r.json())
        .then(json => {
          const { id } = json;
          const newData = Object.assign(data, { id });
          Array.isArray(this.tableData)
            ? this.tableData.push(data)
            : (this.tableData = [data]);
          console.log(json);
        })
        .catch(err => console.log(err));
    },
    removeTransaction: function(id) {
      fetch(API.get('animals', id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(r => {
          if (r.status === 200) return r;
          throw new Error(r.statusText);
        })
        .then(r => r.json())
        .then(json => {
          this.tableData = this.tableData.filter(d => d.id !== index);
        })
        .catch(err => console.log(err));
    },
    sortByColumn: function(by) {
      this.sortBy.direction =
        this.sortBy.column === by ? !this.sortBy.direction : true;
      this.sortBy.column = by;
      Utils.sort(this.tableData, by, this.sortBy.direction);
    },
  },
  router,
};
</script>