import { Rowdies } from 'next/font/google'
import './globals.css'
import configurations from '@/_data/config'

const rowdies = Rowdies({ 
  subsets: ['latin'],
  weight: ["300", "400", "700"] })

export const metadata = {
  title: `${configurations.title}`,
  description: `${configurations.description}`,
  author: `${configurations.author}`
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rowdies.className}>{children}</body>
    </html>
  )
}
