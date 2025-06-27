import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  const features = [
    {
      title: "Specialist in Domain",
      description: "Excels in tax laws, compliance, planning, audits, dispute resolution, and advisory services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10v4M17 10v4M12 7v10M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Over 30 Years Of Experience",
      description: "30+ years of excellence in tax laws, audits, dispute resolution, and financial planning services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "PAN India Coverage",
      description: "Serving clients across India with offices in Delhi NCR, Varanasi, and Sasaram.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Client-Focused Approach",
      description: "Building lasting relationships based on trust, expertise, and integrity since 1994.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence" },
    { number: "1000+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
    { number: "PAN", label: "India Coverage" },
  ];

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Since 1994
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of Excellence in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Legal & Tax Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              More than a law firm—a partner in your success. We believe that legal and tax solutions should empower growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in-up">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The firm began with humble origins in 1994, founded in a single-room setup by <span className="font-semibold text-foreground">Adv. Kamlesh Kumar Sharma</span>, who had no prior law firm experience. With an exceptional academic background and a deep understanding of the law, he established the firm on the principles of expertise, integrity, and a steadfast commitment to excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over the years, <span className="font-semibold text-foreground">KK Tax Legal</span> has grown into a trusted name in taxation and legal services, continuing to uphold its founding values while adapting to the evolving needs of clients.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="italic text-foreground font-medium">
                  &quot;A plan without action leads to slow progress, while action without a plan results in chaos and failure.&quot;
                </p>
              </div>

              <Link href="/contact-us">
                <button className="btn btn-primary px-6 py-3 rounded-lg font-semibold">
                  Get In Touch
                </button>
              </Link>
            </div>

            <div className="relative animate-in-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Founder - Adv. Kamlesh Kumar Sharma"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm opacity-90">Founder</div>
                <div className="text-lg font-bold">Adv. Kamlesh Kumar Sharma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond providing services—we deliver solutions that empower your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-content">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            At <span className="font-semibold">KK Tax Legal</span>, we don&apos;t just provide legal and tax solutions—we build lasting relationships based on trust, expertise, and integrity. With decades of experience, we help businesses, entrepreneurs, and individuals navigate complex legal and financial landscapes with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/practice-areas">
              <button className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold shadow-xl">
                Our Services
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 