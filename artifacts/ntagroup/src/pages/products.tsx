import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import heroFertilizers from "@/assets/images/hero-fertilizers.png";
import productsLng from "@/assets/images/products-lng.png";
import productsRefinedOil from "@/assets/images/products-refined-oil.png";
import productsCrude from "@/assets/images/products-crude.png";
import productsPetrochemicals from "@/assets/images/products-petrochemicals.png";
import productsGrains from "@/assets/images/products-grains.png";

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

const products = [
  {
    id: "fertilizers",
    title: "Chemical Fertilizers Trading",
    category: "Agricultural Inputs",
    flagship: true,
    desc: "Our premier division. We supply world-class chemical fertilizers essential for maximizing global agricultural yields. Sourced meticulously and traded at immense volumes, our fertilizers ensure food security and operational efficiency for massive agricultural sectors across Europe and Asia.",
    image: heroFertilizers,
  },
  {
    id: "lng",
    title: "Industrial & LNG Trading",
    category: "Energy",
    flagship: false,
    desc: "Liquefied Natural Gas represents the future of clean industrial energy. Our trading desk handles complex, high-value LNG contracts, ensuring continuous energy supply to power grids and heavy industry worldwide.",
    image: productsLng,
  },
  {
    id: "refined",
    title: "Refined Oil Products",
    category: "Energy",
    flagship: false,
    desc: "We distribute top-tier refined petroleum products. From diesel to specialized industrial fuels, our logistics network ensures that critical refined energy reaches its destination safely and on schedule.",
    image: productsRefinedOil,
  },
  {
    id: "crude",
    title: "Crude Oil Trading",
    category: "Energy",
    flagship: false,
    desc: "The backbone of global industry. NTAGROUP facilitates massive crude oil transactions, working with major refineries and national energy reserves to balance supply with surging international demand.",
    image: productsCrude,
  },
  {
    id: "petrochemicals",
    title: "Petrochemicals",
    category: "Industrial Materials",
    flagship: false,
    desc: "Advanced chemical polymers and base components. We supply the fundamental building blocks used in modern manufacturing, plastics, and high-tech industrial applications globally.",
    image: productsPetrochemicals,
  },
  {
    id: "grains",
    title: "Grains, Cereals & Legumes",
    category: "Agricultural Commodities",
    flagship: false,
    desc: "Feeding the world requires scale. Our agricultural desk trades monumental volumes of staple grains, cereals, and legumes, managing complex supply chains from harvest to international delivery ports.",
    image: productsGrains,
  }
];

export default function Products() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-40 pb-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 max-w-4xl">
              Trading Divisions
            </h1>
            <p className="text-xl text-white/70 max-w-2xl font-light">
              Six core pillars of commerce. One unified standard of excellence. Explore our massive-scale commodity operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Flagship Product */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute top-4 -left-4 bg-accent text-primary px-4 py-2 font-bold text-sm tracking-wider uppercase z-20 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-primary" /> Flagship Product
                </div>
                <img 
                  src={products[0].image} 
                  alt={products[0].title} 
                  className="relative z-10 w-full h-[500px] md:h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-primary -z-10 translate-x-4 translate-y-4"></div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">
                {products[0].category}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                {products[0].title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {products[0].desc}
              </p>
              
              <div className="bg-secondary p-8 mb-8 border-l-4 border-accent">
                <h4 className="font-bold text-primary mb-2">Value Proposition</h4>
                <p className="text-muted-foreground text-sm">
                  Unmatched sourcing capabilities combined with our UAE-based strategic logistics allow us to supply fertilizers at a scale and speed that regional competitors simply cannot match.
                </p>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors uppercase tracking-wider text-sm">
                Inquire about volume pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other Products List */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h3 className="text-3xl font-serif font-bold text-primary mb-16 text-center">Comprehensive Commodity Lines</h3>
          </FadeIn>
          
          <div className="space-y-24">
            {products.slice(1).map((product, index) => (
              <FadeIn key={product.id} delay={0.1}>
                <div className={`grid md:grid-cols-5 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`md:col-span-2 ${index % 2 !== 0 ? 'md:col-start-4' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-[400px] object-cover border border-border/50 shadow-lg"
                    />
                  </div>
                  <div className={`md:col-span-3 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <span className="text-accent font-bold uppercase tracking-wider text-xs mb-3 block">
                      {product.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                      {product.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {product.desc}
                    </p>
                    <Link href={`/contact?interest=${product.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1">
                      Discuss Supply Agreements <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
