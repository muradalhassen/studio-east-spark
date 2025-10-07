import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md mx-auto text-center space-y-8 animate-fade-in">
        {/* Logo/Title */}
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-gradient mb-8">
          STDIOEAST
        </h1>
        
        {/* Coming Soon Text */}
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12">
          Coming Soon...
        </h2>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
