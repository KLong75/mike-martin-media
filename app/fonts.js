// import fonts
import { DM_Sans } from "next/font/google";
import { Courier_Prime } from "next/font/google";
// import { DM_Serif_Display } from "next/font/google";

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-sans",
});

export const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courier-prime",
});

// export const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: '400'});