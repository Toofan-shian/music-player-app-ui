<template>
  <v-app>
    <v-main class="pt-10">
      <v-container
        class='secondary darken-1'
      >

        <titleBar></titleBar>
        <playlist
          :selectedTrack="selectedTrack"
          :playlist="playlist"  
          @selecttrack="selectTrack"
        />

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import titleBar from './components/titleBar.vue'
import playlist from './components/playlist.vue'

export default {

  components: {
    playlist,
    titleBar,
  },

  data() {
    return {
      playlist: [
        {title: 'new error', artist: 'moderat', howl: null, display: true},
        {title: 'versions', artist: 'moderat', howl: null, display: true},
        {title: 'Open Eye Signal', artist: 'John Hopkins', howl: null, display: true},
        {title: 'we disappear', artist: 'John Hopkins', howl: null, display: true}
      ],
      selectedTrack: null,
      
    }
  },
  created() {
    this.playlist.forEach( (track) => {
      let file = track.title.replace(/\s/g, "_")
      track.howl = new Howl({
        src: [`./playlist/${file}.mp3`]
      })
    })
  },
  methods: {
    selectTrack(track){
      this. selectedTrack = track;
      console.log(track)
    }
  }
};
</script>
