import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { MapPin, Target, ShieldCheck, Scale, Globe } from "lucide-react";
import aboutHq from "@/assets/images/about-hq.png";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-40 pb-20 bg-primary text-white border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Company Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 max-w-4xl">
              Born in the UAE, <br/>
              <span className="text-white/60 italic">Built for the World.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Authority</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NTAGROUP is a heavyweight in the global commodities market. Operating from our strategic headquarters in the United Arab Emirates, we leverage serious capital and unparalleled market intelligence to bridge the gap between supply and global demand.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We operate with the precision of a modern trading desk and the immense scale of an industrial powerhouse. From our flagship chemical fertilizers division to energy and agriculture, we facilitate massive volumes of trade across Europe, Asia, and Africa.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
                <div>
                  <Target className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To secure global supply chains through uncompromising reliability, scale, and strategic trade execution.</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-primary mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Connecting resource-rich origins with major industrial and agricultural centers across three continents.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="relative p-4 bg-secondary">
                <img 
                  src={aboutHq} 
                  alt="NTAGROUP UAE Headquarters" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 max-w-xs hidden md:block">
                  <MapPin className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-serif font-bold text-xl mb-2">UAE Headquarters</h3>
                  <p className="text-sm text-white/70">The nexus of East and West, giving us unparalleled logistical and financial advantages.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership & Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn className="md:col-span-1">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Trading Principles</h2>
              <p className="text-muted-foreground">
                In the commodities market, reputation is currency. NTAGROUP operates on strict principles that protect our partners and guarantee performance.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 border-t-4 border-accent">
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Absolute Execution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When a contract is signed, delivery is guaranteed. We mitigate geopolitical and logistical risks to ensure seamless supply chain performance.
                  </p>
                </div>
                <div className="bg-white p-8 border-t-4 border-accent">
                  <Scale className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Industrial Scale</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We do not deal in fragments. Our operations are designed for massive volume, catering to major national and international procurement demands.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
