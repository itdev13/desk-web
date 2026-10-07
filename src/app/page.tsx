import { Button } from "@/components/ui/Button";
import { InstallButton } from "@/components/ui/InstallButton";
import { StickyHighlight } from "@/components/ui/StickyHighlight";
import { Card, FeatureCard } from "@/components/ui/Card";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { HandArrow } from "@/components/decorative/HandArrow";
import { FAQ } from "@/components/ui/FAQ";
import { ProductMockup } from "@/components/ui/ProductMockup";

const COLORS = {
  cream: "#FFF9EB",
  amber: "#E0A24A",
  ink: "#0F1729",
  yellow: "#FFE711",
  coral: "#FF7F4A",
  pink: "#FF94E7",
};

const CALENDAR_URL = "https://calendar.app.google/wJ4kBgkDnqsAEwzB7";
const SUPPORT_EMAIL = "binduchowdary856@gmail.com";

const CHANNELS = [
  "SMS",
  "Email",
  "WhatsApp",
  "Live Chat",
  "Web Chat",
  "Facebook",
  "Instagram",
  "Google",
  "Custom providers",
];

const faqItems = [
  {
    question: "Is HelmDesk native to my CRM?",
    answer:
      "Yes. HelmDesk installs directly into your sub-accounts and runs inside your CRM account — no external helpdesk logins, no separate platform for your team to learn. Tickets stay linked to your existing contacts.",
  },
  {
    question: "Which channels does it support?",
    answer:
      "HelmDesk captures conversations from SMS, Email, WhatsApp, Live Chat, Web Chat, Facebook, Instagram, Google, and custom conversation providers — turning each inbound message into an organized, trackable ticket.",
  },
  {
    question: "How do tickets get created?",
    answer:
      "Tickets are created automatically from the inbound channels you choose. Smart filters ignore marketing and automation replies, skip one-word messages, and respect your \"always create\" and \"never create\" keyword rules. You can also auto-reply when a new ticket is opened.",
  },
  {
    question: "What are SLAs and how do they work?",
    answer:
      "SLAs are first-response and resolution targets you set by priority. Each ticket shows a live countdown that moves from green to amber to red, so at-risk and overdue tickets are obvious at a glance across the whole queue.",
  },
  {
    question: "Can I white-label HelmDesk?",
    answer:
      "Absolutely. On the Agency plan you apply your brand name, logo, and primary color across the entire app and the client-facing intake portal. Your clients only ever see your brand — resell HelmDesk as your own support product and keep all the revenue.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Flat monthly billing based on the number of agents — no per-message or usage fees. Tickets and messages are unlimited on every plan. Starter is $29/mo, Team is $79/mo, and Agency is $99/mo.",
  },
  {
    question: "Can customers submit tickets through a portal?",
    answer:
      "Yes. HelmDesk includes a fully white-label client portal with a drag-and-drop form builder — text fields, dropdowns, radio buttons, checkboxes, required fields, and character limits. Submitted answers appear directly on the ticket.",
  },
  {
    question: "How does routing and assignment work?",
    answer:
      "Choose round-robin assignment to spread tickets evenly, single-owner routing to send everything to one agent, or leave tickets unassigned so your team can claim them from the queue. You control who is eligible to receive assignments.",
  },
  {
    question: "Is my data mine, and can I export it?",
    answer:
      "Your tickets and conversations live inside your own CRM account and stay linked to your contacts. Your data stays yours — there is no separate helpdesk silo holding it hostage.",
  },
  {
    question: "How do I get started?",
    answer:
      "Install HelmDesk from the marketplace into a sub-account, pick which channels create tickets, set your SLA targets and routing rule, and your support inbox is live. Setup takes minutes.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9EB]/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold flex items-center gap-2 whitespace-nowrap">
            <img src="/helmdesk-icon.svg" alt="HelmDesk" className="w-8 h-8 rounded-lg" /> HelmDesk
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-medium text-gray-800 hover:text-black transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="font-medium text-gray-800 hover:text-black transition-colors">
              How it works
            </a>
            <a href="#integrations" className="font-medium text-gray-800 hover:text-black transition-colors">
              Integrations
            </a>
            <a href="#use-cases" className="font-medium text-gray-800 hover:text-black transition-colors">
              Use cases
            </a>
            <a href="#pricing" className="font-medium text-gray-800 hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#faq" className="font-medium text-gray-800 hover:text-black transition-colors">
              FAQ
            </a>
            <a href="/support" className="font-medium text-gray-800 hover:text-black transition-colors">
              Support
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <InstallButton variant="primary" className="!rounded-lg !px-5 !py-2 !text-base">
              Install
            </InstallButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#FFF9EB] pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0_0_#000]">
                <span className="font-bold text-[#B97E2C]">⚓ Flat monthly pricing</span>
                <span className="text-gray-400">·</span>
                <span className="font-medium">No per-message fees</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                Every customer message becomes a{" "}
                <StickyHighlight rotate={-3} className="whitespace-nowrap">
                  tracked ticket
                </StickyHighlight>
              </h1>

              <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
                A fully white-label helpdesk for your sub-accounts — turn every customer message into a tracked support ticket, branded as your own.
              </p>

              <div className="flex flex-wrap gap-4">
                <InstallButton variant="primary" size="large">
                  Install HelmDesk
                </InstallButton>
                <Button variant="outline" size="large" href="#how-it-works">
                  See how it works
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                {["Native to your CRM", "No per-message fees", "White-label ready"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right content - Product mockup */}
            <div className="relative hidden lg:block ml-8">
              <div className="absolute -left-32 top-1/4 z-20 transform -rotate-6">
                <HandArrow direction="right" text="your support queue" textClassName="text-2xl" />
              </div>

              <div
                className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-[#F4D9A8] border-2 border-black rounded-2xl"
                style={{ transform: "rotate(2deg)", zIndex: 0 }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <ProductMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fully White-Label — standout ink section */}
      <section className="on-dark relative bg-[#0F1729] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-[#E0A24A] text-[#0F1729] border-2 border-black">
                ⭐ 100% White-Label
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Make It Your Own
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                HelmDesk is 100% white-label. Put your brand name, your logo, and your colors across the entire app and the client-facing intake portal. Your clients never see &ldquo;HelmDesk.&rdquo;
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Resell it as your own branded support product and keep all the revenue.
              </p>
              <p className="text-xl font-semibold text-white">
                Your helpdesk, your branding, everywhere.
              </p>
            </div>

            {/* Mock branded portal card */}
            <div className="relative">
              <div className="bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0_0_#E0A24A] overflow-hidden">
                <div className="bg-[#0F1729] px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E0A24A] flex items-center justify-center font-bold text-[#0F1729]">
                    Y
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">YourBrand Support</div>
                    <div className="text-[11px] text-gray-400">help.yourbrand.com</div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">Submit a request</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-1">Name</div>
                      <div className="h-9 rounded-lg border-2 border-gray-200 bg-gray-50" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 mb-1">How can we help?</div>
                      <div className="h-20 rounded-lg border-2 border-gray-200 bg-gray-50" />
                    </div>
                    <div className="w-full py-3 rounded-lg bg-[#E0A24A] text-[#0F1729] text-center font-bold border-2 border-black">
                      Send to YourBrand
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.ink} toColor={COLORS.cream} variant={1} />

      {/* What HelmDesk Does */}
      <section className="relative bg-[#FFF9EB] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A complete <StickyHighlight rotate={-2}>helpdesk</StickyHighlight> for your sub-accounts
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            HelmDesk automatically turns inbound conversations into organized, trackable support tickets. Every request gets a priority, owner, SLA countdown, status, and complete conversation history — all managed from a purpose-built support inbox.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {CHANNELS.map((c) => (
              <span
                key={c}
                className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#000]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.amber} variant={2} />

      {/* Key Features */}
      <section id="features" className="relative bg-[#E0A24A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: "#0F1729" }}>
            Key Features
          </h2>
          <p className="text-center mb-12 max-w-xl mx-auto text-lg" style={{ color: "#3b2d14" }}>
            Everything you need to run a real support operation inside your CRM
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🎨"
              title="White-Label Branding"
              description="Apply your brand name, logo, and primary color across the app and client portal. Resell HelmDesk as your own product — clients see only your brand."
              badge="⭐ FLAGSHIP"
              badgeColor="#FFE711"
              iconBgColor="#F4D9A8"
              accentColor="#E0A24A"
            />
            <FeatureCard
              icon="📥"
              title="Automatic Ticket Creation"
              description='Create tickets from selected inbound channels. Smart filters ignore marketing/automation replies, skip one-word messages, and support "always create" / "never create" keyword rules. Auto-reply on new tickets.'
              iconBgColor="#BBDEFB"
              accentColor="#2196F3"
            />
            <FeatureCard
              icon="💬"
              title="3-Pane Conversation Inbox"
              description="Ticket list, conversation, and contact details together. Resize or collapse panels. Reply on the customer's original channel. Add private internal notes."
              iconBgColor="#C8E6C9"
              accentColor="#4CAF50"
            />
            <FeatureCard
              icon="📊"
              title="Kanban Board"
              description="Drag and drop tickets between New → Open → Pending → Resolved for a clear, visual view of your whole queue."
              iconBgColor="#E1BEE7"
              accentColor="#9C27B0"
            />
            <FeatureCard
              icon="⏱️"
              title="SLA Tracking & Overdue Flags"
              description="First-response and resolution targets by priority. Live green → amber → red countdowns make at-risk tickets obvious before they breach."
              iconBgColor="#FDE68A"
              accentColor="#D97706"
            />
            <FeatureCard
              icon="🔀"
              title="Assignment & Routing"
              description="Round-robin assignment, single-owner routing, or unassigned tickets your team can pick up manually from the queue."
              iconBgColor="#FCE4EC"
              accentColor="#E91E63"
            />
            <FeatureCard
              icon="📈"
              title="Dashboard & Reporting"
              description="Open tickets, overdue tickets, average first-response time, in-SLA percentage, and performance trends — all in one view."
              iconBgColor="#B3E5FC"
              accentColor="#0288D1"
            />
            <FeatureCard
              icon="🌐"
              title="Branded Client Portal"
              description="A fully white-label support portal with a drag-and-drop form builder — text, dropdowns, radio buttons, checkboxes, required fields, character limits. Submitted answers appear on the ticket."
              iconBgColor="#F4D9A8"
              accentColor="#B97E2C"
            />
            <FeatureCard
              icon="👥"
              title="Team Management"
              description="Sync your agents, choose who receives assignments, and work within plan-based agent limits so every ticket lands with the right person."
              iconBgColor="#D7CCC8"
              accentColor="#6D4C41"
            />
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.amber} toColor={COLORS.cream} variant={3} />

      {/* How It Works */}
      <section className="relative bg-[#FFF9EB] py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            From an inbound message to a resolved ticket — in four steps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "1",
                emoji: "💬",
                bg: "#F4D9A8",
                title: "Customer messages you",
                body: "A customer reaches out on any connected channel — SMS, email, WhatsApp, chat, social, and more.",
              },
              {
                n: "2",
                emoji: "🎫",
                bg: "#BBDEFB",
                title: "A ticket opens",
                body: "HelmDesk opens a tracked ticket (HD-##) with a priority, owner, and an SLA timer counting down.",
              },
              {
                n: "3",
                emoji: "🔀",
                bg: "#C8E6C9",
                title: "Route it",
                body: "Route by round-robin, send it to a single owner, or let an agent claim it from the queue.",
              },
              {
                n: "4",
                emoji: "✅",
                bg: "#E1BEE7",
                title: "Reply & resolve",
                body: "Your team replies and resolves from the 3-pane inbox; the customer's replies stay on the ticket.",
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center text-4xl mx-auto mb-6 relative"
                  style={{ backgroundColor: step.bg }}
                >
                  {step.emoji}
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0F1729] text-white text-sm font-bold flex items-center justify-center border-2 border-black">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <InstallButton variant="primary" size="large">
              Install HelmDesk
            </InstallButton>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="relative bg-[#FFF9EB] py-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Works with your CRM
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            HelmDesk installs natively into your sub-accounts, captures conversations from every connected channel, and keeps tickets linked to your contacts — no external helpdesk logins.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <div className="w-14 h-14 bg-[#F4D9A8] rounded-xl border-2 border-black/10 flex items-center justify-center text-3xl mb-4">
                🧩
              </div>
              <h3 className="font-bold text-xl mb-2">Installs natively</h3>
              <p className="text-gray-600">
                HelmDesk runs inside your CRM account and installs straight into your sub-accounts. No separate platform, no extra logins for your team.
              </p>
            </Card>
            <Card>
              <div className="w-14 h-14 bg-[#BBDEFB] rounded-xl border-2 border-black/10 flex items-center justify-center text-3xl mb-4">
                📡
              </div>
              <h3 className="font-bold text-xl mb-2">Captures every channel</h3>
              <p className="text-gray-600">
                Inbound conversations from every connected channel flow straight into your ticket queue, automatically.
              </p>
            </Card>
            <Card>
              <div className="w-14 h-14 bg-[#C8E6C9] rounded-xl border-2 border-black/10 flex items-center justify-center text-3xl mb-4">
                🔗
              </div>
              <h3 className="font-bold text-xl mb-2">Linked to your contacts</h3>
              <p className="text-gray-600">
                Every ticket stays tied to the contact it came from, so history and context never get lost.
              </p>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CHANNELS.map((c) => (
              <span
                key={c}
                className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#000]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.cream} toColor={COLORS.pink} variant={4} />

      {/* Use Cases */}
      <section id="use-cases" className="relative bg-[#FF94E7] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Who it&apos;s for
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Teams that need a real ticket queue — not a messy conversations inbox
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-14 h-14 bg-[#F4D9A8] rounded-xl flex items-center justify-center text-3xl mb-4">
                🏢
              </div>
              <h3 className="font-bold text-xl mb-2">Agencies</h3>
              <p className="text-gray-600">
                Resell white-label support to your clients. Brand the app and portal as your own and keep all the revenue.
              </p>
            </Card>
            <Card>
              <div className="w-14 h-14 bg-[#BBDEFB] rounded-xl flex items-center justify-center text-3xl mb-4">
                🛠️
              </div>
              <h3 className="font-bold text-xl mb-2">Service &amp; field businesses</h3>
              <p className="text-gray-600">
                Track and route every service request, with SLAs that keep urgent jobs from slipping through the cracks.
              </p>
            </Card>
            <Card>
              <div className="w-14 h-14 bg-[#C8E6C9] rounded-xl flex items-center justify-center text-3xl mb-4">
                🎧
              </div>
              <h3 className="font-bold text-xl mb-2">Support teams</h3>
              <p className="text-gray-600">
                Replace a messy conversations inbox with a real ticket queue — priorities, owners, statuses, and reporting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.pink} toColor={COLORS.yellow} variant={1} />

      {/* Pricing */}
      <section id="pricing" className="relative bg-[#FFE711] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Simple, flat pricing
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Priced by agents — never by messages. Unlimited tickets on every plan.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {/* Starter */}
            <Card hover={false} className="shadow-[6px_6px_0_0_#000]">
              <h3 className="font-bold text-2xl mb-1">Starter</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500 mb-1">/mo</span>
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-5">Up to 3 agents</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Unlimited tickets</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> SLA tracking</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Kanban board &amp; dashboard</li>
              </ul>
              <InstallButton variant="outline" className="w-full">
                Get Started
              </InstallButton>
            </Card>

            {/* Team — popular */}
            <Card hover={false} className="shadow-[8px_8px_0_0_#000] border-[#E0A24A] relative md:-mt-4">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E0A24A] text-[#0F1729] text-xs font-bold px-4 py-1 rounded-full border-2 border-black whitespace-nowrap">
                ⭐ MOST POPULAR
              </span>
              <h3 className="font-bold text-2xl mb-1 mt-2">Team</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-500 mb-1">/mo</span>
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-5">Up to 10 agents</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Everything in Starter</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Round-robin auto-assignment</li>
              </ul>
              <InstallButton variant="primary" className="w-full">
                Get Started
              </InstallButton>
            </Card>

            {/* Agency */}
            <Card hover={false} className="shadow-[6px_6px_0_0_#000]">
              <h3 className="font-bold text-2xl mb-1">Agency</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500 mb-1">/mo</span>
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-5">Unlimited agents</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Everything in Team</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Full white-label branding</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Branded client portal</li>
              </ul>
              <InstallButton variant="outline" className="w-full">
                Get Started
              </InstallButton>
            </Card>
          </div>

          <p className="text-center mt-10 font-medium">
            Flat monthly billing — no per-message or usage fees.
          </p>
        </div>
      </section>

      <WaveDivider fromColor={COLORS.yellow} toColor={COLORS.cream} variant={2} />

      {/* Why HelmDesk */}
      <section className="relative bg-[#FFF9EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why HelmDesk
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover={false} className="shadow-[6px_6px_0_0_#000]">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-xl mb-2">True White-Label</h3>
              <p className="text-gray-600">
                Your brand everywhere — app and client portal. Resell it as your own on the Agency plan and keep the revenue.
              </p>
            </Card>
            <Card hover={false} className="shadow-[6px_6px_0_0_#000]">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold text-xl mb-2">Native, Not a Bolt-On</h3>
              <p className="text-gray-600">
                Built for your sub-accounts and running inside your CRM — no external helpdesk for your team to juggle.
              </p>
            </Card>
            <Card hover={false} className="shadow-[6px_6px_0_0_#000]">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-bold text-xl mb-2">Zero Usage Fees</h3>
              <p className="text-gray-600">
                Flat monthly pricing with unlimited tickets and messages. No per-message charges, ever.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#FFF9EB] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA band */}
      <section className="on-dark relative bg-[#0F1729] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turn messages into a support operation
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Install HelmDesk into your sub-accounts and give every customer message a priority, an owner, and an SLA — branded as your own.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <InstallButton variant="primary" size="large" className="text-lg px-10">
              Install HelmDesk
            </InstallButton>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold border-2 border-black rounded-xl bg-white text-[#0F1729] px-8 py-4 text-lg transition-all duration-150 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_#E0A24A]"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="on-dark bg-[#0F1729] py-16" style={{ color: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "#ffffff" }}>
                <img src="/helmdesk-icon.svg" alt="HelmDesk" className="w-7 h-7 rounded" /> HelmDesk
              </h3>
              <p style={{ color: "#9ca3af" }}>
                A white-label support ticket system &amp; helpdesk for your sub-accounts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>Product</h4>
              <ul className="space-y-2" style={{ color: "#9ca3af" }}>
                <li><a href="#features" className="hover:opacity-80 transition-opacity">Features</a></li>
                <li><a href="#how-it-works" className="hover:opacity-80 transition-opacity">How it works</a></li>
                <li><a href="#integrations" className="hover:opacity-80 transition-opacity">Integrations</a></li>
                <li><a href="#pricing" className="hover:opacity-80 transition-opacity">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>Support</h4>
              <ul className="space-y-2" style={{ color: "#9ca3af" }}>
                <li><a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a></li>
                <li><a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Book a call</a></li>
                <li><a href={`mailto:${SUPPORT_EMAIL}`} className="hover:opacity-80 transition-opacity">Contact</a></li>
                <li><a href="/support" className="hover:opacity-80 transition-opacity">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>Get Started</h4>
              <ul className="space-y-2" style={{ color: "#9ca3af" }}>
                <li><a href={`mailto:${SUPPORT_EMAIL}`} className="hover:opacity-80 transition-opacity">{SUPPORT_EMAIL}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: "#9ca3af" }}>
              &copy; 2026 HelmDesk. A white-label helpdesk for your sub-accounts.
            </p>
            <p className="flex items-center gap-2" style={{ color: "#9ca3af" }}>
              🔒 Your data stays yours.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
