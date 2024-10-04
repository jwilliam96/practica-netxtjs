import { type NextRequest } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const id = params.id

    return new Response(`producto numero ${id}`)

}