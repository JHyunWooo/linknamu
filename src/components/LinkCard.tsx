"use client";

import type { LinkItem } from "@/data/profile";

function recordClick(linkId: string) {
  const body = JSON.stringify({ linkId });
  // sendBeacon은 페이지를 떠나는 중에도 요청이 끝까지 전송되도록 보장합니다.
  if (navigator.sendBeacon?.("/api/clicks", new Blob([body], { type: "application/json" }))) {
    return;
  }
  fetch("/api/clicks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(link.id)}
      className="flex w-full items-center justify-center rounded-3xl border border-white/60 bg-white/45 px-6 py-4 text-[15px] font-medium shadow-[0_4px_20px_-6px_rgba(180,110,70,0.18)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_24px_-8px_rgba(180,110,70,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 active:translate-y-0"
    >
      <span aria-hidden="true" className="mr-2">
        {link.icon}
      </span>
      {link.title}
    </a>
  );
}
