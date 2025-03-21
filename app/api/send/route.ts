import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("dsds", process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body of the request
    const requestBody = await req.json();
    console.log("Request Body:", requestBody); // Log the request body

    // Extract necessary data from the request body
    const { subject, message } = requestBody; // Assuming your body contains `firstName` and `to`

    // Send email using the extracted data
    const { data, error } = await resend.emails.send({
      from: "portfolio <onboarding@resend.dev>",
      to: ["abdallahbeedo855@gmail.com"], // Use provided recipient or fallback
      subject: requestBody.subject,
      react: EmailTemplate({ subject, message }),
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    console.log("Email Sent Data:", data); // Log the response data
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("Error:", err); // Log the error for debugging
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
