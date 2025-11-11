import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Preeminent Car Detailing | Premium Car Detailing Services',
  description: 'Premium car detailing services for your vehicle. Book your appointment today and experience the difference.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        {/* Lightbox Modal */}
        <div className="lightbox-overlay" id="lightboxModal">
          <div className="lightbox-content">
            <button className="lightbox-close" id="closeLightbox">&times;</button>
            <button className="lightbox-prev" id="prevBtn">‹</button>
            <button className="lightbox-next" id="nextBtn">›</button>
            <img id="lightboxImage" src="/images/before.PNG" alt="Gallery image" />
          </div>
        </div>

        {/* JavaScript */}
        <script 
          src="/script.js" 
          async
          suppressHydrationWarning
        ></script>
      </body>
    </html>
  )
}
