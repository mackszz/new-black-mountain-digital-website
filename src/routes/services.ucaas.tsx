import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ucaas")({
  head: () => ({
    meta: [
      { title: "UCaaS | Business VoIP Provider Canada | Black Mountain Digital" },
      { name: "description", content: "Unified voice, video, and messaging on one platform. Cloud-hosted, carrier-grade, deployed by a Canadian VoIP provider with three decades of telecom roots." },
      { property: "og:title", content: "UCaaS | Business VoIP Provider Canada" },
      { property: "og:description", content: "Cloud-hosted business phone system unifying calling, meetings, chat, and SMS — with the reliability of a telecom operator since 1996." },
      { property: "og:url", content: "/services/ucaas" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UCaaS | Business VoIP Provider Canada" },
      { name: "twitter:description", content: "Cloud-hosted business phone system unifying calling, meetings, chat, and SMS — with the reliability of a telecom operator since 1996." },
    ],
    links: [{ rel: "canonical", href: "/services/ucaas" }],
  }),
  component: () => (
    <ServicePage
      pillar="Voice"
      eyebrow="UCaaS"
      title="Voice, video, and messaging on one platform. No wires attached."
      lede="A cloud-hosted business phone system that unifies calling, meetings, chat, and SMS — with the number-portability, carrier relationships, and reliability of a telecom company that's been doing this since 1996."
      stats={[
        { value: "99.999%", label: "Uptime SLA" },
        { value: "1-day", label: "Number porting typical" },
        { value: "0", label: "On-prem hardware required" },
        { value: "40+", label: "Countries covered" },
      ]}
      features={[
        { title: "One number, every device", body: "Desk phone, mobile app, browser, headset — your calls follow you, your team, and your customer." },
        { title: "Video meetings included", body: "HD video, screen share, and recording built into the same client. No second subscription for meetings." },
        { title: "Team messaging", body: "Threaded chat, channels, and file sharing so voice, video, and text live in one workspace." },
        { title: "Carrier-grade routing", body: "Redundant, geographically distributed voice infrastructure — the same discipline behind our telecom origins." },
        { title: "CRM &amp; Microsoft 365 integration", body: "Native connectors for Salesforce, HubSpot, Teams, and Outlook. Click-to-call, screen-pops, activity logging." },
        { title: "SMS &amp; MMS from your business line", body: "Text customers from the same number they call — no personal phones, full compliance and archival." },
      ]}
      capabilities={[
        "Auto-attendant &amp; IVR design",
        "Call queues and ring groups",
        "Call recording &amp; transcription",
        "E911 for Canadian addresses",
        "Toll-free and vanity numbers",
        "Bring-your-own-carrier options",
        "Analytics and call-quality reporting",
        "24/7 Canadian-based support",
      ]}
      related={[
        { to: "/services/cx", label: "CX", desc: "Add contact-center capabilities on top of your UCaaS platform." },
        { to: "/services/ai-receptionist", label: "AI Receptionist", desc: "Automate call answering and routing at the front door." },
        { to: "/services/sd-wan", label: "SD-WAN", desc: "Prioritize voice traffic across every site and connection." },
      ]}
      faq={[
        { q: "Will this work with our existing phone numbers?", a: "Yes. We handle number porting from any Canadian carrier. Typical business porting completes in five to fifteen business days, with continuity plans in place." },
        { q: "Does it integrate with Microsoft Teams?", a: "Yes. We support Teams-integrated calling as well as our native platform, depending on where your team already lives." },
        { q: "What about call quality?", a: "UCaaS is only as good as the network under it. We size and QoS your connection — often paired with our SD-WAN — so voice packets always get priority." },
        { q: "Can we keep our desk phones?", a: "If they're modern SIP phones, likely yes. We audit your hardware and swap only what's necessary, so you're not throwing away recent investments." },
        { q: "What happens if the internet goes down?", a: "Calls auto-fail-over to mobile apps or a designated cellular number. With our SD-WAN, we can also engineer transport redundancy on the network layer itself." },
      ]}
      cta={{
        title: "Move your business phone system to the cloud — cleanly.",
        body: "We'll audit your current voice environment, size your connectivity, and run the port with zero downtime. Then we support it. That's the whole deal.",
      }}
    />
  ),
});
