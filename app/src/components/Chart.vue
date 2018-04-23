<template>
    <div class="section">
        <h1 class="title">{{heading}}</h1>
        <router-link to="register">To Register</router-link>
        <font-awesome-icon :icon="icon" />
        <div class="level">
            <div class="container is-fluid">
                <ul>
                    <li v-for="row in tableData">{{row.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
export default {
  data: function() {
    return {
        heading: 'Chart',
    }
  },
  computed: {
      icon() {
          return faCoffee
      }
  },
  props: ['tableData'],
  components: {
      FontAwesomeIcon
  }
};
</script>