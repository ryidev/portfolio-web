import { PinContainer } from "./ui/Pin";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "./utils/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:satriaridho4355@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    satriaridho4355@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 812-7458-8486
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Sleman, Yogyakarta, Indonesia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/satria-ridho-03a70a376/" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/peachydhoo_/" target="_blank">
                  <Instagram />
                </a>
                
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.2)] border border-white/[0.08] bg-white/[0.01] w-full max-w-lg mx-auto relative flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm transition-colors"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none backdrop-blur-sm transition-colors"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "relative inline-flex items-center justify-center w-full gap-2 h-12 overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg transition-shadow duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-80 px-6 py-1 text-base font-semibold text-white transition-colors duration-300 group-hover:bg-opacity-90">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} className="ml-2" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};