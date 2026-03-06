(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61322,e=>{"use strict";let t={id:"customer-journey",title:"Pourquoi vos meilleurs clients ne vous trouvent pas",excerpt:"La plupart des fondateurs construisent de bons produits et investissent en marketing — puis se demandent pourquoi la croissance stagne. La réponse est presque toujours un parcours client mal conçu.",category:"strategy",type:"visual-note",date:"2025-02-25",readTime:"3 min",htmlContent:`
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
        <span class="vn-meta-label">Note Visuelle \xb7 Strat\xe9gie de contenu</span>
        <span class="vn-tag">Parcours Client</span>
      </div>

      <div class="vn-title-block">
        <div class="vn-number">VN 001</div>
        <h1 class="vn-h1">Pourquoi vos<br/>meilleurs clients<br/>ne vous trouvent pas.</h1>
        <p class="vn-lead">La plupart des fondateurs construisent de bons produits et investissent en marketing puis se demandent pourquoi la croissance stagne. La r\xe9ponse est presque toujours un parcours client mal con\xe7u. Voici le cadre pour y rem\xe9dier.</p>
      </div>

      <div class="vn-reframe">
        <div class="vn-reframe-label">L'id\xe9e re\xe7ue fondamentale</div>
        <div class="vn-reframe-text">Un tunnel de conversion montre ce que <em>vous</em> faites pour obtenir une vente.<br/>Un parcours client montre ce que <em>eux</em> vivent avant de dire oui et apr\xe8s. Ce ne sont pas la m\xeame chose. Optimiser uniquement votre tunnel, c'est r\xe9soudre la moiti\xe9 du probl\xe8me.</div>
      </div>

      <div class="vn-section-label">01 \xb7 Tunnel vs. Parcours</div>
      <div class="vn-compare-grid">
        <div class="vn-compare-col">
          <div class="vn-compare-col-label bad">Logique tunnel</div>
          <div class="vn-compare-item">Centr\xe9 sur vos \xe9tapes de conversion</div>
          <div class="vn-compare-item">S'arr\xeate \xe0 la vente</div>
          <div class="vn-compare-item">Traite tous les prospects pareil</div>
          <div class="vn-compare-item">Optimise le volume</div>
          <div class="vn-compare-item">Ignore l'exp\xe9rience post-achat</div>
        </div>
        <div class="vn-compare-col">
          <div class="vn-compare-col-label good">Logique parcours</div>
          <div class="vn-compare-item">Centr\xe9 sur leur processus de d\xe9cision</div>
          <div class="vn-compare-item">Continue jusqu'\xe0 la fid\xe9lit\xe9 et la recommandation</div>
          <div class="vn-compare-item">Cartographie chaque \xe9tape de confiance</div>
          <div class="vn-compare-item">Optimise la valeur long terme</div>
          <div class="vn-compare-item">Transforme les clients en moteur de croissance</div>
        </div>
      </div>
      <div class="vn-compare-caption">La diff\xe9rence se creuse dans le temps. Les entreprises orient\xe9es parcours fid\xe9lisent mieux, d\xe9pensent moins en acquisition, et grandissent par recommandation.</div>

      <div class="vn-section-label">02 \xb7 Les Six \xc9tapes de Tout Acheteur B2B</div>
      <div class="vn-timeline">

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">\xc9tape 01</div>
            <div class="vn-t-title">Ils r\xe9alisent qu'ils ont un probl\xe8me</div>
            <div class="vn-t-desc">Avant de vous chercher, ils cherchent des r\xe9ponses. C'est ici que votre contenu appara\xeet ou pas. La plupart des fondateurs ratent cette \xe9tape parce qu'ils ne cr\xe9ent que des pages de vente, pas de contenu \xe9ducatif.</div>
            <span class="vn-t-flag">Votre contenu vit ici</span>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">\xc9tape 02</div>
            <div class="vn-t-title">Ils comparent les options</div>
            <div class="vn-t-desc">Ils ont identifi\xe9 3 \xe0 5 solutions possibles. Ils lisent, comparent, et construisent une liste interne. Les signaux de confiance, le positionnement clair, et les preuves de r\xe9sultats d\xe9terminent qui reste en lice.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">\xc9tape 03</div>
            <div class="vn-t-title">Ils alignent leur \xe9quipe</div>
            <div class="vn-t-desc">En B2B, une seule personne d\xe9cide rarement seule. Plusieurs parties prenantes doivent s'aligner. La marque qui facilite le plus cette vente interne avec un message clair et des \xe9tudes de cas pr\xe9cises, gagne.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">\xc9tape 04</div>
            <div class="vn-t-title">Ils testent la relation</div>
            <div class="vn-t-desc">Le premier projet ne porte jamais que sur le livrable. C'est un test de votre r\xe9activit\xe9, de votre clart\xe9, de votre professionnalisme. Les premi\xe8res impressions post-vente sont aussi importantes que le marketing pr\xe9-vente.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot"></div><div class="vn-t-line"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">\xc9tape 05</div>
            <div class="vn-t-title">Ils rencontrent un probl\xe8me</div>
            <div class="vn-t-desc">Chaque relation client traversera des frictions. Comment vous g\xe9rez ce moment avec rapidit\xe9, honn\xeatet\xe9, responsabilit\xe9 d\xe9termine s'ils renouvellent ou partent en expliquant pourquoi.</div>
          </div>
        </div>

        <div class="vn-timeline-row">
          <div class="vn-t-marker"><div class="vn-t-dot green"></div><div class="vn-t-line" style="background:transparent"></div></div>
          <div class="vn-t-content">
            <div class="vn-t-stage">\xc9tape 06</div>
            <div class="vn-t-title">Ils deviennent votre d\xe9partement marketing</div>
            <div class="vn-t-desc">Un client qui atteint cette \xe9tape recommande sans qu'on le lui demande, d\xe9fend votre marque publiquement, et revient sans avoir besoin d'un argumentaire. C'est l'\xe9tape que la plupart des fondateurs ne con\xe7oivent pas, elle n'arrive pas par hasard.</div>
            <span class="vn-t-flag">\xc9tape au ROI le plus \xe9lev\xe9</span>
          </div>
        </div>

      </div>

      <div class="vn-section-label">03 \xb7 Les Quatre Moments D\xe9cisifs du Parcours</div>
      <div class="vn-insight">
        <div>
          <div class="vn-insight-q">Moment 01 \xb7 D\xe9couverte</div>
          <div class="vn-insight-a">Votre contenu r\xe9pond-il exactement \xe0 la question qu'ils posent en ce moment ? Sinon, un concurrent le fait.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 02 \xb7 Premier contact</div>
          <div class="vn-insight-a">Votre ton, votre rapidit\xe9 et votre clart\xe9 correspondent-ils \xe0 leurs attentes ? C'est ici que la plupart des prospects chauds se refroidissent.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 03 \xb7 Premier r\xe9sultat</div>
          <div class="vn-insight-a">Votre premier livrable correspond-il \xe0 la promesse faite lors de la conversation commerciale ? Les attentes pos\xe9es avant la vente doivent \xeatre tenues apr\xe8s.</div>
        </div>
        <div>
          <div class="vn-insight-q">Moment 04 \xb7 Premi\xe8re friction</div>
          <div class="vn-insight-a">Quand quelque chose va mal et \xe7a arrivera, votre r\xe9ponse construit-elle la confiance ou la d\xe9truit-elle ? Ce moment d\xe9finit la fid\xe9lit\xe9 plus que n'importe quel succ\xe8s.</div>
        </div>
      </div>

      <div class="vn-section-label">04 \xb7 Le Facteur IA Qui Change Tout</div>
      <div class="vn-stats-row">
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>80</span>%</div>
          <div class="vn-stat-label">des acheteurs tech B2B utilisent d\xe9sormais des outils IA pour rechercher des prestataires avant tout contact humain.</div>
        </div>
        <div class="vn-stat-block">
          <div class="vn-stat-number"><span>40</span>%</div>
          <div class="vn-stat-label">plus probable : un contenu structur\xe9 en segments clairs est cit\xe9 par les moteurs IA plut\xf4t que de la prose dense et continue.</div>
        </div>
      </div>

      <div class="vn-for-you">
        <div class="vn-for-you-label">Ce que \xe7a signifie si vous construisez une croissance organique</div>
        <ul class="vn-for-you-list">
          <li>L'\xe9tape 01 se passe maintenant dans une fen\xeatre de chat IA, pas sur Google. Votre contenu doit \xeatre structur\xe9 pour \xeatre cit\xe9 par l'IA, pas seulement index\xe9.</li>
          <li>Si vous n'avez qu'une page d'accueil et une page services, vous \xeates invisible \xe0 l'\xe9tape la plus critique du parcours.</li>
          <li>Le contenu \xe9ducatif (articles, frameworks, notes visuelles) est le seul actif qui se capitalise. Les publicit\xe9s s'arr\xeatent quand vous arr\xeatez de payer. Le contenu, non.</li>
          <li>Votre exp\xe9rience post-vente est un probl\xe8me de strat\xe9gie de contenu. Les \xe9tudes de cas, la clart\xe9 de l'onboarding, et les communications de suivi sont tous des points de contact du parcours.</li>
        </ul>
      </div>

      <div class="vn-takeaway">
        <div class="vn-takeaway-label">La chose essentielle \xe0 retenir</div>
        <div class="vn-takeaway-text">Le parcours de votre client commence bien avant qu'il arrive sur votre site et se termine bien apr\xe8s qu'il ach\xe8te. Les fondateurs qui gagnent en croissance organique con\xe7oivent l'ensemble du parcours, pas seulement le moment de la vente.</div>
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