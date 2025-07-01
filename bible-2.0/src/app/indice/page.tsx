"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Indice {
  id: string,
  name: string,
  url: string
}

export default function Indice() {
  const [indice, setIndice] = useState<Indice[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const indice = await fetch("https://bible-api.com/data/almeida").then(res => res.json())
        setIndice(indice.books)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  return (
    <>
      <button>
        <Link href="/">Voltar</Link>
      </button>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        indice.map((book: Indice) => {
          return(
            <Link href={`/chapters/${book.id}`}>{book.name}</Link>
          )
        })
      )}
    </>
  )
}