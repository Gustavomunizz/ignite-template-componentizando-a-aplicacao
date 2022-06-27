import { useState, useEffect } from 'react'
import { api } from './services/api'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import './styles/global.scss'

export interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}
