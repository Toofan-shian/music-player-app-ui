<template>
  <v-system-bar>

    <v-menu offset-y v-model="menu">

      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          text
          height="100%"
          plain
          class="pa-0"
        >
          <v-icon>mdi-menu</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>

      <v-list>

        <v-dialog v-model="dialog" width="500px">

          <template v-slot:activator="{ on }">
            <v-list-item v-on="on" dense>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </template>

          <v-card>
            <v-card-title>
              A music-player app built with vuetify
            </v-card-title>
            <v-card-text>
              version-1
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined
                @click="closeDialogAndMenu"
              >
              Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>


      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <h3 class="app-name fw-bold">Musify</h3>

    <v-spacer></v-spacer>

    <v-icon>mdi-window-minimize</v-icon>
    <v-icon>mdi-window-maximize</v-icon>
    <v-icon>mdi-close</v-icon>
  </v-system-bar>
  
</template>

<script>

export default {
  data() {
    return {
      dialog: false,
      menu: false,
    }
  },
  methods: {
    closeDialogAndMenu() {
      this.dialog = false;
      this.menu = false;
    }
  }
}

</script>

<style scoped>

</style>