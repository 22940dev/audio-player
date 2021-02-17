import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'

import { Player } from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneSpace } from 'react-syntax-highlighter/dist/esm/styles/prism'

const tracks = [
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Madza - Departures',
    tags: ['edm']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Madza - Faded',
    tags: ['chill']
  },
  {
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    title: 'Madza - Persistence',
    tags: ['bass']
  }
]

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Player tracks={tracks} />
      <h1>Installation</h1>
      <SyntaxHighlighter language='bash' style={duotoneSpace}>
        {`npm install @madzadev/audio-player`}
      </SyntaxHighlighter>
      <h1>Usage</h1>
      <SyntaxHighlighter language='javascript' style={duotoneSpace}>
        {`import Player from '@madzadev/audio-player'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='javascript' style={duotoneSpace}>
        {`const tracks = [
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'Madza - Departures',
            tags: ['edm']
          },
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            title: 'Madza - Faded',
            tags: ['chill']
          },
          {
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            title: 'Madza - Persistence',
            tags: ['bass']
          }
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='jsx' style={duotoneSpace}>
        {`<Player tracks={tracks} />`}
      </SyntaxHighlighter>
      <h1>Options</h1>
      <SyntaxHighlighter language='jsx' style={duotoneSpace}>
        {`<Player
        tracks={tracks}
        includeTags={false}
        includeSearch={false}
        includeShuffle={false}
        showPlaylist={false}
      />`}
      </SyntaxHighlighter>
      {/* <Player
        tracks={tracks}
        includeTags={false}
        includeSearch={false}
        includeShuffle={false}
        showPlaylist={false}
      /> */}
      {/* <p>Include tags: Yes/No</p>
      <p>Include search: Yes/No</p>
      <p>Include shuffle: Yes/No</p>
      <p>Show playlist: Yes/No</p> */}
      <h1>Features</h1>
      Play/Pause Next/Previous tracks Loop audio Shuffle play Drag progress bar
      Volume control Clickable playlist Filter audio files based on genre Search
      audio files by title Responsive design
      <h1>Color schemas</h1>
      <Footer />
    </Wrapper>
  )
}

export default App
