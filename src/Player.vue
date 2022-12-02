<template>
  <v-app>
    <v-main class="pt-10">
      <v-container
        class='secondary darken-1'
      >

        <titleBar/>
        <controlBar
          @stoptrack="stop"
          @playtrack="play"
          @pausetrack="pause"
          @toggleloop="toggleLoop"
          @shuffletoggle="toggleShuffle"
          :shuffle="shuffle"
          :loop="loop"
        />
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
import controlBar from './components/controlBar.vue'
import {Howl, Howler} from 'howler'

export default {

  components: {
    controlBar,
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
      index: 0,
      playing: false,
      loop: false,
      shuffle: false,
    }
  },

  computed: {
    currentTrack() {
      return this.playlist[this.index];
    },
  },

  methods: {
    toggleShuffle() {
      this.shuffle = !this.shuffle
    },
    toggleLoop(bool){
      this.loop = bool
    },
    selectTrack(track){
      this. selectedTrack = track;
    },
    play(index){
      console.log(this.playlist[0].howl)
      this.playlist[0].howl.play()
    },
    pause() {
      this.currentTrack.howl.pause()
      this.playing = false
    },
    stop() {
      this.currentTrack.howl.stop()
      this.playing = false
    },
  },
  
  created() {
    this.playlist.forEach( (track) => {
      let file = track.title.replace(/\s/g, "_")
      track.howl = new Howl({
        src: [`./playlist/${file}.mp3`],      
        html5: true,
      })
    })
  },
};
</script>
