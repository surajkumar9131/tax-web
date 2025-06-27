import React from "react";
import Image from "next/image";
import Link from "next/link";

const PRACTICE_AREAS = [
  {
    title: "Income Tax Filing",
    description: "We provide ITR filing, tax planning, compliance, and advisory services for individuals and businesses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10v4M17 10v4M12 7v10M2 12h20" />
      </svg>
    ),
  },
  {
    title: "GST Filing",
    description: "We provide GST registration, filing, compliance, advisory, refunds, and audit services for businesses.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v1M8 3v1M4 7h16M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7l2-4h12l2 4" />
      </svg>
    ),
  },
  {
    title: "Registration",
    description: "We provide Company, GST, MSME, trademark, NGO, and other registration services with expert assistance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Notices",
    description: "We provide notice solution services, including tax notices, legal responses, compliance assistance, representation, dispute resolution, expert advisory, and documentation support for hassle-free compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Accounting",
    description: "We provide accounting services, including bookkeeping, financial reporting, payroll etc.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Compliance",
    description: "We provide company services, including ROC filings, annual returns, documentation, and governance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "License",
    description: "We provide license services, including GST, FSSAI, trade, import-export, business registration, and compliance assistance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Trademark",
    description: "We provide intellectual property and trademark services for brand protection and registration.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M7 7l5 5" />
      </svg>
    ),
  },
];

const DETAILED_SERVICES = [
  {
    title: "INCOME TAX",
    description: "Income Tax services help individuals and businesses comply with tax regulations while optimizing their tax liabilities. These services include tax return preparation, filing, tax planning, deductions, exemptions, and compliance with the Income Tax Act. Professional tax experts assist in minimizing tax burdens, handling tax audits, responding to notices, and ensuring timely filings to avoid penalties. Businesses benefit from corporate tax planning, TDS compliance, and GST integration. Personalized tax strategies help maximize savings while maintaining full legal compliance. With KK TAX LEGAL guidance, taxpayers can navigate complex tax laws efficiently, ensuring financial stability and peace of mind.",
    image: "/tax-illustration-1.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10v4M17 10v4M12 7v10M2 12h20" />
      </svg>
    ),
  },
  {
    title: "GST",
    description: "GST services help businesses comply with Goods and Services Tax (GST) regulations, ensuring smooth tax filing and compliance. These services include GST registration, return filing, invoicing, input tax credit management, and GST audits. Professionals assist in tax planning, dispute resolution, and handling GST notices to avoid penalties. Businesses benefit from seamless tax calculations, proper documentation, and legal compliance. GST consultancy ensures businesses stay updated with changing tax laws and maintain proper records. With KK TAX LEGAL guidance, businesses can optimize their GST liabilities, reduce errors, and focus on growth while staying compliant with the Goods and Services Tax regulations.",
    image: "/tax-illustration-2.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v1M8 3v1M4 7h16M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7l2-4h12l2 4" />
      </svg>
    ),
  },
  {
    title: "BUSINESS COMPLIANCE",
    description: "Company compliance services ensure businesses adhere to legal and regulatory requirements set by government authorities. These services include company registration, ROC filings, annual returns, director KYC, statutory audits, and tax compliance. Experts assist in maintaining proper documentation, corporate governance, and meeting deadlines to avoid penalties. Compliance services also cover labor laws, environmental regulations, and industry-specific licenses. Staying compliant helps businesses build credibility, avoid legal risks, and operate smoothly. With KK TAX LEGAL guidance, companies can navigate complex regulations efficiently, ensuring long-term stability and growth while focusing on their core operations without legal hindrances.",
    image: "/tax-illustration-3.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in-up">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Our Expertise
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expertise That Covers Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Legal & Tax Need
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              At <span className="font-semibold text-foreground">KK Tax Legal</span>, we go beyond providing services—we deliver solutions. Our seasoned professionals specialize in a wide range of legal and tax matters.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">What We Are Expert At</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Legal Practice Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal and tax services tailored to meet your business and personal needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.map((area, index) => (
              <div
                key={area.title}
                className="card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group animate-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-content text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact-us">
              <button className="btn btn-primary px-8 py-3 rounded-lg font-semibold">
                Get Expert Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Core Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Detailed Service Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our expertise can help you navigate complex legal and tax landscapes
            </p>
          </div>

          {DETAILED_SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 animate-in-up">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link href="/contact-us">
                    <button className="btn btn-outline px-6 py-2 rounded-lg font-semibold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 animate-in-up">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={`${service.title} Illustration`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Expert Legal & Tax Solutions?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let our experienced team help you navigate complex legal and tax matters with confidence. Get in touch today for personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold shadow-xl">
                Get Free Consultation
              </button>
            </Link>
            <a href="tel:+918826544894">
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full font-semibold">
                Call Now: +91 8826544894
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 