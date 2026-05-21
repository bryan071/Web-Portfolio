import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await emailjs.send(
        "service_zfe04du",
        "template_ndvxx6w",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "2FhPCaZJi22mLtcou"
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="bg-secondary/20 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text">
            Touch
          </span>{" "}
          📬
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          I'd love to hear from you, whether it's a project, job opportunity,
          or just to say hello!
        </p>

        <Card className="bg-card border-border shadow-lg max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-background border-border"
                required
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background border-border"
                required
              />

              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-background border-border resize-none"
                required
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Send Message 🚀
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/bryan071"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://www.linkedin.com/in/bryan-bulan-828659374/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a
            href="mailto:bryanbulan28@gmail.com"
            className="hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
}