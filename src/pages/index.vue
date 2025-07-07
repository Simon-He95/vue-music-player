<script setup lang="ts">
import type { Song } from '../components/type'
import GitForkVue from '@simon_he/git-fork-vue'
import daoxiangLrc from '../../public/audio/daoxiang.lrc'
import kaibuliaokouLrc from '../../public/audio/kaibuliaokou.lrc'
import MusicPlayer from '../components/MusicPlayer.vue'

// 示例播放列表 - 包含本地和在线备用音频及歌词
const playlist = ref<Song[]>([
  {
    id: 1,
    title: '稻香',
    artist: '周杰伦',
    cover: new URL('/daoxiang.jpeg', import.meta.url).href,
    src: new URL('/audio/daoxiang.mp3', import.meta.url).href,
    lyrics: daoxiangLrc,
  },
  {
    id: 2,
    title: '开不了口',
    artist: '周杰伦',
    cover: new URL('/kaibuliaokou.jpeg', import.meta.url).href,
    src: new URL('/audio/kaibuliaokou.mp3', import.meta.url).href,
    lyrics: kaibuliaokouLrc,
  },
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 py-8">
    <div>
      <!-- 原有内容 -->
      <div class="text-center mb-12">
        <div class="text-4xl inline-block mb-4" i-carbon-campsite />
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Vue Music Player
        </h1>
      </div>

      <!-- 音乐播放器 -->
      <!-- 默认右下角位置 -->
      <MusicPlayer
        :playlist="playlist"
      />

      <!-- 或者指定初始位置 -->
      <!-- <MusicPlayer :playlist="playlist" :initial-position="{ x: 100, y: 100 }" /> -->
    </div>
  </div>
  <GitForkVue
    link="https://github.com/Simon-He95/vue-music-player"
    position="right"
    type="corners"
    content="Star on GitHub"
    color="#764ba2"
  />
</template>

<style scoped>

</style>
