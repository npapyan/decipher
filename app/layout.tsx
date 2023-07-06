import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

async function initializeScandit() {
    // await SDCCore.configure({
    //     licenseKey: "AceDlhq5OR2wL4B2mgGxF9IgknlWGPYBIW0lN9BQpySnUNb8K1dhtRZDO3i2ATe8VGk4QcBsfNr6bLGwHVt7g2dqSrLkXHOdsB7fgpMv1qaPYbX/IUUoePNXZhv4WwJnNHRDFDl+OGZUfElxg21qhxda8/DiLFc/KUKRY1luOgOZQjrd+H9LEyJZkOzoUlrbgkDlIBZfOXvrboo4OGVEA3hUxT+fX9vZDXnq+XlM64GRT22BqywfFzBmECqvd0op3Hwi4QR5ccbgSHxJjFfeHGhmT7+ocef1BnUpvNVCopaqXwCHklcfW3MiHXz2debQBW7nXuRM5tYddNET1lf7UB1M22QfYJRV22yDBZ1a6tJLftuZe1r1KxItY7Z4fSMJnEe28lJMrhUGZ3sYZGDAgQ5P2S2tJ5TOiHJuQU58Pd7ZYAw9DVBnMYF0pahCew8+EWQX1Lx2d/eKHxPL6VgvEidca4UWbvs/6w1P3hV/v4veT4MV61b/QYFEYTlcYkkyYm6m5Bd7ZPPUUkXBbxZtkK9bTrTkDkMdMTxRaRQIZBftHS3EbAZ8onjU+WHJU6XFN+DCtD0W7oEFU6/wnbhRgQCHZZAyfHns17jVTMuhuu2mgHuTrREh8jfABt4UvNEsezo3+mDR7Ozdwm4vaxCLubs4WxC7akqheAAb5/W/KSrR01EnbvDD/Wb2Rw/KkWLUswr+JGtgzWpCAghObFxhVdSKLUjaEDDt2fGWMcSE4VI7T+4JD1lMfTOAtj42+gq2MhahP8bz32TMQsdA8Koxv6C2A/MWGCS8WS/qsuUg0cT1iceCAb74WpNDwQ4y1JT+giBkDqS8S4+LU1DG81soOgonqoky0GC0c5CXjNgj5hXygDmgHw201Wm9+aNPqs7AqHM+GnzyS7ORGtW74zrYGY8mh2ldj0GwkBVgLtSi0+kKoDGGPPyUZ/hACz3mYGOHtwnziW2pafqFzhFsJWMF1QGUJUlb3Dqk0vX+A6Hc9qHaQEqS4vxYfTsRjL8t+akDRwN+TwCLzpzqXnfbSSh32fCmdSXXMa7ZthFlWHKl6AkCyVyyGrZkMa1TqIjBgkLJ1o7HeEEcnaXAwwt48b27SW/Z7v2YBABQpgWCJfXFiyR6HxogiIEo+ykxUvKoWVr4X0s4VtyFFIvSHfigKopSrJplpm09/Y24Pq7YjfBFlefr3IU5C9O1drJQFCX+tUimpWsRxOfBvnxa1d9kMQ3gDWQR+laT6Oc=",
    //     libraryLocation: "/engine/",
    //     moduleLoaders: [SDCBarcode.barcodeCaptureLoader()]
    // });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // initializeScandit();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
