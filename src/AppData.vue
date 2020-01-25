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
        {{ item.title }}
      </h2>
      <p class="description">{{ item.description }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { appData } from '@/AppData';
import Vue from 'vue';

export default Vue.extend({
  name: 'AppData',
  data() {
    return { appData };
  }
});
</script>
