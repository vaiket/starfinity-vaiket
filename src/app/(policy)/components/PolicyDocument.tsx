import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import type { PolicyBlock, PolicyContent } from "@/data/policies";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const inlineLinks: Record<string, string> = {
  "info@essygrow.com": "mailto:info@essygrow.com",
  "+91 7041894751": "tel:+917041894751",
  "www.essygrow.com": "https://www.essygrow.com",
  "mca.gov.in": "https://mca.gov.in",
  "startupindia.gov.in": "https://startupindia.gov.in",
  "Terms & Conditions": "/terms-and-conditions",
  "Terms and Conditions": "/terms-and-conditions",
  "Refund & Cancellation Policy": "/refund-policy",
  "Privacy Policy": "/privacy-policy",
};

function LinkedText({ text }: { text: string }) {
  const parts = text.split(
    /(info@essygrow\.com|\+91 7041894751|www\.essygrow\.com|mca\.gov\.in|startupindia\.gov\.in|Terms & Conditions|Terms and Conditions|Refund & Cancellation Policy|Privacy Policy)/g,
  );

  return parts.map((part, index) => {
    const href = inlineLinks[part];
    if (!href) return part;
    const className = "break-words underline underline-offset-4 hover:text-green-700";
    return href.startsWith("/") ? (
      <Link key={index} href={href} className={className}>{part}</Link>
    ) : (
      <a key={index} href={href} className={className}>{part}</a>
    );
  });
}

function groupBlocks(blocks: PolicyBlock[]) {
  const groups: { type: PolicyBlock["type"]; items: PolicyBlock[] }[] = [];
  for (const block of blocks) {
    const previous = groups.at(-1);
    if (
      (block.type === "bullet" || block.type === "numbered") &&
      previous?.type === block.type
    ) {
      previous.items.push(block);
    } else {
      groups.push({ type: block.type, items: [block] });
    }
  }
  return groups;
}

export default function PolicyDocument({ policy }: { policy: PolicyContent }) {
  return (
    <article className={`${bricolage.className} bg-white text-slate-900`} data-policy-document={policy.slug}>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <Link href="/" className="text-sm text-slate-600 underline underline-offset-4 hover:text-green-700">
          Back to Home
        </Link>

        <header className="mt-8 space-y-4 border-b border-slate-200 pb-8">
          <div className="space-y-1 text-sm leading-relaxed text-slate-600">
            {policy.companyDetails.map((detail, index) => (
              <p key={detail} className={index === 0 ? "font-semibold text-slate-900" : undefined}>
                <LinkedText text={detail} />
              </p>
            ))}
          </div>
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {policy.title}
          </h1>
          <p className="text-sm text-slate-600">{policy.updatedAt}</p>
          <nav aria-label="Policy navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === `/${policy.slug}` ? "page" : undefined}
                className="font-semibold text-green-800 underline underline-offset-4 hover:text-green-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="mt-8 space-y-4 text-sm leading-7 sm:text-base sm:leading-8">
          {groupBlocks(policy.blocks).map((group, index) => {
            if (group.type === "heading") {
              return <h2 key={index} className="border-t border-slate-100 pt-8 text-xl font-bold sm:text-2xl">{group.items[0].text}</h2>;
            }
            if (group.type === "subheading") {
              return <h3 key={index} className="pt-4 text-lg font-semibold">{group.items[0].text}</h3>;
            }
            if (group.type === "bullet" || group.type === "numbered") {
              const List = group.type === "numbered" ? "ol" : "ul";
              return (
                <List key={index} className={`space-y-2 pl-6 ${group.type === "numbered" ? "list-decimal" : "list-disc"}`}>
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}><LinkedText text={item.text} /></li>
                  ))}
                </List>
              );
            }
            return <p key={index}><LinkedText text={group.items[0].text} /></p>;
          })}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm leading-relaxed text-slate-600">
          <p>{policy.copyright}</p>
        </footer>
      </div>
    </article>
  );
}
