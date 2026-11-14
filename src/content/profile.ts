import standingPortrait from "@/assets/bonface-standing.jpg.asset.json";
import seatedPortrait from "@/assets/bonface-seated.jpg.asset.json";
import officeBooks from "@/assets/finance-office-books.jpg";
import graduationScroll from "@/assets/graduation-scroll.jpg";
/** Portfolio content from the supplied Bonface Mburu mockup. */
export const profile = {
  "name": "Bonface Mburu Mwangi",
  "shortName": "Bonface Mburu",
  "initials": "BM",
  "title": "Finance & Audit Leadership",
  "credentialsLine": "B.Com · CPA Section 4 (partially completed)",
  "location": "Kenya · Open to global opportunities",
  "headline": "Making financial insight work for business.",
  "intro": "I am Bonface Mburu Mwangi — a finance, accounting and audit leader who brings together strong financial controls, operational understanding and data-led analysis to help organisations see risk clearly, strengthen accountability and make better decisions.",
  "cvUrl": "",
  "photoUrl": seatedPortrait.url,
  "contact": {
    "email": "bonfacemburu254@gmail.com",
    "phone": "+254743792926",
    "whatsapp": "254743792926",
    "linkedin": ""
  }
};

export const about = {
  "introduction": "I am a finance, accounting and audit professional with experience across FMCG distribution, wholesale, retail and business operations. My work sits at the intersection of financial discipline, internal assurance and practical business improvement.",
  "journey": "In my current role as Head of Audit at Gilanis Distributors Limited, I provide oversight of internal audit and inventory audit activities, assess the effectiveness of controls, review operational risks and present actionable findings to senior leadership. I work closely with teams across the organisation to strengthen processes, improve visibility and support accountability.",
  "philosophy": "Good financial leadership is not only about reporting the numbers. It is about understanding what they mean — and what the organisation should do next.",
  "values": [
    {
      "title": "Control & accountability",
      "text": "Reviewing processes, identifying exposure and following through on corrective action."
    },
    {
      "title": "Insight from data",
      "text": "Turning ERP records and performance information into useful management visibility."
    },
    {
      "title": "People & collaboration",
      "text": "Coordinating teams and engaging leaders, branch managers and other stakeholders."
    },
    {
      "title": "Practical solutions",
      "text": "Addressing root causes and strengthening procedures, reporting and business workflows."
    }
  ],
  "interests": [
    "Internal assurance",
    "Business intelligence",
    "Operational improvement"
  ]
};

export const executiveSummary = "My approach combines a strong grounding in accounting and reconciliation with hands-on use of ERP platforms, business intelligence and spreadsheet analysis. I am particularly interested in translating complex financial and operational information into clear recommendations that management can act on.";

export const highlights = [
  {
    "value": "11–15",
    "label": "Years of relevant experience (self-reported)"
  },
  {
    "value": "58 sites",
    "label": "Covered in a subscriber performance reporting example"
  },
  {
    "value": "Multi-branch",
    "label": "Stock assurance and operational audit exposure"
  },
  {
    "value": "Data-led",
    "label": "ERP, dashboards and analytical reporting"
  }
];

export const expertise: { key: ExpertiseKey; title: string; text: string; confirmed: boolean }[] = [
  {
    "key": "reporting",
    "title": "Accounting & reporting",
    "text": "General ledger management, financial statements, management accounts, month-end close, payroll accounting and balance-sheet reconciliations.",
    "confirmed": true
  },
  {
    "key": "audit",
    "title": "Audit & internal controls",
    "text": "Internal audit, audit planning, control reviews, audit evidence, investigation support, corrective-action tracking and governance reporting.",
    "confirmed": true
  },
  {
    "key": "cost",
    "title": "Inventory & cost control",
    "text": "Stock verification, inventory reconciliations, movement analysis, stock variance investigations, warehouse controls and cost awareness.",
    "confirmed": true
  },
  {
    "key": "fpa",
    "title": "Planning & performance",
    "text": "Budgeting, forecasting, cash-flow management, working capital, profitability analysis, financial modelling and business performance reviews.",
    "confirmed": true
  },
  {
    "key": "tax",
    "title": "Tax, risk & compliance",
    "text": "VAT, PAYE and tax reporting support, statutory documentation, risk assessment, fraud-prevention controls and policy compliance.",
    "confirmed": true
  },
  {
    "key": "advisory",
    "title": "Commercial insight",
    "text": "Variance analysis, cost structures, supplier and customer balances, operational efficiency and evidence-led recommendations for management.",
    "confirmed": true
  }
];

