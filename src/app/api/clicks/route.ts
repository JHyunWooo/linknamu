import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const linkIds = new Set(profile.links.map((link) => link.id));

// 링크 클릭 1회 기록: POST /api/clicks  { "linkId": "github" }
export async function POST(request: Request) {
  let linkId: unknown;
  try {
    ({ linkId } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청 본문입니다." }, { status: 400 });
  }

  if (typeof linkId !== "string" || !linkIds.has(linkId)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    await clicks.updateOne(
      { _id: linkId },
      { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true },
    );
    return Response.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 저장 실패", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}

// 링크별 클릭 수 조회: GET /api/clicks
export async function GET(request: Request) {
  // request를 참조해 요청 시점에 실행되도록 합니다 (빌드 시 프리렌더링 방지).
  void request.url;
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find().toArray();
    const counts = Object.fromEntries(
      profile.links.map((link) => [link.id, docs.find((d) => d._id === link.id)?.count ?? 0]),
    );
    return Response.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
