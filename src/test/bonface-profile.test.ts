import { describe, expect, it } from "vitest";
import { profile, credentials, badges, caseStudies } from "@/content/profile";
describe("Bonface supplied professional facts", () => {
  it("does not grant full CPA qualification for Section 4", () => {
    expect(credentials.find(c => c.name === "CPA (KASNEB) — Section 4")?.status).toBe("in-progress");
    expect(badges).toHaveLength(0);
    expect(profile.name).toBe("Bonface Mburu Mwangi");
  });
  it("preserves the supplied contact destinations", () => {
    expect(profile.contact.email).toBe("bonfacemburu254@gmail.com");
    expect(profile.contact.phone).toBe("+254743792926");
    expect(profile.contact.whatsapp).toBe("254743792926");
  });
  it("keeps reported growth distinct from audited outcomes", () => {
    const study = caseStudies.find(c => c.slug === "budget-control");
    expect(study?.title).toContain("58 service sites");
    expect(study?.outcomes).toEqual(["Reported Week 43 result · 10.9% subscriber growth and 9.8% revenue growth."]);
  });
});
