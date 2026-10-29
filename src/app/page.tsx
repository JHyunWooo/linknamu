import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

// wireframe.png 구조: 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로 링크 카드 목록
export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-background px-6 py-10 sm:py-16">
      <div className="flex w-full max-w-md flex-col">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <ul className="mt-10 flex flex-col gap-4">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
