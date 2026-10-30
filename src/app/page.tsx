import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

// wireframe.png 구조: 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로 링크 카드 목록
export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 pt-16 pb-20 sm:px-8 sm:pt-24">
      <div className="flex w-full max-w-sm flex-col">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <LinkList links={profile.links} />
      </div>
    </main>
  );
}
