import { motion } from "framer-motion";
import { Shield, FileCheck, Award, BadgeCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Garantie Décennale",
  },
  {
    icon: FileCheck,
    title: "Responsabilité Civile",
  },
  {
    icon: Award,
    title: "Certifié RGE",
  },
  {
    icon: BadgeCheck,
    title: "Qualibat",
  },
];

const TrustBar = () => {
  return (
    <section id="trust" className="bg-primary py-8 border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-primary-foreground/80"
            >
              <item.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-wide uppercase">
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
