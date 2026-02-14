import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface TeamMember {
  name: string;
  bio: string;
  image?: string;
  imagePosition?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Murad Alhassen",
    bio: "Software Engineer at JPMorganChase and Computer Science student at Arizona State University. Co-Founder of ColorStack ASU and NSBE Region VI Vice Chairperson, passionate about building community in tech.",
    image: "/murad-alhassen.jpg",
  },
  {
    name: "Emmanuel Alemu",
    bio: "Software Engineer II at American Express, building self-service automations and developer experience tooling. Informatics graduate from Arizona State University with a passion for giving back to the Black tech community.",
    image: "/emmanuel-alemu.jpg",
    imagePosition: "center 30%",
  },
  {
    name: "Lemuel Tekeste",
    bio: "Computer Science student at Arizona State University and active member of NSBE and ColorStack. Driven by a passion for STEM and building meaningful connections in the Black tech community.",
    image: "/lemuel-tekeste.jpg",
  },
  {
    name: "Yohannes Dawit",
    bio: "Software Engineering Intern at Intuit and Computer Science student at Arizona State University. Active ColorStack member dedicated to growing as an engineer and uplifting the Black and Latinx tech community.",
    image: "/yohannes-dawit.jpg",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="text-gradient">Meet the Team</span>
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border/50 group-hover:border-primary/50 transition-colors duration-300 flex items-center justify-center mb-6 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.imagePosition || "top" }}
                    />
                  ) : (
                    <User className="w-16 h-16 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {member.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
