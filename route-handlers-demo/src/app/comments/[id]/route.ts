import { redirect } from "next/navigation";
import { comments } from "../data";
import { type NextRequest } from "next/server";


export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  };
  
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (!comment) {
    return new Response("Comment ID Not Found", { status: 404 });
  }
  return Response.json(comment);
};

export async function PATCH(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { text } = await _request.json();

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  if (index === -1) {
    return new Response("Comment ID Not Found", { status: 404 });
  };

  comments[index].text = text;
  return Response.json(comments[index]);
};

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  if (index === -1) {
    return new Response("Comment ID Not Found", { status: 404 });
  }

  const deletedComment = comments[index];
  comments.splice(index, 1);

  return new Response(JSON.stringify(deletedComment));
};