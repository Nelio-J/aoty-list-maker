import { Geist, Geist_Mono, Sixtyfour, Gasoek_One } from 'next/font/google';

export const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
export const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});
export const sixtyfour = Sixtyfour({ subsets: ['latin'], weight: ['400'] });
export const gasoekOne = Gasoek_One({ subsets: ['latin'], weight: ['400'] });

// export const monoton = Monoton({ subsets: ['latin'], weight: ['400'] });
// export const doto = Doto({ subsets: ['latin'], weight: ['400', '600', '700'] });
// export const danfo = Danfo({ subsets: ['latin'], weight: ['400'] });
// export const ranchers = Ranchers({ subsets: ['latin'], weight: ['400'] });