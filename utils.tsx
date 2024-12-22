import { EyeIcon, Paperclip } from "lucide-react";
import Link from "next/link";
export const projectsData = [
 {
  id: 1,
  title: "Be online ( Freelancing @mostaql )",
  description:
   "E-Commerce app with 2 platforms developed by NEXT.JS: Customer Website for browsing and purchasing, Supplier Portal for managing orders and product listings.",
  image: "/images/projects/1.png",
  tag: ["All", "Web"],
  gitUrl: "/",
  previewUrl:
   "https://mostaql.com/project/954707-%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D9%85%D9%88%D9%82%D8%B9-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-%D8%A8%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-nextjs",
 },
 {
  id: 2,
  title: "Graphql Transaction App",
  description:
   "Developed using Next.js and GraphQL to fetch, create, update and delete transac-tion records. Implemented secure authentication with GraphQL-Passport",
  image: "/images/projects/4.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Abdullah-Radwan1/graphQl-project",
  previewUrl: "https://back-end-dashboard-front.vercel.app/",
 },
 {
  id: 3,
  title: "MERN Dashboard ",
  description:
   "connecting Next.js application to MongoDB, implementing sorting and filtering using express , visualizing data through interactive charts for enhanced insights.",
  image: "/images/projects/2.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Abdullah-Radwan1/Back-End-Dashboard",
  previewUrl: "https://back-end-dashboard-front.vercel.app/",
 },
 {
  id: 4,
  title: "Admin Dashboard",
  description:
   "admin panel for an E-commerce business serves as a central hub for managing transactions and team members.",
  image: "/images/projects/3.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Abdullah-Radwan1/Admin-Dashboard",
  previewUrl: "https://admin-dashboard-84ee4.web.app/",
 },

 {
  id: 5,
  title: "Food App",
  description:
   "developed with Next.js, utilizing Redux Toolkit for state management, users can sort, filter, and order items easily with a user-friendly interface.",
  image: "/images/projects/6.png",
  tag: ["All", "Web"],
  gitUrl: "https://palestino-six.vercel.app/",
  previewUrl: "https://palestino-six.vercel.app/",
 },
];

export const TAB_DATA = [
 {
  title: "Skills",
  id: "skills",
  content: (
   <div className="flex gap-8 pl-5">
    <ul className="list-disc ">
     <li>Next.js</li>
     <li>React</li>
     <li>prisma</li>
     <li>TypeScript</li>
     <li>zod</li>
     <li>redux toolkit</li>
     <li>react query</li>
     <li>Zustand</li>
    </ul>

    <ul className="list-disc ">
     <li>Tailwind CSS</li>
     <li>Material UI</li>
     <li>SASS</li>
     <li>Express</li>
     <li>MongoDB</li>
     <li> Mysql</li>
     <li>Git & GitHub</li>
     <li>C++</li>
    </ul>
   </div>
  ),
 },
 {
  title: "Education",
  id: "education",
  content: (
   <ul className="list-disc pl-3">
    <li>
     Bachelor in Quality Management Ain Shams University ( Oct 2021 – Dec 2025 )
    </li>
   </ul>
  ),
 },
 {
  title: "Certifications",
  id: "certifications",
  content: (
   <ul className="list-disc  pl-3 flex gap-4 items-center">
    <li>The complete 2022 JavaScript Course With Projects (Udemy).</li>
    <Link
     target="_blank"
     href="https://www.udemy.com/certificate/UC-6142d7a6-cc65-4874-a370-b78f694a00f3/"
    >
     <Paperclip color="green" />{" "}
    </Link>
   </ul>
  ),
 },
];
