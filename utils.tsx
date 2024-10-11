export const projectsData = [
 {
  id: 1,
  title: "Be online ( Freelancing @mostaql )",
  description:
   "E-Commerce app with 2 platforms: Customer Website for browsing and purchasing, Supplier Portal for managing orders and product listings.",
  image: "/images/projects/1.png",
  tag: ["All", "Web"],
  gitUrl: "/",
  previewUrl: "/",
 },
 {
  id: 2,
  title: "MERN Dashboard ",
  description:
   "connecting Next.js application to MongoDB, implementing sorting and filtering using express , visualizing data through interactive charts for enhanced insights.",
  image: "/images/projects/2.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Abdullah-Radwan1/Back-End-Dashboard",
  previewUrl: "https://back-end-dashboard-front.vercel.app/",
 },
 {
  id: 3,
  title: "Admin Dashboard",
  description:
   "admin panel for an E-commerce business serves as a central hub for managing transactions and team members.",
  image: "/images/projects/3.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Abdullah-Radwan1/Admin-Dashboard",
  previewUrl: "https://admin-dashboard-84ee4.web.app/",
 },

 {
  id: 4,
  title: "Auth system",
  description:
   "Developed an authentication system using MongoDB and Express, implementing login, signup, and password reset features, while utilizing JWT and cookies for secure verification and authentication.",
  image: "/images/projects/5.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Abdullah-Radwan1/Auth-system",
  previewUrl: "https://auth-system-taupe.vercel.app/login",
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
   <div className="flex gap-4 ">
    <ul className="list-disc pl-3">
     <li>Next.js</li>
     <li>React</li>
     <li>Express</li>
     <li>MongoDB</li>
     <li>TypeScript</li>
     <li>Redux Toolkit</li>
     <li>Zustand</li>
    </ul>

    <ul className="list-disc">
     <li>C++</li>
     <li>Git & GitHub</li>
     <li>Tailwind CSS</li>
     <li>Material UI</li>
     <li>Testing Library & Jest (Basics)</li>
     <li>SASS</li>
    </ul>
   </div>
  ),
 },
 {
  title: "Education",
  id: "education",
  content: (
   <ul className="list-disc pl-3">
    <li>Bachelor in Quality Management Ain Shams University ( Oct 2021 – Dec 2025 )</li>
   </ul>
  ),
 },
 {
  title: "Certifications",
  id: "certifications",
  content: (
   <ul className="list-disc  pl-3">
    <li>The complete 2022 JavaScript Course With Projects (Udemy).</li>
   </ul>
  ),
 },
];
