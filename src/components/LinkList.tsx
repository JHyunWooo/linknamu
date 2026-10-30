"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [savedCounts, setSavedCounts] = useState<Counts>({});
  // 조회 응답이 클릭보다 늦게 도착해도 숫자가 줄어들지 않도록 이번 방문의 클릭을 따로 셉니다.
  const [newClicks, setNewClicks] = useState<Counts>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { counts: Counts } | null) => {
        if (data) setSavedCounts(data.counts);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  function handleClick(linkId: string) {
    setNewClicks((prev) => ({ ...prev, [linkId]: (prev[linkId] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={(savedCounts[link.id] ?? 0) + (newClicks[link.id] ?? 0)}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
