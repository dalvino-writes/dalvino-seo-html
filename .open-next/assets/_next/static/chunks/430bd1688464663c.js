(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75584,e=>{"use strict";let t={id:"customer-journey",title:"Why Your Best Customers Never Find You",excerpt:"Most founders build great products and invest in marketing then wonder why growth stalls. The answer is almost always a broken customer journey.",category:"strategy",type:"visual-note",date:"2025-02-25",readTime:"3 min",htmlContent:`
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
        <span class="vn-meta-label">Visual Note \xb7 Content Strategy</span>
        <span class="vn-tag">Customer Journey</span>
      </div>

      <div class="vn-title-block">
        <div class="vn-number">VN 001</div>
        <h1 class="vn-h1">Why Your Best<br/>Customers Never<br/>Find You.</h1>
        <p class="vn-lead">Most founders build great products and invest in marketing then wonder why growth stalls. The answer is almost always a broken customer journey. Here's the framework to fix it.</p>
      </div>

      <div class="vn-reframe">
        <div class="vn-reframe-label">The Core Misconception</div>
        <div class="vn-reframe-text">A marketing funnel shows what <em>you</em> do to get a sale.<br/>A customer journey shows what <em>they</em> experience before saying yes and after. These are not the same thing. Optimizing only your funnel means fixing half the problem.</div>
      </div>

      <div class="vn-section-label">01 \xb7 Funnel Thinking vs. Journey Thinking</div>
      <div class="vn-compare-grid">
        <div class="vn-compare-col">
          <div class="vn-compare-col-label bad">Funnel mindset</div>
          <div class="vn-compare-item">Focused on your conversion steps</div>
          <div class="vn-compare-item">Ends at the sale</div>
          <div class="vn-compare-item">Treats all leads the same</div>
          <div class="vn-compare-item">Optimizes for volume</div>
          <div class="vn-compare-item">Ignores post-purchase experience</div>
        </div>
        <div class="vn-compare-col">
          <div class="vn-compare-col-label good">Journey mindset</div>
          <div class="vn-compare-item">Focused on their decision process</div>
          <div class="vn-compare-item">Continues through loyalty and referral</div>
          <div class="vn-compare-item">Maps each stage of trust-building</div>
          <div class="vn-compare-item">Optimizes for long-term value</div>
          <div class="vn-compare-item">Turns clients into growth engines</div>
        </div>
      </div>
      <div class="vn-compare-caption">The difference compounds over time. Journey-led companies retain more, spend less on acquisition, and grow through referrals.</div>

      <div class="vn-section-label">02 \xb7 The Six Stages Every B2B Buyer Goes Through</div>
      <div class="vn-timeline">

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Stage 01</div>
            <div class="vn-t-title">They realize they have a problem</div>
            <div class="vn-t-desc">Before they search for you, they're searching for answers. This is where your content either shows up or doesn't. Most founders miss this stage entirely because they only create sales pages, not educational content.</div>
            <span class="vn-t-flag">Your content lives here</span>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Stage 02</div>
            <div class="vn-t-title">They compare options</div>
            <div class="vn-t-desc">They've identified 3–5 possible solutions. They're reading, comparing, and building an internal shortlist. Trust signals, clear positioning, and proof-of-results determine who makes the cut.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Stage 03</div>
            <div class="vn-t-title">They align with their team</div>
            <div class="vn-t-desc">In B2B, one person rarely decides alone. Multiple stakeholders need to agree. The brand that makes this internal sell easiest with clear messaging and sharp case studies wins.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Stage 04</div>
            <div class="vn-t-title">They test the relationship</div>
            <div class="vn-t-desc">The first project is never just about the deliverable. It's a test of your responsiveness, clarity, and professionalism. First impressions post-sale are as critical as pre-sale marketing.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Stage 05</div>
            <div class="vn-t-title">They hit a problem</div>
            <div class="vn-t-desc">Every client relationship will face friction. How you handle that moment, speed, honesty, ownership determines whether they renew or leave and tell others why.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line" style="background:transparent"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Stage 06</div>
            <div class="vn-t-title">They become your marketing department</div>
            <div class="vn-t-desc">A client who reaches this stage refers others without being asked, defends your brand publicly, and comes back without needing a sales pitch. This is the stage most founders don't design for, it doesn't happen by accident.</div>
            <span class="vn-t-flag">Highest ROI stage</span>
          </div>
        </div>

      </div>

      <div class="vn-section-label">03 \xb7 The Four Moments That Make or Break the Journey</div>
      <div class="vn-insight">
        <div>
          <div class="vn-insight-q">Moment 01 \xb7 Discovery</div>
          <div class="vn-insight-a">Does your content answer the exact question they're asking right now? If not, a competitor does.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 02 \xb7 First contact</div>
          <div class="vn-insight-a">Does your tone, speed, and clarity match what they expected? This is where most warm leads go cold.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 03 \xb7 First result</div>
          <div class="vn-insight-a">Does your first deliverable match the promise you made during the sales conversation? Expectations set before the sale must be met after it.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 04 \xb7 First friction</div>
          <div class="vn-insight-a">When something goes wrong and it will, does your response build trust or destroy it? This moment determines loyalty more than any success.</div>
        </div>
      </div>

      <div class="vn-section-label">04 \xb7 The AI Factor That Changes Everything</div>
      <div class="vn-stats-row">
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>80</span>%</div>
          <div class="vn-stat-label">of B2B tech buyers now research vendors using AI tools before making any human contact with a brand.</div>
        </div>
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>40</span>%</div>
          <div class="vn-stat-label">more likely: structured content in clear segments gets cited by AI search engines over dense, unbroken prose.</div>
        </div>
      </div>

      <div class="vn-for-you">
        <div class="vn-for-you-label">What this means if you're a founder building organic growth</div>
        <ul class="vn-for-you-list">
          <li>Stage 01 now happens inside an AI chat window, not on Google. Your content needs to be structured for AI to cite it, not just indexed.</li>
          <li>If you only have a homepage and a services page, you're invisible at the most critical stage of the journey.</li>
          <li>Educational content articles, frameworks, visual notes is the only asset that compounds. Ads stop when you stop paying. Content doesn't.</li>
          <li>Your post-sale experience is a content strategy problem. Case studies, onboarding clarity, and follow-up communication are all journey touchpoints.</li>
        </ul>
      </div>

      <div class="vn-takeaway">
        <div class="vn-takeaway-label">The one thing to remember</div>
        <div class="vn-takeaway-text">Your customer's journey starts long before they reach your website and ends long after they buy. The founders who win organic growth design for the whole arc, not just the moment of sale.</div>
      </div>

      <div class="vn-footer">
        <div class="vn-author">
          <strong>Dalvino Luce</strong>
          R\xe9dacteur Web \xb7 Strat\xe9gie de contenu
        </div>
        <div class="vn-watermark">dalvinoluce.com</div>
      </div>

    </div>
  `};e.s(["post",0,t])}]);