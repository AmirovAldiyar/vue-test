<template>
  <button v-on:click="onClick" class="divv">
      Button is {{clicked ? "" : "not"}} clicked
  </button>
</template>

<script>
export default {
    data: function () {
        return {
            clicked: false
        }
    },
    methods: {
        onClick: function () {
            this.clicked = !this.clicked
        }
    }
}
</script>

<style>
.divv {
    height: 10px;
    width: 10px;
}
</style>