export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// 보여 주기용 더미 값입니다. 실제 내용은 이 파일만 수정하면 됩니다.
// id는 클릭 수 집계의 키로 쓰이므로 한 번 정하면 바꾸지 않는 것이 좋습니다.
export const profile: Profile = {
  name: "정현우",
  bio: "40살 100억 부자 | AI로 딸깍! 100억 달성~",
  image: "/profile.jpeg",
  links: [
    { id: "github", title: "깃허브", url: "https://github.com/JHyunWooo", icon: "🐙" },
    { id: "cafe", title: "카페", url: "https://cafe.naver.com/bluegrayx6zgz", icon: "☕" },
    { id: "email", title: "이메일", url: "mailto:wjdgusdn7797@gmail.com", icon: "📬" },
  ],
};
