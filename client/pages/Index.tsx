import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 14, 39, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black gradient-text">JAX</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm hover:text-cyan-400 transition">
              Work
            </a>
            <a href="#skills" className="text-sm hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
          <button className="btn-glass px-6 py-2 text-sm">Resume</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" style={{ animation: "float 3s ease-in-out infinite 2s" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full glass text-sm text-cyan-300 glow-cyan">
              Web Developer & Creative Technologist
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">I build experiences,</span>
            <br />
            <span className="text-white">not just websites.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            A digital craftsman obsessed with creating jaw-dropping experiences that blend
            design, technology, and art into something unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-premium flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="btn-glass flex items-center justify-center gap-2">
              Get in Touch
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div className="space-y-6">
              <h2 className="text-5xl font-black mb-6">
                <span className="gradient-text">About Me</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                With 8 years of experience in digital design and development, I've worked with
                startups and Fortune 500 companies to create digital products that don't just
                work—they inspire.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building beautiful, performant web experiences using cutting-edge
                technologies and design principles. Every pixel matters, and every interaction
                tells a story.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not designing or coding, you'll find me exploring the intersection of
                art, technology, and user experience.
              </p>

              <div className="pt-6">
                <button className="btn-glass">Learn More</button>
              </div>
            </div>

            {/* Visual side */}
            <div className="relative h-96 md:h-full">
              <div className="card-premium absolute inset-0 flex items-end justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400/40 to-pink-400/40 blur-xl animate-pulse mb-6" />
                    <p className="text-cyan-300 font-semibold">Digital Craftsman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="gradient-text">My Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
                icon: "🎨",
              },
              {
                category: "Backend",
                skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
                icon: "⚙️",
              },
              {
                category: "Design",
                skills: ["UI/UX Design", "Figma", "Prototyping", "Animation"],
                icon: "✨",
              },
              {
                category: "Tools",
                skills: ["Git", "Docker", "Vercel", "AWS"],
                icon: "🛠️",
              },
              {
                category: "Performance",
                skills: ["Web Vitals", "Optimization", "SEO", "Accessibility"],
                icon: "⚡",
              },
              {
                category: "Soft Skills",
                skills: ["Leadership", "Communication", "Problem-solving", "Collaboration"],
                icon: "🤝",
              },
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className="card-premium group cursor-pointer"
              >
                <div className="text-4xl mb-4">{skillGroup.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 group-hover:border-cyan-400 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="gradient-text">Featured Work</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "TechFlow Dashboard",
                description: "A real-time analytics platform with interactive visualizations",
                tags: ["React", "TypeScript", "D3.js"],
                image: "bg-gradient-to-br from-cyan-600/30 to-blue-600/30",
              },
              {
                title: "Creative Studio",
                description: "Portfolio website featuring immersive scrolling experiences",
                tags: ["Next.js", "Framer Motion", "WebGL"],
                image: "bg-gradient-to-br from-pink-600/30 to-purple-600/30",
              },
              {
                title: "Marketplace Platform",
                description: "Full-stack e-commerce platform with advanced filtering",
                tags: ["React", "Node.js", "MongoDB"],
                image: "bg-gradient-to-br from-green-600/30 to-teal-600/30",
              },
            ].map((project, idx) => (
              <div key={idx} className="card-premium overflow-hidden group">
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                  {/* Image side */}
                  <div className={`${project.image} rounded-lg h-64 md:h-auto md:col-span-1 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30" />
                  </div>

                  {/* Content side */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-300 transition">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="btn-glass inline-flex items-center gap-2 text-sm">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="btn-glass inline-flex items-center gap-2 text-sm">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="gradient-text">What People Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "JAX transformed our product with exceptional design and execution. A true visionary.",
                author: "Sarah Chen",
                title: "CEO, TechVenture",
              },
              {
                quote: "Working with JAX was a game-changer. The attention to detail is unmatched.",
                author: "Michael Rodriguez",
                title: "Product Lead, DataFlow",
              },
              {
                quote: "One of the most talented developers I've worked with. Highly recommended.",
                author: "Emma Thompson",
                title: "Founder, CreativeStudio",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="card-premium">
                <div className="mb-6 text-cyan-400 text-4xl">"</div>
                <p className="text-gray-300 mb-8 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="gradient-text">Let's Create Something</span>
            </h2>
            <p className="text-xl text-gray-400">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>

          <div className="card-premium">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-semibold mb-3">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition text-white placeholder-gray-600"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition text-white placeholder-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">Project Details</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition text-white placeholder-gray-600 resize-none"
                />
              </div>

              <button type="submit" className="btn-premium w-full flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-gray-400">© 2024 JAX. All rights reserved.</p>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition group"
                  >
                    <Icon className="w-5 h-5 group-hover:rotate-6 transition" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
