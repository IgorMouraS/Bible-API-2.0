export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return  (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}