import type { Metadata } from "next";
import { termsPolicy } from "@/data/policies";
import PolicyDocument from "../components/PolicyDocument";

export const metadata: Metadata = {
  title: `${termsPolicy.title} | Eazygrow Ventures Private Limited`,
  description: `${termsPolicy.title} for Eazygrow Ventures Private Limited. ${termsPolicy.updatedAt}.`,
};

export default function PolicyPage() {
  return <PolicyDocument policy={termsPolicy} />;
}
