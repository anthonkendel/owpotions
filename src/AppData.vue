<template>
  <div class="container">
    <a
      class="item"
      v-for="(item, index) in appData"
      :key="index"
      :href="item.source"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {{ sourceToTitle(item.source) }}
      </h2>
      <small
        ><strong>{{ item.title }}</strong></small
      >
      <p>{{ item.description }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { appData, sourceToTitle } from '@/AppData';
import Vue from 'vue';

export default Vue.extend({
  name: 'AppData',
  data() {
    return { appData };
  },
  methods: {
    sourceToTitle
  }
});
</script>