export const experience = [
  {
    "organisation": "Gilanis Distributors Limited · FMCG, Distribution & Supply Chain",
    "title": "Head of Audit",
    "period": "2026 – Present",
    "responsibilities": [
      "Lead the Internal Audit and Inventory Audit functions, providing independent oversight of financial and operational controls across the organisation. Report key findings, risks and recommendations to the CEO and shareholders."
    ],
    "contributions": [
      "Oversee stock audits, inventory reconciliations and branch reviews.",
      "Evaluate internal controls, risk frameworks and SOP compliance.",
      "Coordinate audit plans, teams and corrective-action follow-up.",
      "Use ERP records and analytics to identify exceptions and improve visibility."
    ],
    "systems": ["Acumatica ERP", "Apache Superset", "Microsoft Excel"]
  },
  {
    "organisation": "Gilanis Distributors Limited · FMCG Distribution & Supply Chain",
    "title": "Senior Accountant",
    "period": "2026",
    "responsibilities": [
      "Oversaw core financial accounting operations covering payables, receivables, reconciliations, reporting and internal controls. Supported finance team coordination, ERP-based process improvement, inventory management and management analysis."
    ],
    "contributions": [
      "Streamlined the month-end close process by introducing a tighter reconciliation schedule, reducing turnaround time.",
      "Supported the transition of core accounting processes onto Acumatica ERP, improving reporting accuracy.",
      "Mentored junior accounting staff on reconciliation and reporting standards.",
      "Strengthened payables and receivables controls, reducing the volume of ageing, unresolved balances."
    ],
    "systems": ["Acumatica ERP", "Microsoft Excel"]
  },
  {
    "organisation": "Mjengo Limited",
    "title": "Accountant",
    "period": "2021 – 2025",
    "responsibilities": [
      "Managed accounting operations, financial reporting, bank reconciliations, payables and receivables, expenditure monitoring and compliance-related activities. Supported management with financial information and process improvement."
    ],
    "contributions": [
      "Introduced a weekly bank reconciliation routine, reducing the backlog of unreconciled items.",
      "Strengthened payables and receivables tracking, reducing outstanding balances.",
      "Provided ad hoc financial analysis to support management decisions.",
      "Improved expenditure monitoring, flagging unusual spend patterns to management earlier."
    ],
    "systems": ["Microsoft Excel", "Sage"]
  },
  {
    "organisation": "Bora Foods Suppliers Limited · FMCG Distribution & Wholesale",
    "title": "Accountant / Manager",
    "period": "2017 – 2021",
    "responsibilities": [
      "Managed financial and operational activities including reporting, cash flow, inventory controls, supplier and customer reconciliations, budgeting and business performance monitoring."
    ],
    "contributions": [
      "Managed supplier and customer reconciliations across a multi-line wholesale distribution operation.",
      "Introduced budgeting and cash-flow monitoring routines to support management decision-making.",
      "Coordinated inventory controls alongside day-to-day accounting responsibilities.",
      "Tracked business performance against budget and reported variances to management monthly."
    ],
    "systems": ["Microsoft Excel", "QuickBooks"]
  }
];

