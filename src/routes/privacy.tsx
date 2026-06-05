import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Duofit.club" },
      { name: "description", content: "How DUOFIT collects, uses and protects your personal information." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0 block" />;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-1.5 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
          <Dot />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg md:text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Privacy() {
  const thirdParties = [
    { service: "Website Hosting", provider: "Vercel Inc. (USA)", purpose: "Hosting & deployment", data: "Server logs, IP addresses" },
    { service: "WhatsApp Messaging", provider: "Meta Platforms (USA)", purpose: "Direct communication", data: "Name, phone, messages" },
    { service: "Instagram", provider: "Meta Platforms (USA)", purpose: "Social engagement", data: "Public interactions only" },
    { service: "Google Fonts", provider: "Google LLC (USA)", purpose: "Website typography", data: "IP address, browser info" },
    { service: "Email", provider: "Email service provider", purpose: "Correspondence", data: "Name, email, message content" },
  ];

  const retentionData = [
    { type: "Contact form submissions", period: "2 years", reason: "Follow-up and service delivery" },
    { type: "Active coaching client data", period: "3 years from last session", reason: "Service continuity and legal obligations" },
    { type: "Website server logs", period: "90 days", reason: "Security monitoring" },
    { type: "WhatsApp communications", period: "As per WhatsApp policy", reason: "Managed by Meta Platforms" },
    { type: "Email correspondence", period: "3 years", reason: "Record keeping and dispute resolution" },
    { type: "Marketing consent records", period: "Until withdrawal + 6 months", reason: "Legal compliance proof" },
  ];

  const userRights = [
    { right: "Right to Access", desc: "Request a copy of the personal data we hold about you, including the purposes for processing." },
    { right: "Right to Correction", desc: "Request correction of any inaccurate or incomplete personal data. We act on reasonable requests promptly." },
    { right: "Right to Erasure", desc: "Request deletion of your personal data where no longer necessary, subject to our legal obligations." },
    { right: "Right to Withdraw Consent", desc: "Withdraw your consent to data processing at any time without affecting prior lawful processing." },
    { right: "Right to Data Portability", desc: "Receive your data in a structured, commonly used format for transfer to another provider, where feasible." },
    { right: "Right to Object", desc: "Object to processing of your data for direct marketing, profiling or legitimate interests." },
    { right: "Right to Restrict Processing", desc: "Request restriction of processing while a dispute about accuracy or lawfulness is being resolved." },
    { right: "Right of Nomination (DPDPA 2023)", desc: "Nominate another individual to exercise your data rights on your behalf in case of death or incapacity." },
    { right: "Right to Grievance Redressal", desc: "File a complaint with our Grievance Officer and, if unresolved, escalate to the Data Protection Board of India." },
  ];

  const applicableLaws = [
    { law: "Information Technology Act, 2000 (India)", scope: "Cybersecurity, data protection and electronic records" },
    { law: "IT (Reasonable Security Practices and SPDI) Rules, 2011 (India)", scope: "Handling of sensitive personal data including health information" },
    { law: "Digital Personal Data Protection Act, 2023 (India)", scope: "Comprehensive personal data protection framework" },
    { law: "General Data Protection Regulation — GDPR (EU)", scope: "Applicable where services are offered to EU/EEA individuals" },
    { law: "Consumer Protection Act, 2019 (India)", scope: "Consumer rights and dispute resolution" },
  ];

  return (
    <SiteLayout>
      <div className="container-editorial pt-14 md:pt-20 pb-20 md:pb-32">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span>
              <strong className="text-foreground">Last Updated:</strong> May 30, 2026
            </span>
            <span>
              <strong className="text-foreground">Effective Date:</strong> May 30, 2026
            </span>
          </div>
          <div className="mt-5 p-4 bg-primary/5 border border-primary/20 rounded-sm">
            <p className="text-sm text-foreground leading-relaxed">
              This Privacy Policy applies to DUOFIT (operating at <strong>duofit.club</strong>) and
              governs how we handle your personal information. By using our website or submitting
              your information, you consent to the practices described in this policy.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl">

          {/* 1 */}
          <Section title="1. Who We Are">
            <p>
              DUOFIT is a health and lifestyle coaching service operated in India, accessible at{" "}
              <strong className="text-foreground">duofit.club</strong>. We provide personalised
              coaching in nutrition, fitness, movement and healthy habits for individuals and families.
            </p>
            <p>
              For privacy-related concerns, contact us at{" "}
              <a href="mailto:support@duofit.club" className="text-primary underline underline-offset-2">
                support@duofit.club
              </a>{" "}
              or WhatsApp: <strong className="text-foreground">+91 90528 53200</strong>.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Information We Collect">
            <Sub title="2.1 Information You Provide Directly">
              <p>When you fill our contact form or communicate with us, we may collect:</p>
              <BulletList items={[
                "Full name",
                "Phone number (including WhatsApp number)",
                "Health and fitness goals you select or describe",
                "Personal messages, queries or context you voluntarily share",
                "Any additional information you choose to provide during coaching",
              ]} />
            </Sub>

            <Sub title="2.2 Sensitive Personal Data — Health and Wellness Information">
              <p>
                Your health goals, fitness objectives, lifestyle habits and wellness concerns
                constitute <strong className="text-foreground">Sensitive Personal Data or
                Information (SPDI)</strong> under the IT (Reasonable Security Practices and SPDI)
                Rules, 2011. This data is:
              </p>
              <BulletList items={[
                "Collected only with your explicit, informed consent",
                "Used solely to deliver our coaching services",
                "Never shared without your specific written consent",
                "Subject to the highest level of security and protection",
              ]} />
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-sm">
                <p className="text-sm text-amber-900 font-medium">
                  ⚠️ Medical Disclaimer: DUOFIT provides lifestyle coaching and wellness guidance only.
                  Our services do not constitute medical advice, diagnosis or treatment. Always consult
                  a qualified healthcare professional for any medical concerns.
                </p>
              </div>
            </Sub>

            <Sub title="2.3 Technical Data (Collected Automatically)">
              <p>When you visit our website, our hosting infrastructure automatically records:</p>
              <BulletList items={[
                "IP address and approximate geographic location",
                "Browser type, version and language settings",
                "Device type and operating system",
                "Pages visited and time spent on each page",
                "Referring website URL",
                "Date and time of access",
              ]} />
            </Sub>

            <Sub title="2.4 Third-Party Communications Data">
              <p>
                When you contact us via WhatsApp or Instagram, data is processed by those platforms
                under their own privacy policies. We receive only the content of your messages.
              </p>
            </Sub>
          </Section>

          {/* 3 */}
          <Section title="3. Legal Basis for Processing">
            <p>
              We process your personal data on the following legal grounds under applicable Indian
              law and, where relevant, the EU GDPR:
            </p>
            <div className="mt-3 space-y-3">
              <div className="flex gap-3">
                <span className="font-semibold text-foreground shrink-0 w-40">Consent:</span>
                <span>When you submit our contact form, you consent to the collection and processing of your information for receiving coaching services.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground shrink-0 w-40">Contract:</span>
                <span>To deliver the coaching services you have requested or entered into an agreement for.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground shrink-0 w-40">Legitimate Interests:</span>
                <span>To improve our website, ensure security, prevent fraud and communicate service updates.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground shrink-0 w-40">Legal Obligation:</span>
                <span>To comply with applicable Indian laws including the IT Act 2000, SPDI Rules 2011 and DPDPA 2023.</span>
              </div>
            </div>
          </Section>

          {/* 4 */}
          <Section title="4. How We Use Your Information">
            <Sub title="4.1 We Use Your Information To">
              <BulletList items={[
                "Respond to your enquiries and conduct initial consultations",
                "Provide personalised health and lifestyle coaching services",
                "Schedule sessions and follow up on your progress",
                "Send relevant program updates, tips or resources (with consent)",
                "Improve our website content and user experience",
                "Detect and prevent fraud, abuse or security incidents",
                "Comply with our legal and regulatory obligations",
                "Resolve disputes and enforce our agreements",
              ]} />
            </Sub>
            <Sub title="4.2 We Will NOT Use Your Data To">
              <ul className="list-none space-y-1.5 mt-2">
                {[
                  "Sell, rent or trade your personal information to any third party",
                  "Target advertising campaigns without your explicit consent",
                  "Share with competitors or unaffiliated commercial entities",
                  "Make automated decisions that significantly affect you",
                  "Process for purposes other than those explicitly stated here",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0 block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Sub>
          </Section>

          {/* 5 */}
          <Section title="5. Sharing and Disclosure of Information">
            <Sub title="5.1 We Do Not Sell Your Data">
              <p>
                We do not sell, rent, lease or otherwise commercialise your personal data.
                Your information is used solely to provide DUOFIT's services.
              </p>
            </Sub>

            <Sub title="5.2 Third-Party Service Providers">
              <p>We work with the following trusted service providers:</p>
              <div className="mt-3 overflow-x-auto -mx-4 px-4">
                <table className="w-full text-xs md:text-sm border border-border rounded-sm min-w-[500px]">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Service</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Provider</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Purpose</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Data Shared</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thirdParties.map((row, i) => (
                      <tr key={row.service} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <td className="p-3 font-medium text-foreground border-b border-border/50">{row.service}</td>
                        <td className="p-3 border-b border-border/50">{row.provider}</td>
                        <td className="p-3 border-b border-border/50">{row.purpose}</td>
                        <td className="p-3 border-b border-border/50">{row.data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Sub>

            <Sub title="5.3 Legal Disclosure">
              <p>We may disclose your information without prior consent only when required to:</p>
              <BulletList items={[
                "Comply with a court order, legal process or government authority request under Indian law",
                "Protect the rights, property or safety of DUOFIT, our users or the public",
                "Investigate, prevent or act against suspected fraud, illegal activity or violations of our terms",
                "Respond to a national emergency or law enforcement requirement",
              ]} />
              <p className="mt-2">In such cases, we will notify you unless legally prohibited from doing so.</p>
            </Sub>

            <Sub title="5.4 Business Transfer">
              <p>
                In the event of a merger, acquisition or sale of assets, your personal data may be
                transferred to the new entity. We will notify you before your data is transferred and
                becomes subject to a different privacy policy.
              </p>
            </Sub>
          </Section>

          {/* 6 */}
          <Section title="6. Data Storage, Security and Retention">
            <Sub title="6.1 Where We Store Data">
              <p>
                Your data is processed on servers hosted by Vercel Inc., which operates infrastructure
                primarily in the United States. By using our services, you acknowledge and consent to
                this international transfer. All transfers are subject to appropriate safeguards.
              </p>
            </Sub>

            <Sub title="6.2 Security Measures">
              <p>We implement the following security measures in compliance with IT (Reasonable Security Practices) Rules 2011:</p>
              <BulletList items={[
                "SSL/TLS encryption for all data transmitted between your browser and our website",
                "Restricted access — only authorised personnel can access personal data",
                "Secure password policies and authentication controls",
                "Regular review of data collection, storage and processing practices",
                "Secure deletion procedures for data no longer required",
              ]} />
              <p className="mt-2 p-3 bg-muted/50 rounded-sm text-sm">
                <strong className="text-foreground">Note:</strong> No method of internet transmission
                is 100% secure. While we strive to protect your information, we cannot guarantee
                absolute security. If you suspect unauthorised access, contact us immediately.
              </p>
            </Sub>

            <Sub title="6.3 Data Retention Periods">
              <div className="mt-2 overflow-x-auto -mx-4 px-4">
                <table className="w-full text-xs md:text-sm border border-border rounded-sm min-w-[500px]">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Data Type</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Retention Period</th>
                      <th className="text-left p-3 font-semibold text-foreground border-b border-border">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retentionData.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <td className="p-3 font-medium text-foreground border-b border-border/50">{row.type}</td>
                        <td className="p-3 border-b border-border/50">{row.period}</td>
                        <td className="p-3 border-b border-border/50">{row.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                After the applicable retention period, data will be securely and permanently deleted
                or irreversibly anonymised.
              </p>
            </Sub>

            <Sub title="6.4 Data Breach Notification">
              <p>
                In the event of a personal data breach likely to result in risk to your rights, we
                will notify you and relevant authorities without undue delay and within the timeframes
                required under applicable Indian law, including the DPDPA 2023.
              </p>
            </Sub>
          </Section>

          {/* 7 */}
          <Section title="7. Your Rights">
            <p>
              Under the Digital Personal Data Protection Act 2023, IT Act 2000, SPDI Rules 2011 and
              (where applicable) GDPR, you have the following rights:
            </p>
            <div className="mt-4 space-y-3">
              {userRights.map((item) => (
                <div key={item.right} className="flex gap-3 p-3 border border-border/50 rounded-sm bg-card">
                  <span className="font-semibold text-foreground shrink-0 text-sm w-44">{item.right}</span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise any right, contact our Grievance Officer at{" "}
              <a href="mailto:support@duofit.club" className="text-primary underline underline-offset-2">
                support@duofit.club
              </a>. We respond within 30 days.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Cookies and Tracking Technologies">
            <Sub title="8.1 Types of Cookies We Use">
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-primary/10 text-primary shrink-0 mt-0.5">Required</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Essential Cookies</p>
                    <p className="text-sm text-muted-foreground">Required for basic website functionality. Cannot be disabled.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-muted text-muted-foreground shrink-0 mt-0.5">Optional</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Performance / Analytics</p>
                    <p className="text-sm text-muted-foreground">Help us understand how visitors use our website to improve content and user experience.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-muted text-muted-foreground shrink-0 mt-0.5">Optional</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Preference Cookies</p>
                    <p className="text-sm text-muted-foreground">Remember your settings such as language or region preferences.</p>
                  </div>
                </div>
              </div>
            </Sub>
            <Sub title="8.2 Third-Party Cookies">
              <p>
                Google Fonts, loaded on our website, may record your IP address to serve fonts.
                This is governed by Google's Privacy Policy. We do not use advertising or tracking
                cookies from third-party ad networks.
              </p>
            </Sub>
            <Sub title="8.3 Managing Cookies">
              <p>
                You can control and delete cookies through your browser settings. Disabling essential
                cookies may affect website functionality.
              </p>
            </Sub>
          </Section>

          {/* 9 */}
          <Section title="9. Children's Privacy">
            <p>
              Our services are intended for individuals aged <strong className="text-foreground">18
              and above</strong>. We do not knowingly collect, solicit or process personal information
              from anyone under 18 years of age.
            </p>
            <p>
              If a parent or guardian believes their child has provided us information, contact us
              immediately at{" "}
              <a href="mailto:support@duofit.club" className="text-primary underline underline-offset-2">
                support@duofit.club
              </a>{" "}
              and we will promptly delete such information.
            </p>
            <p>
              Family coaching programs involving children are conducted with the explicit consent
              and active participation of a parent or legal guardian, who is responsible for
              consenting on the child's behalf.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. International Users and Data Transfers">
            <Sub title="10.1 Users Outside India">
              <p>
                Our services are primarily intended for users in India. If you access our website
                from outside India, your data may be transferred to, stored and processed in India,
                where data protection laws may differ from those in your country.
              </p>
            </Sub>
            <Sub title="10.2 For EU / EEA Users (GDPR)">
              <p>
                If you are in the European Union or EEA, you have additional rights under GDPR,
                including the right to lodge a complaint with your local supervisory authority.
                International transfers to India are made with appropriate safeguards to ensure
                a level of protection equivalent to GDPR requirements.
              </p>
            </Sub>
            <Sub title="10.3 For Users in Other Jurisdictions">
              <p>
                Users in other jurisdictions (United States, Canada, Australia, etc.) should note
                that their data will be processed under Indian law. By using our services, you
                consent to this processing.
              </p>
            </Sub>
          </Section>

          {/* 11 */}
          <Section title="11. Grievance Officer">
            <p>
              In accordance with the Information Technology Act 2000, SPDI Rules 2011 and the
              Digital Personal Data Protection Act 2023, we have designated a Grievance Officer:
            </p>
            <div className="mt-4 p-5 border border-border bg-card rounded-sm space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="font-semibold text-foreground w-28 shrink-0">Name:</span>
                <span className="text-muted-foreground">DUOFIT Grievance Officer</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground w-28 shrink-0">Organisation:</span>
                <span className="text-muted-foreground">DUOFIT</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground w-28 shrink-0">Email:</span>
                <a href="mailto:support@duofit.club" className="text-primary underline underline-offset-2">
                  support@duofit.club
                </a>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground w-28 shrink-0">WhatsApp:</span>
                <span className="text-muted-foreground">+91 90528 53200</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-foreground w-28 shrink-0">Response:</span>
                <span className="text-muted-foreground">Acknowledgement within 24 hours · Resolution within 30 days</span>
              </div>
            </div>
            <p className="mt-4">
              If unresolved within 30 days, you may escalate to the{" "}
              <strong className="text-foreground">Data Protection Board of India</strong> (as
              constituted under DPDPA 2023) or approach a competent court of jurisdiction.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. Applicable Laws and Compliance">
            <p>This Privacy Policy is drafted in compliance with:</p>
            <div className="mt-3 space-y-2">
              {applicableLaws.map((item) => (
                <div key={item.law} className="flex items-start gap-3 p-3 border border-border/40 rounded-sm">
                  <Dot />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.law}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.scope}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 13 */}
          <Section title="13. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically. When we make material changes, we will:
            </p>
            <BulletList items={[
              "Update the 'Last Updated' date at the top of this page",
              "Display a prominent notice on our website for a reasonable period",
              "Where feasible, notify active clients via WhatsApp or email",
            ]} />
            <p className="mt-3">
              Continued use of our website after changes become effective constitutes acceptance.
              If you do not agree with the changes, stop using our services and contact us to
              delete your data.
            </p>
          </Section>

          {/* 14 */}
          <Section title="14. Governing Law and Jurisdiction">
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising out of or
              in connection with this Privacy Policy shall be subject to the exclusive jurisdiction
              of the competent courts in India.
            </p>
          </Section>

          {/* Contact CTA */}
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-sm text-center">
            <h3 className="font-bold text-foreground mb-2">Questions about this policy?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We are committed to transparency. If anything is unclear or you wish to exercise
              your rights, reach out to us directly.
            </p>
            <a
              href="mailto:support@duofit.club"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-primary hover:text-foreground transition-colors rounded-sm"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </SiteLayout>
  );
}