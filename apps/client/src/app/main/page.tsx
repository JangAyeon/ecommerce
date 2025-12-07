"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/@components/main/header";
import Content from "@/@components/main/content";
import Navbar from "@/@components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const current = ScrollTrigger.getAll().find((t) => t.isActive);
  console.log("현재 섹션:", current?.trigger?.id);

  // activeSectionIndex 변경 감지
  useEffect(() => {
    console.log("🔄 activeSectionIndex 변경:", activeSectionIndex);
  }, [activeSectionIndex]);

  useEffect(() => {
    console.log("🚀 MainPage 컴포넌트 마운트");
    if (!containerRef.current) {
      console.warn("⚠️ containerRef.current가 없습니다");
      return;
    }
    console.log("✅ containerRef 초기화 완료");

    const sections =
      containerRef.current.querySelectorAll<HTMLElement>(".parallax__item");
    const navLinks =
      document.querySelectorAll<HTMLAnchorElement>("#parallax__nav a");

    console.log(`📋 섹션 개수: ${sections.length}`);
    console.log(`🔗 네비 링크 개수: ${navLinks.length}`);

    /* ===========================
       ✅ 네비 활성화 업데이트
    =========================== */
    const updateActiveNav = (sectionId: string) => {
      console.log(`🎯 네비 활성화 업데이트: ${sectionId}`);
      navLinks.forEach((link) => link.classList.remove("active"));

      const target = document.querySelector(
        `#parallax__nav a[href="#${sectionId}"]`
      );

      if (target) {
        target.classList.add("active");
        console.log(`✅ 네비 활성화 완료: ${sectionId}`);
      } else {
        console.warn(`⚠️ 네비 링크를 찾을 수 없습니다: ${sectionId}`);
      }
    };

    /* ===========================
       ✅ 섹션 애니메이션 + 활성 섹션 추적
    =========================== */
    sections.forEach((section, index) => {
      const title = section.querySelector(".parallax__item__title");
      const num = section.querySelector(".parallax__item__num");
      // const desc = section.querySelector(".parallax__item__desc");
      // const imgWrap = section.querySelector(".parallax__item__imgWrap");
      const sectionId = section.getAttribute("id");

      // 텍스트 페이드 인
      gsap.fromTo(
        [title, num /* desc*/],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 이미지 페이드 인
      // if (imgWrap) {
      //   gsap.fromTo(
      //     imgWrap,
      //     { opacity: 0, scale: 0.9, y: 30 },
      //     {
      //       opacity: 1,
      //       scale: 1,
      //       y: 0,
      //       duration: 1.2,
      //       ease: "power2.out",
      //       scrollTrigger: {
      //         trigger: section,
      //         start: "top 80%",
      //         end: "top 50%",
      //         toggleActions: "play none none reverse",
      //       },
      //     }
      //   );
      // }

      // ✅ 현재 섹션 감지 (GSAP 기준)
      if (sectionId) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",

          onEnter: () => {
            console.log(
              `⬇️ 섹션 진입 (onEnter): ${sectionId} (인덱스: ${index})`
            );
            setActiveSectionIndex(index);
            updateActiveNav(sectionId);
          },

          onEnterBack: () => {
            console.log(
              `⬆️ 섹션 진입 (onEnterBack): ${sectionId} (인덱스: ${index})`
            );
            setActiveSectionIndex(index);
            updateActiveNav(sectionId);
          },
        });
      } else {
        console.warn(`⚠️ 섹션 ID가 없습니다 (인덱스: ${index})`);
      }
    });

    /* ===========================
       ✅ 네비 스무스 스크롤
    =========================== */
    const handleNavClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href");

      console.log(`🖱️ 네비 클릭: ${targetId}`);

      if (!targetId) {
        console.warn("⚠️ targetId가 없습니다");
        return;
      }

      const targetSection = document.querySelector(targetId);
      if (!targetSection) {
        console.warn(`⚠️ 타겟 섹션을 찾을 수 없습니다: ${targetId}`);
        return;
      }

      console.log(`📍 스크롤 이동: ${targetId}`);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    /* ===========================
       ✅ Cleanup
    =========================== */
    return () => {
      console.log("🧹 MainPage cleanup 시작");
      const triggers = ScrollTrigger.getAll();
      console.log(`🗑️ ScrollTrigger 제거: ${triggers.length}개`);
      triggers.forEach((trigger) => trigger.kill());

      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
      console.log("✅ Cleanup 완료");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-none -mx-4 sm:mx-0"
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
        <Header activeSectionIndex={activeSectionIndex} />
      </div>

      <div className="mt-32">
        <Content />
      </div>
    </div>
  );
};

export default MainPage;
