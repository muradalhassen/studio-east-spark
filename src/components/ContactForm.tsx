import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // For now, we'll just show a success message
      // Email functionality will be added via Lovable Cloud
      console.log("Form submitted:", values);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input
        placeholder="Your Name"
        {...form.register("name")}
        className="bg-input border-0 h-14 text-base placeholder:text-muted-foreground"
      />
      {form.formState.errors.name && (
        <p className="text-sm text-destructive text-left">{form.formState.errors.name.message}</p>
      )}
      
      <Input
        type="email"
        placeholder="Your Email"
        {...form.register("email")}
        className="bg-input border-0 h-14 text-base placeholder:text-muted-foreground"
      />
      {form.formState.errors.email && (
        <p className="text-sm text-destructive text-left">{form.formState.errors.email.message}</p>
      )}
      
      <Textarea
        placeholder="Your Message"
        {...form.register("message")}
        className="bg-input border-0 min-h-[140px] text-base placeholder:text-muted-foreground resize-none"
      />
      {form.formState.errors.message && (
        <p className="text-sm text-destructive text-left">{form.formState.errors.message.message}</p>
      )}
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-14 text-lg font-medium btn-gradient border-0 hover:opacity-90 transition-opacity"
      >
        <Send className="mr-2 h-5 w-5" />
        {isSubmitting ? "Sending..." : "Contact Us"}
      </Button>
    </form>
  );
};
