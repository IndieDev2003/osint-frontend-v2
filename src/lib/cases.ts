// Assuming types are imported from a types file, or keep inline
export interface Evidence {
  id: string; // e.g., "#12"
  type: string; // e.g., "Social", "Financial", "Infrastructure"
  source: string; // e.g., "Instagram", "Blockchain Ledger", "DNS Record"
  status: "Verified" | "Under Review" | "Unverified" | "Good";
}

export interface Person {
  id: string; // e.g., "PERS-123"
  name: string;
  location: string; // e.g., "Punjab"
  phone: string;
  email: string;
  evidence: Evidence[]; // Relational array: One Person -> Multiple Evidences
}

export interface CaseFile {
  id: string; // e.g., "CASE-213"
  title: string;
  type: string; // e.g., "Crypto Asset Tracking"
  status: "In Progress" | "Under Review" | "Pending Input" | "Completed";
  priority: "Low" | "Medium" | "High";
  initialLead: string;
  specialNotes?: string;
  persons: Person[]; // Relational array: One Case -> Multiple Persons
}
export const cases: CaseFile[] = [
  {
    id: "CASE-213",
    title: "Operation Cold-Vapor",
    type: "Crypto Asset Tracking",
    status: "In Progress",
    priority: "High",
    initialLead: "BreachForum wallet signature leak",
    specialNotes:
      "Primary target infrastructure utilizing decentralized routing protocols. Cross-referencing platform deployment schedules.",
    persons: [
      {
        id: "PERS-8890",
        name: "Gagan Suman",
        location: "Punjab",
        phone: "+91 1234567890",
        email: "gagan.suman@proton.me",
        evidence: [
          {
            id: "EVID-012",
            type: "Social",
            source: "Instagram",
            status: "Verified",
          },
          {
            id: "EVID-013",
            type: "Financial",
            source: "On-Chain Transaction Log (TRC-20)",
            status: "Good",
          },
        ],
      },
      {
        id: "PERS-8891",
        name: "Amrit Pal",
        location: "Delhi",
        phone: "+91 9876543210",
        email: "a.pal@secure-mail.net",
        evidence: [
          {
            id: "EVID-014",
            type: "Infrastructure",
            source: "Domain Registration Metadata (WHOIS)",
            status: "Under Review",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-006",
    title: "Phish-Trace Delta",
    type: "Social Engineering / Phishing Trace",
    status: "Under Review",
    priority: "Medium",
    initialLead: "Corporate IT Helpdesk impersonation logs",
    specialNotes:
      "Suspected deployment of reverse-proxy framework mimicking corporate single sign-on parameters.",
    persons: [
      {
        id: "PERS-4412",
        name: "Elena Rostova",
        location: "Unknown / Layered VPN",
        phone: "+1 555 019 2831",
        email: "elena.r@shadow-alias.org",
        evidence: [
          {
            id: "EVID-088",
            type: "Communication",
            source: "Telegram Chat Export Hash",
            status: "Verified",
          },
          {
            id: "EVID-089",
            type: "Server Log",
            source: "Reverse-Proxy Nginx Metadata",
            status: "Unverified",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-102",
    title: "Project Aegis Check",
    type: "Background Check / Due Diligence",
    status: "Completed",
    priority: "Low",
    initialLead: "Routine pre-onboarding digital footprint assessment",
    persons: [
      {
        id: "PERS-3091",
        name: "Rajesh Kumar",
        location: "Bangalore",
        phone: "+91 9900112233",
        email: "r.kumar@enterprise-corp.com",
        evidence: [
          {
            id: "EVID-201",
            type: "Public Record",
            source: "Corporate Registry / MCA Filings",
            status: "Verified",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-704",
    title: "Operation Rogue-Node",
    type: "Corporate Espionage / Leak Leakage",
    status: "In Progress",
    priority: "High",
    initialLead:
      "Internal source code snippet discovered on public GitHub gist",
    specialNotes:
      "Correlating specific commit timestamps with local workspace server check-ins.",
    persons: [
      {
        id: "PERS-1102",
        name: "Marcus Vance",
        location: "California, USA",
        phone: "+1 415 555 2941",
        email: "mvance@techcorp-internal.com",
        evidence: [
          {
            id: "EVID-401",
            type: "Repository",
            source: "GitHub Gist Commit Signatures",
            status: "Verified",
          },
          {
            id: "EVID-402",
            type: "System Access",
            source: "Corporate VPN Connection Timestamps",
            status: "Good",
          },
        ],
      },
      {
        id: "PERS-1103",
        name: "Sarah Chen",
        location: "Singapore",
        phone: "+65 6789 0123",
        email: "schen.consulting@gmail.com",
        evidence: [
          {
            id: "EVID-403",
            type: "Communication",
            source: "Encrypted Matrix Channel Transcripts",
            status: "Under Review",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-301",
    title: "Syndicate Exchange Hunt",
    type: "Crypto Asset Tracking",
    status: "Pending Input",
    priority: "High",
    initialLead: "Ransomware payout distribution network trace",
    specialNotes: "Awaiting API responses from global exchange fiat off-ramps.",
    persons: [
      {
        id: "PERS-9011",
        name: "Viktor Reznov",
        location: "Cyprus",
        phone: "+357 22 123456",
        email: "reznov.holdings@tutanota.com",
        evidence: [
          {
            id: "EVID-551",
            type: "Financial",
            source: "Bitcoin Ledger Input/Output Cluster",
            status: "Verified",
          },
          {
            id: "EVID-552",
            type: "Corporate",
            source: "Cyprus Shell Registry Records",
            status: "Good",
          },
          {
            id: "EVID-553",
            type: "Domain",
            source: "Passive DNS Resolution Data",
            status: "Under Review",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-415",
    title: "Echo-Location Mapping",
    type: "Geolocation & Timeline Analysis",
    status: "Completed",
    priority: "Medium",
    initialLead: "Metadata extraction from field intelligence photographs",
    persons: [
      {
        id: "PERS-2281",
        name: "David K.",
        location: "Berlin, Germany",
        phone: "+49 30 8888888",
        email: "d.krause@secure-net.de",
        evidence: [
          {
            id: "EVID-601",
            type: "Imagery",
            source: "JPEG EXIF GPS Coordinates",
            status: "Verified",
          },
          {
            id: "EVID-602",
            type: "Social",
            source: "Strava Public Run Mapping Data",
            status: "Verified",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-902",
    title: "Spoof-Vector Alpha",
    type: "Social Engineering / Phishing Trace",
    status: "In Progress",
    priority: "Low",
    initialLead: "Lookalike infrastructure targeting executive payroll systems",
    persons: [
      {
        id: "PERS-7734",
        name: "John Doe Alias",
        location: "Unknown Location",
        phone: "N/A",
        email: "admin@exec-payro1l-update.com",
        evidence: [
          {
            id: "EVID-710",
            type: "Infrastructure",
            source: "DKIM/SPF Validation Failure Logs",
            status: "Unverified",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-511",
    title: "Project Ghost-Asset",
    type: "Background Check / Due Diligence",
    status: "In Progress",
    priority: "Medium",
    initialLead:
      "Inconsistencies detected in cross-border real estate declarations",
    specialNotes:
      "Verifying properties connected through third-party family trust portfolios.",
    persons: [
      {
        id: "PERS-5561",
        name: "Michael Chang",
        location: "Hong Kong",
        phone: "+852 2123 4567",
        email: "m.chang@pacific-mercantile.hk",
        evidence: [
          {
            id: "EVID-801",
            type: "Public Record",
            source: "Land Registry Deed Transfers",
            status: "Verified",
          },
          {
            id: "EVID-802",
            type: "Corporate",
            source: "Offshore Entity Beneficiary Database",
            status: "Under Review",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-612",
    title: "Operation Deep-Blue",
    type: "Corporate Espionage / Leak Leakage",
    status: "Pending Input",
    priority: "High",
    initialLead: "Unreleased proprietary CAD diagrams found on open IPFS nodes",
    persons: [
      {
        id: "PERS-1440",
        name: "Robert Lindqvist",
        location: "Stockholm, Sweden",
        phone: "+46 8 123 45 67",
        email: "r_lindqvist@scand-aero.se",
        evidence: [
          {
            id: "EVID-911",
            type: "Storage Link",
            source: "IPFS Content Identifier (CID) Metadata",
            status: "Verified",
          },
        ],
      },
      {
        id: "PERS-1441",
        name: "Lars Berg",
        location: "Gothenburg, Sweden",
        phone: "+46 31 987 65 43",
        email: "l.berg@protonmail.ch",
        evidence: [
          {
            id: "EVID-912",
            type: "System Log",
            source: "Local Endpoint SFTP Transfer Audits",
            status: "Good",
          },
        ],
      },
    ],
  },
  {
    id: "CASE-880",
    title: "Horizon-Line Profiling",
    type: "Geolocation & Timeline Analysis",
    status: "Completed",
    priority: "Low",
    initialLead:
      "Reconstructing timeline patterns of a targeted infrastructure threat actor",
    persons: [
      {
        id: "PERS-6019",
        name: "Yusuf Mansour",
        location: "Dubai, UAE",
        phone: "+971 4 555 0142",
        email: "y_mansour@dubai-networks.ae",
        evidence: [
          {
            id: "EVID-950",
            type: "Network",
            source: "BGP Routing Hijack Timeline Logs",
            status: "Verified",
          },
          {
            id: "EVID-951",
            type: "Social",
            source: "LinkedIn Activity Footprint Logs",
            status: "Verified",
          },
        ],
      },
    ],
  },
];
