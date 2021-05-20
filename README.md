# React/NextJS Audio Player

![Player Preview](https://i.imgur.com/qVX68ve.gif)

## Demo: [https://audioplayer.madza.dev](https://audioplayer.madza.dev)

---

## Installation

```javascript
 npm install @madzadev/audio-player
```

## Usage

```javascript
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
```

```javascript
const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];
```

```javascript
<Player trackList={tracks} />
```

`trackList` is the mandatory prop and requires to pass in an array consisting of objects with `url`, `title` and `tags` keys.

## Config for NextJS

If you are working on NextJS, there are 3 additional steps:

1. `npm i next-images next-transpile-modules`
2. create `next.config.js` in your project's root
3. paste this in the newly created config file:

```javascript
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

module.exports = withImages(withTM());
```

## Options

The default values of available options props are displayed.

```javascript
<Player
  trackList={tracks}
  includeTags={true}
  includeSearch={true}
  showPlaylist={true}
  autoPlayNextTrack={true}
/>
```

## Color schemes

You can further customize the player UI by editing the colors variable below.

Pre-defined color schemes are planned in the future.

```javascript
const colors = `html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
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
      }`;
```

```javascript
<Player trackList={tracks} customColorScheme={colors} />
```

## Final notes

It's recommended to use CMS like [Contentful](https://www.contentful.com) or [DatoCMS](https://www.datocms.com/) to manage your audio files and access them via API.
