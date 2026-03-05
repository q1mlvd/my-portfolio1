"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Globe, Bot, Database } from "lucide-react";

const stats = [
  { key: "projects", value: "25+" },
  { key: "clients", value: "18+" },
  { key: "experience", value: "3+" },
  { key: "bots", value: "15+" },
];

const services = [
  {
    key: "web",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    key: "bots",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    key: "db",
    icon: Database,
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const skills = [
  { label: "Next.js / React", level: 92 },
  { label: "TypeScript", level: 88 },
  { label: "Node.js", level: 85 },
  { label: "Python", level: 80 },
  { label: "PostgreSQL", level: 82 },
  { label: "Telegram Bot API", level: 95 },
];

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            About
          </span>
          <h2 className="font-space text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map(({ key, value }) => (
            <div
              key={key}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <div className="font-space text-3xl font-bold gradient-text mb-1">{value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">{t(`stats.${key}`)}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
              {t("bio")}
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.label}</span>
                    <span className="text-gray-500 dark:text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.07, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {services.map(({ key, icon: Icon, gradient, bg, border }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-6 rounded-2xl ${bg} border ${border} cursor-default transition-all duration-200`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-space font-semibold text-gray-900 dark:text-white text-lg mb-2">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {t(`services.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
