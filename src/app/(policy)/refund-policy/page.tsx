import type { Metadata } from "next";
import { refundPolicy } from "@/data/policies";
import PolicyDocument from "../components/PolicyDocument";

export const metadata: Metadata = {
  title: `${refundPolicy.title} | Eazygrow Ventures Private Limited`,
  description: `${refundPolicy.title} for Eazygrow Ventures Private Limited. ${refundPolicy.updatedAt}.`,
};

export default function PolicyPage() {
  return <PolicyDocument policy={refundPolicy} />;
}
