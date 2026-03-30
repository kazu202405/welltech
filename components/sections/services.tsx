"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "公共工事",
    subtitle: "Public Works",
    description:
      "公共施設の新設・改修、インフラ整備まで。入札から完工まで一貫した施工管理体制で対応します。",
    image: "/photo/S__49889490_0.jpg",
  },
  {
    title: "民間工事",
    subtitle: "Private Works",
    description:
      "商業施設、オフィスビル、工場・倉庫の施工。お客様のニーズに合わせた最適なソリューションを提供します。",
    image: "/photo/S__49889493_0.jpg",
  },
  {
    title: "設備工事",
    subtitle: "Equipment",
    description:
      "電気・空調・給排水設備の設計から施工まで。快適な環境づくりを技術力で支えます。",
    image: "/photo/S__49889504_0.jpg",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-10%" });

  /* 画像のパララックス用 */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const img0Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const img1Y = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const imgYValues = [img0Y, img1Y, img2Y];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-28 md:py-40 bg-[#f0f9f4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* 左: テキスト */}
          <div ref={textRef}>
            <motion.p
              className="text-[var(--wt-primary)] text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Service
            </motion.p>
            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-[var(--wt-dark)] leading-[1.2] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              公共から民間まで、
              <br />
              幅広い建設ニーズに
              <br />
              ワンストップで対応
            </motion.h2>
            <motion.div
              className="w-12 h-[2px] bg-[var(--wt-primary)] mb-8"
              initial={{ scaleX: 0 }}
              animate={textInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "left" }}
            />
            <motion.p
              className="text-[var(--wt-gray)] text-sm leading-[2] max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              公共建築入札から民間工事、設備工事まで。
              創業以来培った施工管理ノウハウと全国ネットワークで、
              あらゆる建設プロジェクトをワンストップでサポートします。
            </motion.p>
          </div>

          {/* 右: 写真3枚 */}
          {/* モバイル: 横スクロール / デスクトップ: 斜めカット */}
          <div className="flex gap-3 overflow-x-auto md:overflow-visible md:h-[520px] lg:h-[580px] scrollbar-hide">
            {services.map((service, i) => {
              const clipClasses = [
                "md:[clip-path:polygon(0_0,92%_0,78%_100%,0_100%)]",
                "md:[clip-path:polygon(14%_0,92%_0,78%_100%,0_100%)] md:-ml-[6%]",
                "md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)] md:-ml-[6%]",
              ];
              const delays = [0.15, 0.3, 0.45];

              return (
                <motion.div
                  key={service.title}
                  className={`group relative shrink-0 w-[70vw] sm:w-[45vw] md:w-auto md:flex-1 h-[280px] sm:h-[320px] md:h-full overflow-hidden rounded-lg md:rounded-none ${clipClasses[i]}`}
                  style={{ y: imgYValues[i] }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.9,
                    delay: delays[i],
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 70vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <p className="text-white/50 text-[9px] tracking-[0.15em] uppercase">
                      {service.subtitle}
                    </p>
                    <p className="text-white text-sm font-bold">
                      {service.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
