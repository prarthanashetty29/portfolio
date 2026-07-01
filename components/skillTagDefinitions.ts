/** Brand-style colors for skill / stack tags (shared across pages). */
export const TAGS = {
  "Microsoft Fabric": {
    label: "Microsoft Fabric",
    bg: "#0078D4",
    color: "#ffffff",
  },
  "Power BI": { label: "Power BI", bg: "#F2C811", color: "#1a1a1a" },
  "Medallion Architecture": {
    label: "Medallion Architecture",
    bg: "#2d6a4f",
    color: "#d8f3dc",
  },
  Snowflake: { label: "Snowflake", bg: "#29B5E8", color: "#0a0a0a" },
  MuleSoft: { label: "MuleSoft", bg: "#00B4E0", color: "#0a0a0a" },
  Salesforce: { label: "Salesforce", bg: "#00A1E0", color: "#ffffff" },
  "SQL Server": { label: "SQL Server", bg: "#CC2927", color: "#ffffff" },
  Talend: { label: "Talend", bg: "#FF6D00", color: "#ffffff" },
  SQL: { label: "SQL", bg: "#336791", color: "#ffffff" },
  Splunk: { label: "Splunk", bg: "#65A637", color: "#ffffff" },
  XML: { label: "XML", bg: "#4a4a4a", color: "#e0e0e0" },
  Agile: { label: "Agile", bg: "#6B48FF", color: "#ffffff" },
  Excel: { label: "Excel", bg: "#217346", color: "#ffffff" },
  VBA: { label: "VBA", bg: "#867DB1", color: "#ffffff" },
  QMetry: { label: "QMetry", bg: "#E84C3D", color: "#ffffff" },
  UAT: { label: "UAT", bg: "#3a3a3a", color: "#d0d0d0" },
  DAX: { label: "DAX", bg: "#F2C811", color: "#1a1a1a" },
  ETL: { label: "ETL", bg: "#2a2a2a", color: "#aaaaaa" },
  Alteryx: { label: "Alteryx", bg: "#0078C0", color: "#ffffff" },
  Python: { label: "Python", bg: "#3776AB", color: "#ffffff" },
  /* Projects & tooling */
  Airflow: { label: "Airflow", bg: "#017CEE", color: "#ffffff" },
  dbt: { label: "dbt", bg: "#FF694A", color: "#ffffff" },
  Neo4j: { label: "Neo4j", bg: "#008CC1", color: "#ffffff" },
  LangGraph: { label: "LangGraph", bg: "#4F46E5", color: "#ffffff" },
  OpenAI: { label: "OpenAI", bg: "#10A37F", color: "#ffffff" },
  Tableau: { label: "Tableau", bg: "#E97627", color: "#ffffff" },
  "Star Schema": { label: "Star Schema", bg: "#5B4B8A", color: "#f5f3ff" },
  "ER/Studio": { label: "ER/Studio", bg: "#4A5568", color: "#ffffff" },
  "T-SQL": { label: "T-SQL", bg: "#CC2927", color: "#ffffff" },
  "SCD Type 2": { label: "SCD Type 2", bg: "#475569", color: "#f1f5f9" },
  "Data Analysis": { label: "Data Analysis", bg: "#2563EB", color: "#ffffff" },
  Visualization: { label: "Visualization", bg: "#7C3AED", color: "#ffffff" },
  "Dimensional Modeling": {
    label: "Dimensional Modeling",
    bg: "#0D9488",
    color: "#ffffff",
  },
  "Scikit-learn": { label: "Scikit-learn", bg: "#F89939", color: "#1a1a1a" },
  ML: { label: "ML", bg: "#6366F1", color: "#ffffff" },
  Classification: { label: "Classification", bg: "#64748B", color: "#ffffff" },

  "Power Query": { label: "Power Query", bg: "#742774", color: "#ffffff" },
  "Dashboard Reporting": {
    label: "Dashboard Reporting",
    bg: "#1D4ED8",
    color: "#ffffff",
  },
  "Microsoft Excel": {
    label: "Microsoft Excel",
    bg: "#217346",
    color: "#ffffff",
  },
  "Gen AI": { label: "Gen AI", bg: "#10A37F", color: "#ffffff" },
  CRM: { label: "CRM", bg: "#0EA5E9", color: "#ffffff" },
  Compliance: { label: "Compliance", bg: "#334155", color: "#ffffff" },
  "Pivot Tables": { label: "Pivot Tables", bg: "#217346", color: "#ffffff" },
  "Power Pivot": { label: "Power Pivot", bg: "#217346", color: "#ffffff" },
  "Root Cause Analysis": {
    label: "Root Cause Analysis",
    bg: "#7C2D12",
    color: "#ffffff",
  },
  "Stakeholder Management": {
    label: "Stakeholder Management",
    bg: "#9333EA",
    color: "#ffffff",
  },
  ServiceNow: { label: "ServiceNow", bg: "#81B5A1", color: "#0a0a0a" },
  Quality: { label: "Quality", bg: "#0F766E", color: "#ffffff" },
  Testing: { label: "Testing", bg: "#475569", color: "#ffffff" },
  AWS: { label: "AWS", bg: "#FF9900", color: "#1a1a1a" },
} as const satisfies Record<string, { label: string; bg: string; color: string }>;

export type TagKey = keyof typeof TAGS;

export function isSkillTagKey(label: string): label is TagKey {
  return Object.prototype.hasOwnProperty.call(TAGS, label);
}
