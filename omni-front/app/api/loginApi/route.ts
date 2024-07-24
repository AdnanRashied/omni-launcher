import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username: email, password } = await request.json();

    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Payload has been sent" });
    } else {
      return NextResponse.json(
        { message: "Payload failed to send" },
        { status: 405 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
