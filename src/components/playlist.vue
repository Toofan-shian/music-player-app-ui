<template>
  <v-card :class="{playlist}">
    <v-list>
      <v-list-item
      v-for="(track, index) in playlist"
      v-show="track.display"
      :class="{selected: track == selectedTrack, even: index % 2 == 0}"
      >
        <v-list-item-content
          @click="selectTrack(track)"
        >
          <v-list-item-title>
            {{index | numbers}} - {{track.artist}} - {{track.title}}
          </v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <span>{{track.howl.duration()}}</span>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: {
    selectedTrack: Object,
    playlist: Array,
  },
  methods: {
    selectTrack(track) {
      this.$emit('selecttrack', track)
    }
  }
}
</script>

<style scoped>

.selected {
  background-color: rgb(41, 92, 158) !important;
}
.even {
  background-color: #303030;
}

.playlist{
  max-height: 400px;
  overflow: auto;
}

</style>