<template>
    <tr class="is-selected">
            <td>
                <input class="input" type="text" v-model="formData.name">
            </td>
            <td>
                <input class="input" type="text" v-model="formData.color">
            </td>
            <td>
                <input class="input" type="text" v-model="formData.food">
            </td>
            <td>
                <input class="input" type="text" v-model="formData.size">
            </td>
            <td>
                <button class="button" @click="createTransaction">Submit</button>
            </td>
    </tr>
</template>

<script>
function initialState() {
    return {
        formData: {
            name: '',
            color: '',
            food: '',
            size: ''
        }
    }
}
export default {
  data: initialState,
  methods: {
    changeValue: function(e) {
      console.log('Transaction', e.target.value);
      this.$emit('changeData', e.target.value);
    },
    createTransaction: function (e) {
        e.preventDefault()
        if (Object.keys(this.formData).map(d=>this.formData[d]).join('').length === 0) return
        this.$emit('createTransaction', this.formData)
        this.$data.formData = initialState().formData
    }
  },
};
</script>
