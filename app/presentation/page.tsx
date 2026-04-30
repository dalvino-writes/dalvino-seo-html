'use client';

import { useEffect } from 'react';

export default function PresentationPage() {
  useEffect(() => {
    // Active nav highlighting on scroll
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href && href.includes(current)) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
            --bg: #ede9e3;
            --surface: #f7f5f2;
            --border: #e0dbd4;
            --accent: #2c2c2c;
            --text-light: #6b6b6b;
            --text-dark: #2c2c2c;
        }

        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            background-color: var(--bg);
            color: var(--text-dark);
            font-family: 'Lora', serif;
            scroll-behavior: smooth;
            line-height: 1.65;
        }

        .grid-overlay {
            position: fixed;
            inset: 0;
            background: 
                linear-gradient(105deg, transparent 35%, rgba(44,44,44,0.025) 35.5%, rgba(44,44,44,0.025) 36%, transparent 36.5%),
                linear-gradient(75deg, transparent 35%, rgba(44,44,44,0.025) 35.5%, rgba(44,44,44,0.025) 36%, transparent 36.5%),
                linear-gradient(125deg, transparent 35%, rgba(44,44,44,0.025) 35.5%, rgba(44,44,44,0.025) 36%, transparent 36.5%),
                linear-gradient(55deg, transparent 35%, rgba(44,44,44,0.025) 35.5%, rgba(44,44,44,0.025) 36%, transparent 36.5%),
                linear-gradient(160deg, transparent 40%, rgba(44,44,44,0.015) 40.5%, rgba(44,44,44,0.015) 41%, transparent 41.5%),
                linear-gradient(20deg, transparent 40%, rgba(44,44,44,0.015) 40.5%, rgba(44,44,44,0.015) 41%, transparent 41.5%),
                linear-gradient(135deg, transparent 33%, rgba(44,44,44,0.02) 33.5%, rgba(44,44,44,0.02) 34%, transparent 34.5%),
                linear-gradient(45deg, transparent 33%, rgba(44,44,44,0.02) 33.5%, rgba(44,44,44,0.02) 34%, transparent 34.5%),
                linear-gradient(90deg, transparent 99.5%, rgba(44,44,44,0.015) 100%),
                linear-gradient(0deg, transparent 99.5%, rgba(44,44,44,0.015) 100%);
            background-size:
                180px 180px,
                180px 180px,
                180px 180px,
                180px 180px,
                280px 280px,
                280px 280px,
                160px 160px,
                160px 160px,
                1px 100%,
                100% 1px;
            background-position: 0 0, 45px 45px, 90px 90px, 25px 25px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;
            background-attachment: fixed;
            pointer-events: none;
            z-index: 0;
        }

        .sidebar {
            width: 280px;
            border-right: 1px solid var(--border);
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            background: var(--surface);
            z-index: 50;
            padding: 48px 32px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .sidebar::-webkit-scrollbar { width: 6px; }
        .sidebar::-webkit-scrollbar-track { background: transparent; }
        .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

        .sidebar-logo {
            margin-bottom: 48px;
            padding-bottom: 32px;
            border-bottom: 1px solid var(--border);
        }

        .sidebar-logo h1 {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.08em;
            margin: 0;
            font-family: 'Crimson Text', serif;
        }

        .sidebar-logo p {
            font-size: 10px;
            margin: 8px 0 0 0;
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-weight: 500;
        }

        .nav-section {
            margin-bottom: 28px;
        }

        .nav-section-label {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--text-light);
            margin-bottom: 12px;
            display: block;
            font-weight: 600;
        }

        .nav-item {
            font-size: 12px;
            letter-spacing: 0.03em;
            color: var(--text-light);
            padding: 8px 0 8px 12px;
            border-left: 2px solid transparent;
            transition: all 0.2s ease;
            display: block;
            text-decoration: none;
            cursor: pointer;
        }

        .nav-item:hover {
            color: var(--text-dark);
            border-left-color: var(--accent);
        }

        .nav-item.active {
            color: var(--text-dark);
            border-left-color: var(--accent);
            font-weight: 600;
        }

        main {
            margin-left: 280px;
            position: relative;
            z-index: 1;
        }

        .section-container {
            max-width: 840px;
            margin: 0 auto;
            padding: 120px 56px;
            border-bottom: 1px solid var(--border);
        }

        .section-container:first-of-type {
            padding-top: 100px;
        }

        .section-num {
            font-family: 'Lora', serif;
            color: var(--text-light);
            font-size: 11px;
            margin-bottom: 28px;
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 500;
        }

        h2 {
            font-family: 'Crimson Text', serif;
            font-weight: 400;
            font-size: 3.5rem;
            line-height: 1.15;
            margin: 0 0 40px 0;
            color: var(--text-dark);
            letter-spacing: -0.02em;
        }

        h3 {
            font-family: 'Crimson Text', serif;
            font-weight: 400;
            font-size: 2rem;
            margin: 0 0 28px 0;
            line-height: 1.2;
            color: var(--text-dark);
        }

        h4 {
            font-weight: 600;
            letter-spacing: 0.05em;
            font-size: 13px;
            margin: 0;
            color: var(--text-dark);
            text-transform: uppercase;
        }

        .subsection {
            margin: 56px 0;
        }

        .body-text {
            font-size: 16px;
            color: var(--text-dark);
            line-height: 1.75;
            margin: 0 0 20px 0;
        }

        .body-text strong {
            color: var(--text-dark);
            font-weight: 600;
        }

        .body-text.lead {
            font-size: 18px;
            font-weight: 500;
            color: var(--text-dark);
        }

        .highlight-box {
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 36px;
            margin: 40px 0;
            border-left: 4px solid var(--accent);
        }

        .highlight-box h4 {
            color: var(--text-dark);
            text-transform: uppercase;
            font-size: 11px;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .profile-card {
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 32px;
            transition: all 0.3s ease;
            margin-bottom: 20px;
        }

        .profile-card:hover {
            border-color: var(--accent);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .profile-card h4 {
            margin-bottom: 16px;
            font-size: 13px;
        }

        .profile-card .desc {
            font-size: 15px;
            color: var(--text-light);
            margin-bottom: 16px;
            line-height: 1.7;
        }

        .profile-card .quote {
            font-size: 13px;
            color: var(--text-dark);
            font-style: italic;
            font-weight: 500;
        }

        .profile-card.highlight {
            background: var(--accent);
            color: var(--surface);
            border-color: var(--accent);
        }

        .profile-card.highlight h4 {
            color: var(--surface);
        }

        .profile-card.highlight .desc {
            color: rgba(255,255,255,0.85);
        }

        .profile-card.highlight .quote {
            color: var(--surface);
        }

        .section-image {
            width: 100%;
            height: auto;
            margin: 40px 0;
            display: block;
            border: 1px solid var(--border);
            padding: 20px;
            background: var(--surface);
        }

        .profile-image {
            width: 100%;
            height: auto;
            margin: 28px 0;
            display: block;
            border: 1px solid var(--border);
            padding: 16px;
            background: var(--surface);
        }

        .demo-two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin: 40px 0;
            align-items: flex-start;
        }

        .demo-images {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .demo-image-lg {
            width: 120%;
            height: auto;
            border: 1px solid var(--border);
            padding: 16px;
            background: var(--surface);
        }

        .demo-image-center {
            width: 100%;
            max-width: 500px;
            height: auto;
            margin: 40px auto;
            border: 1px solid var(--border);
            padding: 16px;
            background: var(--surface);
            display: block;
        }

        .demo-image-sm {
            max-width: 280px;
            height: auto;
            border: 1px solid var(--border);
            padding: 16px;
            background: var(--surface);
        }

        .demo-paired {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 32px;
            align-items: center;
            margin: 48px 0;
        }

        .stat-box {
            border: 1px solid var(--border);
            padding: 40px 28px;
            text-align: center;
            background: var(--surface);
        }

        .stat-box .label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-light);
            margin-bottom: 16px;
            display: block;
            font-weight: 600;
        }

        .stat-box .number {
            font-size: 2.8rem;
            font-weight: 400;
            font-family: 'Crimson Text', serif;
            letter-spacing: -0.02em;
            margin: 12px 0;
        }

        .stat-box .unit {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--text-light);
            margin-top: 12px;
            font-weight: 600;
        }

        .note-box {
            border-left: 4px solid var(--accent);
            background: var(--surface);
            padding: 32px;
            margin: 32px 0;
            border: 1px solid var(--border);
        }

        .note-box p {
            font-size: 16px;
            color: var(--text-dark);
            line-height: 1.75;
            margin: 0;
        }

        .investment-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            margin: 40px 0;
        }

        .investment-card {
            background: var(--surface);
            padding: 48px;
            border: 1px solid var(--border);
        }

        .investment-card h4 {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-light);
            margin: 0 0 20px 0;
            font-weight: 600;
        }

        .investment-card h3 {
            font-size: 28px;
            margin: 0 0 28px 0;
            line-height: 1.2;
        }

        .investment-card .price {
            font-size: 36px;
            font-weight: 400;
            font-family: 'Crimson Text', serif;
            color: var(--text-dark);
            margin: 20px 0 32px 0;
            letter-spacing: -0.02em;
        }

        .investment-card p {
            font-size: 15px;
            color: var(--text-light);
            margin: 0 0 28px 0;
            line-height: 1.7;
        }

        .cta-button {
            display: inline-block;
            padding: 14px 32px;
            border: 1px solid var(--accent);
            background: transparent;
            color: var(--accent);
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            text-decoration: none;
            transition: all 0.3s ease;
            font-family: 'Lora', serif;
            cursor: pointer;
        }

        .cta-button:hover {
            background: var(--accent);
            color: var(--surface);
        }

        .cta-button.primary {
            background: var(--accent);
            color: var(--surface);
            border-color: var(--accent);
        }

        .cta-button.primary:hover {
            background: transparent;
            color: var(--accent);
        }

        .disclaimer {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--text-light);
            text-align: center;
            margin-top: 28px;
            font-weight: 600;
        }

        .entry-box {
            border: 1px solid var(--border);
            padding: 24px;
            margin-bottom: 16px;
            font-size: 15px;
            color: var(--text-light);
            font-style: italic;
            line-height: 1.7;
            background: var(--surface);
        }

        .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin: 40px 0;
        }

        @media (max-width: 768px) {
            .sidebar {
                width: 100%;
                height: auto;
                position: static;
                border-right: none;
                border-bottom: 1px solid var(--border);
                padding: 32px 24px;
            }

            main {
                margin-left: 0;
            }

            .section-container {
                padding: 80px 32px;
            }

            .demo-two-col {
                grid-template-columns: 1fr;
            }

            .demo-paired {
                grid-template-columns: 1fr;
            }

            .investment-grid {
                grid-template-columns: 1fr;
            }

            h2 {
                font-size: 2.2rem;
            }
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className="grid-overlay"></div>

      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>ARCHORIC</h1>
          <p>Trust Architecture</p>
        </div>

        <nav style={{ flex: 1 }}>
          <div className="nav-section">
            <a href="#index" className="nav-item active">00. Index</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">1. Awareness</span>
            <a href="#sec-1-1" className="nav-item">The Problem</a>
            <a href="#sec-1-2" className="nav-item">Why It Compounds</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">2. Understanding</span>
            <a href="#sec-2-1" className="nav-item">Six Profiles</a>
            <a href="#sec-2-2" className="nav-item">Entry Points</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">3. Trust Building</span>
            <a href="#sec-3-1" className="nav-item">Trust Routes</a>
            <a href="#sec-3-2" className="nav-item">Measuring Trust</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">4. Solution Logic</span>
            <a href="#sec-4-1" className="nav-item">TDA Audit</a>
            <a href="#sec-4-2" className="nav-item">OAA System</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">5. Solution</span>
            <a href="#sec-5-1" className="nav-item">90-Day Build</a>
            <a href="#sec-5-2" className="nav-item">Real Analysis</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">6. Business Case</span>
            <a href="#sec-6-1" className="nav-item">Economics</a>
            <a href="#sec-6-2" className="nav-item">Investment</a>
            <a href="#sec-6-3" className="nav-item">Ownership</a>
          </div>

          <div className="nav-section">
            <span className="nav-section-label">7. Decision</span>
            <a href="#sec-7-1" className="nav-item">Cost of Wait</a>
            <a href="#sec-7-2" className="nav-item">vs Agencies</a>
            <a href="#sec-7-3" className="nav-item">Begin</a>
          </div>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '9px', color: 'var(--text-light)', margin: 0 }}>V3.0 2026</p>
        </div>
      </aside>

      <main>
        {/* SECTION 1.1 */}
        <section id="sec-1-1" className="section-container">
          <span className="section-num">1.1 / Awareness</span>
          <h2>More Traffic Won't Grow Your Healthcare SaaS</h2>
          <p className="body-text">In healthcare SaaS, looking at more traffic or visibility as a signal for growth is like scaling a metric without understanding the system behind it.</p>
          <p className="body-text">The standard approach is to optimize for visibility. Rankings, impressions, traffic. And nothing for how trust actually forms, holds, or breaks across the buyer journey.</p>
          <p className="body-text lead">You can rank pretty good for "practice management software" and still lose 27–44% of qualified buyers before the demo.</p>
          <p className="body-text">The buyer's journey in healthcare is different from other SaaS. Clinic operators are making a critical operational and compliance decision in a high-stakes environment.</p>
          <p className="body-text">Liabilities cost more than money. They affect reputation, credibility, and professional standing. They are not just evaluating features. They are trying to determine whether your platform can be trusted across different layers of their work environment.</p>
          <p className="body-text" style={{fontWeight: 600}}>Trust is systemic in healthcare.</p>
          <p className="body-text">Traditional SEO strategies optimize for keywords and traffic. They do not account for how that trust is experienced, where it fragments, or how it breaks across the decision process.</p>
          <p className="body-text">Result: more visitors, same conversion rate or lower.</p>
        </section>

        {/* SECTION 1.2 */}
        <section id="sec-1-2" className="section-container">
          <span className="section-num">1.2 / Awareness</span>
          <h2>Why This Compounds Over Time</h2>
          <p className="body-text lead">The problem doesn't stay constant. It scales with you.</p>
          <p className="body-text">As visibility increases, more buyers enter your funnel. But the way they evaluate trust doesn't change.</p>
          <p className="body-text">They encounter the same gaps. The same missing signals. The same friction in understanding whether your platform can be trusted in their environment.</p>
          <p className="body-text">So the volume grows. But the underlying conversion behavior doesn't.</p>
          <p className="body-text">What looks like growth at the top of the funnel hides a widening gap deeper in the process. More traffic doesn't fix it. It amplifies it.</p>
          <p className="body-text">Over time, this creates a structural imbalance: more attention, same doubt.</p>
          <p className="body-text">And while you're increasing visibility, competitors who resolve that trust gap begin converting at a different rate.</p>
          <p className="body-text">The result is not just slower growth. It's lost ground. Not because you're not visible. But because visibility alone is not what moves a healthcare buyer forward.</p>
        </section>

        {/* SECTION 2.1 */}
        <section id="sec-2-1" className="section-container">
          <span className="section-num">2.1 / Understanding</span>
          <h2>The Six Trust Profiles</h2>
          <p className="body-text" style={{marginBottom: 48}}>Healthcare SaaS companies don't fail trust in the same way. They tend to fall into recurring patterns. Specific ways trust is built, misaligned, or incomplete.</p>
          
          <div className="profile-card">
            <h4>Validation-Constrained</h4>
            <p className="desc">Everything looks strong on the surface. Compliance is detailed. Certifications are in place. The language is correct. But when a buyer looks for proof that this works in a real clinical environment, there is nothing that reassures them.</p>
            <p className="quote">They understand you are compliant. They are not convinced you are trusted.</p>
          </div>
          <img src="/presentation/Validation_Constrained.png" alt="Validation-Constrained" className="profile-image" />

          <div className="profile-card">
            <h4>Product-Centric Blind Spot</h4>
            <p className="desc">The product is clear and compelling. Workflows are explained well. The interface makes sense. The value is easy to grasp. But there is little framing around regulation, liability, or risk.</p>
            <p className="quote">Buyers understand what you do. They are unsure whether it is safe to rely on.</p>
          </div>
          <img src="/presentation/Product_centric_blind_spot.png" alt="Product-Centric" className="profile-image" />

          <div className="profile-card">
            <h4>Compliance-Heavy</h4>
            <p className="desc">Compliance is front and center. Security, regulation, and protection are emphasized heavily. But the connection to day-to-day operations is missing.</p>
            <p className="quote">Buyers understand you are safe. They struggle to see how it works for them.</p>
          </div>
          <img src="/presentation/Compliance_Heavy.png" alt="Compliance-Heavy" className="profile-image" />

          <div className="profile-card">
            <h4>Surface / Underdeveloped</h4>
            <p className="desc">In earlier-stage companies, trust is often present but scattered. There are signals: a testimonial here, a feature explanation there, a mention of compliance somewhere else. But nothing connects.</p>
            <p className="quote">Buyers encounter fragments. They don't see a coherent system.</p>
          </div>
          <img src="/presentation/Underdevloped_System.png" alt="Underdeveloped" className="profile-image" />

          <div className="profile-card">
            <h4>Fragmented Authority</h4>
            <p className="desc">All the right elements exist. Compliance, product clarity, proof, messaging. They're all there. But they don't align. A buyer moves from one page to another and experiences disconnects.</p>
            <p className="quote">Trust isn't missing. It's disjointed.</p>
          </div>
          <img src="/presentation/Fragmented_Authority.png" alt="Fragmented Authority" className="profile-image" />

          <div className="profile-card highlight">
            <h4>High-Trust Engine</h4>
            <p className="desc">Everything holds together. Regulatory credibility, operational clarity, structure, and proof all reinforce each other. A buyer can follow the logic, verify it, and believe it. Without friction.</p>
            <p className="quote">Trust doesn't need to be searched for. It is experienced throughout the journey.</p>
          </div>
          <img src="/presentation/High_Trust_Engine.png" alt="High-Trust Engine" className="profile-image" />
        </section>

        {/* SECTION 2.2 */}
        <section id="sec-2-2" className="section-container">
          <span className="section-num">2.2 / Understanding</span>
          <h2>Entry Points</h2>
          <p className="body-text" style={{marginBottom: 32}}>Buyers don't start on your homepage. They enter from wherever their problem takes them: a feature page, a comparison, a compliance query, a piece of content, a specific use case.</p>
          <p className="body-text" style={{marginBottom: 32}}>You don't control where they arrive. But that entry point becomes their first judgment. And in healthcare, that judgment isn't abstract. It's immediate, practical, and risk-based.</p>
          <img src="/presentation/Entry_points.png" alt="Entry Points" className="section-image" />
          <p className="body-text" style={{marginBottom: 32}}>Each entry point carries a different expectation. A feature page is evaluated for workflow impact. A compliance query is evaluated for risk and liability. A piece of content is evaluated for credibility and real-world proof.</p>
          <p className="body-text">When those expectations aren't met at the point of entry, something subtle happens. Buyers don't always leave immediately. They keep exploring. But doubt has already entered the process. And from that point on, everything they see is filtered through that doubt.</p>
        </section>

        {/* SECTION 3.1 */}
        <section id="sec-3-1" className="section-container">
          <span className="section-num">3.1 / Trust Building</span>
          <h2>Trust Routes</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>Trust in healthcare SaaS is experienced as buyers move through your system.</p>
          <p className="body-text" style={{marginBottom: 32}}>And that experience depends on where they enter from. A buyer landing on a feature page is not looking for the same signals as someone landing on a compliance query.</p>
          <p className="body-text" style={{marginBottom: 32}}>In systems we notice: A security page here. A testimonial there. A case study somewhere else. The signals exist. But they don't connect. This is where trust begins to break. Because credibility isn't structured to match the way buyers evaluate risk.</p>
          <img src="/presentation/Trust_Flows.png" alt="Trust Flows" className="section-image" />
          <div className="subsection">
            <h3>Instead of Pages, Think in Paths</h3>
            <p className="body-text">A buyer entering from a feature page and a buyer entering from a compliance query don't follow the same path. They are not trying to answer the same questions. They are not evaluating the same risks. Each entry point creates a different sequence of validation.</p>
            <img src="/presentation/Trust_routes_paths.png" alt="Trust Routes Paths" className="section-image" />
            <p className="body-text" style={{marginTop: 32}}><strong>At every step, trust needs to be reinforced, not reset.</strong></p>
            <p className="body-text">When trust is routed correctly, each page builds on the last. Each signal answers the next question. The buyer doesn't need to search for reassurance. It's already where they expect it.</p>
          </div>
        </section>

        {/* SECTION 3.2 */}
        <section id="sec-3-2" className="section-container">
          <span className="section-num">3.2 / Trust Building</span>
          <h2>How We Measure Trust</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>Systems don't know where trust breaks. They try to fix it with more traffic, better messaging, or stronger positioning. But if you don't know where it fails, you can't fix it. So we measure it.</p>
          <div className="highlight-box">
            <h4 style={{color: 'var(--text-dark)'}}>Trust forms through four layers</h4>
            <p style={{color: 'var(--text-light)', fontSize: '0.875rem', marginTop: 16}}>When one layer is weak or disconnected, the system becomes unstable. We measure each layer on a 0-5 scale. That gives us your Global Trust Score (0-20).</p>
          </div>
          <div style={{marginTop: 48, marginBottom: 48}}>
            <div style={{marginBottom: 48}}>
              <h3 style={{fontSize: '1.5rem'}}>Layer 1: Regulatory Credibility (Foundation)</h3>
              <p className="body-text">Does the buyer believe your platform is safe and compliant for their environment? If this layer is weak, trust breaks early. Without clear regulatory credibility, nothing else matters.</p>
            </div>

            <div style={{marginBottom: 48}}>
              <h3 style={{fontSize: '1.5rem'}}>Layer 2: Operational Credibility (Load-Bearing)</h3>
              <p className="body-text">Does the buyer believe your platform actually works in their day-to-day reality? Many systems prove safety but not usability. The buyer understands the product, but not how it fits their workflow.</p>
            </div>

            <div style={{marginBottom: 48}}>
              <h3 style={{fontSize: '1.5rem'}}>Layer 3: Structural Authority (Routing Framework)</h3>
              <p className="body-text">Does trust feel coherent across your system? Do signals connect or does the buyer have to piece them together? When this layer is weak, trust fragments.</p>
            </div>

            <div>
              <h3 style={{fontSize: '1.5rem'}}>Layer 4: Proof & Validation (External Reinforcement)</h3>
              <p className="body-text">Does the buyer believe others trust you? Are your claims backed by real proof: case studies, testimonials, benchmarks? Without external validation, trust stalls.</p>
            </div>
          </div>
          <p className="body-text" style={{marginTop: 32}}>Trust doesn't fail all at once. It fails at specific layers. And until you know where it breaks, you can't fix it.</p>
        </section>

        {/* SECTION 4.1 */}
        <section id="sec-4-1" className="section-container">
          <span className="section-num">4.1 / Solution Logic</span>
          <h2>Trust Deficit Audit</h2>
          <p className="body-text lead" style={{marginBottom: 48}}>The Trust Deficit Audit is a full diagnostic of how trust forms, where it breaks, and what is causing it.</p>
          <div style={{marginBottom: 32}}>
            <h4 style={{marginBottom: 12}}>The Trust Breakdown Map</h4>
            <p className="body-text">A complete view of where trust fails across your system. Each layer is evaluated through specific diagnostic points, with supporting evidence showing where the issue appears, how it manifests, and why it affects buyer perception. You don't just see that trust is weak. You see exactly where and why.</p>
          </div>
          <div style={{marginBottom: 32}}>
            <h4 style={{marginBottom: 12}}>The Page-Level Trust Analysis</h4>
            <p className="body-text">A breakdown of how trust performs across your key pages. Homepage, Product, Pricing, Compliance, Proof. Each is evaluated individually to show where credibility holds, where it weakens, and where the buyer begins to hesitate.</p>
          </div>
          <div style={{marginBottom: 32}}>
            <h4 style={{marginBottom: 12}}>The Buyer Friction Map</h4>
            <p className="body-text">A detailed identification of where doubt appears in the buyer journey. Where proof is missing. Where claims are unsupported. Where trust is asked too early or validated too late. And where the buyer is left to figure things out alone.</p>
          </div>
          <p className="body-text" style={{marginTop: 32}}><strong>It's a system you can see. And once you can see it, you can fix it.</strong></p>
        </section>

        {/* SECTION 4.2 */}
        <section id="sec-4-2" className="section-container">
          <span className="section-num">4.2 / Solution Logic</span>
          <h2>Organic Authority Architecture</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>The TDA shows where your website, content, and proof structure fail to support buyer trust. OAA rebuilds that structure so trust can form naturally across the buyer journey.</p>
          <p className="body-text" style={{fontWeight: 600}}>It is not a content campaign. It is a system that reconnects your pages, content, proof, and regulatory signals into one coherent buyer-facing structure.</p>
          <p className="body-text" style={{marginTop: 24}}>The goal is not to publish more. The goal is to make every important page, proof point, and content asset support the same conclusion: this company understands our risk, our workflow, and our decision reality.</p>
          <div className="subsection">
            <h3>What OAA Builds</h3>
            <div style={{marginTop: 32}}>
              <div style={{marginBottom: 32}}>
                <h4 style={{marginBottom: 12}}>A Central Authority Asset</h4>
                <p className="body-text">A core asset that anchors your entire content environment around a clearly defined and defensible territory. This becomes the reference point buyers use to understand your expertise.</p>
              </div>

              <div style={{marginBottom: 32}}>
                <h4 style={{marginBottom: 12}}>A Buyer-Stage Content System</h4>
                <p className="body-text">Content structured around how healthcare buyers actually move: research, comparison, and internal justification. Each asset has a defined role, a specific audience, and a clear destination.</p>
              </div>

              <div style={{marginBottom: 32}}>
                <h4 style={{marginBottom: 12}}>An Authority Routing Structure</h4>
                <p className="body-text">A system of internal pathways that connects pages, proof, and content into coherent trust routes. Buyers no longer have to assemble credibility themselves. The system guides how trust is formed.</p>
              </div>

              <div>
                <h4 style={{marginBottom: 12}}>A Regulatory Integration Layer</h4>
                <p className="body-text">Regulatory context placed where evaluation happens. Not isolated on compliance pages, but embedded at the moments where buyers assess risk.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5.1 */}
        <section id="sec-5-1" className="section-container">
          <span className="section-num">5.1 / Solution</span>
          <h2>90-Day OAA System</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>OAA is not implemented all at once. It is built in sequence, so each layer supports the next. Over 90 days, your structure moves from diagnosis to a system your team can use.</p>
          
          <div className="subsection">
            <h3>Phase 1: Trust Foundation (Days 1–30)</h3>
            <p className="body-text" style={{marginBottom: 24}}>This phase turns the diagnosis into the foundation of the architecture. We define where your authority should be built, which buyer intent it must serve, and what core asset will anchor the system.</p>
            <h4 style={{marginBottom: 12, fontSize: '13px'}}>What Gets Built</h4>
            <ul style={{fontSize: '0.875rem', color: 'var(--text-light)', marginLeft: 16, marginBottom: 24}}>
              <li style={{marginBottom: 8}}>• Trust baseline</li>
              <li style={{marginBottom: 8}}>• Intent-mapped keyword architecture</li>
              <li style={{marginBottom: 8}}>• Strategic search territory</li>
              <li style={{marginBottom: 8}}>• Central authority asset blueprint</li>
              <li>• Primary pillar structure</li>
            </ul>
            <p className="body-text">By the end of Phase 1, the system has a foundation. You know which territory you are building around, why it is defensible, and how the core authority asset needs to be structured.</p>
          </div>

          <div className="subsection">
            <h3>Phase 2: Authority Structure (Days 31–60)</h3>
            <p className="body-text" style={{marginBottom: 24}}>This phase turns the foundation into a connected authority system. We define the supporting content clusters, map how pages should connect, place regulatory context where evaluation happens, and structure proof around the way buyers assess risk.</p>
            <h4 style={{marginBottom: 12, fontSize: '13px'}}>What Gets Built</h4>
            <ul style={{fontSize: '0.875rem', color: 'var(--text-light)', marginLeft: 16, marginBottom: 24}}>
              <li style={{marginBottom: 8}}>• Buyer-stage content system</li>
              <li style={{marginBottom: 8}}>• Cluster strategy</li>
              <li style={{marginBottom: 8}}>• Authority routing structure</li>
              <li style={{marginBottom: 8}}>• Internal linking map</li>
              <li style={{marginBottom: 8}}>• Regulatory integration method</li>
              <li>• Content briefs</li>
            </ul>
            <p className="body-text">By the end of Phase 2, the architecture is no longer abstract. Every asset has a role. Every route has a purpose. Every proof point has a place.</p>
          </div>

          <div className="subsection">
            <h3>Phase 3: Execution & Handoff (Days 61–90)</h3>
            <p className="body-text" style={{marginBottom: 24}}>This phase turns the architecture into an operating system your team can use. We finalize the content library, implementation sequence, validation framework, and maintenance logic so the system can keep compounding after the engagement.</p>
            <h4 style={{marginBottom: 12, fontSize: '13px'}}>What Gets Built</h4>
            <ul style={{fontSize: '0.875rem', color: 'var(--text-light)', marginLeft: 16, marginBottom: 24}}>
              <li style={{marginBottom: 8}}>• Complete execution roadmap</li>
              <li style={{marginBottom: 8}}>• Content production sequence</li>
              <li style={{marginBottom: 8}}>• Proof and validation framework</li>
              <li style={{marginBottom: 8}}>• Implementation guide</li>
              <li style={{marginBottom: 8}}>• Operational handoff</li>
              <li>• Authority maintenance plan</li>
            </ul>
            <p className="body-text">By the end of Phase 3, you are not left with disconnected strategy documents. You have a system your team can build from, operate, and expand. The architecture is defined. The sequence is clear. The system is ready to operate.</p>
          </div>
        </section>

        {/* SECTION 5.2 */}
        <section id="sec-5-2" className="section-container">
          <span className="section-num">5.2 / Solution</span>
          <h2>Demonstration Analysis</h2>
          <p className="body-text" style={{marginBottom: 48}}>Real companies, analyzed through the Trust Architecture Diagnostic. How trust breaks. Where it breaks. Why it breaks across systems consistently.</p>

          <div className="subsection">
            <h3>MedBridge Pro: Layer Imbalance</h3>
            <div className="demo-two-col">
              <div>
                <p className="body-text">At first glance, the system looks strong. The product is clear. The workflows are well understood. The site is structured. Nothing looks obviously broken.</p>
                <p className="body-text" style={{marginTop: 24}}>But when the buyer reaches the point where they need to confirm the decision, there is not enough proof.</p>
                <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>This is where the system fails. Not at discovery. Not during exploration. But right before the decision.</p>
              </div>
              <div className="demo-images">
                <img src="/presentation/MedBridge_Layer_Imbalance.png" alt="MedBridge" className="demo-image-lg" />
                <img src="/presentation/MedBridge_Business_Impact.png" alt="MedBridge Impact" className="demo-image-lg" />
              </div>
              <a href="https://archoric.com/private-diagnostics/client-medbridgepro/" className="cta-button" style={{marginTop: 32}}>View MedBridge Pro Trust Architecture Diagnostic</a>
            </div>
          </div>

          <div className="subsection">
            <h3 style={{fontSize: '1.5rem', marginTop: 64}}>What Repeats Across Systems</h3>
            <p className="body-text">This pattern is not isolated. Across multiple diagnostics: Clinicflow, Theracare, MedBridge Pro. Different companies. Different positioning. Different strengths. But the same failure point appears.</p>
            <p className="body-text" style={{marginTop: 24}}>Proof is weak or missing. Validation appears too late. Trust breaks at the point where the decision should happen.</p>
          </div>

          <div className="subsection">
            <h3 style={{fontSize: '1.5rem', marginTop: 64}}>Clinicflow: Partial Alignment</h3>
            <p className="body-text" style={{textAlign: 'center', marginBottom: 32}}>In one system, compliance is strong but the product does not feel grounded in real workflows.</p>
            <img src="/presentation/Clinicflow_Partial_Alignment.png" alt="Clinicflow" className="demo-image-center" />
            <p className="body-text">This reinforces the pattern: when layers don't align, buyers feel the disconnect. They see evidence, but it feels disjointed. They don't build confidence.</p>
          </div>

          <div className="subsection">
            <h3 style={{fontSize: '1.5rem', marginTop: 64}}>Theracare: System Breakdown</h3>
            <p className="body-text" style={{marginBottom: 32}}>In another, the product is clear but there is not enough evidence to support it. And the system collapses at the critical moment.</p>
            <div className="demo-paired">
              <div className="demo-paired-img-left">
                <img src="/presentation/Theracare_Failure_Moment.png" alt="Theracare Failure" className="demo-image-sm" />
              </div>
              <div className="demo-paired-img-right">
                <img src="/presentation/Theracare_System_Breakdown.png" alt="Theracare Breakdown" className="demo-image-lg" />
              </div>
            </div>
            <p className="body-text" style={{marginTop: 32}}>The left shows the exact moment the buyer leaves. The right shows why: the system is structurally weak. All layers matter. When one fails, the buyer hesitates. And hesitation, in this market, usually means loss.</p>
          </div>

          <div className="subsection">
            <h3 style={{fontSize: '1.5rem', marginTop: 64}}>What This Shows</h3>
            <p className="body-text">Healthcare SaaS companies do not fail because they lack credibility. They fail because that credibility is not structured for evaluation.</p>
            <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>Trust does not fail randomly. It fails in predictable locations. It fails at specific layers. And when it breaks, buyers leave before reaching sales.</p>
            <p className="body-text" style={{marginTop: 24}}>The surface is different. The outcome is the same.</p>
          </div>
        </section>

        {/* SECTION 6.1 */}
        <section id="sec-6-1" className="section-container">
          <span className="section-num">6.1 / Business Case</span>
          <h2>The Economics of Trust</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>SaaS teams often optimize for a simple path: traffic → content → demo</p>
          <p className="body-text" style={{marginBottom: 32}}>But healthcare buyers do not move that way. They move through a longer evaluation:</p>
          <div className="highlight-box">
            <p style={{fontSize: '0.875rem', color: 'var(--text-dark)', textAlign: 'center', fontFamily: 'monospace', letterSpacing: '0.05em'}}>awareness → scrutiny → doubt → risk evaluation → internal justification → trust threshold → demo</p>
          </div>
          <p className="body-text" style={{marginTop: 32, fontWeight: 600}}>Every step before the demo is a point where trust can fail.</p>
          <p className="body-text" style={{marginTop: 32}}>From the diagnostics shown earlier:</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '40px 0'}}>
            <div className="stat-box">
              <span className="label">Clinicflow</span>
              <div className="number">5</div>
              <span className="unit">Lost demos per month</span>
            </div>
            <div className="stat-box">
              <span className="label">Theracare</span>
              <div className="number">9</div>
              <span className="unit">Lost demos per month</span>
            </div>
            <div className="stat-box">
              <span className="label">MedBridge Pro</span>
              <div className="number">9</div>
              <span className="unit">Lost demos per month</span>
            </div>
          </div>
          <p className="body-text" style={{fontWeight: 600}}>That's between 60 and 108 qualified buyers per year who never reach your sales team.</p>
          <p className="body-text" style={{marginTop: 32}}>In similar systems, this translates into six-figure annual revenue loss.</p>
          <p className="body-text" style={{marginTop: 32, fontWeight: 600}}>This is not a visibility issue. The demand is already there. It is a loss of momentum during evaluation.</p>
          <div className="note-box">
            <p>Multiply those lost conversations by your average deal size. That is the revenue that never enters your pipeline.</p>
          </div>
          <p className="body-text" style={{marginTop: 32}}>If you want to quantify it:</p>
          <div className="highlight-box">
            <p style={{fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dark)', textAlign: 'center', fontFamily: 'monospace'}}>Monthly demos × leakage % × close rate × average deal size</p>
          </div>
        </section>

        {/* SECTION 6.2 */}
        <section id="sec-6-2" className="section-container">
          <span className="section-num">6.2 / Business Case</span>
          <h2>Investment & Pricing</h2>
          <div style={{marginTop: 48}}>
            <p className="body-text lead">Start with the Trust Deficit Audit (TDA).</p>
            <p className="body-text" style={{marginTop: 16}}>The audit identifies where your system breaks, and where trust is lost during evaluation.</p>
            <p className="body-text" style={{marginTop: 32, fontWeight: 600, fontSize: '1.125rem'}}>Investment: €3,000</p>
          </div>

          <div style={{marginTop: 48}}>
            <p className="body-text lead">Then move to OAA.</p>
            <p className="body-text" style={{marginTop: 16}}>OAA is delivered as a fixed-scope engagement over 90 days.</p>
            <p className="body-text" style={{marginTop: 32, fontWeight: 600, fontSize: '1.125rem'}}>Investment: €30,000</p>
          </div>

          <div className="highlight-box">
            <h4>Integrated Path</h4>
            <p style={{color: 'var(--text-light)', fontSize: '0.875rem', marginTop: 16}}>If OAA is initiated within 30 days of the audit, the audit is integrated into the full engagement. The €3,000 investment is credited.</p>
          </div>

          <p className="body-text" style={{marginTop: 32}}>The progression is simple: diagnosis → architecture</p>
          <p className="body-text" style={{marginTop: 24}}>This is typically equivalent to a few months of ongoing SEO or content execution. The difference is that the structure remains in place once it is built.</p>
          <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>OAA focuses on closing that gap at the structural level.</p>
        </section>

        {/* SECTION 6.3 */}
        <section id="sec-6-3" className="section-container">
          <span className="section-num">6.3 / Business Case</span>
          <h2>Ownership vs Dependency</h2>
          <div className="subsection">
            <h3>The Dependency Model</h3>
            <p className="body-text">Most growth systems in SaaS are built on dependency. You hire an external team. They produce content. They manage execution. And the system works as long as they are involved.</p>
            <p className="body-text" style={{marginTop: 24}}>When the engagement stops, the output slows down. Content production drops. New assets stop reinforcing each other. And over time, the system loses strength.</p>
            <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>The model relies on continuous external execution.</p>
          </div>

          <div className="subsection">
            <h3>The OAA Model</h3>
            <p className="body-text lead">OAA works differently.</p>
            <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>OAA is structured as a system your company can operate internally.</p>
            <p className="body-text" style={{marginTop: 24}}>The structure lives inside your business. Your team understands how it is built. Your content follows it. Your pages reinforce it. Your proof appears where it matters.</p>
            <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>Ownership means the system built for your company can be operated, maintained, and expanded internally.</p>
          </div>

          <div className="subsection">
            <h3>The Difference</h3>
            <p className="body-text">One model depends on continuous external execution to maintain results. The other builds a structure that continues to support growth once it is in place.</p>
            <p className="body-text" style={{marginTop: 24, fontWeight: 600}}>At this point, the question is simple: Do you want to keep feeding the system or fix the structure behind it?</p>
            <p className="body-text" style={{marginTop: 24}}>Over time, competitors continue to buy visibility. You compound trust.</p>
          </div>
        </section>

        {/* SECTION 7.1 */}
        <section id="sec-7-1" className="section-container">
          <span className="section-num">7.1 / Decision</span>
          <h2>Your Cost of Inaction</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>Nothing breaks all at once. The system continues to operate. Traffic still comes in. Content still gets published.</p>
          <p className="body-text" style={{marginBottom: 32}}>But the underlying issue remains. Buyers continue to arrive. They continue to evaluate. And a portion of them continue to leave before reaching a decision.</p>
          <p className="body-text" style={{marginBottom: 32}}>This does not show up as a clear failure. It shows up as slower growth. More effort to generate the same number of demos. Longer sales cycles. More pressure on outbound and paid acquisition.</p>
          <p className="body-text" style={{marginBottom: 32}}>Over time, the gap widens. Not because demand disappears. But because the system cannot convert it efficiently.</p>
          <p className="body-text" style={{fontWeight: 600}}>So the response is predictable: More content. More traffic. More spend.</p>
          <p className="body-text" style={{marginTop: 24}}>But the structure does not change. And without a structural change, the outcome stays the same. Growth continues. But below potential.</p>
        </section>

        {/* SECTION 7.2 */}
        <section id="sec-7-2" className="section-container">
          <span className="section-num">7.2 / Decision</span>
          <h2>Difference from Agencies</h2>
          <p className="body-text lead" style={{marginBottom: 32}}>SEO and content work focus on visibility. Ranking improves. Content gets published. Traffic increases.</p>
          <p className="body-text" style={{marginBottom: 32, fontWeight: 600}}>This addresses how buyers enter your site. It does not address how they evaluate once they are inside.</p>
          <p className="body-text" style={{marginBottom: 32}}>A buyer arrives. They explore. They look for confirmation. If the structure does not support that evaluation, they leave.</p>
          <p className="body-text" style={{marginBottom: 32}}>Increasing traffic does not change this. It increases the number of buyers entering the same system.</p>
          <p className="body-text" style={{marginBottom: 32}}>This is why it's common to see: consistent publishing, steady traffic growth, with limited change in conversion. The system brings people in. It does not guide how trust forms during evaluation.</p>
          <p className="body-text" style={{fontWeight: 600}}>OAA focuses on that layer.</p>
          <p className="body-text" style={{marginTop: 32}}>It structures how buyers move through your content. Where proof appears. How pages support each other. How decisions are reinforced.</p>
          <p className="body-text" style={{marginTop: 32}}>The goal is not more visibility. It is to turn existing visibility into decisions.</p>

          <div className="highlight-box" style={{marginTop: 48}}>
            <h4>The Difference is Simple</h4>
            <p style={{color: 'var(--text-light)', fontSize: '0.875rem', marginTop: 16}}>One approach increases volume. The other improves what that volume produces.</p>
          </div>
        </section>

        {/* SECTION 7.3 */}
        <section id="sec-7-3" className="section-container" style={{ paddingBottom: 160 }}>
          <span className="section-num">7.3 / Decision</span>
          <h2>Let's Begin</h2>

          <p className="body-text lead" style={{ marginBottom: 48 }}>If you want to see how this applies to your system, start with the Trust Deficit Audit.</p>

          <p className="body-text" style={{ marginBottom: 32 }}>The audit shows where trust breaks, and what needs to change before anything else.</p>

          <div className="investment-grid">
            <div className="investment-card">
              <h4>The Diagnosis</h4>
              <h3>Trust Deficit<br />Audit</h3>
              <div className="price">€3,000</div>
              <p>A complete breakdown of your trust architecture. Where buyers disconnect. Why. What to fix.</p>
              <a href="https://archoric.com/contact" className="cta-button">Schedule Audit</a>
            </div>
            <div className="investment-card">
              <h4>The Solution</h4>
              <h3>Organic Authority<br />Architecture</h3>
              <div className="price">€30,000</div>
              <p>A 90-day engagement. We rebuild your trust system. New pages. Reframing. Routing architecture. The full OAA build.</p>
              <a href="https://archoric.com/contact" className="cta-button primary">Start Engagement</a>
            </div>
          </div>

          <p className="disclaimer">If OAA is initiated within 30 days of completing the audit, the €3,000 investment is credited toward the full engagement.</p>

          <div className="note-box" style={{ textAlign: 'center', marginTop: 64 } as React.CSSProperties}>
            <p>Begin at <a href="https://archoric.com" style={{color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--accent)'} as React.CSSProperties}>archoric.com</a> or email <a href="mailto:dalvino@archoric.com" style={{color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--accent)'} as React.CSSProperties}>dalvino@archoric.com</a> to get started</p>
          </div>
        </section>
      </main>
    </>
  );
}