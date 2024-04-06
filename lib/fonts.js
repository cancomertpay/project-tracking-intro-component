// Purpose: Define the typography for the project.
import { Barlow_Condensed, Barlow } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Typography = {
  heading: barlowCondensed,
  body: barlow,
};

export default Typography;
