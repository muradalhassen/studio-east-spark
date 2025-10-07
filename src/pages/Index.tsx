import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(32_95%_58%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(28_90%_65%/0.08),transparent_50%)]" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <span className="inline-block text-sm font-medium tracking-widest text-primary uppercase mb-4 animate-slide-up">
              Coming Soon
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            STUDIO
            <span className="text-gradient">EAST</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            A creative studio crafting exceptional digital experiences. 
            We're preparing something special.
          </p>
          
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="tracking-wider">Get in touch below</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-elegant">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 STUDIOEAST. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
