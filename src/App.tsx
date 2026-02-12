import { AnimatePresence, motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  CircleDollarSign,
  Laptop,
  LineChart,
  Menu,
  MessageSquare,
  Shield,
  Sparkles,
  Timer,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { useMotionValue, useSpring } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Mascot } from "@/components/Mascot";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // easeOut-ish
} as const;

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

/* ───── Flag SVG components ───── */
function FlagIT({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <rect width="213.3" height="480" fill="#009246" />
      <rect x="213.3" width="213.4" height="480" fill="#fff" />
      <rect x="426.7" width="213.3" height="480" fill="#ce2b37" />
    </svg>
  );
}
function FlagGB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={className}>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
      />
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
    </svg>
  );
}

/* ───── Sticky header with mobile menu ───── */
function StickyHeader({
  t,
  language,
  toggleLanguage,
}: {
  t: ReturnType<typeof useLanguage>["t"];
  language: string;
  toggleLanguage: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass =
    "relative hover:text-white transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full";

  const navLinks = [
    { href: "#servizi", label: t.nav.services },
    { href: "#storia", label: t.nav.path },
    { href: "#processo", label: t.nav.process },
    { href: "#innovazione", label: t.nav.innovation },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0F0F11]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/p4-underline-cyan.png"
            alt="Arras Industries"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={navLinkClass}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link.href.replace("#", ""));
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="group relative flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-sm font-medium text-white/80 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
            title={
              language === "it" ? "Switch to English" : "Passa all'italiano"
            }
            aria-label={
              language === "it" ? "Switch to English" : "Passa all'italiano"
            }
          >
            <span className="inline-block h-4 w-5 overflow-hidden rounded-[2px] transition-transform duration-300 group-hover:scale-110">
              {language === "it" ? (
                <FlagIT className="h-full w-full" />
              ) : (
                <FlagGB className="h-full w-full" />
              )}
            </span>
            <span className="text-xs font-semibold tracking-wide">
              {language === "it" ? "IT" : "EN"}
            </span>
          </button>

          {/* CTA desktop */}
          <Button
            variant="outline"
            onClick={() => scrollToId("servizi")}
            className="hidden border-white/20 bg-white/5 text-white hover:bg-white/10 sm:inline-flex"
          >
            {t.nav.seeServices}
          </Button>
          <Button
            onClick={() => scrollToId("contatto")}
            className="hidden bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.04] hover:bg-[#60A5FA] active:scale-[0.97] sm:inline-flex"
          >
            {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
          </Button>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = link.href.replace("#", "");
                    setMobileOpen(false);
                    requestAnimationFrame(() => scrollToId(targetId));
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    requestAnimationFrame(() => scrollToId("contatto"));
                  }}
                  className="flex-1 bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)]"
                >
                  {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function App() {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0F0F11] pt-[60px] text-[#F5F7FA]">
      <BackgroundFX />
      <Mascot pose="point" />

      <StickyHeader t={t} language={language} toggleLanguage={toggleLanguage} />

      <main>
        <Hero />
        <ValuesSection />
        <SectionBridge
          eyebrow={t.sectionBridge.pillars.eyebrow}
          title={t.sectionBridge.pillars.title}
          subtitle={t.sectionBridge.pillars.subtitle}
        />
        <ScrollyStory />
        <SectionBridge
          eyebrow={t.sectionBridge.fromStrategy.eyebrow}
          title={t.sectionBridge.fromStrategy.title}
          subtitle={t.sectionBridge.fromStrategy.subtitle}
        />

        <section className="mx-auto max-w-6xl px-4 py-16">
          <motion.div {...fadeUp} className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {t.threeAreas.title}
            </h2>
            <p className="max-w-2xl text-white/70">
              {t.threeAreas.description}
            </p>
          </motion.div>

          <TimelineSection>
            {/* linea centrale unica per tutta la timeline */}
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/10 md:block" />
            <TimelineFeature
              side="left"
              icon={<Timer className="h-5 w-5" />}
              title={t.threeAreas.features[0].title}
              desc={t.threeAreas.features[0].desc}
              imageSrc="/images/hero.jpg"
            />

            <TimelineFeature
              side="right"
              icon={<CircleDollarSign className="h-5 w-5" />}
              title={t.threeAreas.features[1].title}
              desc={t.threeAreas.features[1].desc}
              imageSrc="/images/process.jpg"
            />

            <TimelineFeature
              side="left"
              icon={<Shield className="h-5 w-5" />}
              title={t.threeAreas.features[2].title}
              desc={t.threeAreas.features[2].desc}
              imageSrc="/images/notarization.jpg"
            />
          </TimelineSection>
        </section>

        <section id="servizi" className="mx-auto max-w-6xl px-4 pb-20">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-2 text-white/70">{t.services.subtitle}</p>
          </motion.div>

          <motion.div
            className="mt-10 space-y-6"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <ServiceHero
              align="left"
              image="/images/hero.jpg"
              icon={<Laptop className="h-5 w-5" />}
              title={t.services.services[0].title}
              subtitle={t.services.services[0].subtitle}
              points={t.services.services[0].points}
              outcomes={t.services.services[0].outcomes}
            />

            <ServiceHero
              align="right"
              image="/images/process.jpg"
              icon={<MessageSquare className="h-5 w-5" />}
              title={t.services.services[1].title}
              subtitle={t.services.services[1].subtitle}
              points={t.services.services[1].points}
              outcomes={t.services.services[1].outcomes}
            />

            <ServiceHero
              align="left"
              image="/images/usecase.jpg"
              icon={<Sparkles className="h-5 w-5" />}
              title={t.services.services[2].title}
              subtitle={t.services.services[2].subtitle}
              points={t.services.services[2].points}
              outcomes={t.services.services[2].outcomes}
            />
          </motion.div>
        </section>

        <section id="processo" className="mx-auto max-w-6xl px-4 pb-20">
          <ProcessShowcase />
        </section>

        <InnovationSection />

        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
          <motion.div {...fadeUp} className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t.faq.title}
              </h2>
              <p className="mt-2 text-white/70">{t.faq.subtitle}</p>
            </div>
            <Accordion items={t.faq.items} />{" "}
          </motion.div>
        </section>

        <SupportSection />

        <section id="contatto" className="mx-auto max-w-6xl px-4 pb-24">
          <motion.div {...fadeUp}>
            <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="mt-3 text-2xl md:text-3xl">
                  {t.contact.title}
                </CardTitle>
                <CardDescription className="mt-2 text-white/70">
                  {t.contact.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-3">
                  <InputLike
                    label={t.contact.formLabels.name}
                    placeholder={t.contact.formPlaceholders.name}
                  />
                  <InputLike
                    label={t.contact.formLabels.activity}
                    placeholder={t.contact.formPlaceholders.activity}
                  />
                  <InputLike
                    label={t.contact.formLabels.contact}
                    placeholder={t.contact.formPlaceholders.contact}
                  />
                  <div className="md:col-span-3">
                    <InputLike
                      label={t.contact.formLabels.objective}
                      placeholder={t.contact.formPlaceholders.objective}
                      tall
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-white/60">
                    {t.contact.responseTime}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => scrollToId("servizi")}
                      className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                    >
                      {t.nav.seeServices}
                    </Button>
                    <Button
                      onClick={openWhatsApp}
                      className="bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.04] hover:bg-[#60A5FA] active:scale-[0.97]"
                    >
                      {t.contact.evaluate} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>

              <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#3B82F6]/20 blur-2xl" />
            </Card>

            <footer className="mt-10 grid grid-cols-2 gap-3 text-sm text-white/60 md:gap-6 md:grid-cols-[1.2fr_1fr_1fr]">
              <div className="col-span-2 space-y-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 md:col-span-1 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="text-white/80">{t.footer.company}</div>
                <div>{t.footer.description}</div>
                <div className="text-xs text-white/50">
                  {t.footer.copyright.replace(
                    "{year}",
                    String(new Date().getFullYear()),
                  )}
                </div>
              </div>

              <div className="space-y-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="text-white/80">{t.footer.sections}</div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex md:flex-col">
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#servizi"
                  >
                    {t.nav.services}
                  </a>
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#storia"
                  >
                    {t.nav.path}
                  </a>
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#processo"
                  >
                    {t.nav.process}
                  </a>
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </div>
              </div>

              <div className="space-y-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="text-white/80">{t.footer.contacts}</div>
                <div className="flex flex-col gap-2">
                  <span className="rounded-[10px] bg-white/5 px-2 py-1.5 md:rounded-none md:bg-transparent md:px-0 md:py-0">
                    {t.footer.email}
                  </span>
                  <span className="rounded-[10px] bg-white/5 px-2 py-1.5 md:rounded-none md:bg-transparent md:px-0 md:py-0">
                    {t.footer.phone}
                  </span>
                  <span className="rounded-[10px] bg-white/5 px-2 py-1.5 md:rounded-none md:bg-transparent md:px-0 md:py-0">
                    {t.footer.location}
                  </span>
                </div>
              </div>
            </footer>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function Hero() {
  const { t, language } = useLanguage();
  const words = useMemo(() => t.hero.words, [t]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((p) => (p + 1) % words.length),
      2200,
    );
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="w-full pt-16 md:pt-20 min-h-[70vh] md:min-h-[80vh]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-7xl">
            {language === "it" ? "Software per PMI," : "Software for SMBs,"}{" "}
            <span className="relative inline-block">
              <motion.span
                key={words[idx]}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.45 }}
                className="inline-block rounded-[12px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#A78BFA] px-3 py-1 text-white shadow-[0_0_30px_rgba(59,130,246,0.45)]"
              >
                {words[idx]}
              </motion.span>
            </span>
            <br />
            {language === "it"
              ? "quando serve, con obiettivi chiari."
              : "when needed, with clear objectives."}
          </h1>

          <p className="mt-4 max-w-xl text-white/80">{t.hero.subtitle}</p>

          <div className="mt-7 hidden gap-2 sm:flex sm:flex-row">
            <MagneticButton onClick={() => scrollToId("contatto")}>
              {t.hero.requestCall} <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => scrollToId("servizi")}
            >
              {t.nav.seeServices}
            </MagneticButton>
          </div>
        </motion.div>

        <HeroImage />
      </div>
    </section>
  );
}

