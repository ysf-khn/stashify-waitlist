import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, company } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("stashify");
    const collection = db.collection("waitlist");

    // Check if phone number already exists
    const existing = await collection.findOne({ phone });
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "This phone number is already on the waitlist",
        },
        { status: 400 }
      );
    }

    // Insert new waitlist entry
    const result = await collection.insertOne({
      name,
      phone,
      ...(email && { email }),
      ...(company && { company }),
      createdAt: new Date(),
    });

    if (result.acknowledged) {
      return NextResponse.json(
        { success: true, message: "Successfully joined waitlist" },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to insert document");
    }
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
