import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useLocation } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  interest: z.string().min(1, "Please select a product of interest"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

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

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [location] = useLocation();
  
  // Try to pre-fill interest from URL params (e.g. ?interest=lng)
  // Since wouter doesn't have a built-in search params hook in older versions, we parse window.location
  let defaultInterest = "";
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    defaultInterest = params.get("interest") || "";
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: defaultInterest,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, send data to backend here.
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-white/70 max-w-2xl font-light">
              Connect with our trading desk to discuss volume, pricing, and supply logistics.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            
            <FadeIn className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Global Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Dubai, UAE</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        NTAGROUP Trading Center<br />
                        Business Bay, Downtown Dubai<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Trading Desk</h4>
                      <p className="text-muted-foreground text-sm">+971 4 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Inquiries</h4>
                      <p className="text-muted-foreground text-sm">trading@ntagroup.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">Monday - Friday: 09:00 - 18:00 (GST)<br/>Closed on weekends</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 shadow-sm border border-border">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">Inquiry Received</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Thank you for contacting NTAGROUP. Your inquiry has been routed to the appropriate trading desk. A representative will contact you shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      variant="outline" 
                      className="mt-8 rounded-none border-primary text-primary"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-8">Direct Inquiry</h3>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" className="bg-secondary/50 border-border rounded-none focus-visible:ring-accent" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold">Company</FormLabel>
                                <FormControl>
                                  <Input placeholder="Acme Logistics Ltd." className="bg-secondary/50 border-border rounded-none focus-visible:ring-accent" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold">Corporate Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@company.com" className="bg-secondary/50 border-border rounded-none focus-visible:ring-accent" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-primary font-bold">Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 234 567 8900" className="bg-secondary/50 border-border rounded-none focus-visible:ring-accent" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-bold">Product of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-secondary/50 border-border rounded-none focus:ring-accent">
                                    <SelectValue placeholder="Select a business line" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-none border-border">
                                  <SelectItem value="fertilizers">Chemical Fertilizers Trading</SelectItem>
                                  <SelectItem value="lng">Industrial & LNG Trading</SelectItem>
                                  <SelectItem value="refined">Refined Oil Products</SelectItem>
                                  <SelectItem value="crude">Crude Oil Trading</SelectItem>
                                  <SelectItem value="petrochemicals">Petrochemicals</SelectItem>
                                  <SelectItem value="grains">Grains, Cereals & Legumes</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-bold">Inquiry Details</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please provide required volumes, destination ports, and timeline..." 
                                  className="min-h-[150px] bg-secondary/50 border-border rounded-none focus-visible:ring-accent resize-none" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full md:w-auto rounded-none bg-primary hover:bg-accent hover:text-primary transition-colors font-bold uppercase tracking-wider px-12">
                          Submit Inquiry
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
