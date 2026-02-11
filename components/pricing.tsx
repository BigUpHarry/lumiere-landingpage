"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$870",
    label: "Test the waters",
    description:
      "One cinematic motion asset created from your existing photography. Perfect for a homepage hero or a single social platform. Fast turnaround, minimal input required.",
    ideal: "smaller properties or hotels wanting to see what cinematic motion can do before committing to a full content package.",
    features: [
      "1 main cinematic video (~30–45 seconds)",
      "Sourced from your existing photos",
      "Optimised for website or one social platform",
      "1 revision round",
      "Delivered in 2-3 business days",
    ],
  },
  {
    name: "Growth",
    price: "$1,497",
    label: "Most popular",
    description:
      "A primary hero motion asset plus multiple short cut-downs optimised for social media. Designed for properties actively marketing across website and social channels.",
    ideal: "Properties that need consistent, on-brand motion content across their website and Instagram or Facebook.",
    features: [
      "	1 hero cinematic video (~60 seconds)",
      "2 short social-ready clips (~15–30 seconds each)",
      "Optimised for website + social platforms",
      "2 revision rounds",
      "Delivered in 3-5 business days",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$2,497",
    label: "Full content upgrade",
    description:
      "A full cinematic story that showcases your property and everything around it. guest experiences, activities, and lifestyle moments like a short movie telling the complete story of staying at your property.",
    ideal: "Properties serious about brand presentation and driving direct bookings across every channel.",
    features: [
      "	1 hero cinematic video (~1–3 minutes)",
      "Covers multiple property areas and surrounding experiences",
      "Website, social, ads, and OTA ready",
      "3 revision rounds with priority turnaround",
      "Delivered in 5-7 business days",
    ],
  },
]

const steps = [
  {
    number: "01",
    title: "Confirm Your Plan & Payment",
    description: "Choose the plan that fits your property. Once confirmed, we’ll send an invoice or payment link. Work begins once payment is received.",
  },
  {
    number: "02",
    title: "Share your photos",
    description: "Send your property photography and brand preferences via Google Drive, Dropbox, email, or whatever method works best.",
  },
  {
    number: "03",
    title: "Review your video",
    description: "We create your cinematic motion content and share it for your feedback.",
  },
  {
    number: "04",
    title: "Receive final delivery",
    description: "Approved content is delivered in web-ready and social-ready formats.",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-4">
            Choose your plan
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every plan starts with your existing photography. No reshoots, no production crew, no disruption to your guests.
          </p>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col p-8 lg:p-10 rounded-sm ${
                plan.highlighted
                  ? "bg-foreground text-background"
                  : "bg-background border border-border"
              }`}
            >
              {/* Plan Label */}
              <p
                className={`text-xs uppercase tracking-widest mb-4 ${
                  plan.highlighted ? "text-background/60" : "text-muted-foreground"
                }`}
              >
                {plan.label}
              </p>

              {/* Plan Name + Price */}
              <h3
                className={`font-serif text-2xl mb-3 ${
                  plan.highlighted ? "text-background" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className={`font-serif text-4xl lg:text-5xl tracking-tight leading-none lining-nums tabular-nums ${
                    plan.highlighted ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs font-sans tracking-wide uppercase ${
                    plan.highlighted ? "text-background/50" : "text-muted-foreground"
                  }`}
                >
                  + GST
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  plan.highlighted ? "text-background/80" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-background/60" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-background/90" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Ideal For */}
              <p
                className={`text-xs leading-relaxed mb-8 border-t pt-6 ${
                  plan.highlighted
                    ? "text-background/60 border-background/20"
                    : "text-muted-foreground border-border"
                }`}
              >
                <span className={`font-medium ${plan.highlighted ? "text-background/80" : "text-foreground"}`}>
                  Ideal for:
                </span>{" "}
                {plan.ideal}
              </p>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
                asChild
              >
                <a href="/contact">Get in Touch</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* What Each Plan Means */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto mb-24 lg:mb-32"
        >
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-6 text-center">
            Which plan is right for you?
          </h3>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <p className="text-sm text-foreground font-medium mb-2">
                You want to try motion content with low commitment.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Starter plan gives you a single, polished cinematic asset to test on your website or one social channel. It is the simplest way to see what motion can do for your property.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <p className="text-sm text-foreground font-medium mb-2">
                You are actively marketing and need content that works everywhere.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Growth plan gives you a hero piece for your website plus ready-made social content. More coverage, more consistency, less effort from your team.
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground font-medium mb-2">
                You are investing in your brand and want a complete motion library.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Premium plan covers your full property with assets built for your website, social channels, paid campaigns, and OTA listings. It is for hotels that want every touchpoint to feel cinematic.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What Happens After You Purchase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 lg:mb-32"
        >
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-4 text-center">
            What happens after you purchase
          </h3>
          <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto mb-12">
            No reshoots. Minimal time from your team. Clear turnaround at every step.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <span className="font-serif text-4xl text-border block mb-4">
                  {step.number}
                </span>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center border-t border-border pt-16"
        >
          <p className="text-muted-foreground mb-6">
            Not sure which plan fits? Get in touch and we will point you in the right direction.
          </p>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-secondary bg-transparent"
            asChild
          >
            <a href="/contact" className="inline-flex items-center gap-2">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
