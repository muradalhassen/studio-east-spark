import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Trophy, Users } from "lucide-react";

export const ProductsSection = () => {
  return (
    <section id="products" className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="text-gradient">Products</span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="text-gradient">FriendsConnect</span>
            </h3>
            <p className="text-sm font-medium text-primary text-center mb-6 tracking-widest uppercase">
              Coming Soon
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              Redefining how we share our favorite experiences, FriendConnect
              turns local discovery into a shared journey. From competing for the
              top spot on friend leaderboards to navigating your neighborhood
              with an intuitive, map-driven interface, it's designed to keep you
              connected to your circle and the most exciting happenings around
              you.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-xl font-bold text-gradient mb-2">
                  Local Discovery
                </div>
                <p className="text-sm text-muted-foreground">
                  Navigate your neighborhood with a map-driven interface
                </p>
              </div>

              <div className="text-center p-4">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-xl font-bold text-gradient mb-2">
                  Leaderboards
                </div>
                <p className="text-sm text-muted-foreground">
                  Compete with friends for the top spot
                </p>
              </div>

              <div className="text-center p-4">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-xl font-bold text-gradient mb-2">
                  Shared Experiences
                </div>
                <p className="text-sm text-muted-foreground">
                  Stay connected to your circle and local happenings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
