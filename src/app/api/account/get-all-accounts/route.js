import connectToDB from "@/database";
import Account from "@/model/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const getAllAccounts = await Account.find({ uid: id });

    if (getAllAccounts) {
      return NextResponse.json({
        success: true,
        data: getAllAccounts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong sjshsuh",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong 44444",
    });
  }
}
