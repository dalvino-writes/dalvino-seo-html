const clientData = {
  identity: {
    clientName: "TherapyNotes",
    clientSlug: "client-therapynotes",
    websiteUrl: "https://www.therapynotes.com",
    preparedFor: "Leadership Team",
    auditDate: "March 2026",
    clientSegment: "Healthcare SaaS",
    clientRegion: "United States",
    adminMode: false,
    presentationLockEnabled: false,
    geminiApiKey: "",
    geminiModel: "gemini-2.5-flash-preview-09-2025"
  },

  scores: {
    regulatory: 4,
    operational: 2,
    structural: 1,
    validation: 2
  },

  journey: {
    leak1: "Compliance Opacity",
    thought1: "Is this safe enough to even consider?",
    leak2: "Generic Workflow",
    thought2: "This doesn’t look built for our reality.",
    leak3: "Weak Proof",
    thought3: "Where is the evidence this works?",
    leak4: "Structural Fragility",
    thought4: "I'm choosing the competitor; they look stable."
  },

  impact: {
    currencySymbol: "$",
    monthlyTraffic: 1000,
    currentConversionPercent: 2.0,
    annualContractValue: 1500,
    demoToClosePercent: 5,
    growthScaleTarget: 10000
  },

  methodology: {
    intro:
      "This document is a preliminary diagnostic derived from the Trust Deficit Audit™ framework. Its purpose is to surface likely trust friction, structural weaknesses, and directional impact before a deeper diagnostic engagement.",
    scoringBasis:
      "This pre-audit draws from a structured four-layer evaluation model used to identify likely trust weaknesses across the buyer journey.",
    scope:
      "This document evaluates how trust is communicated and perceived during buyer evaluation. It does not certify legal compliance, replace legal review, or serve as a regulatory opinion.",
    closing:
      "This document surfaces where trust likely breaks. The full Trust Deficit Audit defines the deeper diagnostic path, and OAA provides the implementation layer for recovery.",
    pillars: [
      {
        title: "1. Layered Trust Evaluation",
        text: "Buyer trust is formed through the accumulation of signals across multiple layers, not through isolated claims. When those layers are misaligned, buyers experience friction, hesitation, or silent disengagement before demo booking."
      },
      {
        title: "2. Full Trust Deficit Audit",
        text: "The full Trust Deficit Audit extends beyond this preliminary diagnostic through deeper scoring, structural diagnosis, trust profile confirmation, and more precise mapping of how trust breakdown affects buyer progression."
      },
      {
        title: "3. Organic Authority Architecture (OAA)",
        text: "Where implementation is required, trust recovery is executed through Organic Authority Architecture (OAA), Archoric’s system for structuring authority signals across the full evaluation journey."
      }
    ]
  }
};

