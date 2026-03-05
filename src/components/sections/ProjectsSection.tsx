"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ExternalLink, Github, Beaker, Zap, Clock } from "lucide-react";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | "web" | "bots" | "data";

const statusConfig = {
  live: {
    icon: Zap,
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  concept: {
    icon: Beaker,
    className: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  wip: {
    icon: Clock,
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
};

const techColors: Record<string, string> = {
  "Next.js": "bg-gray-800 text-gray-200",
  TypeScript: "bg-blue-900/50 text-blue-300",
  Python: "bg-yellow-900/30 text-yellow-300",
  PostgreSQL: "bg-indigo-900/30 text-indigo-300",
  Redis: "bg-red-900/30 text-red-300",
  React: "bg-cyan-900/30 text-cyan-300",
  Docker: "bg-blue-900/30 text-blue-300",
  MongoDB: "bg-green-900/30 text-green-300",
};

function getTechColor(tech: string) {
  return techColors[tech] || "bg-gray-800/50 text-gray-400";
}

export function ProjectsSection() {
  const t = useTranslations("projects");
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "web", label: t("web") },
    { key: "bots", label: t("bots") },
    { key: "data", label: t("data") },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#060a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-500 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Portfolio
          </span>
          <h2 className="font-space text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="flex gap-1 p-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={cn(
                  "px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  filter === key
                    ? "bg-white dark:bg-blue-500 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const status = statusConfig[project.status];
              const StatusIcon = status.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={cn(
                    "group relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col",
                    project.featured && "md:col-span-1"
                  )}
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={cn(
                        "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                        status.className
                      )}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {t(`status_${project.status}`)}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-space font-semibold text-gray-900 dark:text-white text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "px-2 py-0.5 rounded-md text-xs font-medium",
                          getTechColor(tech)
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-800/50 text-gray-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
