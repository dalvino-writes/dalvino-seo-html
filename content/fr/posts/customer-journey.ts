export const post = {
  id: "customer-journey",
  title: "Pourquoi vos meilleurs clients ne vous trouvent pas",
  excerpt:
    "La plupart des fondateurs construisent de bons produits et investissent en marketing — puis se demandent pourquoi la croissance stagne. La réponse est presque toujours un parcours client mal conçu.",
  category: "strategy",
  type: "visual-note",
  date: "2025-02-25",
  readTime: "3 min",
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
      .vn-number { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #555; letter-spacing: 0.15em; margin-bottom: 20px; }
      .vn-h1 { font-family: 'Playfair Display', serif; font-size: clamp(38px, 5.5vw, 66px); font-weight: 900; line-height: 1.0; letter-spacing: -0.02em; color: #0a0a0a; margin-bottom: 24px; }
      .vn-lead { font-size: 15px; font-weight: 300; color: #555; max-width: 500px; line-height: 1.75; border-left: 2px solid #2D5A27; padding-left: 20px; }
      .vn-reframe { background: #0a0a0a; color: #fafafa; padding: 36px 32px; margin-bottom: 56px; }
      .vn-reframe-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #c8c8c8; margin-bottom: 16px; }
      .vn-reframe-text { font-family: 'Playfair Display', serif; font-size: clamp(16px, 2.5vw, 22px); font-weight: 700; line-height: 1.4; color: #fafafa; }
      .vn-reframe-text em { color: #7ab872; font-style: normal; }
      .vn-divider { border: none; border-top: 1px solid #c8c8c8; margin: 56px 0; }
      .vn-section-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.25em; text-transform: uppercase; color: #555; margin-bottom: 28px; }
      .vn-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid #c8c8c8; margin-bottom: 16px; }
      .vn-compare-col { padding: 28px 24px; }
      .vn-compare-col:first-child { border-right: 1px solid #c8c8c8; }
      .vn-compare-col-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 14px; }
      .vn-compare-col-label.bad { color: #999; }
      .vn-compare-col-label.good { color: #2D5A27; }
      .vn-compare-item { font-size: 13px; color: #555; line-height: 1.6; padding: 8px 0; border-bottom: 1px solid #f0f0f0; display: flex; gap: 10px; align-items: flex-start; }
      .vn-compare-item:last-child { border-bottom: none; }
      .vn-compare-col:first-child .vn-compare-item::before { content: "✕"; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #bbb; flex-shrink: 0; margin-top: 2px; }
      .vn-compare-col:last-child .vn-compare-item::before { content: "→"; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #2D5A27; flex-shrink: 0; margin-top: 2px; }
      .vn-compare-caption { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #555; letter-spacing: 0.05em; margin-bottom: 56px; padding-top: 10px; }
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
      .vn-insight { border: 1px solid #c8c8c8; border-left: 3px solid #0a0a0a; padding: 28px 24px; margin-bottom: 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
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
        <span class="vn-meta-label">Note Visuelle · Stratégie de contenu</span>
        <span class="vn-tag">Parcours Client</span>
      </div>

      <div class="vn-title-block">
        <div class="vn-number">VN 001</div>
        <h1 class="vn-h1">Pourquoi vos<br/>meilleurs clients<br/>ne vous trouvent pas.</h1>
        <p class="vn-lead">La plupart des fondateurs construisent de bons produits et investissent en marketing puis se demandent pourquoi la croissance stagne. La réponse est presque toujours un parcours client mal conçu. Voici le cadre pour y remédier.</p>
      </div>

      <div class="vn-reframe">
        <div class="vn-reframe-label">L'idée reçue fondamentale</div>
        <div class="vn-reframe-text">Un tunnel de conversion montre ce que <em>vous</em> faites pour obtenir une vente.<br/>Un parcours client montre ce que <em>eux</em> vivent avant de dire oui et après. Ce ne sont pas la même chose. Optimiser uniquement votre tunnel, c'est résoudre la moitié du problème.</div>
      </div>

      <div class="vn-section-label">01 · Tunnel vs. Parcours</div>
      <div class="vn-compare-grid">
        <div class="vn-compare-col">
          <div class="vn-compare-col-label bad">Logique tunnel</div>
          <div class="vn-compare-item">Centré sur vos étapes de conversion</div>
          <div class="vn-compare-item">S'arrête à la vente</div>
          <div class="vn-compare-item">Traite tous les prospects pareil</div>
          <div class="vn-compare-item">Optimise le volume</div>
          <div class="vn-compare-item">Ignore l'expérience post-achat</div>
        </div>
        <div class="vn-compare-col">
          <div class="vn-compare-col-label good">Logique parcours</div>
          <div class="vn-compare-item">Centré sur leur processus de décision</div>
          <div class="vn-compare-item">Continue jusqu'à la fidélité et la recommandation</div>
          <div class="vn-compare-item">Cartographie chaque étape de confiance</div>
          <div class="vn-compare-item">Optimise la valeur long terme</div>
          <div class="vn-compare-item">Transforme les clients en moteur de croissance</div>
        </div>
      </div>
      <div class="vn-compare-caption">La différence se creuse dans le temps. Les entreprises orientées parcours fidélisent mieux, dépensent moins en acquisition, et grandissent par recommandation.</div>

      <div class="vn-section-label">02 · Les Six Étapes de Tout Acheteur B2B</div>
      <div class="vn-timeline">

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Étape 01</div>
            <div class="vn-t-title">Ils réalisent qu'ils ont un problème</div>
            <div class="vn-t-desc">Avant de vous chercher, ils cherchent des réponses. C'est ici que votre contenu apparaît ou pas. La plupart des fondateurs ratent cette étape parce qu'ils ne créent que des pages de vente, pas de contenu éducatif.</div>
            <span class="vn-t-flag">Votre contenu vit ici</span>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Étape 02</div>
            <div class="vn-t-title">Ils comparent les options</div>
            <div class="vn-t-desc">Ils ont identifié 3 à 5 solutions possibles. Ils lisent, comparent, et construisent une liste interne. Les signaux de confiance, le positionnement clair, et les preuves de résultats déterminent qui reste en lice.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Étape 03</div>
            <div class="vn-t-title">Ils alignent leur équipe</div>
            <div class="vn-t-desc">En B2B, une seule personne décide rarement seule. Plusieurs parties prenantes doivent s'aligner. La marque qui facilite le plus cette vente interne avec un message clair et des études de cas précises, gagne.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Étape 04</div>
            <div class="vn-t-title">Ils testent la relation</div>
            <div class="vn-t-desc">Le premier projet ne porte jamais que sur le livrable. C'est un test de votre réactivité, de votre clarté, de votre professionnalisme. Les premières impressions post-vente sont aussi importantes que le marketing pré-vente.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Étape 05</div>
            <div class="vn-t-title">Ils rencontrent un problème</div>
            <div class="vn-t-desc">Chaque relation client traversera des frictions. Comment vous gérez ce moment avec rapidité, honnêteté, responsabilité détermine s'ils renouvellent ou partent en expliquant pourquoi.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line" style="background:transparent"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">Étape 06</div>
            <div class="vn-t-title">Ils deviennent votre département marketing</div>
            <div class="vn-t-desc">Un client qui atteint cette étape recommande sans qu'on le lui demande, défend votre marque publiquement, et revient sans avoir besoin d'un argumentaire. C'est l'étape que la plupart des fondateurs ne conçoivent pas, elle n'arrive pas par hasard.</div>
            <span class="vn-t-flag">Étape au ROI le plus élevé</span>
          </div>
        </div>

      </div>

      <div class="vn-section-label">03 · Les Quatre Moments Décisifs du Parcours</div>
      <div class="vn-insight">
        <div>
          <div class="vn-insight-q">Moment 01 · Découverte</div>
          <div class="vn-insight-a">Votre contenu répond-il exactement à la question qu'ils posent en ce moment ? Sinon, un concurrent le fait.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 02 · Premier contact</div>
          <div class="vn-insight-a">Votre ton, votre rapidité et votre clarté correspondent-ils à leurs attentes ? C'est ici que la plupart des prospects chauds se refroidissent.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 03 · Premier résultat</div>
          <div class="vn-insight-a">Votre premier livrable correspond-il à la promesse faite lors de la conversation commerciale ? Les attentes posées avant la vente doivent être tenues après.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 04 · Première friction</div>
          <div class="vn-insight-a">Quand quelque chose va mal et ça arrivera, votre réponse construit-elle la confiance ou la détruit-elle ? Ce moment définit la fidélité plus que n'importe quel succès.</div>
        </div>
      </div>

      <div class="vn-section-label">04 · Le Facteur IA Qui Change Tout</div>
      <div class="vn-stats-row">
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>80</span>%</div>
          <div class="vn-stat-label">des acheteurs tech B2B utilisent désormais des outils IA pour rechercher des prestataires avant tout contact humain.</div>
        </div>
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>40</span>%</div>
          <div class="vn-stat-label">plus probable : un contenu structuré en segments clairs est cité par les moteurs IA plutôt que de la prose dense et continue.</div>
        </div>
      </div>

      <div class="vn-for-you">
        <div class="vn-for-you-label">Ce que ça signifie si vous construisez une croissance organique</div>
        <ul class="vn-for-you-list">
          <li>L'étape 01 se passe maintenant dans une fenêtre de chat IA, pas sur Google. Votre contenu doit être structuré pour être cité par l'IA, pas seulement indexé.</li>
          <li>Si vous n'avez qu'une page d'accueil et une page services, vous êtes invisible à l'étape la plus critique du parcours.</li>
          <li>Le contenu éducatif (articles, frameworks, notes visuelles) est le seul actif qui se capitalise. Les publicités s'arrêtent quand vous arrêtez de payer. Le contenu, non.</li>
          <li>Votre expérience post-vente est un problème de stratégie de contenu. Les études de cas, la clarté de l'onboarding, et les communications de suivi sont tous des points de contact du parcours.</li>
        </ul>
      </div>

      <div class="vn-takeaway">
        <div class="vn-takeaway-label">La chose essentielle à retenir</div>
        <div class="vn-takeaway-text">Le parcours de votre client commence bien avant qu'il arrive sur votre site et se termine bien après qu'il achète. Les fondateurs qui gagnent en croissance organique conçoivent l'ensemble du parcours, pas seulement le moment de la vente.</div>
      </div>

      <div class="vn-footer">
        <div class="vn-author">
          <strong>Dalvino Luce</strong>
          Rédacteur Web · Stratégie de contenu
        </div>
        <div class="vn-watermark">dalvinoluce.com</div>
      </div>

    </div>
  `,
};
