This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Supabase Setup

This project uses Supabase REST directly. There is no Prisma setup in this repo right now.

Add these values in `.env`:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://postgres:URL_ENCODED_PASSWORD@db.your-project-ref.supabase.co:5432/postgres
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-long-private-password
ADMIN_SESSION_SECRET=your-random-secret-at-least-32-characters
```

The website saves submissions through its server-side Supabase REST API. Keep the service-role key private; never use a `NEXT_PUBLIC_` prefix for it. `DATABASE_URL` is used for schema setup, not exposed to the browser. Encode special password characters (for example, `@` becomes `%40`). A rejected database password must be corrected in Supabase Dashboard; encoding cannot fix an incorrect password.

Create/upgrade the lead table without deleting existing submissions:

```bash
npm run db:setup
```

This command uses a certificate-verified TLS connection, creates the required columns/indexes/trigger, enables RLS, restricts table access to the server role, and reloads the REST schema cache. If your project uses a different CA certificate, download it from Supabase Database Settings and set `DATABASE_SSL_CA_FILE` to its local path.

Alternatively run one of these SQL files in your Supabase SQL editor:

- `supabase/funding_leads.sql` for the basic lead table
- `supabase/funding_leads_dashboard_setup.sql` for the admin/dashboard-ready table, indexes, trigger, and policies

Anonymous keys cannot access lead records with these policies. Set the same server-side Supabase URL and service-role key in your hosting environment and restart after environment changes.

Run the connection-string regression tests with `npm test`. Live form verification requires a successful table setup first. Set `TEST_BASE_URL` to your running local website to also run integration tests. These submit synthetic contact/popup payloads, verify persistence and admin listing, and delete only their own test records.

Admin login is checked on the server using the private `ADMIN_USERNAME` and `ADMIN_PASSWORD`, not browser-bundled credentials. `ADMIN_SESSION_SECRET` signs an 8-hour HttpOnly, SameSite session cookie; customer leads are only listed after server-side session verification. Configure all three admin variables in your hosting environment as well. Changing the password or signing secret invalidates existing sessions. The old `admin/admin123` default and localStorage login flag no longer grant access.

## Getting Started

## Branded email setup

The server uses Mailjet Send API v3.1 for automatic application confirmations and admin emails. Configure these private environment variables locally and on your hosting provider:

```env
MAILJET_API_KEY=your-api-key
MAILJET_SECRET=your-secret-key
MAILJET_FROM_EMAIL=info@essygrow.com
MAILJET_FROM_NAME=EazyGrow
```

`MAILJET_SECRET_KEY` is also accepted as an alias. The sender address or domain must be active/verified in the same Mailjet account. Never prefix Mailjet secrets with `NEXT_PUBLIC_`.

After `npm run db:setup`, new leads have confirmation-email status fields. A successful form save attempts the branded thank-you email. A Mailjet error does **not** fail or delete the application; the admin lead table records the failure. Older leads are marked `not_requested`. Mailjet acceptance means queued for sending, not proof of inbox delivery. Delivery problems can be reviewed in Mailjet; this integration does not automatically retry failed/uncertain sends.

In `/admin` → Email Management, choose selected users, new users, or all users; enter a subject/message; review the branded preview; then send. `{{name}}` personalizes each recipient. Each email has one recipient, so customer addresses are not shared. Maximum batch size is 50; select remaining recipients explicitly for subsequent batches. Send only relevant messages to people who expect to hear from you.

For safe integration testing, start the app with `MAILJET_SANDBOX_MODE=true` and run tests with `TEST_BASE_URL` and `TEST_MAILJET_SANDBOX=true`. Sandbox validates messages without delivering them. Remove sandbox mode for live sending. If Mailjet reports a temporarily blocked account, sending cannot work until Mailjet reactivates it; the website does not bypass provider restrictions.

Pure template/transport tests run with `npm test`. Live-provider integration tests must not be represented as passing if Mailjet rejects requests.

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