export const caseStudies = [
  {
    "slug": "month-end-close",
    "title": "Strengthening multi-branch stock accountability",
    "category": "Case study 01 · Audit & assurance",
    "summary": "Outcome · Enhanced accountability and reduced reporting gaps, as reported.",
    "context": "Gilanis Distributors operates across multiple branches in an FMCG distribution network, where stock sits at the centre of both revenue protection and customer trust. Inconsistent reconciliation practices between branches made it difficult for management to get a single, reliable view of stock position at any point in time.",
    "challenge": "Maintain reliable stock visibility and consistent reconciliation across multiple branches, while reducing gaps in operational reporting that made it hard to act quickly on discrepancies.",
    "approach": "Standardise audit procedures across branches, conduct structured stock reconciliations against ERP records, review control points at each stage of the stock cycle and follow up exceptions directly with branch teams until resolved.",
    "tools": ["Acumatica ERP", "Microsoft Excel", "Physical stock count sheets"],
    "actions": [
      "Designed a standard stock-count and reconciliation checklist applied consistently across all branches.",
      "Reviewed goods-received and goods-issued records against Acumatica ERP to identify unexplained movements.",
      "Investigated variances with branch managers and tracked each exception through to a documented resolution.",
      "Reported recurring control weaknesses to senior leadership with recommended corrective action."
    ],
    "outcomes": [
      "Enhanced accountability for stock movements across branches, as reported.",
      "Reduced reporting gaps between physical stock and ERP-recorded stock.",
      "Clearer audit trail for exceptions, from identification to resolution."
    ],
    "value": "Consistent reconciliation routines turned stock audit from a once-off exercise into an ongoing control. The approach showed that accountability improves most when exceptions are tracked to a named owner and a resolution date, not just flagged in a report.",
    "statement": "Stock Reconciliation Statement",
    "lines": ["Opening stock value", "Goods received", "Goods issued", "Physical count variance", "Adjusted closing stock"]
  },
  {
    "slug": "budget-control",
    "title": "Performance reporting across 58 service sites",
    "category": "Case study 02 · Performance analytics",
    "summary": "Reported Week 43 result · 10.9% subscriber growth and 9.8% revenue growth.",
    "context": "Management needed a consistent, comparable view of performance across a network of 58 sites, where subscriber activity, revenue and usage trends were previously reviewed inconsistently from branch to branch.",
    "challenge": "Give management a consistent view of subscriber activity, revenue, sessions and average revenue per user (ARPU) that could be compared reliably week over week across all 58 sites.",
    "approach": "Build a standard weekly performance report template, pull consistent data from ERP and analytics tools, highlight week-on-week movement automatically and present trends to management in a format that was easy to act on.",
    "tools": ["Acumatica ERP", "Apache Superset", "Microsoft Excel", "Google Sheets"],
    "actions": [
      "Built a standard weekly reporting template covering subscribers, revenue, sessions and ARPU for all 58 sites.",
      "Automated the data pull from ERP and Superset to reduce manual compilation time.",
      "Flagged sites with outlier movements for follow-up before the weekly management review.",
      "Presented trends and recommendations directly to management each week."
    ],
    "outcomes": [
      "Reported Week 43 result · 10.9% subscriber growth and 9.8% revenue growth.",
      "Faster turnaround from data pull to management-ready report.",
      "Earlier visibility of underperforming sites for corrective action."
    ],
    "value": "A standard reporting template made performance comparable across sites for the first time, turning scattered branch data into a single management view. The main lesson was that consistency in format matters as much as the accuracy of the figures — it is what makes week-on-week comparison possible.",
    "statement": "Subscriber Performance Report",
    "lines": ["Active subscribers", "Revenue", "Sessions", "Average revenue per user (ARPU)", "Week-on-week variance"]
  },
  {
    "slug": "internal-controls",
    "title": "Improving offloading-fee reconciliation",
    "category": "Case study 03 · Reconciliation",
    "summary": "Outcome · Clearer exception visibility and a practical system-control recommendation.",
    "context": "Offloading fees were settled through M-Pesa at branch level, but a portion of transactions lacked the supporting M-Pesa details needed to reconcile them cleanly against ERP records, leaving recurring unexplained balances.",
    "challenge": "Improve the completeness of offloading-fee reconciliation where some transactions lacked supporting M-Pesa details, making it difficult to confirm that fees collected matched amounts recorded.",
    "approach": "Introduce daily and weekly reconciliation routines, trace transactions with missing information back to source, and propose a system-level change to Acumatica so the required data is captured at the point of transaction rather than after the fact.",
    "tools": ["Acumatica", "M-Pesa statements", "Microsoft Excel"],
    "actions": [
      "Introduced daily reconciliation of offloading-fee transactions against M-Pesa statements, rather than waiting for month-end.",
      "Identified and catalogued the specific fields missing from incomplete transactions.",
      "Worked with branch teams to recover missing supporting details where still available.",
      "Proposed a system-control change within Acumatica to capture the missing data at the point of transaction."
    ],
    "outcomes": [
      "Clearer exception visibility, with unmatched transactions identified earlier in the cycle.",
      "A practical system-control recommendation to prevent the gap from recurring.",
      "Reduced time spent chasing missing transaction details at month-end."
    ],
    "value": "The recurring gap turned out to be a data-capture problem, not a cash problem — fixing the point of capture was more effective than repeating the reconciliation effort every month. It reinforced that root-cause fixes in the system reduce audit work far more than after-the-fact investigation.",
    "statement": "Reconciliation Exception Report",
    "lines": ["Transactions reconciled", "Unmatched entries identified", "Missing-detail cases recovered", "Recommended system control"]
  }
];

export const credentials: Credential[] = [
  {
    "name": "Bachelor of Commerce (B.Com)",
    "issuer": "Egerton University · Accounting",
    "year": "2015",
    "status": "completed",
    "kind": "academic"
  },
  {
    "name": "CPA (KASNEB) — Section 4",
    "issuer": "Kenya Accountants and Secretaries National Examinations Board",
    "year": "2016 · Former syllabus",
    "status": "in-progress",
    "kind": "professional"
  }
];

export const skills = [
  {
    "category": "Accounting & financial operations",
    "description": "Day-to-day accounting discipline that keeps the ledger accurate and the books closing on time.",
    "items": [
      "General ledger",
      "Financial statements",
      "Payables & receivables",
      "Reconciliations",
      "Payroll accounting",
      "Month-end close"
    ]
  },
  {
    "category": "Audit, controls & risk",
    "description": "Independent review of financial and operational controls, with follow-through to resolution.",
    "items": [
      "Internal audit",
      "Inventory assurance",
      "Control assessment",
      "Risk reviews",
      "SOP development",
      "Corrective-action follow-up"
    ]
  },
  {
    "category": "Financial management",
    "description": "Forward-looking analysis that supports budgeting decisions and protects working capital.",
    "items": [
      "Budgeting",
      "Forecasting",
      "Cash flow",
      "Working capital",
      "Cost analysis",
      "Variance and profitability analysis"
    ]
  },
  {
    "category": "Systems & analytics",
    "description": "Comfortable working across ERP, BI and spreadsheet tools to get from raw data to a usable report.",
    "items": [
      "Acumatica",
      "Superset",
      "Excel",
      "Google Sheets",
      "Power BI",
      "QuickBooks",
      "Sage",
      "SAP"
    ]
  },
  {
    "category": "Leadership & collaboration",
    "description": "Coordinating audit and finance teams, and working across departments to get findings acted on.",
    "items": [
      "Audit team coordination",
      "Staff mentoring",
      "Stakeholder engagement",
      "Management reporting",
      "Cross-functional improvement"
    ]
  },
  {
    "category": "Business insight",
    "description": "Turning operational and financial data into recommendations management can act on.",
    "items": [
      "Operational performance",
      "Inventory movement",
      "Revenue analysis",
      "Supplier and customer balances",
      "Management recommendations"
    ]
  }
];

