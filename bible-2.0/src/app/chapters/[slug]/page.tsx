"use client"

import Link from 'next/link'
import { useEffect, useState} from 'react'

interface Chapter {
  book_id: string,
  book: string,
  chapter: number,
  url: string
}

export default function ChapterPage({
  params,
}:{
  params: Promise<{ slug: string }>
}) {
  const [slug, setSlug] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [chapters, setChapters] = useState<Chapter[]>([])

  useEffect(() => {
    const getParams = async () => {
      const { slug: slugParam } = await params
      setSlug(slugParam)
    }
    getParams()
  }, [params])

  useEffect(() => {
    if (!slug) return

    const fetchData = async () => {
      try{
        const data = await fetch(`https://bible-api.com/data/almeida/${slug}`).then(res => res.json())
        setChapters(data.chapters || [])
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug])

  return (
    <>
      <Link href="/indice">Voltar</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        chapters.map((chapter: Chapter) => {
          return(
            <Link href={`/books/${slug}/${chapter.chapter.toString()}`}>{chapter.chapter}</Link>
          )
        })
    )}
    </>
  )
}