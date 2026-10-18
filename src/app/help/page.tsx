"use client";

import { useEffect } from "react";
import "./help.css";

/**
 * HelmDesk Help Center — native Next.js route at /help.
 * The document body is static, self-authored HTML (no user input), rendered via
 * dangerouslySetInnerHTML so the warm-brutalist markup and entities stay 1:1 with
 * the design. Styling is scoped under .helpdoc in ./help.css. A small scroll-spy
 * highlights the current section in the sidebar.
 */

const HELP_HTML = `
<header class="top">
  <div class="wrap">
    <a href="/" class="brand" style="text-decoration:none;color:inherit"><span class="mark">H</span> HelmDesk <span style="font-weight:600;color:var(--muted);font-size:14px">Help Center</span></a>
    <nav>
      <a href="/" class="back-link">&larr; Back to site</a>
      <a href="#getting-started">Setup</a>
      <a href="#tickets">Tickets</a>
      <a href="#settings">Settings</a>
      <a href="#portal">Portal</a>
      <a href="#automations">Automations</a>
      <a href="#plans">Plans</a>
      <a href="#support">Support</a>
      <a href="https://marketplace.gohighlevel.com/integration/6a42b01a904c53a589aae692" target="_blank" rel="noopener" class="pill-link">Install HelmDesk</a>
    </nav>
  </div>
</header>

<div class="wrap">
  <div class="hero">
    <span class="eyebrow">Help Center · for your team</span>
    <h1>Run your helpdesk with HelmDesk</h1>
    <p class="lede">HelmDesk turns every customer message into a tracked support ticket — assigned, prioritized, and answered without anything slipping through. This guide walks your team through setup and every feature you'll use day to day.</p>
    <div class="cta-row" style="justify-content:flex-start; margin-top:22px">
      <a class="btn" href="https://marketplace.gohighlevel.com/integration/6a42b01a904c53a589aae692" target="_blank" rel="noopener">Install HelmDesk</a>
      <a class="btn book" href="https://calendar.app.google/9PnxDV6QnokzQz2c6" target="_blank" rel="noopener">Book an onboarding call</a>
      <span class="avail" style="margin:0"><span class="live-dot"></span> Support 24&times;7</span>
    </div>
  </div>
</div>

<div class="wrap">
  <div class="doc">

    <aside class="toc">
      <div class="tocbox">
        <h4>On this page</h4>
        <a href="#what-is">What HelmDesk does</a>
        <a href="#getting-started">1 · First-time setup</a>
        <a href="#workspace">2 · Your workspace</a>
        <a href="#tickets">3 · Tickets</a>
        <a href="#inbox">4 · Inbox</a>
        <a href="#queue-board">5 · Queue &amp; Board</a>
        <a href="#dashboard">6 · Dashboard</a>
        <a href="#sla">7 · Priorities &amp; SLA</a>
        <a href="#team">8 · Team &amp; seats</a>
        <a href="#settings">9 · Settings</a>
        <a href="#portal">10 · Client portal</a>
        <a href="#automations">11 · Workflow automation</a>
        <a href="#plans">12 · Plans &amp; billing</a>
        <a href="#data">13 · Data &amp; privacy</a>
        <a href="#faq">FAQ</a>
        <a href="#support">Get support</a>
      </div>
    </aside>

    <main>

      <section class="block" id="what-is">
        <h2><span class="num">★</span> What HelmDesk does</h2>
        <p>HelmDesk is a helpdesk and ticketing layer that sits on top of your conversations. When a customer messages one of your connected channels, HelmDesk automatically opens a <strong>ticket</strong> — a trackable record with a status, priority, owner, and response deadline — so nothing gets lost in a busy inbox.</p>
        <div class="grid2">
          <div class="mini"><h4>Every message becomes a ticket</h4><p>Inbound messages across your support channels are captured automatically and turned into tickets.</p></div>
          <div class="mini"><h4>One place to work</h4><p>Reply, add internal notes, set priority, assign an owner, and resolve — all from a single workspace.</p></div>
          <div class="mini"><h4>Stay on top of SLAs</h4><p>Each ticket gets a response and resolution deadline. Overdue tickets are flagged automatically.</p></div>
          <div class="mini"><h4>Automate your CRM</h4><p>Fire your CRM workflows off ticket events — acknowledge customers, escalate overdue tickets, request reviews on resolve.</p></div>
          <div class="mini"><h4>Fully your brand</h4><p>On the Agency plan, rename the app, set your color, and give clients a branded intake form.</p></div>
        </div>
      </section>

      <section class="block" id="getting-started">
        <h2><span class="num">1</span> First-time setup</h2>
        <p>The first time you open HelmDesk, a short <strong>setup wizard</strong> walks you through four quick steps. HelmDesk won't create any tickets until setup is finished — so take a minute to get this right.</p>
        <ol class="steps">
          <li><strong>Channels</strong> — choose which support channels HelmDesk should watch (Email, SMS, Live Chat, Web Chat, WhatsApp, Facebook, Instagram, Google). All channels are on by default; turn off anything you don't use for support.</li>
          <li><strong>Filters</strong> — decide what should <em>not</em> become a ticket. Ignore automated/marketing replies, ignore very short one-word messages, and set keyword lists that force (or skip) ticket creation.</li>
          <li><strong>Assignment</strong> — pick how new tickets are routed: round-robin across your team, to one specific agent, or left unassigned for agents to pick up.</li>
          <li><strong>SLA &amp; lifecycle</strong> — set response and resolution targets per priority, when resolved tickets auto-close, and your ticket number prefix.</li>
        </ol>
        <div class="callout tip"><p><b>Reinstalling?</b> If you ever remove and re-add HelmDesk within the retention window, the wizard pre-fills everything from your last saved settings — just confirm and go live.</p></div>
      </section>

      <section class="block" id="workspace">
        <h2><span class="num">2</span> Getting around your workspace</h2>
        <p>Across the top of HelmDesk you'll find these areas:</p>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Tab</th><th>What it's for</th><th>Who sees it</th></tr></thead>
            <tbody>
              <tr><td><strong>Inbox</strong></td><td>Read and reply to conversations, three-pane view. Your home base.</td><td>Everyone</td></tr>
              <tr><td><strong>Queue</strong></td><td>A filterable work list with live KPIs — your open, overdue, unassigned tickets.</td><td>Everyone</td></tr>
              <tr><td><strong>Board</strong></td><td>A drag-and-drop Kanban board of tickets by status.</td><td>Everyone</td></tr>
              <tr><td><strong>Dashboard</strong></td><td>Reporting and analytics for the last 30 days.</td><td>Everyone*</td></tr>
              <tr><td><strong>Team</strong></td><td>Manage who can work tickets and how many seats are in use.</td><td>Admins</td></tr>
              <tr><td><strong>Settings</strong></td><td>Channels, filters, assignment, SLA, branding and the portal.</td><td>Admins</td></tr>
              <tr><td><strong>Support</strong></td><td>Reach the HelmDesk team or book a guided onboarding call.</td><td>Everyone</td></tr>
            </tbody>
          </table>
        </div>
        <p style="font-size:14px;color:var(--muted);margin-top:4px">*Agents see only their own tickets and metrics everywhere; admins see the whole team's.</p>
      </section>

      <section class="block" id="tickets">
        <h2><span class="num">3</span> Tickets &amp; how they're created</h2>
        <p>A ticket is a single customer request you're tracking to resolution. Tickets get created three ways:</p>
        <h3>Automatically, from inbound messages</h3>
        <p>This is the main path. When a customer messages one of your configured channels, HelmDesk opens a ticket, links it to the customer's contact, and (if enabled) sends an auto-reply. If the same customer already has an open ticket, their new message is added to it instead of creating a duplicate.</p>
        <h3>From your client portal</h3>
        <p>If you've turned on the client portal (Agency plan), customers can submit requests through your branded intake form, and each submission becomes a ticket. See <a href="#portal">section 10</a>.</p>
        <h3>Manually</h3>
        <p>Log a ticket yourself from the <strong>Queue</strong> or <strong>Board</strong> using <strong>New ticket</strong> — useful for phone calls or requests that came in off-channel. Enter the subject, contact, channel, priority, and details.</p>
        <div class="callout note"><p><b>Replies sent outside HelmDesk still count.</b> If a teammate answers a customer from your native inbox or an automation, HelmDesk captures that reply on the ticket and stops the response clock — so your SLA numbers stay accurate.</p></div>

        <h3>Ticket statuses</h3>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><span class="dot d-new"></span><strong>New</strong></td><td>Just created, no one has worked it yet.</td></tr>
              <tr><td><span class="dot d-open"></span><strong>Open</strong></td><td>Actively being worked.</td></tr>
              <tr><td><span class="dot d-pending"></span><strong>Pending</strong></td><td>Waiting on the customer. The SLA clock pauses here.</td></tr>
              <tr><td><span class="dot d-hold"></span><strong>On hold</strong></td><td>Paused on your side. The SLA clock pauses here too.</td></tr>
              <tr><td><span class="dot d-res"></span><strong>Resolved</strong></td><td>Answered. Auto-closes after your set number of days.</td></tr>
              <tr><td><span class="dot d-closed"></span><strong>Closed</strong></td><td>Finished and archived.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="block" id="inbox">
        <h2><span class="num">4</span> Working in the Inbox</h2>
        <p>The Inbox is a three-pane workspace and where you'll spend most of your time.</p>
        <div class="grid2">
          <div class="mini"><h4>Left — ticket list</h4><p>Filter by status (All, Open, Waiting, Resolved, Closed) with live counts, and search by subject, contact, or ticket number.</p></div>
          <div class="mini"><h4>Center — the conversation</h4><p>The full thread plus a composer. Switch between a <b>Reply</b> (goes to the customer) and an <b>Internal note</b> (team-only).</p></div>
          <div class="mini"><h4>Right — ticket details</h4><p>Contact card, priority, assignee, status, any portal form answers, and the SLA panel with a <b>Mark resolved</b> button.</p></div>
          <div class="mini"><h4>Make it yours</h4><p>Resize or collapse any pane. The view auto-refreshes so new replies appear without reloading.</p></div>
        </div>
        <div class="callout"><p><b>Heads up:</b> some ticket types (like phone calls or portal submissions with no reply channel) can't be replied to directly — the composer switches to Internal note only, so your team can still log what happened.</p></div>
      </section>

      <section class="block" id="queue-board">
        <h2><span class="num">5</span> Queue &amp; Board</h2>
        <h3>Queue — your work list</h3>
        <p>A focused, filterable list topped with live KPIs: Open, Overdue, Unassigned, Average first reply, and In-SLA % over 30 days. Use the filter chips to switch between <strong>My queue</strong>, <strong>Unassigned</strong>, <strong>All open</strong>, and <strong>Overdue</strong>. Agents see only their own tickets.</p>
        <h3>Board — drag-and-drop Kanban</h3>
        <p>Tickets laid out in columns — <span class="chip">New</span> <span class="chip">Open</span> <span class="chip">Pending</span> <span class="chip">Resolved</span>. Drag a card from one column to another to change its status instantly. Each card shows the ticket number, subject, priority, assignee, SLA state, contact, and last activity.</p>
      </section>

      <section class="block" id="dashboard">
        <h2><span class="num">6</span> Dashboard &amp; reporting</h2>
        <p>The Dashboard covers the <strong>last 30 days</strong> and is the view you can confidently show your own clients.</p>
        <ul class="clean">
          <li><strong>Headline KPIs</strong> — open tickets, overdue, resolved in 30 days, average first reply time, and In-SLA %.</li>
          <li><strong>Created vs. Resolved</strong> — a 14-day trend so you can see whether you're keeping up.</li>
          <li><strong>Open by agent</strong> — current workload across the team.</li>
          <li><strong>Tickets by status</strong> and <strong>Tickets by channel</strong> — where your volume sits.</li>
        </ul>
        <p style="font-size:14px;color:var(--muted)">Agents see metrics for their own tickets only; admins see the whole team.</p>
      </section>

      <section class="block" id="sla">
        <h2><span class="num">7</span> Priorities &amp; SLA targets</h2>
        <p>Every ticket has a <strong>priority</strong> that drives its response and resolution deadlines. These are the defaults — change them anytime under <a href="#settings">Settings → Assignment &amp; SLA</a>.</p>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Priority</th><th>First response</th><th>Resolution</th></tr></thead>
            <tbody>
              <tr><td><span class="dot d-urgent"></span><strong>Urgent</strong></td><td>1 hour</td><td>4 hours</td></tr>
              <tr><td><span class="dot d-high"></span><strong>High</strong></td><td>4 hours</td><td>8 hours</td></tr>
              <tr><td><span class="dot d-normal"></span><strong>Normal</strong></td><td>8 hours</td><td>24 hours</td></tr>
              <tr><td><span class="dot d-low"></span><strong>Low</strong></td><td>24 hours</td><td>72 hours</td></tr>
            </tbody>
          </table>
        </div>
        <h3>How the SLA clock behaves</h3>
        <ul class="clean">
          <li>The <strong>first-response clock</strong> stops as soon as an agent replies (even from outside HelmDesk).</li>
          <li>The clock <strong>pauses</strong> while a ticket is <em>Pending</em> (waiting on the customer) or <em>On hold</em>.</li>
          <li>When a deadline passes, the ticket is flagged <strong>Overdue</strong> and turns red — a visibility flag so it floats to the top of your queue. Nothing is reassigned automatically.</li>
        </ul>
      </section>

      <section class="block" id="team">
        <h2><span class="num">8</span> Team &amp; seats</h2>
        <p>Admins manage the team under the <strong>Team</strong> tab.</p>
        <ol class="steps">
          <li><strong>Sync your team</strong> — pull your current user roster into HelmDesk with one click.</li>
          <li><strong>Control app access</strong> — each user has an <strong>App access</strong> toggle (on by default). Turn it off and that person sees a "no access" screen when they open HelmDesk. Admins always keep access.</li>
          <li><strong>Mark who's assignable</strong> — toggle each person Assignable (receives tickets) or Excluded. People removed from your CRM show a "Deleted in CRM" badge.</li>
          <li><strong>Watch your seats</strong> — a bar shows "X of N seats in use." If you try to activate more agents than your plan allows, HelmDesk asks you to switch to a larger plan.</li>
        </ol>
        <p>There are two roles: <strong>Admins</strong> (full access to Settings, Team, and all tickets) and <strong>Agents</strong> (work only their assigned tickets). Whoever installed HelmDesk is an admin. <strong>App access</strong> and <strong>Assignable</strong> are independent — someone can have access to use the app without receiving ticket assignments, and vice versa.</p>
      </section>

      <section class="block" id="settings">
        <h2><span class="num">9</span> Settings</h2>
        <p>Admins configure HelmDesk across three tabs.</p>
        <h3>Channels &amp; filters</h3>
        <ul class="clean">
          <li>Choose which channels count as support channels.</li>
          <li>Ignore automated/marketing replies and very short one-word messages.</li>
          <li>Turn the <strong>auto-reply</strong> on or off and edit its message.</li>
          <li>Set <strong>always-create</strong> and <strong>never-create</strong> keyword lists for fine control over what becomes a ticket.</li>
        </ul>
        <h3>Assignment &amp; SLA</h3>
        <ul class="clean">
          <li>Pick your assignment mode: round-robin, a specific agent, or unassigned. With round-robin, optionally <strong>balance evenly within each priority</strong> so every agent gets a fair share of urgents, highs, normals and lows — not just of the total.</li>
          <li>Set first-response and resolution targets per priority, with a plain-English live preview.</li>
          <li>Set how many days before resolved tickets auto-close, and whether customers can reopen a resolved ticket (Never / 3 / 7 / 14 / 30 days).</li>
          <li>Choose your ticket number prefix (e.g. <code>HD-1042</code>).</li>
        </ul>
        <h3>Branding &amp; portal <span style="font-size:13px;font-weight:700;color:var(--amber-deep)">(Agency plan)</span></h3>
        <ul class="clean">
          <li>Set your <strong>brand name</strong> and <strong>primary color</strong> — they replace HelmDesk's name and accent throughout.</li>
          <li>Turn on the <strong>client portal</strong> and build your public intake form.</li>
        </ul>
      </section>

      <section class="block" id="portal">
        <h2><span class="num">10</span> Your client portal <span style="font-size:13px;font-weight:700;color:var(--amber-deep)">(Agency plan)</span></h2>
        <p>The client portal is a branded, public web form your customers can use to submit requests — every submission becomes a ticket, automatically linked to the right contact.</p>
        <h3>Build your form</h3>
        <ol class="steps">
          <li>Go to <strong>Settings → Branding &amp; portal</strong> and turn the portal on.</li>
          <li>Use the <strong>drag-and-drop form builder</strong> to add, reorder, edit, or remove fields, with a <strong>live preview</strong> of the customer-facing form as you go. Field types include text, long text, dropdown, radio buttons, and checkboxes — each with an optional placeholder and help text.</li>
          <li>Map each field to a core detail (name, email, phone, subject, message) or leave it as a custom question — custom answers show up in the ticket's "Form details" panel.</li>
          <li>Mark fields required as needed and save. Share your portal link with customers.</li>
        </ol>
        <p><strong>No customer login required</strong> — anyone with the link can submit. Each submission creates a ticket and, if the person isn't in your CRM yet, creates the contact automatically (tagged so you know it came from the portal). The form carries your brand name and color, with a "Powered by {your brand}" footer, and HelmDesk protects it from spam automatically.</p>
      </section>

      <section class="block" id="automations">
        <h2><span class="num">11</span> Workflow automation</h2>
        <p>HelmDesk publishes <strong>workflow triggers</strong> so your CRM workflows can react to what happens in your helpdesk. Add a HelmDesk trigger as the starting step of a workflow, then run any actions you like — send an SMS or email, create a task, move a pipeline stage, notify your team.</p>
        <h3>Available triggers</h3>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Trigger</th><th>Fires when…</th><th>Great for</th></tr></thead>
            <tbody>
              <tr><td><strong>Ticket Created</strong></td><td>a new ticket is opened</td><td>Auto-acknowledge the customer with their ticket number</td></tr>
              <tr><td><strong>SLA Breached</strong></td><td>a ticket misses its first-response or resolution target</td><td>Escalate — alert a manager, create an urgent task</td></tr>
              <tr><td><strong>Status Changed</strong></td><td>a ticket's status changes</td><td>Send a review request when resolved; notify on "Working"</td></tr>
              <tr><td><strong>Ticket Assigned</strong></td><td>a ticket is assigned or reassigned</td><td>Notify the agent they have a new ticket</td></tr>
              <tr><td><strong>Customer Replied</strong></td><td>the customer replies on a ticket</td><td>Flag it, or re-notify the owning agent</td></tr>
            </tbody>
          </table>
        </div>
        <p>Each trigger passes the ticket details into your workflow — reference them as <code>{{trigger.ticketRef}}</code>, <code>{{trigger.contactName}}</code>, <code>{{trigger.priority}}</code>, <code>{{trigger.status}}</code>, and more — so your messages and tasks can include the right context.</p>
        <div class="callout tip"><p><b>Popular first automation:</b> add the <b>Ticket Created</b> trigger, then a "Send SMS" or "Send Email" action that tells the customer <em>"We've received your request, ticket {{trigger.ticketRef}} — we'll be in touch shortly."</em> Instant acknowledgment, zero manual work.</p></div>
      </section>

      <section class="block" id="plans">
        <h2><span class="num">12</span> Plans &amp; billing</h2>
        <p>HelmDesk is a flat monthly subscription — <strong>no per-message or per-ticket fees</strong>, ever. Every plan starts with a <strong>3-day free trial</strong>, so you can set it up and see it working before you're billed. Pick the plan that fits your team's size and the features you need.</p>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Plan</th><th>Price</th><th>Seats</th><th>Highlights</th></tr></thead>
            <tbody>
              <tr><td><strong>Starter</strong></td><td>$29/mo</td><td>3</td><td>Tickets, inbox, board, dashboard, SLA, workflow triggers.</td></tr>
              <tr><td><strong>Team</strong></td><td>$79/mo</td><td>10</td><td>Everything in Starter + round-robin auto-assignment (incl. balance-per-priority).</td></tr>
              <tr><td><strong>Agency</strong></td><td>$99/mo</td><td>Unlimited</td><td>Everything + full white-label branding &amp; client portal.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Open the <strong>Plan</strong> pill in the top-right to see your current plan and upgrade or switch at any time. Billing is handled on your own account — upgrades take effect right away.</p>
        <div class="callout tip"><p><b>Free trial:</b> every plan includes a <b>3-day free trial</b> with full access. When it ends you're billed automatically for the plan you chose — nothing to do to keep access. Cancel any time before it ends if it's not a fit.</p></div>
        <div class="callout note"><p><b>Which features need which plan?</b> Round-robin auto-assignment requires <b>Team</b> or <b>Agency</b>. White-label branding and the client portal require <b>Agency</b>. Workflow triggers are available on every plan.</p></div>
      </section>

      <section class="block" id="data">
        <h2><span class="num">13</span> Data &amp; privacy</h2>
        <p>HelmDesk stores only what it needs to run your helpdesk — a reference to each customer's contact plus the ticket history. It doesn't copy or hold customer data beyond that.</p>
        <ul class="clean">
          <li><strong>If you uninstall</strong>, your tickets and settings are kept for a short grace window so a reinstall restores everything.</li>
          <li><strong>After 7 days</strong>, all of your workspace data is permanently and automatically deleted. Reinstalling within the window cancels the deletion.</li>
        </ul>
      </section>

      <section class="block faq" id="faq">
        <h2><span class="num">?</span> Frequently asked questions</h2>

        <details><summary>Why isn't a message creating a ticket?</summary>
          <div>Check three things: (1) setup is complete — HelmDesk creates nothing until the wizard is finished; (2) the message arrived on a channel you enabled in Settings → Channels; and (3) it wasn't caught by a filter (automated reply, one-word message, or a "never-create" keyword). You can force specific messages into tickets with an "always-create" keyword.</div>
        </details>

        <details><summary>How do I automate things off ticket events?</summary>
          <div>Build a workflow in your CRM and choose a HelmDesk trigger as its first step — Ticket Created, SLA Breached, Status Changed, Ticket Assigned, or Customer Replied. Then add any actions (send SMS/email, create a task, move a pipeline). Each trigger passes the ticket details (like {{trigger.ticketRef}} and {{trigger.contactName}}) so your messages include the right context. See the Workflow automation section above.</div>
        </details>

        <details><summary>Is there a free trial?</summary>
          <div>Yes — every plan starts with a 3-day free trial with full access. When it ends you're billed automatically for the plan you chose; cancel any time before then if it's not a fit.</div>
        </details>

        <details><summary>A customer replied again — will it make a duplicate ticket?</summary>
          <div>No. If the customer already has an open ticket, their new message is added to it. If their ticket was recently resolved and you allow reopening within the window you set, it reopens that ticket instead of creating a new one.</div>
        </details>

        <details><summary>Can my agents see each other's tickets?</summary>
          <div>No. Agents only see and work the tickets assigned to them, including on the Dashboard. Admins see everything.</div>
        </details>

        <details><summary>What happens when a ticket goes overdue?</summary>
          <div>It's flagged as Overdue and highlighted so it rises to the top of your queue. HelmDesk never reassigns or closes it for you based on the deadline — you stay in control.</div>
        </details>

        <details><summary>Can I rebrand HelmDesk as my own?</summary>
          <div>Yes, on the Agency plan. Set your brand name and primary color under Settings → Branding &amp; portal, and they replace HelmDesk's name and accent across the app and your client portal.</div>
        </details>

        <details><summary>Does auto-reply fire for every ticket?</summary>
          <div>Auto-reply (when enabled) is sent for tickets created from inbound customer messages. It is not sent for tickets you log manually.</div>
        </details>
      </section>

      <section class="support-cta" id="support">
        <span class="avail"><span class="live-dot"></span> Support available 24&times;7</span>
        <h2>Still need a hand?</h2>
        <p>Our team is here around the clock to help with setup, configuration, or anything that isn't behaving. Install HelmDesk, book a free onboarding call, or email us directly &mdash; whatever's fastest for you.</p>
        <div class="cta-row">
          <a class="btn" href="https://marketplace.gohighlevel.com/integration/6a42b01a904c53a589aae692" target="_blank" rel="noopener">Install HelmDesk</a>
          <a class="btn book" href="https://calendar.app.google/9PnxDV6QnokzQz2c6" target="_blank" rel="noopener">Join an onboarding call</a>
          <a class="btn ghost" href="mailto:binduchowdary856@gmail.com">Email support</a>
        </div>
        <p style="margin-top:16px;font-size:13px;color:var(--muted)">Prefer email? Reach us anytime at <a href="mailto:binduchowdary856@gmail.com">binduchowdary856@gmail.com</a> &mdash; we reply day or night.</p>
      </section>

    </main>
  </div>
</div>

<footer class="foot">
  <div class="wrap">
    <span><a href="/" style="color:var(--amber-deep);font-weight:700;text-decoration:none">&larr; Back to HelmDesk home</a></span>
    <span>Flat monthly pricing · No per-message fees</span>
  </div>
</footer>
`;

export default function HelpPage() {
  useEffect(() => {
    // Highlight the current section in the sidebar as you scroll.
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".helpdoc aside.toc a")
    );
    const map: Record<string, HTMLAnchorElement> = {};
    links.forEach((a) => {
      const id = a.getAttribute("href")?.slice(1);
      if (id) {
        const el = document.getElementById(id);
        if (el) map[id] = a;
      }
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const a = map[e.target.id];
          if (!a) return;
          if (e.isIntersecting) {
            links.forEach((l) => {
              l.style.background = "";
              l.style.color = "";
            });
            a.style.background = "var(--cream-2)";
            a.style.color = "var(--amber-deep)";
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="helpdoc" dangerouslySetInnerHTML={{ __html: HELP_HTML }} />
  );
}
