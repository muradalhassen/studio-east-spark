import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full mx-auto text-center space-y-8 animate-fade-in">
        {/* Logo/Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gradient mb-8">
          STDIOEAST
        </h1>
        
        {/* Coming Soon Text */}
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12">
          Coming Soon...
        </h2>
        
        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
