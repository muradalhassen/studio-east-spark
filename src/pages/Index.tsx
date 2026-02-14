import { AboutUs } from "@/components/AboutUs";
import { ProductsSection } from "@/components/ProductsSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="text-gradient">STDIO EAST</span>
          </h1>
          
          <Button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 btn-gradient border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6 animate-slide-up"
          >
            Learn About Us
          </Button>
        </div>
      </section>

      <AboutUs />

      <ProductsSection />

      <TeamSection />

      <section id="contact" className="w-full py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Have a question or want to work with us?
          </p>
          
          <ContactForm />
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} STDIO EAST. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
