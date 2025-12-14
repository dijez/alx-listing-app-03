// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import Pill from "@/components/common/Pill";
// import { PROPERTYLISTINGSAMPLE } from "@/constants";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//  const FILTERS = ["Top Villa", "Self Checkin", "Apartment", "Beachfront"];

//   return (
//     <div>
//       <div className="bg-red-500 text-white p-4">
//   Tailwind test
// </div>

//       <section> {/* hero section  */}

//       <div>{/* hold image using style */}</div>
//       <h1>
//         Find your favourite place here!
//       </h1>
//       <p>
//         the best prices for over 2 million properties worldwide
//       </p>
      
//     </section>

//     {/* filter section  */}
//     <Pill label="Top Villa" />

//     <section>
//       {FILTERS.map((item) => (
//       <Pill key={item} label={item} />
//       ))}
//     </section>


//     {/* property section */}
//     {PROPERTYLISTINGSAMPLE.map((property) => (
//   <div>
//     <img src={property.image} width={200} height={150} />
//     <h3>{property.name}</h3>
//     <p>${property.price}</p>
//     <span>{property.rating} ⭐</span>
//   </div>
// ))}

//   </div>
    
//   );
// }

export default function Home() {
  return (
    <div className="bg-red-500 text-white p-6 text-xl">
      If this is red, Tailwind is working
    </div>
  );
}
