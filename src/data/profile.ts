export type LinkItem = {
  id: string;
  title: string;
  url: string;
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
  name: "홍길동",
  bio: "한 줄 소개가 들어갈 자리입니다",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://velog.io/" },
  ],
};
