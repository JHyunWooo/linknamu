import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 따뜻한 그림자로 사진이 배경 위에 살짝 떠 보이게 합니다. */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_12px_32px_-8px_rgba(180,110,70,0.35)] ring-1 ring-white/80">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={144}
          height={144}
          priority
          unoptimized={image.endsWith(".svg")}
          className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