function SectionBridge({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"],
  });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-10">
      <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {eyebrow}
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </div>
            <div className="mt-2 max-w-2xl text-sm text-white/70">
              {subtitle}
            </div>
          </div>

          <div className="relative h-10 w-full overflow-hidden rounded-full border border-white/10 bg-white/5 md:w-[220px]">
            <motion.div
              style={{ width: line, opacity: glow }}
              className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { t } = useLanguage();
  const images = [
    "/images/hero.jpg",
    "/images/process.jpg",
    "/images/usecase.jpg",
  ];
  const values = t.values.values.map((v, i) => ({
    title: v.title,
    desc: v.desc,
    image: images[i],
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 pt-4 pb-16 md:pt-8">
      <motion.div {...fadeUp} className="text-center">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          {t.values.title}
        </h2>
        <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.28, delayChildren: 0.1 },
          },
        }}
      >
        {values.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: { title: string; desc: string; image: string };
  index: number;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 backdrop-blur"
      variants={{
        hidden: { opacity: 0, y: -720, scale: 0.9, rotate: -4 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          scaleX: [1, 1.16, 1],
          scaleY: [1, 0.78, 1],
          borderRadius: [
            "14px",
            "44px 26px 42px 28px / 30px 44px 24px 36px",
            "14px",
          ],
          transition: {
            y: {
              type: "spring",
              stiffness: 220,
              damping: 12,
              bounce: 0.7,
            },
            rotate: { type: "spring", stiffness: 180, damping: 12 },
            opacity: { duration: 0.35 },
            scale: { type: "spring", stiffness: 200, damping: 12 },
            scaleX: {
              delay: 0.25 + index * 0.32,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            },
            scaleY: {
              delay: 0.25 + index * 0.32,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            },
            borderRadius: {
              delay: 0.25 + index * 0.32,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        },
      }}
      onPointerMove={(e) => {
        const rect = (
          e.currentTarget as HTMLDivElement
        ).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mx", `${x}%`);
        e.currentTarget.style.setProperty("--my", `${y}%`);
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty("--mx", "50%");
        e.currentTarget.style.setProperty("--my", "50%");
      }}
    >
      <div className="absolute inset-0">
        <img
          src={value.image}
          alt=""
          className="h-full w-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-[#0F0F11]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "120%" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent"
      />

      <div className="relative p-6">
        <div
          className="text-lg font-semibold ripple-text"
          data-text={value.title}
        >
          {value.title}
        </div>
        <div
          className="mt-2 text-sm text-white/70 ripple-text"
          data-text={value.desc}
        >
          {value.desc}
        </div>
        <div className="mt-6 h-px w-10 bg-gradient-to-r from-[#3B82F6] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 transition duration-300 group-hover:-translate-y-1" />
    </motion.div>
  );
}

function InnovationSection() {
  const { t } = useLanguage();
  const slides = t.innovation.features.map((f) => ({
    title: f.title,
    detail: f.desc,
  }));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="innovazione"
      className="relative mx-auto max-w-6xl px-4 pb-24 pt-12"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="h-full w-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(7)].map((_, i) => (
            <motion.path
              key={i}
              d={`M -200 ${180 + i * 110} C 420 ${120 + i * 70}, 860 ${420 + i * 110}, 1400 ${200 + i * 80}`}
              stroke="url(#meshGradient)"
              strokeWidth="1"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 4.5, delay: i * 0.2, ease: "easeInOut" }}
            />
          ))}
          <defs>
            <linearGradient id="meshGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400">
          {t.innovation.title}
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">{t.innovation.subtitle}</p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.25),transparent_55%)]" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-30">
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <defs>
                <linearGradient
                  id="blockGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="10"
                fill="url(#blockGradient)"
                opacity="0.8"
              />
              <rect
                x="110"
                y="35"
                width="70"
                height="70"
                rx="12"
                fill="url(#blockGradient)"
                opacity="0.6"
              />
              <rect
                x="40"
                y="110"
                width="90"
                height="70"
                rx="12"
                fill="url(#blockGradient)"
                opacity="0.5"
              />
              <line
                x1="80"
                y1="50"
                x2="120"
                y2="60"
                stroke="#60A5FA"
                strokeWidth="3"
                opacity="0.6"
              />
              <line
                x1="85"
                y1="90"
                x2="70"
                y2="130"
                stroke="#7C3AED"
                strokeWidth="3"
                opacity="0.6"
              />
              <line
                x1="140"
                y1="105"
                x2="110"
                y2="135"
                stroke="#60A5FA"
                strokeWidth="3"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.innovation.useCases}
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {t.innovation.useCasesTitle}
            </div>
            <div className="mt-3 text-sm text-white/70">
              {t.innovation.useCasesDesc}
            </div>

            <div className="relative mt-6 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[active].title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[14px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {t.innovation.focus}
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-tight">
                    {slides[active].title}
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    {slides[active].detail}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.25),transparent_55%)]" />
          <div className="relative h-[280px]">
            <BlockchainScene />
          </div>
          <div className="relative mt-4 text-sm text-white/70">
            {t.innovation.conceptual}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.25),transparent_55%)]" />
        <div className="relative grid gap-6 md:grid-cols-[0.7fr_1.3fr] items-center">
          <div className="rounded-[14px] border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.innovation.digitalPayments}
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight">
              {t.innovation.checkoutTitle}
            </div>
            <p className="mt-2 text-sm text-white/70">
              {t.innovation.checkoutDesc}
            </p>
            <div className="mt-3 grid gap-2">
              {t.innovation.benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-[12px] border border-white/10 bg-[#0F0F11] p-3">
              <div className="h-10 w-10 overflow-hidden rounded-[10px] border border-white/15 bg-white/5">
                <img
                  src="/metamask.png"
                  alt="MetaMask"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-sm text-white/70">Wallet: MetaMask</div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
              Crypto ready
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[auto_1fr_1fr_1fr] items-center">
            <motion.div
              className="hidden md:grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.98, 1.06, 0.98],
              }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              →
            </motion.div>
            {t.innovation.cryptoFlow.steps.map((item, idx) => (
              <motion.div
                key={item.title}
                className="group relative h-full rounded-[12px] border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 18px rgba(96,165,250,0.35)",
                    "0 0 0 rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Step {idx + 1}
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1">{item.desc}</div>
                <div className="mt-3 rounded-[10px] border border-white/10 bg-[#0B0C10] px-3 py-2 text-xs text-white/70 md:pointer-events-none md:absolute md:left-3 md:right-3 md:top-full md:z-10 md:mt-2 md:translate-y-2 md:opacity-0 md:transition md:duration-200 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {item.tip}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BlockchainScene() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0B0C10"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 6]} intensity={1.1} color="#60A5FA" />
      <pointLight position={[-4, -2, 6]} intensity={0.8} color="#7C3AED" />
      <BlockchainNetwork />
      <EffectComposer>
        <Bloom
          intensity={0.9}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}

function BlockchainNetwork() {
  const group = useRef<THREE.Group>(null);
  const pulseRef = useRef(0);
  const { camera, pointer, clock } = useThree();
  const nodes = useMemo(() => {
    return [
      new THREE.Vector3(-2.4, 0.8, 1.6),
      new THREE.Vector3(-0.8, 1.6, 1.2),
      new THREE.Vector3(1.4, 1.1, 1.4),
      new THREE.Vector3(2.4, -0.1, 1.0),
      new THREE.Vector3(0.8, -1.4, 1.2),
      new THREE.Vector3(-1.6, -1.0, 1.4),
      new THREE.Vector3(0.0, 0.0, 0.0),
      new THREE.Vector3(-2.2, 0.6, -1.2),
      new THREE.Vector3(-0.6, 1.2, -1.6),
      new THREE.Vector3(1.6, 0.8, -1.2),
      new THREE.Vector3(2.6, -0.4, -1.6),
      new THREE.Vector3(0.6, -1.6, -1.4),
      new THREE.Vector3(-1.8, -1.2, -1.2),
      new THREE.Vector3(0.2, 0.2, -2.2),
    ];
  }, []);

  const rngRef = useRef(42);
  const seeded = () => {
    rngRef.current = (rngRef.current * 9301 + 49297) % 233280;
    return rngRef.current / 233280;
  };

  const buildRoute = () => {
    const order = nodes.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(seeded() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  };

  const routeRef = useRef(buildRoute());
  const stateRef = useRef({
    idx: 0,
    t: 0,
    speed: 0.28,
    pause: 0.0,
    cycles: 0,
  });
  const packetsRef = useRef(
    Array.from({ length: 3 }).map((_, idx) => ({
      t: idx * 0.33,
      speed: 0.08 + idx * 0.015,
      trail: [] as THREE.Vector3[],
    })),
  );
  const linkRefs = useRef<THREE.LineBasicMaterial[]>([]);
  const links = useMemo(() => {
    const pairs: Array<[number, number]> = [];
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        pairs.push([i, j]);
      }
    }
    return pairs;
  }, [nodes]);

  const pointToSegmentDistance = (
    p: THREE.Vector3,
    a: THREE.Vector3,
    b: THREE.Vector3,
  ) => {
    const ab = new THREE.Vector3().subVectors(b, a);
    const ap = new THREE.Vector3().subVectors(p, a);
    const t = THREE.MathUtils.clamp(ap.dot(ab) / ab.lengthSq(), 0, 1);
    const closest = new THREE.Vector3().copy(a).add(ab.multiplyScalar(t));
    return closest.distanceTo(p);
  };

  useFrame((_, delta) => {
    const state = stateRef.current;
    if (state.pause > 0) {
      state.pause -= delta;
    } else {
      state.t += delta * state.speed;
      if (state.t >= 1) {
        state.t = 0;
        state.idx = (state.idx + 1) % routeRef.current.length;
        state.pause = 0.6;
        if (state.idx === 0) {
          routeRef.current = buildRoute();
          state.cycles += 1;
          pulseRef.current = 1;
        }
      }
    }

    const order = routeRef.current;
    const from = nodes[order[state.idx]];
    const to = nodes[order[(state.idx + 1) % order.length]];
    const eased = state.t * state.t * (3 - 2 * state.t);
    const pos = new THREE.Vector3()
      .lerpVectors(from, to, eased)
      .add(new THREE.Vector3(0, 0, 2.6));

    camera.position.lerp(pos, 0.1);
    camera.lookAt(to.x * 0.2, to.y * 0.2, to.z * 0.2);
    const targetRoll =
      pointer.x * 0.06 + Math.sin(clock.getElapsedTime() * 0.4) * 0.02;
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      targetRoll,
      0.06,
    );
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        pointer.x * 0.6,
        0.08,
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        pointer.y * 0.4,
        0.08,
      );
      if (pulseRef.current > 0) {
        pulseRef.current = Math.max(0, pulseRef.current - delta * 0.6);
        const pulse = pulseRef.current;
        group.current.scale.setScalar(1 + pulse * 0.03);
      } else {
        group.current.scale.setScalar(1);
      }
    }

    packetsRef.current.forEach((packet) => {
      packet.t += delta * packet.speed;
      if (packet.t >= 1) {
        packet.t = 0;
      }
      const packetIdx = Math.floor(packet.t * order.length);
      const packetFrom = nodes[order[packetIdx % order.length]];
      const packetTo = nodes[order[(packetIdx + 1) % order.length]];
      const packetLocalT = (packet.t * order.length) % 1;
      const p = new THREE.Vector3().lerpVectors(
        packetFrom,
        packetTo,
        packetLocalT,
      );
      packet.trail.push(p.clone());
      if (packet.trail.length > 18) {
        packet.trail.shift();
      }
    });

    const heads = packetsRef.current
      .map((packet) => packet.trail[packet.trail.length - 1])
      .filter(Boolean) as THREE.Vector3[];

    links.forEach(([i, j], idx) => {
      const mat = linkRefs.current[idx];
      if (!mat) return;
      const a = nodes[i];
      const b = nodes[j];
      let minDist = Infinity;
      heads.forEach((head) => {
        const d = pointToSegmentDistance(head, a, b);
        minDist = Math.min(minDist, d);
      });
      const highlight = minDist < 0.35 ? 0.35 : 0;
      mat.opacity = 0.2 + highlight;
    });
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={0.8}
            metalness={0.2}
            roughness={0.15}
          />
        </mesh>
      ))}

      {links.map(([i, j]) => {
        const points = [nodes[i], nodes[j]];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive
            key={`link-${i}-${j}`}
            object={
              new THREE.Line(
                geometry,
                new THREE.LineBasicMaterial({
                  color: "#7C3AED",
                  transparent: true,
                  opacity: 0.2,
                }),
              )
            }
          />
        );
      })}

      {packetsRef.current.map((packet, idx) => {
        const head = packet.trail[packet.trail.length - 1];
        return (
          <group key={`packet-${idx}`}>
            <TrailLine trail={packet.trail} color="#60A5FA" />
            {head && (
              <mesh position={head}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial
                  color="#60A5FA"
                  emissive="#3B82F6"
                  emissiveIntensity={1.2}
                  metalness={0.3}
                  roughness={0.1}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

function TrailLine({
  trail,
  color,
}: {
  trail: THREE.Vector3[];
  color: string;
}) {
  const ref = useRef<THREE.BufferGeometry>(null);

  useFrame(() => {
    if (!ref.current || trail.length < 2) return;
    const geometry = new THREE.BufferGeometry().setFromPoints(trail);
    ref.current.copy(geometry);
    ref.current.computeBoundingSphere();
  });

  return (
    <line>
      <bufferGeometry ref={ref} />
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  );
}

function ScrollyStory() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowO = useTransform(scrollYProgress, [0, 1], [0, 0.45]);

  const steps = t.process.phaseSteps;

  return (
    <section
      id="storia"
      className="mx-auto max-w-6xl px-4 py-16 overflow-visible"
    >
      <div
        ref={ref}
        className="grid items-start gap-10 overflow-visible md:grid-cols-[1.05fr_1.25fr] md:items-start"
      >
        <div className="md:sticky md:top-24 md:self-start md:h-fit">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-3 text-white/70">{t.process.subtitle}</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-white/10" />
          <motion.div
            style={{ height: lineH }}
            className="pointer-events-none absolute left-4 top-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]"
          />
          <motion.div
            style={{ opacity: glowO }}
            className="pointer-events-none absolute left-4 top-0 h-full w-6 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/30 to-transparent blur-xl"
          />

          <div className="space-y-10 pl-12">
            {steps.map((step, index) => (
              <ScrollyCard
                key={step.title}
                step={step}
                progress={scrollYProgress}
                index={index}
                total={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollyCard({
  step,
  progress,
  index,
  total,
}: {
  step: { title: string; desc: string; metric: string };
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start, start + 0.15, end],
    [0.35, 1, 0.4],
  );
  const y = useTransform(progress, [start, start + 0.2, end], [28, 0, -18]);
  const scale = useTransform(
    progress,
    [start, start + 0.2, end],
    [0.98, 1, 0.98],
  );

  return (
    <motion.div style={{ opacity, y, scale }}>
      <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10" />
        <CardHeader>
          <CardTitle className="text-lg">{step.title}</CardTitle>
          <CardDescription className="text-white/70">
            {step.desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
            {step.metric}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia(`(max-width:${breakpoint}px)`);
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    setIsMobile(query.matches);

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", handler);
      return () => query.removeEventListener("change", handler);
    }

    query.addListener(handler);
    return () => query.removeListener(handler);
  }, [breakpoint]);

  return isMobile;
}

function TimelineSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowO = useTransform(scrollYProgress, [0, 1], [0.0, 0.35]);

  return (
    <div ref={ref} className="relative mt-10">
      {/* linea base */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

      {/* linea che si disegna */}
      <motion.div
        style={{ height: lineH }}
        className="pointer-events-none absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA] md:block"
      />

      {/* glow leggero */}
      <motion.div
        style={{ opacity: glowO }}
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-6 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl md:block"
      />

      {children}
    </div>
  );
}

function HeroImage() {
  const { t } = useLanguage();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });

  return (
    <motion.div
      className="relative"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        x.set(dx * 18);
        y.set(dy * 18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ translateX: sx, translateY: sy }}
    >
      <motion.div
        animate={{ y: [0, -6, 0], rotateY: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Card className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.35),transparent_45%)]" />

          <img
            src="/images/image.png"
            alt={t.hero.imageAlt}
            className="h-[420px] w-full object-cover md:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F11]/40 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 rounded-[14px] border border-white/15 bg-white/10 p-4 backdrop-blur">
            <div className=" text-sm text-white/70">{t.hero.quote2}</div>
          </div>
        </Card>
      </motion.div>

      {/* grana/noise per togliere l’effetto “piatto” */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
    </motion.div>
  );
}

function MagneticButton({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const isMobile = useIsMobile();

  const buttonClass = [
    "w-full sm:w-auto",
    variant === "outline"
      ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.04] hover:bg-[#60A5FA] active:scale-[0.97]",
  ].join(" ");

  if (isMobile) {
    return (
      <Button
        variant={variant === "outline" ? "outline" : "default"}
        onClick={onClick}
        className={buttonClass}
      >
        {children}
      </Button>
    );
  }

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(dx * 0.12);
        y.set(dy * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.98 }}
      className="w-full sm:w-auto"
    >
      <Button
        variant={variant === "outline" ? "outline" : "default"}
        onClick={onClick}
        className={buttonClass}
      >
        {children}
      </Button>
    </motion.div>
  );
}

function ServiceHero({
  align,
  image,
  icon,
  title,
  subtitle,
  points,
  outcomes,
}: {
  align: "left" | "right";
  image: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
  outcomes: string[];
}) {
  const { t } = useLanguage();
  const isLeft = align === "left";

  return (
    <motion.div
      {...fadeUp}
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative overflow-hidden border-white/10 bg-[#101115]/90 backdrop-blur transition hover:shadow-[0_30px_80px_-50px_rgba(59,130,246,0.6)]">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute -left-24 top-8 h-40 w-40 rounded-full bg-[#60A5FA]/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-40 w-40 rounded-full bg-[#7C3AED]/20 blur-3xl" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute -inset-y-6 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
          animate={{ x: ["-80%", "260%"] }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 3.5,
          }}
        />
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className={[
              "h-full w-full object-cover",
              "opacity-45 saturate-[1.05] grayscale-[10%]",
            ].join(" ")}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11] via-[#0F0F11]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div
          className={[
            "relative grid gap-6 p-6 md:p-8",
            "md:grid-cols-[1.2fr_0.8fr]",
            isLeft ? "" : "md:grid-cols-[0.8fr_1.2fr]",
          ].join(" ")}
        >
          <div className={isLeft ? "" : "md:order-2"}>
            <div className="flex items-center gap-3">
              <motion.div
                className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/15 bg-white/5 text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                whileHover={{ rotate: 6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
              >
                {icon}
              </motion.div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  {title}
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  {subtitle}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/75">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={[
              "rounded-[14px] border border-white/10 bg-white/5 p-4 text-sm text-white/70",
              "backdrop-blur",
            ].join(" ")}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.services.result}
            </div>
            <div className="mt-2 space-y-2">
              {outcomes.map((o) => (
                <div
                  key={o}
                  className="rounded-[12px] border border-white/10 bg-white/5 px-3 py-2"
                >
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function ProcessShowcase() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const icons = [
    <Users className="h-5 w-5" />,
    <Bolt className="h-5 w-5" />,
    <BadgeCheck className="h-5 w-5" />,
    <LineChart className="h-5 w-5" />,
  ];
  const steps = t.process.steps.map(
    (s: { number: string; title: string; desc: string }, i: number) => ({
      ...s,
      icon: icons[i],
    }),
  );

  return (
    <div ref={ref} className="relative">
      <motion.div {...fadeUp} className="max-w-3xl">
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {t.process.title}
        </h2>
        <p className="mt-2 text-white/70">{t.process.subtitle}</p>
      </motion.div>

      <div className="mt-10 rounded-[14px] border border-white/10 bg-[#0C0D10]/80 p-6 backdrop-blur md:p-8">
        <div className="relative">
          {/* desktop horizontal timeline */}
          <div className="absolute left-0 right-0 top-[36px] hidden h-px bg-white/10 md:block" />
          <motion.div
            style={{ width: line }}
            className="absolute left-0 top-[36px] hidden h-px bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#A78BFA] md:block"
          />
          <motion.div
            style={{ opacity: glow }}
            className="absolute left-0 top-[32px] hidden h-3 w-full rounded-full bg-[#3B82F6]/10 blur-2xl md:block"
          />

          <div className="hidden gap-6 md:grid md:grid-cols-4">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <ProcessStepMobile
                  key={`${step.number}-mobile`}
                  step={step}
                  index={index}
                  total={steps.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  index,
  progress,
}: {
  step: { number: string; title: string; desc: string; icon: React.ReactNode };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index * 0.2;
  const end = start + 0.35;
  const scale = useTransform(progress, [start, start + 0.2, end], [1, 1.08, 1]);
  const opacity = useTransform(
    progress,
    [start, start + 0.2, end],
    [0.6, 1, 0.7],
  );

  return (
    <motion.div style={{ opacity }} className="relative group">
      <motion.div style={{ scale }} className="flex flex-col items-start gap-4">
        <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/5 text-white shadow-[0_0_26px_rgba(59,130,246,0.35)] transition group-hover:shadow-[0_0_36px_rgba(96,165,250,0.6)]">
          <div className="absolute -inset-2 rounded-full bg-[#3B82F6]/10 blur-xl transition group-hover:bg-[#60A5FA]/20" />
          <span className="relative font-tech text-lg">{step.number}</span>
        </div>
        <div className="text-sm text-white/60">{step.title}</div>
        <div className="text-sm text-white/70">{step.desc}</div>
        <div className="grid h-9 w-9 place-items-center rounded-[12px] border border-white/10 bg-white/5 text-white/70">
          {step.icon}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProcessStepMobile({
  step,
  index,
  total,
  progress,
}: {
  step: { number: string; title: string; desc: string; icon: React.ReactNode };
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index * 0.2;
  const end = start + 0.35;
  const y = useTransform(progress, [start, start + 0.2, end], [16, 0, -8]);
  const opacity = useTransform(
    progress,
    [start, start + 0.2, end],
    [0.65, 1, 0.8],
  );

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <motion.div
      style={{ opacity, y }}
      className="grid grid-cols-[3.5rem_1fr] gap-3"
    >
      <div className="relative flex items-center justify-center">
        {!isFirst && !isLast && (
          <>
            <div className="absolute left-1/2 -top-3 -bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]" />
            <div className="absolute left-1/2 -top-3 -bottom-3 w-5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl" />
          </>
        )}
        {isFirst && !isLast && (
          <>
            <div className="absolute left-1/2 top-1/2 -bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]" />
            <div className="absolute left-1/2 top-1/2 -bottom-3 w-5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl" />
          </>
        )}
        {!isFirst && isLast && (
          <>
            <div className="absolute left-1/2 -top-3 bottom-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]" />
            <div className="absolute left-1/2 -top-3 bottom-1/2 w-5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl" />
          </>
        )}
        <div className="relative grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white shadow-[0_0_22px_rgba(59,130,246,0.35)]">
          <div className="absolute -inset-2 rounded-full bg-[#3B82F6]/20 blur-xl" />
          <span className="relative font-tech text-sm">{step.number}</span>
        </div>
      </div>

      <div className="rounded-[16px] border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">{step.title}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
              {`Step ${step.number}`}
            </div>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-[12px] border border-white/10 bg-white/5 text-white/70">
            {step.icon}
          </div>
        </div>
        <div className="mt-3 text-sm text-white/70">{step.desc}</div>
      </div>
    </motion.div>
  );
}

function TimelineFeature({
  side,
  icon,
  title,
  desc,
  imageSrc,
}: {
  side: "left" | "right";
  icon: React.ReactNode;
  title: string;
  desc: string;
  imageSrc: string;
}) {
  const isLeft = side === "left";
  const isMobile = useIsMobile();

  // animazione MOLTO più evidente: parte fuori schermo
  const fromX = isMobile ? 0 : isLeft ? -520 : 520;
  const initialMotion = isMobile
    ? {
        opacity: 1,
        x: 0,
        rotate: 0,
        filter: "blur(0px)",
      }
    : {
        opacity: 0,
        x: fromX,
        rotate: isLeft ? -4 : 4,
        filter: "blur(2px)",
      };
  const inViewMotion = {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
  };

  return (
    <div className="relative py-6">
      {/* linea centrale quasi impercettibile */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

      {/* pallino sul centro */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 md:block" />

      <motion.div
        whileInView={inViewMotion}
        initial={initialMotion}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }} // lenta e visibile
        className={[
          "relative flex w-full justify-center px-2 sm:px-3",
          isLeft ? "md:justify-start md:pr-16" : "md:justify-end md:pl-16",
        ].join(" ")}
      >
        {/* card non enorme: max width limitato e dimensionata sul contenuto */}
        <motion.div
          whileInView={{
            scale: [0.98, 1.03, 1],
            boxShadow: [
              "0 10px 30px -20px rgba(0,0,0,0.35)",
              "0 20px 60px -28px rgba(0,0,0,0.45)",
              "0 12px 36px -24px rgba(0,0,0,0.35)",
            ],
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full max-w-[520px] md:w-[min(520px,calc(100%-2rem))]"
        >
          <Card
            className={[
              "relative overflow-hidden",
              "border-white/10 bg-white/5 backdrop-blur",
              "transition-transform duration-300 will-change-transform hover:-translate-y-1",
            ].join(" ")}
          >
            {/* soft gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10" />

            {/* glow pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.7, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#3B82F6]/25 blur-3xl"
            />

            {/* subtle shine */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#60A5FA]/25 blur-2xl opacity-40" />

            {/* noise */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />

            <div className="relative overflow-hidden rounded-2xl">
              {/* ghost image, molto poco invasiva */}
              <img
                src={imageSrc}
                alt=""
                className={[
                  "pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] object-cover md:block",
                  "opacity-[0.12] saturate-0",
                ].join(" ")}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0F11] via-[#0F0F11]/85 to-transparent" />

              <div className="relative p-5">
                <div className="flex items-start gap-3">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    whileInView={{ scale: [0.9, 1.15, 1], opacity: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-white/10 bg-white/5"
                  >
                    {icon}
                  </motion.div>

                  <div>
                    <div className="text-base font-semibold tracking-tight">
                      {title}
                    </div>
                    <div className="mt-1 text-sm text-white/70">{desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

function InputLike({
  label,
  placeholder,
  tall,
}: {
  label: string;
  placeholder: string;
  tall?: boolean;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-white/60">{label}</div>

      {tall ? (
        <textarea
          placeholder={placeholder}
          className="h-24 w-full resize-none rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
        />
      ) : (
        <input
          placeholder={placeholder}
          className="h-11 w-full rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
        />
      )}
    </label>
  );
}

function SupportSection() {
  const { t } = useLanguage();
  const walletAddress = "0xFD1FEd5D520dbe14658Fd9953E582642979495bb";
  const networks = [
    {
      label: "Ethereum Mainnet",
      value: "ethereum",
      chainId: "0x1",
      chainName: "Ethereum Mainnet",
      rpcUrls: ["https://rpc.ankr.com/eth"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://etherscan.io"],
    },
    {
      label: "Optimism",
      value: "optimism",
      chainId: "0xa",
      chainName: "Optimism",
      rpcUrls: ["https://mainnet.optimism.io"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
    },
    {
      label: "Base",
      value: "base",
      chainId: "0x2105",
      chainName: "Base",
      rpcUrls: ["https://mainnet.base.org"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://basescan.org"],
    },
    {
      label: "Arbitrum One",
      value: "arbitrum",
      chainId: "0xa4b1",
      chainName: "Arbitrum One",
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://arbiscan.io"],
    },
    {
      label: "Polygon",
      value: "polygon",
      chainId: "0x89",
      chainName: "Polygon Mainnet",
      rpcUrls: ["https://polygon-rpc.com"],
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      blockExplorerUrls: ["https://polygonscan.com"],
    },
  ];

  const tokens = [
    { label: "ETH", value: "ETH" },
    { label: "USDC", value: "USDC" },
    { label: "USDT", value: "USDT" },
    { label: "DAI", value: "DAI" },
  ];

  const particles = [
    { x: "8%", y: "12%", size: 6, duration: 6.5 },
    { x: "18%", y: "82%", size: 4, duration: 7.2 },
    { x: "42%", y: "18%", size: 5, duration: 8.2 },
    { x: "62%", y: "78%", size: 7, duration: 9.1 },
    { x: "84%", y: "22%", size: 4, duration: 6.9 },
    { x: "90%", y: "70%", size: 5, duration: 7.8 },
  ];

  const [amount, setAmount] = useState("0.05");
  const [token, setToken] = useState(tokens[0].value);
  const [network, setNetwork] = useState(networks[0].value);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const selectedNetwork =
    networks.find((n) => n.value === network) ?? networks[0];

  const ensureNetwork = async () => {
    const eth = (window as unknown as { ethereum?: { request: Function } })
      .ethereum;
    if (!eth) return false;
    try {
      await eth.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: selectedNetwork.chainId }],
      });
      return true;
    } catch (err: unknown) {
      const code = (err as { code?: number }).code;
      if (code === 4902) {
        try {
          await eth.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: selectedNetwork.chainId,
                chainName: selectedNetwork.chainName,
                rpcUrls: selectedNetwork.rpcUrls,
                nativeCurrency: selectedNetwork.nativeCurrency,
                blockExplorerUrls: selectedNetwork.blockExplorerUrls,
              },
            ],
          });
          return true;
        } catch {
          setStatus(t.support.errors.networkAdd);
          return false;
        }
      }
      setStatus(t.support.errors.networkSwitch);
      return false;
    }
  };

  const parseEther = (value: string) => {
    const clean = value.replace(",", ".").trim();
    if (!clean) return null;
    if (!/^\d+(\.\d+)?$/.test(clean)) return null;
    const [whole, frac = ""] = clean.split(".");
    if (frac.length > 18) return null;
    const padded = (frac + "0".repeat(18)).slice(0, 18);
    const wei = BigInt(whole) * 10n ** 18n + BigInt(padded);
    return wei;
  };

  const handleMetaMask = async () => {
    const eth = (window as unknown as { ethereum?: { request: Function } })
      .ethereum;
    if (!eth) {
      setStatus(t.support.errors.noMetaMask);
      return;
    }
    if (token !== "ETH") {
      setStatus(t.support.errors.ethOnly);
      return;
    }
    const wei = parseEther(amount);
    if (!wei || wei <= 0) {
      setStatus(t.support.errors.invalidAmount);
      return;
    }
    setBusy(true);
    try {
      const ok = await ensureNetwork();
      if (!ok) return;
      const accounts: string[] = await eth.request({
        method: "eth_requestAccounts",
      });
      const from = accounts[0];
      if (!from) throw new Error("No account");
      await eth.request({
        method: "eth_sendTransaction",
        params: [
          {
            from,
            to: walletAddress,
            value: `0x${wei.toString(16)}`,
          },
        ],
      });
      setStatus(t.support.errors.txSent);
    } catch {
      setStatus(t.support.errors.txFailed);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      id="supporto"
      className="relative mx-auto max-w-6xl px-4 pb-24 pt-8"
    >
      <motion.div {...fadeUp}>
        <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <div className="pointer-events-none absolute -top-28 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#3B82F6]/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-16 right-10 h-[260px] w-[260px] rounded-full bg-[#7C3AED]/20 blur-[130px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_88%_30%,rgba(59,130,246,0.2),transparent_50%)]" />

          <div className="relative mb-8 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {t.support.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                {t.support.subtitle}
              </p>
            </div>
          </div>

          <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="pointer-events-none absolute inset-0">
              {particles.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full bg-white/30 blur-[0.5px]"
                  style={{
                    left: p.x,
                    top: p.y,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <motion.div
              whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
              <div className="pointer-events-none absolute -top-10 right-10 h-32 w-32 rounded-full bg-[#3B82F6]/20 blur-2xl" />

              <div className="flex items-center gap-3">
                <div className="relative grid h-12 w-12 place-items-center rounded-[14px] border border-white/10 bg-white/5">
                  <motion.div
                    className="absolute inset-0 rounded-[14px] border border-[#60A5FA]/40"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <img src="/metamask.png" alt="MetaMask" className="h-8 w-8" />
                </div>
                <div className="text-sm text-white/70">
                  Supported Wallets:{" "}
                  <span className="text-white">MetaMask</span>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <label className="block">
                  <div className="mb-1 text-xs font-medium text-white/60">
                    {t.support.amount}
                  </div>
                  <motion.input
                    whileHover={{ rotate: 1 }}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.05"
                    className="h-11 w-full rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
                  />
                </label>

                <label className="block">
                  <div className="mb-1 text-xs font-medium text-white/60">
                    {t.support.network}
                  </div>
                  <motion.select
                    whileHover={{ rotate: -1 }}
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="support-select h-11 w-full rounded-[12px] border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
                  >
                    {networks.map((n) => (
                      <option key={n.value} value={n.value}>
                        {n.label}
                      </option>
                    ))}
                  </motion.select>
                </label>

                <label className="block">
                  <div className="mb-1 text-xs font-medium text-white/60">
                    {t.support.token}
                  </div>
                  <motion.select
                    whileHover={{ rotate: 1 }}
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="support-select h-11 w-full rounded-[12px] border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
                  >
                    {tokens.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </motion.select>
                </label>
              </div>

              <div className="relative mt-5 flex flex-wrap items-center gap-3">
                <motion.button
                  onClick={handleMetaMask}
                  disabled={busy}
                  className="relative inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.span
                    className="absolute inset-0 rounded-[12px] bg-[#60A5FA]/30 blur-xl"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <span className="relative">{t.support.sendMetaMask}</span>
                </motion.button>

                <div className="text-xs text-white/50">
                  {t.support.selectedNetwork}: {selectedNetwork.label}
                </div>
              </div>

              {status && (
                <div className="mt-3 rounded-[12px] border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                  {status}
                </div>
              )}
            </motion.div>

            <motion.div
              whileHover={{ rotateX: -1.5, rotateY: 1.5 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
              <motion.div
                className="pointer-events-none absolute -left-10 -top-12 h-40 w-40 rounded-full bg-[#7C3AED]/20 blur-3xl"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.support.transparency}
              </div>
              <div className="mt-3 text-sm text-white/70">
                {t.support.transparencyDesc}
              </div>

              <div className="mt-6 rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                {t.support.destinationWallet}
                <div className="mt-2 break-all text-white/90">
                  {walletAddress}
                </div>
              </div>

              <motion.div
                className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="pointer-events-none absolute right-8 top-8 h-10 w-10 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-[-120px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#1D2B64] blur-[120px] opacity-50" />
      <div className="absolute right-[-160px] top-[120px] h-[460px] w-[460px] rounded-full bg-[#3B82F6] blur-[140px] opacity-35" />
      <div className="absolute bottom-[-200px] left-[10%] h-[520px] w-[520px] rounded-full bg-[#7C3AED] blur-[160px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)]" />
    </div>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 72;
  const offset = headerHeight + 10;
  const top = window.scrollY + el.getBoundingClientRect().top - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

function openWhatsApp() {
  const lang = localStorage.getItem("language") || "en";
  const phone = "393341168370";
  const text = encodeURIComponent(
    lang === "it"
      ? "Ciao! Vorrei informazioni sui vostri servizi."
      : "Hi! I'd like information about your services.",
  );
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
