import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:studioeast@gmail.com";
  };

  return (
    <Button 
      onClick={handleContactClick}
      className="w-full h-14 text-lg font-medium btn-gradient border-0 hover:opacity-90 transition-opacity"
    >
      <Send className="mr-2 h-5 w-5" />
      Contact Us
    </Button>
  );
};
