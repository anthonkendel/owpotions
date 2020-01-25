<template>
  <div class="container">
    <a
      class="container-item"
      v-for="(item, index) in appData"
      :key="index"
      :href="item.source"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 class="title">
        {{ sourceToTitle(item.source) }}
      </h2>
      <small class="title"
        ><strong>{{ item.title }}</strong></small
      >
      <p class="description">{{ item.description }}</p>
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
