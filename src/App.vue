<template>
  <div id="app" class="container">
    <app-logo />
    <app-data />
  </div>
</template>

<script lang="ts">
import AppLogo from '@/AppLogo.vue';
import AppData from '@/AppData.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { AppLogo, AppData }
});
</script>
