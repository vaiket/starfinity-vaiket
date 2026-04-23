// import Link from "next/link";
// import { ArrowRight, Building2, Landmark, Rocket, ShieldCheck, TrendingUp, Users } from "lucide-react";
// import { Bricolage_Grotesque } from 'next/font/google';
// import { Source_Serif_4 } from 'next/font/google';

// const bricolage = Bricolage_Grotesque({
//   subsets: ['latin'],
//   weight: ['200', '400', '600', '800'],
// });

// const sourceSerif = Source_Serif_4({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
// });

// const services = [
//   {
//     title: "Working Capital",
//     subtitle: "For daily operations and cash flow stability",
//     href: "/services/working-capital",
//     icon: TrendingUp,
//   },
//   {
//     title: "Term Loan",
//     subtitle: "For expansion, equipment and long-term growth",
//     href: "/services/term-loan",
//     icon: Building2,
//   },
//   {
//     title: "Startup Funding",
//     subtitle: "For early-stage founders and growth plans",
//     href: "/services/startup-funding",
//     icon: Rocket,
//   },
//   {
//     title: "Government Schemes",
//     subtitle: "For subsidy-linked and backed opportunities",
//     href: "/services/government-schemes",
//     icon: Landmark,
//   },
//   {
//     title: "Angel Investment",
//     subtitle: "For investor connects and strategic capital",
//     href: "/services/angel-investment",
//     icon: Users,
//   },
//   {
//     title: "Credit Advisory",
//     subtitle: "For better profile and stronger approval chance",
//     href: "/services/credit-advisory",
//     icon: ShieldCheck,
//   },
// ];

// const testimonials = [
//   {
//     name: "Manufacturing Owner, Gujarat",
//     text: "The process was simple and predictable. We got clear document support and timely updates.",
//   },
//   {
//     name: "Retail Business, Maharashtra",
//     text: "EazyGrow helped us choose the right scheme and avoided unnecessary delays in filing.",
//   },
//   {
//     name: "Startup Founder, Karnataka",
//     text: "Good guidance, practical suggestions, and quick response from the team throughout.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="bg-[#f8fbff] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center">
//           <h2 className={`text-3xl font-bold text-slate-900 sm:text-4xl ${bricolage.className}`}>Funding services made simple</h2>
//           <p className={`mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base ${sourceSerif.className}`}>
//             Choose a service, share your requirements, and move forward with expert-led execution.
//           </p>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <Link
//               key={service.title}
//               href={service.href}
//               className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//             >
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#414288] text-white">
//                 <service.icon className="h-5 w-5" />
//               </div>
//               <h3 className={`mt-4 text-lg font-semibold text-slate-900 ${bricolage.className}`}>{service.title}</h3>
//               <p className={`mt-2 text-sm text-slate-600 ${sourceSerif.className}`}>{service.subtitle}</p>
//               <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#414288]">
//                 View Service
//                 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//               </span>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
//           {testimonials.map((item) => (
//             <article key={item.name} className="rounded-2xl border border-[#d9e4ff] bg-white p-5">
//               <p className={`text-sm leading-relaxed text-slate-700 ${sourceSerif.className}`}>{item.text}</p>
//               <p className={`mt-4 text-xs font-semibold uppercase tracking-wide text-[#414288] ${sourceSerif.className}`}>{item.name}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
