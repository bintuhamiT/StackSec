import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCallback, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.5 },
      },
    },
    particles: {
      color: { value: "#60a5fa" },
      links: { color: "#34d399", distance: 100, enable: true, opacity: 0.2, width: 1 },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: { density: { enable: true }, value: 40 },
      opacity: { value: { min: 0.3, max: 0.5 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const content = {
    en: {
      nav: { home: "Home", services: "Services", portfolio: "Case Studies", contact: "Contact Us" },
      hero: {
        title: "StackSec: Excellence in Digital Solutions",
        subtitle: "Delivering innovative web development and cybersecurity services with precision and reliability.",
        mission: "StackSec is dedicated to providing state-of-the-art digital solutions, combining technical expertise with strategic insight to deliver secure, scalable, and high-performance outcomes for our clients.",
        values: [
          { title: "Expertise", desc: "Leveraging advanced technologies to deliver superior results." },
          { title: "Reliability", desc: "Ensuring robust, secure systems for sustained performance." },
          { title: "Client Focus", desc: "Tailoring solutions to meet specific business objectives." },
        ],
      },
      services: {
        title: "Our Services",
        webDev: {
          title: "Web Development",
          desc: "We deliver high-performance, responsive websites using modern frameworks such as React and Next.js, designed to enhance user engagement and achieve business objectives.",
          case: "Developed a scalable e-commerce platform achieving 99.9% uptime and optimized performance metrics.",
        },
        security: {
          title: "Cybersecurity Services",
          desc: "Our comprehensive cybersecurity services include penetration testing, vulnerability assessments, and compliance audits to protect your digital infrastructure.",
          case: "Secured a financial application by mitigating 10 critical vulnerabilities, ensuring regulatory compliance.",
        },
        uiux: {
          title: "UI/UX Design",
          desc: "Our team designs intuitive, user-centric interfaces that optimize engagement and streamline user interactions, tailored to your brand’s objectives.",
          case: "Redesigned a SaaS platform, resulting in a 25% increase in user retention.",
        },
        api: {
          title: "API Development",
          desc: "We create secure, scalable APIs to enable seamless integration and robust functionality, supporting your application’s performance and growth.",
          case: "Implemented a payment API, reducing transaction errors by 12% for a retail client.",
        },
      },
      portfolio: {
        title: "Case Studies",
        viewProject: "View Project",
        projects: [
          {
            title: "Shawarma Al-asala",
            desc: "The most delicious shawarma in town.",
            details: "Built with Vite and React.",
            image: "/images/shawarma.png",
            link: "https://shawarma-project-stacksec.vercel.app/",
          },
          {
            title: "CyberBirdsBot - Ethical Hacker Assistant",
            desc: "A comprehensive Telegram bot to support ethical hackers with cybersecurity resources and tools.",
            details: "Embark on a global security journey with CyberBirdsBot!",
            image: "/images/bot.jpg",
            link: "https://t.me/CyberBrids_bot", 
          },
          {
            title: "Corporate Website Redesign",
            desc: "A modernized corporate website with improved accessibility and performance to drive user engagement.",
            details: "Utilized Tailwind CSS and Framer Motion, achieving 50% faster load times and a 92/100 accessibility score.",
            image: "/images/corporate.jpg",
            link: "/projects/corporate",
          },
        ],
      },
      contact: {
        title: "Contact Us",
        subtitle: "Partner with StackSec to achieve your digital objectives. Submit your inquiry to begin.",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        button: "Submit Inquiry",
      },
      footer: {
        text: "© 2025 StackSec. All rights reserved.",
        links: [
          { title: "Privacy Policy", href: "/privacy" },
          { title: "Terms of Service", href: "/terms" },
        ],
      },
      languageToggle: "Switch to Arabic",
    },
    ar: {
      nav: { home: "الرئيسية", services: "الخدمات", portfolio: "دراسات الحالة", contact: "تواصل معنا" },
      hero: {
        title: "StackSec: التميز في الحلول الرقمية",
        subtitle: "تقديم خدمات تطوير الويب والأمن السيبراني المبتكرة بدقة وموثوقية.",
        mission: "تلتزم StackSec بتوفير حلول رقمية متطورة، تجمع بين الخبرة التقنية والرؤية الاستراتيجية لتقديم نتائج آمنة، قابلة للتوسع، وعالية الأداء لعملائنا.",
        values: [
          { title: "الخبرة", desc: "الاستفادة من التقنيات المتقدمة لتحقيق نتائج متميزة." },
          { title: "الموثوقية", desc: "ضمان أنظمة قوية وآمنة لأداء مستدام." },
          { title: "التركيز على العميل", desc: "تصميم حلول تتناسب مع الأهداف التجارية المحددة." },
        ],
      },
      services: {
        title: "خدماتنا",
        webDev: {
          title: "تطوير الويب",
          desc: "نقدم مواقع ويب متجاوبة وعالية الأداء باستخدام أطر عمل حديثة مثل React وNext.js، مصممة لتعزيز التفاعل وتحقيق الأهداف التجارية.",
          case: "طورنا منصة تجارة إلكترونية قابلة للتوسع حققت توفرًا بنسبة 99.9% وأداءً محسّنًا.",
        },
        security: {
          title: "خدمات الأمن السيبراني",
          desc: "تشمل خدماتنا الأمنية الشاملة اختبار الاختراق، تقييم الثغرات، وتدقيقات الامتثال لحماية بنيتك الرقمية.",
          case: "أمنّا تطبيقًا ماليًا بحل 10 ثغرات أمنية حرجة، مما ضمن الامتثال التنظيمي.",
        },
        uiux: {
          title: "تصميم واجهة وتجربة المستخدم",
          desc: "يصمم فريقنا واجهات مستخدم بديهية تركز على العميل لتحسين التفاعل وتبسيط التجربة، مصممة حسب أهداف علامتك التجارية.",
          case: "أعدنا تصميم منصة SaaS، مما أدى إلى زيادة استبقاء المستخدمين بنسبة 25%.",
        },
        api: {
          title: "تطوير واجهات برمجة التطبيقات",
          desc: "ننشئ واجهات برمجة تطبيقات آمنة وقابلة للتوسع لدعم أداء تطبيقاتك وتكاملها بسلاسة مع خدمات الطرف الثالث.",
          case: "نفذنا واجهة برمجة تطبيقات دفع، مما قلل من أخطاء المعاملات بنسبة 12% لعميل تجزئة.",
        },
      },
      portfolio: {
        title: "دراسات الحالة",
        viewProject: "عرض المشروع",
        projects: [
          {
            title: "شاورما الأصالة",
            desc: "أشهى شاورما في المدينة",
            details: "تم بناؤه باستخدام Vite و React",
            image: "/images/shawarma.png",
            link: "https://shawarma-project-stacksec.vercel.app/",
          },
          {
            title: "CyberBirdsBot - مساعد المخترقين الأخلاقيين",
            desc: "بوت تيليغرام شامل لدعم المخترقين الأخلاقيين بموارد وأدوات الأمن السيبراني.",
            details: "انطلق في رحلة أمنية كونية مع CyberBirdsBot!",
            image: "/images/bot.jpg",
            link: "https://t.me/CyberBrids_bot",
          },
          {
            title: "إعادة تصميم موقع شركة",
            desc: "موقع شركة محدث بتصميم عصري، وصولية محسّنة، وأداء متميز، مما يعزز تفاعل المستخدم.",
            details: "استخدمنا Tailwind CSS وFramer Motion، محققين أوقات تحميل أسرع بنسبة 50% ودرجة وصولية 92/100.",
            image: "/images/corporate.jpg",
            link: "/projects/corporate",
          },
        ],
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "شارك مع StackSec لتحقيق أهدافك الرقمية. قدم استفسارك للبدء.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        button: "إرسال الاستفسار",
      },
      footer: {
        text: "© 2025 StackSec. جميع الحقوق محفوظة.",
        links: [
          { title: "سياسة الخصوصية", href: "/privacy" },
          { title: "شروط الخدمة", href: "/terms" },
        ],
      },
      languageToggle: "التحويل إلى الإنجليزية",
    },
  };

  const currentContent = content[language];

  return (
    <div className={`${styles.container} ${styles[language]}`}>
      <Head>
        <title>StackSec - Digital Excellence</title>
        <meta name="description" content="StackSec provides premier web development and cybersecurity services, delivering secure and scalable solutions." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Changa:wght@400;700&family=Tajawal:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Particles Background */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className={styles.particles} />

      {/* Header Section */}
      <motion.header
        className={styles.header}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.logo}>
          <h1>StackSec</h1>
        </div>
        <nav className={styles.nav}>
          <motion.a href="#home" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>{currentContent.nav.home}</motion.a>
          <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>{currentContent.nav.services}</motion.a>
          <motion.a href="#portfolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>{currentContent.nav.portfolio}</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>{currentContent.nav.contact}</motion.a>
          <motion.button
            className={styles.languageToggle}
            onClick={toggleLanguage}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentContent.languageToggle}
          </motion.button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className={styles.hero}
        style={{ y }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>{currentContent.hero.title}</motion.h2>
        <motion.p variants={fadeInUp} className={styles.subtitle}>{currentContent.hero.subtitle}</motion.p>
        <motion.p variants={fadeInUp} className={styles.mission}>{currentContent.hero.mission}</motion.p>
        <div className={styles.valuesGrid}>
          {currentContent.hero.values.map((value, index) => (
            <motion.div
              key={index}
              className={styles.valueCard}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(96, 165, 250, 0.3)' }}
            >
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="#contact"
          className={styles.cta}
          variants={fadeInUp}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          {language === 'en' ? 'Request a Consultation' : 'طلب استشارة'}
        </motion.a>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className={styles.services}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>{currentContent.services.title}</motion.h2>
        <div className={styles.serviceGrid}>
          {Object.values(currentContent.services).slice(1).map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(96, 165, 250, 0.3)' }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <p className={styles.caseStudy}>{service.case}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className={styles.portfolio}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>{currentContent.portfolio.title}</motion.h2>
        <div className={styles.portfolioGrid}>
          {currentContent.portfolio.projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.portfolioCard}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(96, 165, 250, 0.3)' }}
            >
              <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <p className={styles.projectDetails}>{project.details}</p>
              <motion.a
                href={project.link}
                className={styles.projectButton}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, boxShadow: '0 0 10px rgba(96, 165, 250, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                {currentContent.portfolio.viewProject}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className={styles.contact}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>{currentContent.contact.title}</motion.h2>
        <motion.p variants={fadeInUp}>{currentContent.contact.subtitle}</motion.p>
        <motion.form className={styles.form} variants={staggerContainer}>
          <motion.input
            type="text"
            placeholder={currentContent.contact.name}
            className={styles.input}
            variants={fadeInUp}
            whileFocus={{ borderColor: '#60a5fa', scale: 1.01 }}
          />
          <motion.input
            type="email"
            placeholder={currentContent.contact.email}
            className={styles.input}
            variants={fadeInUp}
            whileFocus={{ borderColor: '#60a5fa', scale: 1.01 }}
          />
          <motion.input
            type="text"
            placeholder={currentContent.contact.subject}
            className={styles.input}
            variants={fadeInUp}
            whileFocus={{ borderColor: '#60a5fa', scale: 1.01 }}
          />
          <motion.textarea
            placeholder={currentContent.contact.message}
            className={styles.textarea}
            variants={fadeInUp}
            whileFocus={{ borderColor: '#60a5fa', scale: 1.01 }}
          ></motion.textarea>
          <motion.button
            type="button"
            className={styles.submitButton}
            variants={fadeInUp}
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            {currentContent.contact.button}
          </motion.button>
        </motion.form>
      </motion.section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>{currentContent.footer.text}</p>
        <div className={styles.footerLinks}>
          {currentContent.footer.links.map((link, index) => (
            <a key={index} href={link.href} className={styles.footerLink}>{link.title}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}