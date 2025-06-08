import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// --- SVG Icons (No changes) ---
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-400 group-hover:text-white transition-colors duration-300">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-400 group-hover:text-white transition-colors duration-300">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-400 group-hover:text-white transition-colors duration-300">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const BehanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-400 group-hover:text-white transition-colors duration-300">
    <path d="M8.56 2.75c4.12 0 7.46 3.34 7.46 7.46s-3.34 7.46-7.46 7.46H2V2.75h6.56zM8.56 8.5H5.75v3h2.81c1.5 0 2.75-1.25 2.75-2.75S10.06 8.5 8.56 8.5zM17 14h5v-2h-5z"></path>
  </svg>
);

// --- Reusable Card Component (No changes) ---
const InfoCard = ({ title, children, className }) => (
  <div
    className={`bg-[#2a1a1f]/60 backdrop-blur-sm border border-yellow-900/50 rounded-2xl p-6 h-full ${className}`}
    id="infoCard">
    {title && <h3 className="text-xl font-bold text-white mb-6">{title}</h3>}
    {children}
  </div>
);

// --- Modern Skill Bar Component (No changes from previous fix) ---
const SkillBar = ({ skill, level }) => {
  const barRef = useRef(null);
  useLayoutEffect(() => {
    if (!window.gsap) return;
    const bar = barRef.current.querySelector(".skill-level");
    window.gsap.fromTo(
      bar,
      { width: "0%" },
      {
        width: level,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, [level]);
  return (
    <div ref={barRef}>
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-white text-base">
          {skill.title}
        </span>
        <span className="text-sm text-gray-400">{skill.desc}</span>
      </div>
      <div className="w-full bg-black/30 rounded-full h-2.5">
        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 h-2.5 rounded-full skill-level"></div>
      </div>
    </div>
  );
};

// --- ProfileCard Component (UPDATED) ---
const ProfileCard = ({ avatarUrl }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (!window.gsap) return;
    const card = cardRef.current;
    if (!card) return;
    window.gsap.set(card, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      transformPerspective: 1000,
    });
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateX = (y / height - 0.5) * -18;
      const rotateY = (x / width - 0.5) * 18;
      window.gsap.to(card, {
        duration: 0.5,
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1.03,
        transformPerspective: 1000,
        ease: "power3.out",
      });
    };
    const handleMouseLeave = () => {
      window.gsap.to(card, {
        duration: 0.7,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className="relative w-[300px] h-[440px] bg-[#1a090d] rounded-3xl p-6 border border-amber-500/30 shadow-2xl shadow-yellow-900/20"
      style={{ transformStyle: "preserve-3d" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a090d] to-[#111] rounded-3xl"></div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08), transparent 70%)",
          transform: "translateZ(20px)",
        }}></div>
      <div
        className="relative z-10 flex flex-col items-center justify-between h-full"
        style={{ transform: "translateZ(50px)" }}>
        <div className="text-center">
          <img
            src={avatarUrl}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-amber-400 shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/128x128/1A090D/D4AF37?text=MKD";
            }}
          />
          <h2 className="text-2xl font-bold text-[#FFD600] tracking-wide">
            Mohan Kumar Dalei
          </h2>
          <div className="flex flex-col items-center mt-1 mb-2">
            <span className="text-xs font-semibold text-amber-200 bg-[#2a1a1f] px-2 py-0.5 rounded-full mb-1">
              @mohan-kumar-dalei
            </span>
            <span className="text-xs font-medium text-[#FFD600] bg-[#2a1a1f] px-2 py-0.5 rounded-full">
              DOB: 2001-07-12
            </span>
          </div>
          <p className="text-amber-300">MERN Developer</p>
        </div>
        <div className="w-full text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-300">Open to Work</span>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/Mohan-Kumar-Dalei"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-[#FFD600] hover:text-white transition-colors duration-200">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-kumar-dalei/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-[#FFD600] hover:text-white transition-colors duration-200">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/ll_BICKY_ll?t=jBe5QMamiBsqFn9U5sDSpw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="text-[#FFD600] hover:text-white transition-colors duration-200">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ll_b._.i._.c._.k._.y_ll"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-[#FFD600] hover:text-white transition-colors duration-200">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main About Component (FIXED) ---
function About() {
  const sectionRef = useRef(null);
  const contactInfo = [
    {
      icon: <MailIcon />,
      text: "mohankumardalei2001@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=mohankumardalei2001@gmail.com",
    },
    { icon: <PhoneIcon />, text: "8260866144", href: "tel:8260866144" },
  ];
  const softSkills = [
    { title: "Teamwork aur Collaboration", desc: "Collaborative", level: "90%" },
    { title: "Problem Solving", desc: "Logical Thinking", level: "78%" },
    { title: " Adaptability", desc: "Flexible Learning", level: "85%" },
    { title: "Time Management", desc: "Task Prioritization", level: "90%" },
  ];
  const languages = [
    { title: "English", desc: "Basic / Conversational" },
    { title: "Hindi", desc: "Fluently" },
    { title: "Odia", desc: "Native" },
  ];
  const interests = [
    "Technology",
    "Photography",
    "Creative Coding",
    "Bike Riding",
    "Gaming",
  ];
  const educationTimeline = [
    {
      year: "BTech ~ 2024 ~ Completed",
      school: "Bijupatnik University of Technology, Odisha - (CSE Branch) ",
    },
    {
      year: "+2 ~ 2020 ~ Completed",
      school: "Ganesh Institute of Engineering and Technology, Odisha",
    },
    {
      year: "10th ~ 2018 ~ Completed",
      school: "Saraswati Sishu Vidya Mandir, Odisha",
    },
  ];

  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    // Intersection Observer to delay ScrollTrigger setup until About section is near viewport
    const section = document.getElementById("about");
    if (!section) return;
    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // AboutMe scroll reveal
          const aboutMe = document.getElementById("AboutMe");
          if (aboutMe) {
            window.gsap.fromTo(
              aboutMe,
              { opacity: 0, x: 0 },
              {
                opacity: 1,
                x: 60,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                  id: "AboutMeTrigger",
                  trigger: aboutMe,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                  markers: false,
                },
              }
            );
          }
          // profileCard scroll reveal
          const profileCard = document.getElementById("profileCard");
          if (profileCard) {
            window.gsap.fromTo(
              profileCard,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                  id: "ProfileCardTrigger",
                  trigger: profileCard,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                  markers: false,
                },
              }
            );
          }
          // infoCard scroll reveal (sab InfoCard jinke id="infoCard" hai)
          const infoCards = document.querySelectorAll("#infoCard");
          infoCards.forEach((card, i) => {
            window.gsap.fromTo(
              card,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                  id: `InfoCardTrigger${i}`,
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                  markers: false,
                },
              }
            );
          });
        } else {
          // Clean up only About/profileCard/infoCard triggers, NOT globalTimeline (so SkillBar stays animated)
          window.ScrollTrigger.getAll().forEach((trigger) => {
            if (
              trigger.vars.id === "AboutMeTrigger" ||
              trigger.vars.id === "ProfileCardTrigger" ||
              (typeof trigger.vars.id === "string" &&
                trigger.vars.id.startsWith("InfoCardTrigger"))
            ) {
              trigger.kill();
            }
          });
        }
      },
      { root: null, rootMargin: "300px", threshold: 0 }
    );
    observer.observe(section);
    return () => {
      if (observer && section) observer.unobserve(section);
      // Clean up only About/profileCard/infoCard triggers, NOT globalTimeline
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => {
          if (
            trigger.vars.id === "AboutMeTrigger" ||
            trigger.vars.id === "ProfileCardTrigger" ||
            (typeof trigger.vars.id === "string" &&
              trigger.vars.id.startsWith("InfoCardTrigger"))
          ) {
            trigger.kill();
          }
        });
      }
    };
  }, []);

  // **FIX 2: Removed "overflow-hidden" from the section class**
  // This class can prevent ScrollTrigger from working correctly.
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#111111] text-gray-300 font-sans py-20 sm:py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#800000]/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-[#D4AF37]/15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[25%] w-[300px] h-[300px] bg-[#800000]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="main-content-grid grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div
            className="lg:col-span-2 space-y-6 -ml-18 md:-ml-0 relative"
            id="AboutMe">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-500">
                About Me
              </span>
            </h1>
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4 px-5 md:px-0 w-[95%] md:w-[90%]">
              <p>
                Hi 👋, my name is{" "}
                <span className="font-semibold text-white">
                  Mohan Kumar Dalei
                </span>
              </p>
              <p>
                I am a MERN Stack Developer based in India, with hands-on
                experience in creating modern websites using AI and cutting-edge
                technologies.
              </p>
              <p>
                My objective: Work in a growth-focused environment where I can
                continuously upgrade my skills, contribute effectively to team
                success, and help the company grow with smart, scalable, and
                future-ready solutions.
              </p>
            </div>
            <div className="pt-4" id="Contact">
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-black/20 border border-yellow-900/40 hover:bg-black/40 hover:border-amber-500/50 transition-all duration-300 group">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-gray-200 text-sm md:text-base group-hover:text-amber-300 transition-colors duration-300">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" id="profileCard">
            <ProfileCard avatarUrl="/profile.jpg" />
          </div>
        </div>

        <div className="info-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 ">
          <InfoCard title="Soft Skills">
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <SkillBar key={skill.title} skill={skill} level={skill.level} />
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Education">
            <div className="relative border-l-2 border-yellow-900/80 pl-6 space-y-8">
              {educationTimeline.map((item, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[34px] top-1 flex items-center justify-center w-4 h-4 bg-gray-900 rounded-full">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  </span>
                  <p className="text-sm font-semibold text-amber-300">
                    {item.year}
                  </p>
                  <p className="text-gray-300">{item.school}</p>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Languages">
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.title}>
                  <p className="font-semibold text-white">{lang.title}</p>
                  <p className="text-sm text-gray-400">{lang.desc}</p>
                </div>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Interests">
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-amber-500/10 text-amber-300 font-medium text-sm border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all duration-300 cursor-pointer">
                  {interest}
                </span>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

// --- App Component (Entry Point, FIXED) ---
export default function App() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // **FIX 1: Check for both GSAP and ScrollTrigger before skipping load.**
    if (window.gsap && window.ScrollTrigger) {
      setScriptsLoaded(true);
      return;
    }

    const gsapScript = document.createElement("script");
    gsapScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js";
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js";
    scrollTriggerScript.async = true;

    gsapScript.onload = () => {
      document.body.appendChild(scrollTriggerScript);
    };

    scrollTriggerScript.onload = () => {
      // This now correctly runs only after both scripts are loaded
      setScriptsLoaded(true);
    };

    return () => {
      if (document.body.contains(gsapScript)) {
        document.body.removeChild(gsapScript);
      }
      if (document.body.contains(scrollTriggerScript)) {
        document.body.removeChild(scrollTriggerScript);
      }
    };
  }, []);

  const styles = ` @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } } .animate-blob { animation: blob 7s infinite; } .animation-delay-2000 { animation-delay: -2s; } .animation-delay-4000 { animation-delay: -4s; } `;

  return (
    <>
      <style>{styles}</style>
      {scriptsLoaded ? (
        <About />
      ) : (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#111111] text-white">
          Loading...
        </div>
      )}
    </>
  );
}
