import { Paperclip } from "lucide-react";
import Link from "next/link";
export const Experience = {
  id: 1,
  title: "Freelancing @mostaql",
  description:
    "E-Commerce app with two platforms: Customer Website for browsing and purchasing, and Supplier Portal for managing orders and product listings. Built with NEXT.JS.",
  image: "/images/projects/1.png",
  gitUrl: "/",
  previewUrl:
    "https://mostaql.com/project/954707-%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D9%85%D9%88%D9%82%D8%B9-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-%D8%A8%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-nextjs",
};

export const projectsData = [
  {
    id: 1,
    title: "Fullstack Ecommerce",
    description:
      "E-Commerce app built with Next.js and neon PostgreSQL. Features include Stripe payments, NextAuth and Prisma .",
    image: "/images/projects/vogue.png",
    gitUrl: "/",
    previewUrl: "https://fullstack-ecommerce-flax.vercel.app/ar",
  },
  {
    id: 2,
    title: "MERN Dashboard",
    description:
      "Next.js app connected to MongoDB. include sorting, filtering with Express, and data visualization through interactive charts.",
    image: "/images/projects/3.jpg",
    gitUrl: "https://github.com/Abdullah-Radwan1/Back-End-Dashboard",
    previewUrl: "https://back-end-dashboard-front.vercel.app/",
  },
  {
    id: 3,
    title: "Palesteeno Food App",
    description:
      "Food ordering app built with Next.js. Features include Redux Toolkit for state management and a user-friendly interface.",
    image: "/images/projects/2.jpg",
    gitUrl: "https://palestino-six.vercel.app/",
    previewUrl: "https://palestino-six.vercel.app/",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    description:
      "Admin panel for E-commerce businesses. Central hub for managing transactions, team members, and product listings.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/Abdullah-Radwan1/Admin-Dashboard",
    previewUrl: "https://admin-dashboard-84ee4.web.app/",
  },

  {
    id: 5,
    title: "GraphQL Transaction App",
    description:
      "CRUD app built with Next.js and GraphQL. includes  authentication with GraphQL-Passport.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/Abdullah-Radwan1/graphQl-project",
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
          <li>postman</li>
        </ul>

        <ul className="list-disc ">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li> Mysql</li>
          <li>PostgreSQL</li>
          <li> graphQl</li>
          <li>laravel</li>
          <li>Git & GitHub</li>
          <li>Tailwind CSS</li>
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
          Bachelor in Quality Management Ain Shams University ( Oct 2021 – Dec
          2025 )
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
