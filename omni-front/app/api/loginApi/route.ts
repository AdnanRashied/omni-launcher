import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const response = await fetch("Gateway Route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
