# React audio player

GIF image goes here

## Installation

```javascript
 npm install @madzadev/audio-player
```

## Usage

```javascript
import Player from 'audio-player'
```

```javascript
const tracks = [
  {
    url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
    title: 'Madza - Chords of Life',
    tags: ['house']
  },
  {
    url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
    title: 'Madza - Late Night Drive',
    tags: ['dnb']
  },
  {
    url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
    title: 'Madza - Persistence',
    tags: ['dubstep']
  }
]
```

```javascript
<Player trackList={tracks}>
```

## Features

Play/Pause
Next/Previous tracks
Loop audio
Shuffle play
Drag progress bar
Volume control
Clickable playlist
Filter audio files based on genre
Search audio files by title
Responsive design

## Options

```javascript
<Player
  trackList={tracks}
  includeTags={true}
  includeSearch={true}
  showPlaylist={true}
  autoPlayNextTrack={true}
/>
```

## Color Schemes

```javascript
const colors = `html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #9440f3;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #9440f3;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`
```

## Final notes

It's recommended to use CMS like Contentful or DatoCMS to manage you audio files and access them via API.

Other alternatives include Google Drive and Dropbox or store you audio files directly in the project.
