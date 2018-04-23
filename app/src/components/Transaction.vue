<template>
    <td>
        <input class="input" type="text" v-on:input="changeValue" :value="text">
    </td>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    changeValue: function(e) {
        this.$emit('changeData', e.target.value)
    },
  },
};
</script>
