import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecom-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, Stripe payments, admin dashboard, and 99.9% uptime.",
    tags: ["web"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
    status: "live",
    featured: true,
  },
  {
    id: "telegram-payment-bot",
    title: "Telegram Payment & CRM Bot",
    description:
      "Multi-functional Telegram bot with automated payment processing, user segmentation, subscription management, and analytics dashboard.",
    tags: ["bots"],
    tech: ["Python", "aiogram", "PostgreSQL", "Redis", "LiqPay API"],
    status: "live",
    featured: true,
  },
  {
    id: "discord-community-bot",
    title: "Discord Community Manager Bot",
    description:
      "Advanced Discord bot with role automation, moderation tools, custom commands, XP/leveling system, and real-time event scheduling.",
    tags: ["bots"],
    tech: ["Node.js", "Discord.js", "MongoDB", "Redis", "Docker"],
    status: "live",
  },
  {
    id: "analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with customizable widgets, multi-source data aggregation, and automated reporting system.",
    tags: ["web", "data"],
    tech: ["Next.js", "TypeScript", "ClickHouse", "GraphQL", "TailwindCSS"],
    status: "live",
    featured: true,
  },
  {
    id: "db-schema-optimizer",
    title: "DB Schema Optimizer Tool",
    description:
      "R&D tool that analyzes SQL schemas, detects N+1 query patterns, suggests indexes, and generates migration scripts.",
    tags: ["data"],
    tech: ["Python", "PostgreSQL", "SQLAlchemy", "FastAPI", "React"],
    status: "concept",
  },
  {
    id: "ai-content-bot",
    title: "AI Content Generator Bot",
    description:
      "Telegram bot integrating Claude/GPT APIs for automated content generation, scheduled posting to channels, and tone customization.",
    tags: ["bots"],
    tech: ["Python", "aiogram", "OpenAI API", "Claude API", "Redis"],
    status: "wip",
  },
  {
    id: "villa-booking",
    title: "Villa Booking Website",
    description:
      "Premium hospitality website with interactive gallery, availability calendar, booking system, and multi-language support.",
    tags: ["web"],
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Framer Motion"],
    status: "live",
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant SaaS Architecture",
    description:
      "R&D project exploring scalable multi-tenant database patterns with row-level security, tenant isolation, and dynamic schema routing.",
    tags: ["data"],
    tech: ["PostgreSQL", "Node.js", "Prisma", "Redis", "TypeScript"],
    status: "concept",
  },
];
