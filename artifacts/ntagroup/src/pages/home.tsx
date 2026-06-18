import { Layout } from "@/components/layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Anchor, Globe, Scale, Droplet, Sprout, Building, ChevronRight, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroFertilizers from "@/assets/images/hero-fertilizers.png";
import productsLng from "@/assets/images/products-lng.png";
import productsRefinedOil from "@/assets/images/products-refined-oil.png";
import productsCrude from "@/assets/images/products-crude.png";
import productsPetrochemicals from "@/assets/images/products-petrochemicals.png";
import productsGrains from "@/assets/images/products-grains.png";
import heroVideo from "@assets/generated_videos/ntagroup_hero.mp4";
import { useRef } from "react";

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

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroFertilizers}
            className="w-full h-full object-cover object-center scale-105"
            data-testid="video-hero-background"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 border border-accent text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded-sm bg-primary/30 backdrop-blur-sm">
                UAE • Global Reach • Industrial Scale
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8"
            >
              Powering the <br/>
              <span className="text-accent italic">Global Supply</span> <br/>
              Chain.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 max-w-xl mb-12 font-light leading-relaxed border-l-2 border-accent pl-6"
            >
              NTAGROUP is a heavyweight commodities trading firm. From our flagship chemical fertilizers to energy and agriculture, we bridge supply with international demand at unprecedented scale.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-none bg-accent text-primary hover:bg-white text-sm font-bold uppercase tracking-wider h-14 px-8">
                <Link href="/products">Explore Our Trading Lines</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-white/30 text-white hover:bg-white hover:text-primary text-sm font-bold uppercase tracking-wider h-14 px-8 backdrop-blur-sm">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats / Trust Signals */}
      <section className="bg-primary border-b border-white/10 relative z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
            <FadeIn delay={0.1}>
              <div className="flex flex-col">
                <span className="text-accent font-serif text-4xl md:text-5xl font-bold mb-2">UAE</span>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Strategic HQ</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col">
                <span className="text-accent font-serif text-4xl md:text-5xl font-bold mb-2">3</span>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Continents Served</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col">
                <span className="text-accent font-serif text-4xl md:text-5xl font-bold mb-2">6</span>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Core Divisions</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col">
                <span className="text-accent font-serif text-4xl md:text-5xl font-bold mb-2">Tier-1</span>
                <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">Trading Desk</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Flagship Product Highlight */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 z-0"></div>
                <img 
                  src={heroFertilizers} 
                  alt="Chemical Fertilizers" 
                  className="relative z-10 w-full h-[600px] object-cover grayscale-[0.2] contrast-[1.1]"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-accent"></div>
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Flagship Division</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                Chemical Fertilizers Trading
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                As our premier business line, we supply top-tier chemical fertilizers to agricultural markets globally. Operating at industrial scale, we ensure food security and maximize yield efficiency for our partners across Europe, Asia, and Africa.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-primary font-medium">
                  <ShieldCheck className="text-accent w-6 h-6" /> Quality-assured high-volume supply
                </li>
                <li className="flex items-center gap-4 text-primary font-medium">
                  <Globe className="text-accent w-6 h-6" /> Seamless cross-border logistics
                </li>
                <li className="flex items-center gap-4 text-primary font-medium">
                  <BarChart3 className="text-accent w-6 h-6" /> Capital-intensive market leadership
                </li>
              </ul>
              <Button asChild className="rounded-none bg-primary text-white hover:bg-accent hover:text-primary transition-all">
                <Link href="/products" className="flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Full Lineup of Business Lines */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">A Diverse Portfolio of Industrial Power</h2>
            <p className="text-muted-foreground text-lg">Beyond our flagship fertilizers, NTAGROUP commands significant market share in energy and essential agricultural commodities.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LNG Trading",
                image: productsLng,
                icon: <Anchor className="w-6 h-6 mb-4 text-accent" />,
                desc: "Industrial & Liquefied Natural Gas traded with precision for global energy demands."
              },
              {
                title: "Refined Oil Products",
                image: productsRefinedOil,
                icon: <Droplet className="w-6 h-6 mb-4 text-accent" />,
                desc: "High-grade refined petroleum products distributed across our international network."
              },
              {
                title: "Crude Oil Trading",
                image: productsCrude,
                icon: <Globe className="w-6 h-6 mb-4 text-accent" />,
                desc: "Heavyweight crude oil supply chain management from origin to destination."
              },
              {
                title: "Petrochemicals",
                image: productsPetrochemicals,
                icon: <Building className="w-6 h-6 mb-4 text-accent" />,
                desc: "Advanced chemical components driving modern manufacturing globally."
              },
              {
                title: "Grains & Cereals",
                image: productsGrains,
                icon: <Sprout className="w-6 h-6 mb-4 text-accent" />,
                desc: "Essential food commodities traded at immense volumes for international markets."
              },
              {
                title: "Chemical Fertilizers",
                image: heroFertilizers,
                icon: <Scale className="w-6 h-6 mb-4 text-accent" />,
                desc: "Our flagship. World-class agricultural inputs for maximum yield."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href="/products">
                  <div className="group cursor-pointer relative overflow-hidden h-[400px] flex flex-col justify-end">
                    <div className="absolute inset-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent transition-opacity duration-500" />
                    </div>
                    <div className="relative z-10 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.icon}
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.desc}
                      </p>
                      <div className="flex items-center text-accent text-sm font-bold uppercase tracking-wider">
                        Explore <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                Ready to secure your global supply chain?
              </h2>
              <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
                Connect with NTAGROUP's trading desk today. Our experts are ready to structure a supply agreement that meets your industrial requirements.
              </p>
              <Button asChild size="lg" className="rounded-none bg-accent text-primary hover:bg-white text-sm font-bold uppercase tracking-wider h-14 px-10">
                <Link href="/contact">Initiate Contact</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
