import { NextResponse } from "next/server";

import { env } from "../../../../../env.mjs";

export async function POST(
  req: Request,
  { params }: { params: { routes: string[] } }
) {
  const body = await req.json();
  const headers: Record<string, string> = {
    Authorization: `Bearer ${env.API_KEY}`,
  };
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const res = await fetch(env.ALCHEMY_API_URL + `/${params.routes.join("/")}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.API_KEY}`,
      ...headers,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json(await res.json().catch((e) => ({})), {
      status: res.status,
    });
  }

  return NextResponse.json(await res.json());
}
