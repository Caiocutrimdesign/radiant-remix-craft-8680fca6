import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jaismara Raphiza",
    text: "Ótimo atendimento, os consultores são super gentis e atenciosos, fora que o benefício adquirido é perfeito também!",
  },
  {
    name: "Adriana Almeida",
    text: "Excelente atendimento, vendedores super atenciosos e educados. Super recomendo! Parabéns ao Josué que foi quem me atendeu!",
  },
  {
    name: "Gilvana Moreira",
    text: "Desde já agradeço a receptividade da equipe à frente dessa excelente empresa. Obrigada por me deixar à vontade.",
  },
  {
    name: "Cleiton JSP",
    text: "Excelente localização. Excelente atendimento. Funcionários bem educados e prestativos. Excepcional atendimento.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Depoimentos</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente Rastremix</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
