import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="text-gradient">About Us</span>
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              STDIO EAST is a creative technology studio dedicated to crafting exceptional 
              digital experiences. We specialize in building innovative solutions that bridge 
              the gap between imagination and reality. Our team combines technical expertise 
              with creative vision to deliver products that make a lasting impact.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-gradient mb-2">Innovation</div>
                <p className="text-sm text-muted-foreground">
                  Pushing boundaries with cutting-edge solutions
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-gradient mb-2">Quality</div>
                <p className="text-sm text-muted-foreground">
                  Delivering excellence in every project
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-gradient mb-2">Passion</div>
                <p className="text-sm text-muted-foreground">
                  Driven by our love for technology
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
