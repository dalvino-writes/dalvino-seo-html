export const post = {
  id: "trust-fails-before-demo",
  title: "Why Trust Fails Before the Demo",
  excerpt:
    "Most healthcare SaaS founders think buyers evaluate features first. In regulated environments, buyers evaluate risk first. That changes everything.",
  category: "strategy",
  type: "visual-note",
  date: "2026-03-15",
  readTime: "4 min",
  htmlContent: `
    <style>
      .vn-wrap *, .vn-wrap *::before, .vn-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }
      .vn-wrap {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 300;
        line-height: 1.6;
        padding: 80px 40px;
        max-width: 860px;
        margin: 0 auto;
        color: #0a0a0a;
      }
      .vn-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 2px solid #0a0a0a;
        border-bottom: 1px solid #c8c8c8;
        padding: 14px 0;
        margin-bottom: 72px;
      }
      .vn-meta-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #555;
      }
      .vn-tag {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        background: #2D5A27;
        color: #fafafa;
        padding: 4px 10px;
      }
      .vn-title-block { margin-bottom: 64px; }
      .vn-number {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 11px;
        color: #555;
        letter-spacing: 0.15em;
        margin-bottom: 20px;
      }
      .vn-h1 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(38px, 5.5vw, 66px);
        font-weight: 900;
        line-height: 1.0;
        letter-spacing: -0.02em;
        color: #0a0a0a;
        margin-bottom: 24px;
      }
      .vn-lead {
        font-size: 15px;
        font-weight: 300;
        color: #555;
        max-width: 500px;
        line-height: 1.75;
        border-left: 2px solid #2D5A27;
        padding-left: 20px;
      }
      .vn-reframe {
        background: #0a0a0a;
        color: #fafafa;
        padding: 36px 32px;
        margin-bottom: 56px;
      }
      .vn-reframe-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #c8c8c8;
        margin-bottom: 16px;
      }
      .vn-reframe-text {
        font-family: 'Playfair Display', serif;
        font-size: clamp(16px, 2.5vw, 22px);
        font-weight: 700;
        line-height: 1.4;
        color: #fafafa;
      }
      .vn-reframe-text em { color: #7ab872; font-style: normal; }
      .vn-divider { border: none; border-top: 1px solid #c8c8c8; margin: 56px 0; }
      .vn-section-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #555;
        margin-bottom: 28px;
      }
      .vn-compare-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        border: 1px solid #c8c8c8;
        margin-bottom: 16px;
      }
      .vn-compare-col { padding: 28px 24px; }
      .vn-compare-col:first-child { border-right: 1px solid #c8c8c8; }
      .vn-compare-col-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      .vn-compare-col-label.bad { color: #999; }
      .vn-compare-col-label.good { color: #2D5A27; }
      .vn-compare-item {
        font-size: 13px;
        color: #555;
        line-height: 1.6;
        padding: 8px 0;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        gap: 10px;
        align-items: flex-start;
      }
      .vn-compare-item:last-child { border-bottom: none; }
      .vn-compare-col:first-child .vn-compare-item::before { content: "✕"; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #bbb; flex-shrink: 0; margin-top: 2px; }
      .vn-compare-col:last-child .vn-compare-item::before { content: "→"; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #2D5A27; flex-shrink: 0; margin-top: 2px; }
      .vn-compare-caption {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: #555;
        letter-spacing: 0.05em;
        margin-bottom: 56px;
        padding-top: 10px;
      }
      .vn-timeline { margin-bottom: 56px; }
      .vn-timeline-row { display: grid; grid-template-columns: 28px 1fr; gap: 0; }
      .vn-t-marker { display: flex; flex-direction: column; align-items: center; }
      .vn-t-dot { width: 10px; height: 10px; border-radius: 50%; background: #0a0a0a; flex-shrink: 0; margin-top: 5px; }
      .vn-t-dot.green { background: #2D5A27; }
      .vn-t-line { width: 1px; flex: 1; background: #c8c8c8; min-height: 36px; margin: 4px 0; }
      .vn-t-content { padding: 0 0 32px 18px; }
      .vn-t-stage { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #555; margin-bottom: 5px; }
      .vn-t-title { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; margin-bottom: 5px; color: #0a0a0a; }
      .vn-t-desc { font-size: 13px; color: #555; line-height: 1.65; max-width: 520px; }
      .vn-t-flag { display: inline-block; margin-top: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; background: #2D5A27; color: #fafafa; padding: 3px 8px; }
      .vn-insight {
        border: 1px solid #c8c8c8;
        border-left: 3px solid #0a0a0a;
        padding: 28px 24px;
        margin-bottom: 56px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
      .vn-insight-q { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #555; margin-bottom: 8px; }
      .vn-insight-a { font-size: 13px; color: #0a0a0a; line-height: 1.6; }
      .vn-stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #c8c8c8; border: 1px solid #c8c8c8; margin-bottom: 56px; }
      .vn-stat-block { background: #fafafa; padding: 28px 24px; }
      .vn-stat-number { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 900; line-height: 1; color: #0a0a0a; margin-bottom: 8px; }
      .vn-stat-number span { color: #2D5A27; }
      .vn-stat-label { font-size: 13px; color: #555; line-height: 1.5; max-width: 240px; }
      .vn-for-you { background: #f0f0f0; padding: 36px 32px; margin-bottom: 56px; }
      .vn-for-you-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #555; margin-bottom: 20px; }
      .vn-for-you-list { list-style: none; }
      .vn-for-you-list li { font-size: 14px; color: #0a0a0a; line-height: 1.65; padding: 10px 0; border-bottom: 1px solid #c8c8c8; display: flex; gap: 14px; align-items: flex-start; }
      .vn-for-you-list li:last-child { border-bottom: none; }
      .vn-for-you-list li::before { content: "→"; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #2D5A27; flex-shrink: 0; margin-top: 2px; }
      .vn-takeaway { border-top: 2px solid #0a0a0a; border-bottom: 1px solid #c8c8c8; padding: 36px 0; margin-bottom: 64px; }
      .vn-takeaway-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #555; margin-bottom: 16px; }
      .vn-takeaway-text { font-family: 'Playfair Display', serif; font-size: clamp(18px, 3vw, 26px); font-weight: 700; line-height: 1.35; max-width: 620px; }
      .vn-footer { display: flex; justify-content: space-between; align-items: flex-end; }
      .vn-author { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #555; letter-spacing: 0.1em; }
      .vn-author strong { display: block; color: #0a0a0a; font-weight: 500; margin-bottom: 2px; }
      .vn-watermark { font-family: 'Playfair Display', serif; font-size: 11px; color: #c8c8c8; }
      @media (max-width: 640px) {
        .vn-wrap { padding: 40px 20px; }
        .vn-compare-grid { grid-template-columns: 1fr; }
        .vn-compare-col:first-child { border-right: none; border-bottom: 1px solid #c8c8c8; }
        .vn-insight { grid-template-columns: 1fr; }
        .vn-stats-row { grid-template-columns: 1fr; }
        .vn-footer { flex-direction: column; gap: 16px; }
      }
    </style>

    <div class="vn-wrap">

      <div class="vn-meta">
        <span class="vn-meta-label">Visual Note · Healthcare SaaS Trust</span>
        <span class="vn-tag">Trust Architecture</span>
      </div>

      <div class="vn-title-block">
        <div class="vn-number">VN 001</div>
        <h1 class="vn-h1">Why Trust Fails<br/>Before the<br/>Demo.</h1>
        <p class="vn-lead">Most healthcare SaaS founders think the buying journey starts at the demo. In regulated environments, the real evaluation starts earlier. Buyers assess risk before they assess product depth.</p>
      </div>

      <div class="vn-reframe">
        <div class="vn-reframe-label">The Core Reframe</div>
        <div class="vn-reframe-text">Healthcare software is rarely bought as a simple feature decision. It is filtered through <em>risk perception</em>, operational credibility, and trust signals. If those signals are weak, the demo never gets a fair chance.</div>
      </div>

      <div class="vn-section-label">01 · Feature Evaluation vs. Risk Evaluation</div>
      <div class="vn-compare-grid">
        <div class="vn-compare-col">
          <div class="vn-compare-col-label bad">What founders assume</div>
          <div class="vn-compare-item">Buyers compare feature lists first</div>
          <div class="vn-compare-item">A strong demo can fix weak positioning</div>
          <div class="vn-compare-item">Compliance is a later-stage concern</div>
          <div class="vn-compare-item">Trust is mostly a brand or design issue</div>
          <div class="vn-compare-item">Interest automatically leads to pipeline</div>
        </div>
        <div class="vn-compare-col">
          <div class="vn-compare-col-label good">What buyers actually do</div>
          <div class="vn-compare-item">Scan for risk before engaging deeply</div>
          <div class="vn-compare-item">Use trust signals to decide who is worth evaluating</div>
          <div class="vn-compare-item">Look for evidence of regulatory awareness early</div>
          <div class="vn-compare-item">Interpret weak structure as operational risk</div>
          <div class="vn-compare-item">Drop vendors before the demo if trust feels incomplete</div>
        </div>
      </div>
      <div class="vn-compare-caption">The first filter is rarely “can this platform do the job?” It is often “does this company feel safe enough to evaluate further?”</div>

      <div class="vn-section-label">02 · The Four Layers Buyers Read Before They Buy</div>
      <div class="vn-timeline">

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Layer 01</div>
            <div class="vn-t-title">Regulatory awareness</div>
            <div class="vn-t-desc">Does the company show that it understands the compliance environment it sells into? Not with vague claims, but with signs of real domain awareness.</div>
            <span class="vn-t-flag">Trust starts here</span>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Layer 02</div>
            <div class="vn-t-title">Data trust</div>
            <div class="vn-t-desc">Can buyers quickly understand how sensitive information is handled, protected, or governed? Silence here creates anxiety fast.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Layer 03</div>
            <div class="vn-t-title">Operational credibility</div>
            <div class="vn-t-desc">Does the product and messaging reflect the real workflow logic of clinics, practices, or healthcare teams? Buyers look for operational fluency, not generic SaaS language.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line" style="background:transparent"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Layer 04</div>
            <div class="vn-t-title">Structural proof</div>
            <div class="vn-t-desc">Once the earlier layers feel credible, buyers look for reinforcement: proof, clarity, authority, and consistency across the journey. This is where trust compounds instead of leaking.</div>
            <span class="vn-t-flag">Compounding layer</span>
          </div>
        </div>

      </div>

      <div class="vn-section-label">03 · The Four Places Trust Usually Breaks</div>
      <div class="vn-insight">
        <div>
          <div class="vn-insight-q">Break 01 · Positioning</div>
          <div class="vn-insight-a">The company says it serves healthcare, but the messaging could apply to any SaaS business. Buyers read that as distance from their world.</div>
        </div>
        <div>
          <div class="vn-insight-q">Break 02 · Compliance language</div>
          <div class="vn-insight-a">Claims are vague, generic, or buried. Even if the product is sound, the information architecture fails to communicate safety.</div>
        </div>
        <div>
          <div class="vn-insight-q">Break 03 · Operational mismatch</div>
          <div class="vn-insight-a">The copy speaks in abstract software language instead of the real workflow pressures buyers deal with every day.</div>
        </div>
        <div>
          <div class="vn-insight-q">Break 04 · Proof gaps</div>
          <div class="vn-insight-a">There is no clear bridge between claims and evidence. Without visible reinforcement, buyers default to caution.</div>
        </div>
      </div>

      <div class="vn-section-label">04 · What This Means for Healthcare SaaS Founders</div>
      <div class="vn-stats-row">
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>4</span></div>
          <div class="vn-stat-label">distinct trust layers shape how buyers interpret credibility before a trial or demo is seriously considered.</div>
        </div>
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>1</span></div>
          <div class="vn-stat-label">weak structural layer can distort how the rest of the company is perceived, even when the product itself is strong.</div>
        </div>
      </div>

      <div class="vn-for-you">
        <div class="vn-for-you-label">If you are selling into regulated healthcare environments</div>
        <ul class="vn-for-you-list">
          <li>Your website is not just a brochure. It is part of the buyer’s risk assessment process.</li>
          <li>A strong product does not automatically create trust if the surrounding signals are weak or fragmented.</li>
          <li>Compliance, workflow understanding, and proof should appear as part of a coherent structure, not as isolated claims.</li>
          <li>The question is not only whether your platform is credible. It is whether that credibility is legible to the buyer early enough.</li>
        </ul>
      </div>

      <div class="vn-takeaway">
        <div class="vn-takeaway-label">The one thing to remember</div>
        <div class="vn-takeaway-text">In healthcare SaaS, buyers do not move from features to trust. They move from trust to features. If trust fails early, the rest of the buying journey never fully starts.</div>
      </div>

      <div class="vn-footer">
        <div class="vn-author">
          <strong>Dalvino Luce</strong>
          Healthcare SaaS Trust Architecture Strategist
        </div>
        <div class="vn-watermark">archoric.com</div>
      </div>

    </div>
  `,
};