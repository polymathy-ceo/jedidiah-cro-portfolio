"use client";

import { useEffect, useState } from "react";

const email = "thejedi.solo@gmail.com";
const xProfile = "https://x.com/thebelov_ed";
const instagram = "https://www.instagram.com/thebelov_ed/";
const linkedin = "https://linkedin.com/in/jedidiah-solomo";

const services = [
  ["01", "Conversion audits", "A closer look at your website to uncover unclear messaging, usability issues and friction in the visitor journey."],
  ["02", "Landing page optimization", "Make your offer easier to understand and the next step easier for the right visitor to take."],
  ["03", "User experience analysis", "Understand how people move through your digital experience and where the journey becomes difficult."],
  ["04", "Forms & funnel optimization", "Review the steps between interest and action, looking for unnecessary effort and avoidable drop-off."],
  ["05", "Conversion-focused copy", "Bring more clarity to headlines, supporting messages and calls to action."],
  ["06", "Experimentation strategy", "Turn observations into testable hypotheses and a practical plan for learning what works better."]
] as const;

const process = [
  ["01", "Understand", "Start with the business goal, audience, offer and the action that matters most."],
  ["02", "Investigate", "Review the experience, available analytics and user behaviour for signs of friction."],
  ["03", "Prioritize", "Turn observations into clear hypotheses, ranked by potential impact and effort."],
  ["04", "Validate", "Recommend appropriate tests or usability checks to learn whether a change helps."],
  ["05", "Improve", "Document what was learned and use it to guide the next round of optimization."]
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d={diagonal ? "M5 15 15 5M6 5h9v9" : "M3 10h13M10 4l6 6-6 6"} /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Jedidiah Solomon home">
        <span className="brand-mark">J<span>.</span></span>
        <span className="brand-name">Jedidiah Solomon<small>Conversion Rate Optimization</small></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i /><i /></button>
      <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
        {[["home","Home"],["about","About"],["services","Services"],["process","Approach"]].map(([id,label]) =>
          <a key={id} href={`#${id}`} onClick={closeMenu} className={active === id ? "active" : ""}>{label}</a>
        )}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow diagonal /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow reveal"><span /> CRO SPECIALIST · USER EXPERIENCE</p>
          <h1 className="reveal delay-1">Turn your visits <em>into</em><br /><span className="script-word">meaningful growth.</span></h1>
          <p className="hero-lede reveal delay-2">Turning website traffic into measurable business growth. I look closely at what helps people move forward — and what gets in their way — to make digital experiences clearer and more effective.</p>
          <div className="hero-actions reveal delay-3">
            <a className="button button-dark" href={`mailto:${email}?subject=${encodeURIComponent("Let's discuss a CRO project")}`}>Let's talk <Arrow /></a>
            <a className="quiet-link" href="#services">Explore what I do <span>↓</span></a>
          </div>
          <p className="hero-footnote reveal delay-3">Thoughtful analysis. Clear direction. Better experiences.</p>
        </div>
        <div className="portrait-wrap reveal delay-2">
          <div className="portrait-frame">
            <a className="portrait-link" href={xProfile} target="_blank" rel="noreferrer" aria-label="Visit Jedidiah on X">
              <img src="/jedidiah-portrait.jpg" alt="Portrait of Jedidiah Solomon" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <span className="portrait-fallback"><b>JS</b><small>PORTRAIT IMAGE</small><small>Add jedidiah-portrait.jpg to the public folder</small></span>
              <span className="portrait-arrow"><Arrow diagonal /></span>
            </a>
          </div>
          <div className="portrait-caption"><span>JEDIDIAH SOLOMON</span><span>CRO SPECIALIST · <a href={xProfile} target="_blank" rel="noreferrer">FIND ME ON X ↗</a></span></div>
          <span className="portrait-note">A human-first approach<br />to digital growth.</span>
        </div>
        <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <p className="section-kicker reveal">01 / A DIFFERENT WAY TO LOOK</p>
          <div className="about-content reveal">
            <p className="overline">GOOD DESIGN IS ONLY THE BEGINNING</p>
            <h2>Every click has a reason.<br /><span className="script-word">Every detail matters.</span></h2>
            <p>Conversion Rate Optimization is about understanding people: what they need, what they notice, what they trust, and what makes taking the next step feel natural. It is not about changing things just to make them look different. It is about making each part of the experience work better for the people using it and the business behind it.</p>
          </div>
        </div>
      </section>

      <section className="section-shell services-section" id="services">
        <div className="section-heading reveal">
          <div><p className="section-kicker">02 / WHAT I FOCUS ON</p><h2>Find the friction.<br /><span className="script-word">Improve the journey.</span></h2></div>
          <p className="heading-aside">A considered set of services designed to make digital experiences clearer, simpler and more effective.</p>
        </div>
        <div className="service-grid">
          {services.map(([number,title,description], index) => <article className="service-card reveal" key={number} style={{transitionDelay:`${(index % 3) * 80}ms`}}>
            <span className="service-number">{number}</span><span className="service-symbol">↗</span>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </section>

      <section className="approach-section" id="process">
        <div className="section-shell">
          <div className="section-heading reveal">
            <div><p className="section-kicker">03 / HOW I WORK</p><h2>A process shaped<br />by <span className="script-word">curiosity.</span></h2></div>
            <p className="heading-aside">Good optimization is continuous: understand the problem, make a reasoned change, learn from the evidence and keep improving.</p>
          </div>
          <div className="process-list">
            {process.map(([number,title,description]) => <div className="process-row reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b></div>)}
          </div>
        </div>
      </section>

      <section className="belief-section">
        <div className="section-shell belief-grid">
          <div className="reveal"><p className="section-kicker">04 / THE BIGGER PICTURE</p><h2>People first.<br /><span className="script-word">Progress with purpose.</span></h2><p className="belief-copy">The strongest optimization decisions connect what people experience with what a business needs to achieve.</p></div>
          <div className="belief-points reveal">
            <div><span>01</span><p><b>People</b><small>Intent, expectations, questions and behaviour.</small></p></div>
            <div><span>02</span><p><b>Experience</b><small>Clarity, usability, trust and reduced friction.</small></p></div>
            <div><span>03</span><p><b>Business</b><small>Meaningful actions, useful metrics and sustainable growth.</small></p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <p className="section-kicker light-kicker reveal">05 / START A CONVERSATION</p>
          <div className="contact-content reveal"><p className="overline">READY TO MAKE YOUR WEBSITE WORK HARDER?</p><h2>Let's make the<br /><span className="script-word">next move count.</span></h2><p>Tell me what your business is trying to achieve and where your website journey feels stuck. We can start with a conversation.</p><a className="button button-cream" href={`mailto:${email}?subject=${encodeURIComponent("CRO project enquiry")}`}>Email us <Arrow diagonal /></a></div>
          <div className="contact-details">
            <a href={`mailto:${email}`}>{email}</a>
            <div className="social-links"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={xProfile} target="_blank" rel="noreferrer">X ↗</a><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="section-shell footer-top"><a className="footer-brand" href="#home">Jedidiah Solomon<span>Conversion Rate Optimization</span></a><a href="#home">Back to top ↑</a></div>
      <div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} Jedidiah Solomon</span><span>Have a project in mind? <a href="https://claudvia.vercel.app" target="_blank" rel="noreferrer">Let's build it with CLAUDVIA ↗</a></span><span>Designed & built by <a href="https://claudvia.vercel.app" target="_blank" rel="noreferrer">CLAUDVIA</a></span></div>
    </footer>
  </>;
}
