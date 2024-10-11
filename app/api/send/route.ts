import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
 try {
  // Assuming the request body contains the necessary data
  const { data, error } = await resend.emails.send({
   from: "Acme <onboarding@resend.dev>",
   to: ["delivered@resend.dev"],
   subject: "Hello world",
   react: EmailTemplate({ firstName: "John" }),
  });

  if (error) {
   return NextResponse.json(error, { status: 400 });
  }
  console.log(data);
  return NextResponse.json(data, { status: 200 });
 } catch (err) {
  return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
 }
}
