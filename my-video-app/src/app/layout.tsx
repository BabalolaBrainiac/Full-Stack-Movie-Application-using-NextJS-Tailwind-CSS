import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Video Streaming Full Stack Application',
  description: 'Cloning a Video Streaming Application using NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Header />
      
      </body>
    </html>
  )
}