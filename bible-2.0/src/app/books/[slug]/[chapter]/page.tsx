"use client"

import Link from 'next/link'
import { useEffect, useState} from 'react'

interface Verse {
  book_id: string,
  book: string,
  chapter: number,
  verse: number,
  text: string
}

export default function BookChapterPage({
  params
}: {
  params: Promise<{
    slug:string,
    chapter:string
  }>
}){
  const [slug, setSlug] = useState<string>('')
  const [chapter, setChapter] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const getParams = async () => {
      const { slug: slugParam, chapter: chapterParam} = await params
      setSlug(slugParam)
      setChapter(chapterParam)
    }
    getParams()
  }, [params])

  useEffect(() => {
    if (!slug || !chapter) return

    const fetchData = async () => {
      try{
        const data = await fetch(`https://bible-api.com/data/almeida/${slug}/${chapter}`).then(res => res.json())
        setData(data.verses)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug, chapter])

  return (
    <>
      <Link href={`/chapters/${slug}`}>Voltar</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((verse: Verse) => {
          return (
            <p>{verse.text}</p>
          )
        })
      )}
    </>
  )
}