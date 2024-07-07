import { comments } from "./data";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return Response.json(comments);
  };

  const filteredComments = query ? comments.filter(
    (comment) =>
    comment.text.includes(query)) : comments;

  return Response.json(filteredComments);
};

export async function POST(request: NextRequest) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};