import type { Metadata } from "next";
import { privacyPolicy } from "@/data/policies";
import PolicyDocument from "../components/PolicyDocument";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | Eazygrow Ventures Private Limited`,
  description: `${privacyPolicy.title} for Eazygrow Ventures Private Limited. ${privacyPolicy.updatedAt}.`,
};

export default function PolicyPage() {
  return <PolicyDocument policy={privacyPolicy} />;
}
