import { Inter, Roboto_Mono, Great_Vibes, Roboto_Serif, Playfair_Display, Open_Sans, Comfortaa } from 'next/font/google'
import localFont from '@next/font/local'


export const twcen = localFont({ 
  src: './TwCenMTStd.woff2',
  subsets: ['latin'],
  variable: '--tw-cen'
}) 



export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const great_vives = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const roboto = Roboto_Serif({
    subsets: ['latin'],
    display: 'swap',
    weight: '500'
  })


export const playFair = Playfair_Display({
  subsets: ['latin'],
  display:'swap',
  weight: '400'
})


export const openSans = Open_Sans({
  subsets: ['latin'],
  display:'swap',
  weight: ['300','400','500','600','700','800'],
})

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  display:'swap',
  weight: ['500','300','400','600','700'],
})