export const badges: { label: string; status: "held" | "in-progress" }[] = [];

export const testimonials: {name: string; position: string; organisation: string; quote: string; photoUrl?: string}[] = [];

export const insights: {slug: string; title: string; category: string; date: string; excerpt: string}[] = [
  {
    "slug": "weekly-stock-reconciliation",
    "title": "Why stock reconciliation should be a weekly habit, not a month-end scramble",
    "category": "Audit & controls",
    "date": "October 2026",
    "excerpt": "Month-end stock surprises are usually weeks old by the time they surface. Reconciling little and often — rather than waiting for the close — turns audit from a forensic exercise into an early-warning system."
  },
  {
    "slug": "erp-data-into-decisions",
    "title": "Reading beyond the balance sheet: turning ERP data into decisions",
    "category": "Business intelligence",
    "date": "August 2026",
    "excerpt": "An ERP system can hold years of transaction history and still tell management nothing useful. The gap is usually not data, but the absence of a simple, repeatable way to turn records into a weekly view people actually act on."
  },
  {
    "slug": "branch-level-controls-fmcg",
    "title": "Three controls every FMCG distributor should have at branch level",
    "category": "Internal controls",
    "date": "June 2026",
    "excerpt": "Head-office policies rarely fail at head office — they fail at the branch, where stock, cash and people meet every day. A short list of controls, checked consistently, closes more gaps than a long policy document nobody reads."
  },
  {
    "slug": "operational-visibility-lessons",
    "title": "What weekly performance reporting taught me about operational visibility",
    "category": "Performance & reporting",
    "date": "April 2026",
    "excerpt": "Building a consistent weekly report across dozens of sites exposed a simple truth: comparable data beats perfect data. A standard format that is slightly rough but always on time changes decisions faster than a precise report that arrives too late."
  },
  {
    "slug": "closing-books-faster",
    "title": "Closing the books faster without cutting corners",
    "category": "Financial management",
    "date": "February 2026",
    "excerpt": "Speed and accuracy at month-end are not opposites. Most delays come from the same few reconciling items every month — fixing the root cause once is worth more than working faster on the same manual checklist."
  }
];

