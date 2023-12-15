import { Inter, Roboto_Mono, Great_Vibes, Roboto_Serif, Playfair_Display, Open_Sans, Comfortaa, Alegreya, Urbanist, Pacifico, Amatic_SC, Roboto } from 'next/font/google'
import localFont from "next/font/local"


export const twcen = localFont({ 
  src: './TwCenMTStd.woff2',
  subsets: ['latin'],
  variable: '--tw-cen'
}) 

export const minion = localFont({
  src:'./MinionPro-Regular.woff2',
  subsets:['latin'],
  variable:'--minion'
})


export const amatic = Amatic_SC({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
}) 

export const roboto = Roboto({
  subsets: ['latin'],
  display:'swap',
  weight: ['100', '300','400','500','700','900'],
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

export const roboto_serif = Roboto_Serif({
    subsets: ['latin'],
    display: 'swap',
    weight: '500'
  })


export const playFair = Playfair_Display({
  subsets: ['latin'],
  display:'swap',
  weight: '400'
})


export const openSans = Urbanist({
  subsets: ['latin'],
  display:'swap',
  weight: ['100', '200', '300','400','500','600','700','800','900'],
})

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  display:'swap',
  weight: ['500','300','400','600','700'],
})


export const alegreya = Alegreya({
  subsets: ['latin'],
  display:'swap',
  weight: ['500','400','600','700'],
})


export const pacifico = Pacifico({
  subsets: ['latin'],
  display:'swap',
  weight: ['400'],
})