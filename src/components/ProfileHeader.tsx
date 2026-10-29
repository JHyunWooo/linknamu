import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={224}
        height={224}
        priority
        unoptimized={image.endsWith(".svg")}
        className="h-48 w-48 rounded-full border border-neutral-200 object-cover sm:h-56 sm:w-56"
      />
      <h1 className="mt-8 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-base text-neutral-600">{bio}</p>
    </header>
  );
}
