import { BrainCircuit, FileOutput, FileText } from "lucide-react";
import { ReactNode } from "react";

export type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

export type PlanType = {
  id: string;
  name: string;
  price: number;
  items: string[];
  description: string;
  paymentLink: string;
  priceId: string;
};

export const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simple drag and drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document",
  },
];

export const plans: PlanType[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    description: "Perfect for occasional use",
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    items: [
      "Unlimited PDF uploads",
      "Priority processing",
      "24/7 priority support",
      "Markdown export",
    ],
    description: "For professionals and teams",
    paymentLink: "",
    priceId: "",
  },
];