window.archoricAuditUtils = (() => {
  const trustProfiles = {
    "High-Trust Engine": {
      desc: "Trust signals are structurally aligned across all four layers. Buyers encounter a coherent, stable, and convincing authority system before demo engagement.",
      weakness: "Minor optimization friction",
      priority: "Conversion path refinement",
      leakRange: [5, 15]
    },
    "Validation-Constrained": {
      desc: "The system is fundamentally strong, but external proof does not carry enough weight to fully validate decision confidence.",
      weakness: "Proof & Validation gap",
      priority: "Institutional proof reinforcement",
      leakRange: [20, 35]
    },
    "Compliance-Heavy": {
      desc: "Regulatory trust is visible, but operational and structural confidence remains underdeveloped. Buyers may perceive the platform as safe but unclear.",
      weakness: "Operational translation deficit",
      priority: "Workflow credibility alignment",
      leakRange: [30, 50]
    },
    "Product-Centric Blind Spot": {
      desc: "The platform explains what it does, but fails to establish enough trust to move buyers toward conviction. Product clarity outpaces trust formation.",
      weakness: "Trust framing deficiency",
      priority: "Validation and authority layering",
      leakRange: [35, 55]
    },
    "Fragmented Authority": {
      desc: "Signals exist, but they do not connect into a stable authority structure. Buyers encounter fragmented trust and drift toward competitor confidence.",
      weakness: "Structural authority breakdown",
      priority: "Authority system unification",
      leakRange: [40, 60]
    },
    "Surface / Underdeveloped Trust System": {
      desc: "Trust signals are present at a basic level, but the overall system remains underdeveloped. Buyers may perceive potential, but not enough certainty to progress confidently.",
      weakness: "General trust immaturity",
      priority: "Foundational trust strengthening",
      leakRange: [20, 35]
    }
  };

  function clampScore(score) {
    const n = parseInt(score, 10);
    if (Number.isNaN(n)) return 0;
    return Math.max(0, Math.min(5, n));
  }

  function getScores(scoreSource = clientData.scores) {
    const scores = {
      regulatory: clampScore(scoreSource.regulatory),
      operational: clampScore(scoreSource.operational),
      structural: clampScore(scoreSource.structural),
      validation: clampScore(scoreSource.validation)
    };

    return {
      ...scores,
      array: [
        scores.regulatory,
        scores.operational,
        scores.structural,
        scores.validation
      ],
      total:
        scores.regulatory +
        scores.operational +
        scores.structural +
        scores.validation
    };
  }

  function identifyProfile(input) {
    const arr = Array.isArray(input)
      ? input
      : [
          clampScore(input?.regulatory),
          clampScore(input?.operational),
          clampScore(input?.structural),
          clampScore(input?.validation)
        ];

    const [R, O, S, V] = arr;

    if (R >= 4 && O >= 4 && S >= 3 && V >= 3) return "High-Trust Engine";
    if (R >= 4 && O >= 4 && S >= 3 && V <= 2) return "Validation-Constrained";
    if (R >= 4 && R - O >= 2 && R - S >= 2 && R - V >= 2) return "Compliance-Heavy";
    if (O >= 4 && O - R >= 2 && O - V >= 2) return "Product-Centric Blind Spot";
    if ((((R >= 3 && O >= 3) || R >= 4 || O >= 4) && S <= 2 && V <= 2) || (S <= 1 && R >= 4 && O >= 4)) {
      return "Fragmented Authority";
    }
    return "Surface / Underdeveloped Trust System";
  }

  function computeLeakPercent(input) {
    const scores = Array.isArray(input) ? input : getScores(input).array;
    const profileName = identifyProfile(scores);
    const profile = trustProfiles[profileName];
    const twi = (5 - scores[2]) + (5 - scores[3]);
    return Math.round(
      profile.leakRange[0] +
        (profile.leakRange[1] - profile.leakRange[0]) * (twi / 10)
    );
  }

  function getClassification(total) {
    if (total >= 15) {
      return {
        label: "High Trust",
        note: "Trust signals are structurally aligned and reinforce buyer confidence before sales engagement."
      };
    }
    if (total >= 11) {
      return {
        label: "Moderate Trust",
        note: "Trust is present, but confidence is not yet fully stabilized across the evaluation path."
      };
    }
    if (total >= 6) {
      return {
        label: "Fragile Trust",
        note: "Trust formation is inconsistent and likely introduces hesitation before demo readiness."
      };
    }
    return {
      label: "High Risk",
      note: "Trust breakdown is severe enough to create meaningful commercial friction before buyer engagement."
    };
  }

  function getAccessConfig() {
    const runtime = window.ARCHORIC_RUNTIME || {};
    return {
      adminMode: !!clientData.identity.adminMode,
      companyName: clientData.identity.clientName,
      accessKey: `archoric_audit_unlocked_${clientData.identity.clientSlug}`,
      requirePresentationUnlock:
        !!runtime.requirePresentationUnlock && !!runtime.accessPassword,
      runtimePassword: runtime.accessPassword || "",
      apiKey: clientData.identity.geminiApiKey || "",
      model: clientData.identity.geminiModel || "gemini-2.5-flash-preview-09-2025"
    };
  }

  return {
    trustProfiles,
    clampScore,
    getScores,
    identifyProfile,
    computeLeakPercent,
    getClassification,
    getAccessConfig
  };
})();