<template>
  <div id="app">
    <app-logo />
    <app-search />
    <app-data />
  </div>
</template>

<script lang="ts">
import AppLogo from '@/AppLogo.vue';
import AppSearch from '@/AppSearch.vue';
import AppData from '@/AppData.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { AppLogo, AppSearch, AppData }
});
</script>
