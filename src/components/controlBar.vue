<template>
  <v-app-bar flat classj="mb0">

    <v-btn text icon @click="toggleMute">
        <v-icon>{{volumeIcon}}</v-icon>
    </v-btn>

    <v-slider
      v-model="volume"
      @input="updateVolume(volume)"
      max="1"
      step="0.1"
      hide-details
      >
    </v-slider>
    <span
      style="min-width: 45px; margin-left: 12px"
    >
      {{(volume * 100 + '%')}}
    </span>

    <v-spacer></v-spacer>

    <v-btn small fab outlined color="light-blue" 
      class='mx-1' @click="skipTrack('previous')">
      <v-icon>mdi-skip-backward</v-icon>
    </v-btn>
    
    <v-btn class='mx-1' small fab outlined color="light-blue" @click="stopTrack">
      <v-icon>mdi-stop</v-icon>
    </v-btn>

    <v-btn class='mx-1' fab outlined color="light-blue" @click="playTrack()">
      <v-icon large>mdi-play</v-icon>
    </v-btn>

    <v-btn class='mx-1' small fab outlined @click="pauseTrack" color="light-blue">
      <v-icon>mdi-pause</v-icon>
    </v-btn>

    <v-btn class='mx-1' small fab outlined color="light-blue" @click="skipTrack('next')">
      <v-icon>mdi-skip-forward</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text icon @click="toggleLoop">
      <v-icon :color="repeatColor">mdi-repeat-once</v-icon>
    </v-btn>

    <v-btn text icon @click="toggleShuffle">
      <v-icon :color="shuffleColor">
        mdi-shuffle-variant
      </v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
import { Howler } from 'howler'


export default {
  data() {
    return {
      volume: 0.5,
      muted: false,
      

    }
  },
  props: {
    loop: Boolean,
    shuffle: Boolean,
  },
  methods: {
    toggleShuffle() {
      this.$emit('shuffletoggle', !this.shuffle)
    },
    toggleLoop() {
      this.$emit('toggleloop', !this.loop)
    },
    toggleMute() {
      this.muted = !this.muted;
      Howler.mute(this.muted)
    },
    updateVolume(volume){
      Howler.volume(volume);
    },
    stopTrack(){
      this.$emit('stoptrack')
    },
    playTrack(index) {
      this.$emit('playtrack', index)
    },
    pauseTrack(){
      this.$emit('pausetrack')
    },
    skipTrack(direction){
      this.$emit('skiptrack', direction)
    }
  },
  computed: {
    shuffleColor() {
      return (this.shuffle ? 'light-blue' : 'blue-grey')
    },
    repeatColor() {
      if (this.loop) {
        return 'light-blue'
      } else {
        return 'blue-grey'
      }
    },  
    volumeIcon() {
      if (this.muted) {
        return 'mdi-volume-mute'
      }
      if (this.volume >= 0.5) {
        return 'mdi-volume-high'
      }
      else if (this.volume > 0) {
        return 'mdi-volume-medium'
      }
      else {
        return 'mdi-volume-low'
      }
    }
  },
  created() {
    Howler.volume(this.volume)
  }

}
</script>

<style>

</style>