export type ExpertiseKey = "reporting" | "management" | "tax" | "budgeting" | "fpa" | "cost" | "controls" | "audit" | "payroll" | "erp" | "modelling" | "advisory";
export type Credential = {name: string; issuer: string; year: string; status: "completed" | "in-progress"; kind: "academic" | "professional" | "membership" | "training" | "award"; imageUrl?: string};
export type Role = typeof experience[number];
export type CaseStudy = typeof caseStudies[number];
export const mockupHtml = "<section class=\"hero\" id=\"home\">\n<div class=\"container hero-grid\">\n<div class=\"\">\n<div class=\"hero-kicker\">Finance · Audit · Business Intelligence</div>\n<h1>Making financial insight <em>work for business.</em></h1>\n<p class=\"hero-copy\">I am <strong>Bonface Mburu Mwangi</strong> — a finance, accounting and audit leader who brings together strong financial controls, operational understanding and data-led analysis to help organisations see risk clearly, strengthen accountability and make better decisions.</p>\n<div class=\"hero-actions\">\n<a class=\"btn btn-primary\" href=\"#expertise\">Explore my expertise <span>↗</span></a>\n<a class=\"btn btn-outline\" href=\"#work\">View selected work <span>↘</span></a>\n</div>\n<div class=\"hero-meta\">\n<div class=\"meta-item\"><strong>Head of Audit</strong><span>Current leadership role</span></div>\n<div class=\"meta-item\"><strong>11–15 years</strong><span>Relevant experience, as reported</span></div>\n<div class=\"meta-item\"><strong>Kenya</strong><span>Open to global opportunities</span></div>\n</div>\n</div>\n<div class=\"portrait-frame\"><img alt=\"Bonface Mburu Mwangi in a burgundy suit\" class=\"office-visual hero-portrait\" height=\"876\" src=\"__STANDING_PORTRAIT__\" width=\"580\"/><div class=\"portrait-note\"><strong>Integrity in every number.</strong><span>Finance · Audit · Business Insight</span></div></div>\n</div>\n</section>\n<section aria-label=\"Professional highlights\" class=\"trust-strip\">\n<div class=\"container trust-items\">\n<div class=\"trust-item\"><strong>11–15</strong><span>Years of relevant experience (self-reported)</span></div>\n<div class=\"trust-item\"><strong>58 sites</strong><span>Covered in a subscriber performance reporting example</span></div>\n<div class=\"trust-item\"><strong>Multi-branch</strong><span>Stock assurance and operational audit exposure</span></div>\n<div class=\"trust-item\"><strong>Data-led</strong><span>ERP, dashboards and analytical reporting</span></div>\n</div>\n</section>\n<section class=\"section\" id=\"about\">\n<div class=\"container intro-grid\">\n<aside class=\"intro-aside\"><img alt=\"Bonface Mburu Mwangi seated in his office\" class=\"about-portrait\" width=\"815\" height=\"836\" loading=\"lazy\" src=\"__SEATED_PORTRAIT__\"/>\n<div class=\"quote-mark\">“</div>\n<blockquote>Good financial leadership is not only about reporting the numbers. It is about understanding what they mean — and what the organisation should do next.</blockquote>\n<span>Professional philosophy</span>\n</aside>\n<div class=\"intro-copy\">\n<span class=\"eyebrow\">About Bonface</span>\n<h2>Finance expertise with an operational point of view.</h2>\n<p class=\"lead\">I am a finance, accounting and audit professional with experience across FMCG distribution, wholesale, retail and business operations. My work sits at the intersection of financial discipline, internal assurance and practical business improvement.</p>\n<p>In my current role as Head of Audit at Gilanis Distributors Limited, I provide oversight of internal audit and inventory audit activities, assess the effectiveness of controls, review operational risks and present actionable findings to senior leadership. I work closely with teams across the organisation to strengthen processes, improve visibility and support accountability.</p>\n<p>My approach combines a strong grounding in accounting and reconciliation with hands-on use of ERP platforms, business intelligence and spreadsheet analysis. I am particularly interested in translating complex financial and operational information into clear recommendations that management can act on.</p>\n<div class=\"intro-points\">\n<div class=\"point\"><span class=\"point-number\">01 / ASSURANCE</span><h4>Control &amp; accountability</h4><p>Reviewing processes, identifying exposure and following through on corrective action.</p></div>\n<div class=\"point\"><span class=\"point-number\">02 / ANALYSIS</span><h4>Insight from data</h4><p>Turning ERP records and performance information into useful management visibility.</p></div>\n<div class=\"point\"><span class=\"point-number\">03 / LEADERSHIP</span><h4>People &amp; collaboration</h4><p>Coordinating teams and engaging leaders, branch managers and other stakeholders.</p></div>\n<div class=\"point\"><span class=\"point-number\">04 / IMPROVEMENT</span><h4>Practical solutions</h4><p>Addressing root causes and strengthening procedures, reporting and business workflows.</p></div>\n</div>\n</div>\n</div>\n</section>\n<section class=\"section soft-section\" id=\"expertise\">\n<div class=\"container\">\n<div class=\"section-head\">\n<div><span class=\"eyebrow\">What I bring</span><h2>Expertise that connects<br/>finance with operations.</h2></div>\n<p>My capabilities span core accounting, assurance, financial management and technology-enabled reporting — with a focus on accuracy, useful insight and stronger business processes.</p>\n</div>\n<div class=\"expertise-grid\">\n<article class=\"expert-card\"><span class=\"expert-no\">01 / FINANCIAL ACCOUNTING</span><div class=\"expert-icon\">§</div><h3>Accounting &amp; reporting</h3><p>General ledger management, financial statements, management accounts, month-end close, payroll accounting and balance-sheet reconciliations.</p></article>\n<article class=\"expert-card\"><span class=\"expert-no\">02 / INTERNAL ASSURANCE</span><div class=\"expert-icon\">◇</div><h3>Audit &amp; internal controls</h3><p>Internal audit, audit planning, control reviews, audit evidence, investigation support, corrective-action tracking and governance reporting.</p></article>\n<article class=\"expert-card\"><span class=\"expert-no\">03 / INVENTORY</span><div class=\"expert-icon\">▤</div><h3>Inventory &amp; cost control</h3><p>Stock verification, inventory reconciliations, movement analysis, stock variance investigations, warehouse controls and cost awareness.</p></article>\n<article class=\"expert-card\"><span class=\"expert-no\">04 / FINANCIAL MANAGEMENT</span><div class=\"expert-icon\">⌁</div><h3>Planning &amp; performance</h3><p>Budgeting, forecasting, cash-flow management, working capital, profitability analysis, financial modelling and business performance reviews.</p></article>\n<article class=\"expert-card\"><span class=\"expert-no\">05 / COMPLIANCE &amp; RISK</span><div class=\"expert-icon\">✧</div><h3>Tax, risk &amp; compliance</h3><p>VAT, PAYE and tax reporting support, statutory documentation, risk assessment, fraud-prevention controls and policy compliance.</p></article>\n<article class=\"expert-card\"><span class=\"expert-no\">06 / BUSINESS ADVISORY</span><div class=\"expert-icon\">↗</div><h3>Commercial insight</h3><p>Variance analysis, cost structures, supplier and customer balances, operational efficiency and evidence-led recommendations for management.</p></article>\n</div>\n<div class=\"systems\">\n<span class=\"system-pill\">Acumatica ERP</span><span class=\"system-pill\">Apache Superset</span><span class=\"system-pill\">Microsoft Excel</span><span class=\"system-pill\">Google Sheets</span><span class=\"system-pill\">Power BI</span><span class=\"system-pill\">QuickBooks</span><span class=\"system-pill\">Sage</span><span class=\"system-pill\">SAP</span>\n</div>\n</div>\n</section>\n<section class=\"section\" id=\"experience\">\n<div class=\"container\">\n<div class=\"section-head\">\n<div><span class=\"eyebrow\">Career journey</span><h2>Experience built across<br/>finance and operations.</h2></div>\n<p>Progression through accounting and management roles has built a practical understanding of financial operations, inventory, controls and organisational performance.</p>\n</div>\n<div class=\"timeline\">\n<article class=\"timeline-item\">\n<div class=\"timeline-date\">2026 – Present</div>\n<div class=\"timeline-content\"><h3>Head of Audit</h3><div class=\"timeline-company\">Gilanis Distributors Limited · FMCG, Distribution &amp; Supply Chain</div><p>Lead the Internal Audit and Inventory Audit functions, providing independent oversight of financial and operational controls across the organisation. Report key findings, risks and recommendations to the CEO and shareholders.</p><ul class=\"bullet-list\"><li>Oversee stock audits, inventory reconciliations and branch reviews.</li><li>Evaluate internal controls, risk frameworks and SOP compliance.</li><li>Coordinate audit plans, teams and corrective-action follow-up.</li><li>Use ERP records and analytics to identify exceptions and improve visibility.</li></ul></div>\n</article>\n<article class=\"timeline-item\">\n<div class=\"timeline-date\">2026</div>\n<div class=\"timeline-content\"><h3>Senior Accountant</h3><div class=\"timeline-company\">Gilanis Distributors Limited · FMCG Distribution &amp; Supply Chain</div><p>Oversaw core financial accounting operations covering payables, receivables, reconciliations, reporting and internal controls. Supported finance team coordination, ERP-based process improvement, inventory management and management analysis.</p></div>\n</article>\n<article class=\"timeline-item\">\n<div class=\"timeline-date\">2021 – 2025</div>\n<div class=\"timeline-content\"><h3>Accountant</h3><div class=\"timeline-company\">Mjengo Limited</div><p>Managed accounting operations, financial reporting, bank reconciliations, payables and receivables, expenditure monitoring and compliance-related activities. Supported management with financial information and process improvement.</p></div>\n</article>\n<article class=\"timeline-item\">\n<div class=\"timeline-date\">2017 – 2021</div>\n<div class=\"timeline-content\"><h3>Accountant / Manager</h3><div class=\"timeline-company\">Bora Foods Suppliers Limited · FMCG Distribution &amp; Wholesale</div><p>Managed financial and operational activities including reporting, cash flow, inventory controls, supplier and customer reconciliations, budgeting and business performance monitoring.</p></div>\n</article>\n</div>\n</div>\n</section>\n<section class=\"section soft-section\" id=\"work\">\n<div class=\"container\">\n<div class=\"section-head\">\n<div><span class=\"eyebrow\">Selected professional work</span><h2>Turning challenges<br/>into better controls.</h2></div>\n<p>Illustrative summaries of work described in the questionnaire. Detailed employer data and confidential records are intentionally excluded.</p>\n</div>\n<div class=\"case-grid\">\n<article class=\"case-card\">\n<div class=\"case-top\"><span>Case study 01 · Audit &amp; assurance</span><h3>Strengthening multi-branch stock accountability</h3></div>\n<div class=\"case-body\"><div class=\"case-block\"><strong>The challenge</strong><p>Maintain reliable stock visibility and consistent reconciliation across multiple branches, while reducing gaps in operational reporting.</p></div><div class=\"case-block\"><strong>Approach</strong><p>Improve audit procedures, conduct stock reconciliations, review control points and follow up exceptions with the relevant teams.</p></div><div class=\"case-result\">Outcome · Enhanced accountability and reduced reporting gaps, as reported.</div></div>\n</article>\n<article class=\"case-card\">\n<div class=\"case-top\"><span>Case study 02 · Performance analytics</span><h3>Performance reporting across 58 service sites</h3></div>\n<div class=\"case-body\"><div class=\"case-block\"><strong>The challenge</strong><p>Give management a consistent view of subscriber activity, revenue, sessions and average revenue per user (ARPU).</p></div><div class=\"case-block\"><strong>Approach</strong><p>Develop weekly performance reports to track movements, compare results and make operational trends easier to interpret.</p></div><div class=\"case-result\">Reported Week 43 result · 10.9% subscriber growth and 9.8% revenue growth.</div></div>\n</article>\n<article class=\"case-card\">\n<div class=\"case-top\"><span>Case study 03 · Reconciliation</span><h3>Improving offloading-fee reconciliation</h3></div>\n<div class=\"case-body\"><div class=\"case-block\"><strong>The challenge</strong><p>Improve the completeness of offloading-fee reconciliation where some transactions lacked supporting M-Pesa details.</p></div><div class=\"case-block\"><strong>Approach</strong><p>Introduce daily and weekly reconciliation routines, identify missing transaction information and propose better data capture within Acumatica.</p></div><div class=\"case-result\">Outcome · Clearer exception visibility and a practical system-control recommendation.</div></div>\n</article>\n</div>\n<div class=\"metric-feature\">\n<div><span class=\"eyebrow\">A data-led example</span><h3>Making operational performance easier to act on.</h3><p>One reporting example covered a network of 58 sites and monitored subscriber, revenue, session and ARPU trends. The figures below are the results reported for Week 43, not a claim of independently audited growth.</p><div class=\"metric-stats\"><div class=\"metric-stat\"><strong>58</strong><span>Sites included in the reporting example</span></div><div class=\"metric-stat\"><strong>10.9%</strong><span>Subscriber growth recorded in Week 43</span></div><div class=\"metric-stat\"><strong>9.8%</strong><span>Revenue growth recorded in Week 43</span></div></div></div>\n\n<div data-performance-chart=\"\"></div></div>\n</div>\n</section>\n<section class=\"section\" id=\"credentials\">\n<div class=\"container\">\n<div class=\"section-head\">\n<div><span class=\"eyebrow\">Education &amp; professional development</span><h2>A foundation in accounting.<br/>A commitment to learning.</h2></div>\n<p>A complete record of academic qualifications and professional certifications.</p>\n</div>\n<img alt=\"Tied graduation diploma scroll with a cap and books\" class=\"graduation-visual\" height=\"1024\" loading=\"lazy\" src=\"__GRADUATION_IMAGE__\" width=\"1536\"/><div class=\"credentials-grid\">\n<article class=\"credential-card\"><svg aria-hidden=\"true\" class=\"credential-scroll\" fill=\"none\" viewBox=\"0 0 48 48\"><path d=\"M10 13h28v23H10z\" fill=\"var(--card)\" stroke=\"var(--gold)\" stroke-width=\"1.5\"></path><path d=\"M10 13c-5 0-5 8 0 8M38 28c5 0 5 8 0 8\" stroke=\"var(--gold)\" stroke-width=\"1.5\"></path><path d=\"M21 13h6v23h-6z\" fill=\"var(--primary)\"></path><path d=\"M24 23c-13-12-15 6 0 2 15 4 13-14 0-2Z\" fill=\"var(--secondary)\" stroke=\"var(--primary)\" stroke-width=\"2\"></path><path d=\"m23 25-6 11 6-3 2 3 1-11\" fill=\"var(--primary)\"></path></svg><span class=\"credential-label\">Academic qualification</span><h3>Bachelor of Commerce (B.Com)</h3><div class=\"institution\">Egerton University · Accounting</div><p>Completed in 2015. Academic grounding in accounting and business disciplines.</p></article>\n<article class=\"credential-card\"><svg aria-hidden=\"true\" class=\"credential-scroll\" fill=\"none\" viewBox=\"0 0 48 48\"><path d=\"M10 13h28v23H10z\" fill=\"var(--card)\" stroke=\"var(--gold)\" stroke-width=\"1.5\"></path><path d=\"M10 13c-5 0-5 8 0 8M38 28c5 0 5 8 0 8\" stroke=\"var(--gold)\" stroke-width=\"1.5\"></path><path d=\"M21 13h6v23h-6z\" fill=\"var(--primary)\"></path><path d=\"M24 23c-13-12-15 6 0 2 15 4 13-14 0-2Z\" fill=\"var(--secondary)\" stroke=\"var(--primary)\" stroke-width=\"2\"></path><path d=\"m23 25-6 11 6-3 2 3 1-11\" fill=\"var(--primary)\"></path></svg><span class=\"credential-label\">Professional studies</span><h3>CPA (KASNEB) — Section 4</h3><div class=\"institution\">Kenya Accountants and Secretaries National Examinations Board</div><p>Section 4 completed under the former syllabus in 2016. The candidate reports this professional qualification as partially completed.</p></article>\n</div>\n\n</div>\n</section>\n<section class=\"section soft-section\" id=\"skills\">\n<div class=\"container skills-layout\">\n<div class=\"skills-intro\"><img alt=\"Finance books, calculator and charts in a sunlit office\" class=\"books-visual\" width=\"1536\" height=\"1024\" loading=\"lazy\" src=\"__OFFICE_IMAGE__\"/><span class=\"eyebrow\">How I work</span><h2>Financial discipline, supported by technology.</h2><p>Technology is most valuable when it improves the quality of decisions, makes exceptions visible and reduces avoidable manual work.</p></div>\n<div class=\"skill-groups\">\n<div class=\"skill-group\"><h4>Accounting &amp; financial operations</h4><p>General ledger · Financial statements · Payables &amp; receivables · Reconciliations · Payroll accounting · Month-end close</p></div>\n<div class=\"skill-group\"><h4>Audit, controls &amp; risk</h4><p>Internal audit · Inventory assurance · Control assessment · Risk reviews · SOP development · Corrective-action follow-up</p></div>\n<div class=\"skill-group\"><h4>Financial management</h4><p>Budgeting · Forecasting · Cash flow · Working capital · Cost analysis · Variance and profitability analysis</p></div>\n<div class=\"skill-group\"><h4>Systems &amp; analytics</h4><p>Acumatica · Superset · Excel · Google Sheets · Power BI · QuickBooks · Sage · SAP</p></div>\n<div class=\"skill-group\"><h4>Leadership &amp; collaboration</h4><p>Audit team coordination · Staff mentoring · Stakeholder engagement · Management reporting · Cross-functional improvement</p></div>\n<div class=\"skill-group\"><h4>Business insight</h4><p>Operational performance · Inventory movement · Revenue analysis · Supplier and customer balances · Management recommendations</p></div>\n</div>\n</div>\n</section>\n<section class=\"closing\">\n<div class=\"container closing-inner\">\n<div><span class=\"eyebrow\">Start a conversation</span><h2>Clear controls. Better insight. Stronger decisions.</h2><p>Available for professional conversations, leadership opportunities and relevant business engagements.</p></div>\n<a class=\"btn btn-primary\" href=\"mailto:bonfacemburu254@gmail.com?subject=Professional%20enquiry%20for%20Bonface%20Mburu\">Get in touch ↗</a>\n</div>\n</section>\n<section class=\"contact-section\" id=\"contact\">\n<div class=\"container contact-grid\">\n<div class=\"\"><span class=\"eyebrow\">Contact</span><h2>Let's connect.</h2><p class=\"lead\">For professional opportunities, business conversations or enquiries, please use the contact details below.</p><div class=\"contact-details\">\n<a class=\"contact-line\" href=\"mailto:bonfacemburu254@gmail.com\"><span class=\"contact-icon\">✉</span><span><span>Email</span><strong>bonfacemburu254@gmail.com</strong></span></a>\n<a class=\"contact-line\" href=\"tel:+254743792926\"><span class=\"contact-icon\">＋</span><span><span>Phone / WhatsApp</span><strong>+254 743 792 926</strong></span></a>\n<div class=\"contact-line\"><span class=\"contact-icon\">⌖</span><span><span>Location</span><strong>Kenya · Open to global opportunities</strong></span></div>\n</div></div>\n<div class=\"contact-panel\"><span class=\"eyebrow\">Professional enquiries</span><h3>Have a conversation with Bonface.</h3><p>Send an email outlining the opportunity or topic you would like to discuss. A professional CV and supporting documents can be shared upon request.</p><div class=\"contact-actions\"><a class=\"btn btn-primary\" href=\"mailto:bonfacemburu254@gmail.com?subject=Professional%20enquiry\">Email Bonface ↗</a><a class=\"btn btn-outline\" href=\"tel:+254743792926\">Call directly</a></div></div>\n</div>\n</section>".replace("__STANDING_PORTRAIT__", standingPortrait.url).replace("__OFFICE_IMAGE__", officeBooks).replace("__GRADUATION_IMAGE__", graduationScroll).replace("__SEATED_PORTRAIT__", seatedPortrait.url);
export const navigation = [{"to": "/about", "label": "About", "sw": "Kuhusu"}, {"to": "/expertise", "label": "Expertise", "sw": "Utaalamu"}, {"to": "/experience", "label": "Experience", "sw": "Uzoefu"}, {"to": "/projects", "label": "Selected Work", "sw": "Kazi Zilizochaguliwa"}, {"to": "/credentials", "label": "Credentials", "sw": "Sifa"}, {"to": "/skills", "label": "Skills", "sw": "Ujuzi"}, {"to": "/insights", "label": "Insights", "sw": "Maarifa"}] as const;
export const siteCopy = { topbar: "FINANCE • AUDIT • BUSINESS INSIGHT · GLOBAL", connect: "Let’s connect", contact: "Contact", portraitNote: "Professional portrait to be supplied", footer: "Finance · Audit · Business Insight | Open to global opportunities" };

export const performanceVisual = { title: "Reported growth", period: "Week 43 · 58 sites", metrics: [{ label: "Subscribers", value: 10.9 }, { label: "Revenue", value: 9.8 }], note: "Self-reported Week 43 results; not independently audited." };
