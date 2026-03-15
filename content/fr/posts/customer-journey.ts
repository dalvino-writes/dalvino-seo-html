export const post = {
  id: "customer-journey",
  title: "Pourquoi la confiance échoue avant la démo",
  excerpt:
    "Beaucoup de fondateurs en Healthcare SaaS pensent que les acheteurs évaluent d'abord les fonctionnalités. En environnement réglementé, ils évaluent d'abord le risque.",
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
        <span class="vn-meta-label">Note Visuelle · Confiance en Healthcare SaaS</span>
        <span class="vn-tag">Trust Architecture</span>
      </div>

      <div class="vn-title-block">
        <div class="vn-number">VN 001</div>
        <h1 class="vn-h1">Pourquoi la<br/>confiance échoue<br/>avant la démo.</h1>
        <p class="vn-lead">Beaucoup de fondateurs en Healthcare SaaS pensent que le parcours d’achat commence à la démo. En environnement réglementé, l’évaluation réelle commence plus tôt. Les acheteurs évaluent le risque avant d’évaluer la profondeur du produit.</p>
      </div>

      <div class="vn-reframe">
        <div class="vn-reframe-label">Le vrai renversement</div>
        <div class="vn-reframe-text">Un logiciel de santé n’est presque jamais évalué d’abord comme une simple liste de fonctionnalités. Il est filtré à travers la <em>perception du risque</em>, la crédibilité opérationnelle et les signaux de confiance. Si ces signaux sont faibles, la démo n’a jamais vraiment sa chance.</div>
      </div>

      <div class="vn-section-label">01 · Évaluation des fonctionnalités vs. évaluation du risque</div>
      <div class="vn-compare-grid">
        <div class="vn-compare-col">
          <div class="vn-compare-col-label bad">Ce que les fondateurs supposent</div>
          <div class="vn-compare-item">Les acheteurs comparent d’abord les fonctionnalités</div>
          <div class="vn-compare-item">Une bonne démo peut corriger un mauvais positionnement</div>
          <div class="vn-compare-item">La conformité est un sujet de fin de cycle</div>
          <div class="vn-compare-item">La confiance relève surtout du branding ou du design</div>
          <div class="vn-compare-item">L’intérêt se transforme naturellement en pipeline</div>
        </div>
        <div class="vn-compare-col">
          <div class="vn-compare-col-label good">Ce que les acheteurs font réellement</div>
          <div class="vn-compare-item">Ils scannent le risque avant de s’engager sérieusement</div>
          <div class="vn-compare-item">Ils utilisent les signaux de confiance pour décider qui mérite d’être évalué</div>
          <div class="vn-compare-item">Ils cherchent très tôt des preuves de compréhension réglementaire</div>
          <div class="vn-compare-item">Ils lisent une structure faible comme un risque opérationnel</div>
          <div class="vn-compare-item">Ils écartent des vendeurs avant la démo si la confiance semble incomplète</div>
        </div>
      </div>
      <div class="vn-compare-caption">Le premier filtre n’est pas toujours « ce produit peut-il faire le travail ? » mais souvent « cette entreprise semble-t-elle assez sûre pour aller plus loin ? »</div>

      <div class="vn-section-label">02 · Les Quatre Couches que les acheteurs lisent avant d’acheter</div>
      <div class="vn-timeline">

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Couche 01</div>
            <div class="vn-t-title">Compréhension réglementaire</div>
            <div class="vn-t-desc">L’entreprise montre-t-elle qu’elle comprend l’environnement de conformité dans lequel elle vend ? Pas par des formulations vagues, mais par des signes visibles de compréhension réelle du domaine.</div>
            <span class="vn-t-flag">La confiance commence ici</span>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Couche 02</div>
            <div class="vn-t-title">Confiance liée aux données</div>
            <div class="vn-t-desc">L’acheteur comprend-il rapidement comment les informations sensibles sont gérées, protégées et encadrées ? Le silence à ce niveau crée très vite de l’anxiété.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Couche 03</div>
            <div class="vn-t-title">Crédibilité opérationnelle</div>
            <div class="vn-t-desc">Le produit et le message reflètent-ils réellement la logique de travail des cliniques, cabinets ou équipes de santé ? Les acheteurs recherchent une vraie maîtrise opérationnelle, pas un langage SaaS générique.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line" style="background:transparent"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Couche 04</div>
            <div class="vn-t-title">Preuves structurelles</div>
            <div class="vn-t-desc">Une fois les premières couches crédibles, les acheteurs cherchent du renfort : preuve, clarté, autorité et cohérence tout au long du parcours. C’est ici que la confiance se met à se cumuler au lieu de fuir.</div>
            <span class="vn-t-flag">Couche de consolidation</span>
          </div>
        </div>

      </div>

      <div class="vn-section-label">03 · Les Quatre Endroits où la confiance casse le plus souvent</div>
      <div class="vn-insight">
        <div>
          <div class="vn-insight-q">Rupture 01 · Positionnement</div>
          <div class="vn-insight-a">L’entreprise dit servir la santé, mais le message pourrait s’appliquer à n’importe quel SaaS. Les acheteurs y lisent une distance avec leur réalité.</div>
        </div>
        <div>
          <div class="vn-insight-q">Rupture 02 · Langage de conformité</div>
          <div class="vn-insight-a">Les affirmations sont vagues, génériques ou enfouies. Même avec un bon produit, l’architecture de l’information échoue à communiquer la sécurité.</div>
        </div>
        <div>
          <div class="vn-insight-q">Rupture 03 · Décalage opérationnel</div>
          <div class="vn-insight-a">Le copy parle un langage logiciel abstrait au lieu des vraies pressions de workflow que les acheteurs vivent chaque jour.</div>
        </div>
        <div>
          <div class="vn-insight-q">Rupture 04 · Manque de preuves</div>
          <div class="vn-insight-a">Il n’existe pas de pont clair entre les affirmations et les éléments qui les soutiennent. Sans renfort visible, les acheteurs choisissent la prudence.</div>
        </div>
      </div>

      <div class="vn-section-label">04 · Ce que cela signifie pour les fondateurs Healthcare SaaS</div>
      <div class="vn-stats-row">
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>4</span></div>
          <div class="vn-stat-label">couches distinctes de confiance structurent la manière dont les acheteurs interprètent la crédibilité avant même qu’une démo ou un essai soit sérieusement envisagé.</div>
        </div>
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>1</span></div>
          <div class="vn-stat-label">seule couche structurellement faible peut dégrader la perception de l’ensemble, même quand le produit lui-même est solide.</div>
        </div>
      </div>

      <div class="vn-for-you">
        <div class="vn-for-you-label">Si vous vendez dans un environnement de santé réglementé</div>
        <ul class="vn-for-you-list">
          <li>Votre site n’est pas une simple brochure. Il fait partie du processus d’évaluation du risque chez l’acheteur.</li>
          <li>Un bon produit ne crée pas automatiquement la confiance si les signaux autour de lui sont faibles ou fragmentés.</li>
          <li>La conformité, la compréhension des workflows et les preuves doivent apparaître comme une structure cohérente, pas comme des affirmations isolées.</li>
          <li>La vraie question n’est pas seulement de savoir si votre plateforme est crédible, mais si cette crédibilité est lisible assez tôt pour l’acheteur.</li>
        </ul>
      </div>

      <div class="vn-takeaway">
        <div class="vn-takeaway-label">La chose essentielle à retenir</div>
        <div class="vn-takeaway-text">En Healthcare SaaS, les acheteurs ne vont pas des fonctionnalités vers la confiance. Ils vont de la confiance vers les fonctionnalités. Si la confiance échoue tôt, le reste du parcours d’achat ne démarre jamais vraiment.</div>
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