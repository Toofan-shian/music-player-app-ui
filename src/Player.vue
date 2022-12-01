<template>
  <v-app>
    <v-content class="pt-10">
      <v-container
        class='secondary darken-1'
      >

        <titleBar></titleBar>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import titleBar from './components/titleBar.vue'

export default {

  components: {
    titleBar,
  },

  data() {
    return {
      
    }
  },
};
</script>
