import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Rénovation complète",
  "Cuisine",
  "Salle de bain",
  "Isolation thermique",
  "Électricité / Plomberie",
  "Menuiserie / Finitions",
  "Autre",
];

const timelines = [
  "Dès que possible",
  "Dans 1 à 3 mois",
  "Dans 3 à 6 mois",
  "Dans plus de 6 mois",
  "Je souhaite un conseil",
];

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    projectType: "",
    timeline: "",
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
  });

  const totalSteps = 3;

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.projectType !== "";
      case 2:
        return formData.timeline !== "";
      case 3:
        return (
          formData.lastName !== "" &&
          formData.firstName !== "" &&
          formData.email !== "" &&
          formData.phone !== ""
        );
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-quote-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Demande envoyée",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setStep(1);
      setFormData({
        projectType: "",
        timeline: "",
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error('Error sending quote:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section id="quote-form" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              Votre Projet
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Demandez votre étude personnalisée
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg">
              Quelques questions pour mieux comprendre vos besoins et vous proposer 
              une solution adaptée.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between mb-3">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                    step > i + 1
                      ? "bg-accent text-accent-foreground"
                      : step === i + 1
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/40"
                  }`}
                >
                  {step > i + 1 ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    i + 1
                  )}
                </div>
              ))}
            </div>
            <div className="h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-8 md:p-10 shadow-elevated"
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Project Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Label className="text-lg font-serif mb-4 block text-foreground">
                    Quel type de projet souhaitez-vous réaliser ?
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => updateField("projectType", value)}
                  >
                    <SelectTrigger className="h-14 text-base">
                      <SelectValue placeholder="Sélectionnez un type de projet" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              )}

              {/* Step 2: Timeline */}
              {step === 2 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <Label className="text-lg font-serif mb-4 block text-foreground">
                    Dans quel délai souhaitez-vous démarrer ?
                  </Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => updateField("timeline", value)}
                  >
                    <SelectTrigger className="h-14 text-base">
                      <SelectValue placeholder="Sélectionnez un délai" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <Label className="text-lg font-serif mb-2 block text-foreground">
                    Vos coordonnées
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="lastName" className="text-sm text-muted-foreground mb-2 block">
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="firstName" className="text-sm text-muted-foreground mb-2 block">
                        Prénom
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={() => setStep((s) => s - 1)}
                  className="text-muted-foreground"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Précédent
                </Button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <Button
                  variant="accent"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="group"
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ) : (
                <Button
                  variant="accent"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
