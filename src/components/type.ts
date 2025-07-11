export interface Song {
  id: number
  title: string
  artist: string
  cover: string
  src: string
  lyrics?: LyricLine[]
}

export interface LyricLine {
  time: number // 时间戳（秒）
  words: string // 歌词文本
}

export interface MusicPlayerProps {
  // 基础配置
  playlist: Song[]

  // 位置和大小配置
  initialPosition?: { x: number, y: number } | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center'
  initialSize?: { width: number, height?: number | 'auto' }
  initialExpanded?: boolean

  // 播放配置
  initialVolume?: number // 0-1
  initialPlayMode?: 'sequence' | 'loop' | 'random'
  autoPlay?: boolean

  // 显示配置
  showLyrics?: boolean
  showPlayModeButton?: boolean
  showVolumeControl?: boolean

  // 交互配置
  draggable?: boolean
  resizable?: boolean
  boundaryCheck?: boolean
  positionMargin?: number

  // 样式配置
  theme?: 'default' | 'purple' | 'blue' | 'green' | 'orange'
  playerStyle?: 'modern' | 'classic' | 'minimal'
}

// 位置预设类型
export type PositionPreset = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center'

// 主题类型
export type Theme = 'default' | 'purple' | 'blue' | 'green' | 'orange'

// 播放器样式类型
export type PlayerStyle = 'modern' | 'classic' | 'minimal'

// 播放模式类型
export type PlayMode = 'sequence' | 'loop' | 'random'

// 新增：音乐播放器组件 API 类型定义
export interface MusicPlayerAPI {
  // 播放控制 API
  play: () => Promise<void>
  pause: () => void
  toggle: () => Promise<void>
  stop: () => void

  // 歌曲切换 API
  next: () => void
  previous: () => void
  skipTo: (index: number) => void

  // 进度控制 API
  seekTo: (time: number) => void
  seekToPercentage: (percentage: number) => void

  // 音量控制 API
  setVolume: (volume: number) => void
  mute: () => void
  unmute: () => void
  toggleMute: () => void

  // 播放模式 API
  setPlayMode: (mode: 'sequence' | 'loop' | 'random') => void
  togglePlayMode: () => void

  // 界面控制 API
  expand: () => void
  collapse: () => void
  toggleExpanded: () => void

  // 歌词控制 API
  showLyrics: () => void
  hideLyrics: () => void
  toggleLyrics: () => void

  // 位置控制 API
  setPosition: (x: number, y: number) => void
  centerPlayer: () => void

  // 状态获取 API
  getCurrentSong: () => Song
  getCurrentTime: () => number
  getDuration: () => number
  getVolume: () => number
  getProgress: () => number
  getPlayMode: () => 'sequence' | 'loop' | 'random'
  getPosition: () => { x: number, y: number }

  // 状态检查 API
  isPlaying: () => boolean
  isExpanded: () => boolean
  isLoading: () => boolean
  hasError: () => boolean
  isMuted: () => boolean
  isShowingLyrics: () => boolean

  // 工具方法
  reload: () => Promise<void>
  skipToNextPlayable: () => Promise<void>
}
