import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is JobTrail really free to start?",
    a: "Yes. The Free plan lets you run one active search with up to 25 applications, basic reminders, and two resume versions — no credit card required.",
  },
  {
    q: "How is this different from a spreadsheet?",
    a: "JobTrail is purpose-built for job searching. It gives you a visual pipeline, automatic follow-up reminders, resume version tracking, and a recruiter CRM that a spreadsheet simply can't.",
  },
  {
    q: "Can I track multiple job searches at once?",
    a: "On the Pro plan you can create unlimited pipelines — perfect for juggling full-time roles, freelance gigs, and longer-term opportunities side by side.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. Your search data is yours alone. We use encryption in transit and at rest, and we never sell your information.",
  },
  {
    q: "Can I import my existing applications?",
    a: "Yes. You can import from a CSV or connect your inbox to automatically pull in applications and recruiter conversations.",
  },
  {
    q: "Do you offer plans for career coaches?",
    a: "Our Teams plan includes shared candidate workspaces and collaboration tools designed for coaches and university career services.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Everything you need to know about JobTrail.
        </p>
      </div>

      <Accordion multiple={false} className="mt-10 w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
