<template>
  <div class="container">
    <a
      class="item"
      v-for="(item, index) in searchAppData"
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
  props: {
    search: String
  },
  data() {
    return { appData };
  },
  methods: {
    sourceToTitle
  },
  computed: {
    searchAppData(): {
      title: string;
      description: string;
      source: string;
    }[] {
      if (!this.search) return this.appData;

      return this.appData.filter(
        (item: { title: string; description: string; source: string }) => {
          if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }
          if (
            item.description.toLowerCase().includes(this.search.toLowerCase())
          ) {
            return true;
          }
          if (item.source.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }
          return false;
        }
      );
    }
  }
});
</script>
