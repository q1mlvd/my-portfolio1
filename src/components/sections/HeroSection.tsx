"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Download, Github, Send, Sparkles } from "lucide-react";

const techBadges = [
  "Next.js", "TypeScript", "PostgreSQL", "Python", "Telegram API", "Redis",
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl float-animation" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl float-animation"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl float-animation"
        style={{ animationDelay: "-1.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <Sparkles className="w-3.5 h-3.5" />
            {t("badge")}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg mb-2"
          >
            {t("greeting")}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-space text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {t("name")}
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-text text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 max-w-3xl mx-auto leading-tight"
          >
            {t("tagline")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              {t("cta_primary")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              {t("cta_secondary")}
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.05 }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/kravchuk-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/kravchuk_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-blue-400 transition-all hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-1 rounded-full bg-white/40"
        />
      </motion.div>
    </section>
  );
}
