<template>
  <div class="container">
    <input
      @input="onInput"
      :value="value"
      class="input"
      inputmode="search"
      type="text"
      placeholder="Search for ..."
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppSearch',
  props: {
    value: String
  },
  methods: {
    onInput(event: Event): void {
      if (event.target instanceof HTMLInputElement) {
        this.$emit('input', event.target.value);
      }
    }
  }
});
</script>
