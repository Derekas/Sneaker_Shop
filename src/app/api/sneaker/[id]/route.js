import { NextResponse } from "next/server";
import { connectDB } from "@/src/utils/mongoose";
import Sneaker from "@/src/models/Sneaker";
export function GET(request, { params }) {
  try {
    const SneakerFound = Sneaker.findById(params.id);
    if (!SneakerFound) {
      return NextResponse.json(
        {
          message: "Sneaker not found",
        },
        {
          status: "404",
        }
      );
    }
    return NextResponse.json(SneakerFound);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: "400",
      }
    );
  }
}

export function POST() {
  return NextResponse.json({
    message: "obtenf",
  });
}

export async function DELETE(request, { params }) {
  try {
    const sneakerDeleted = await Sneaker.findByIdAndDelete(params.id);

    if (!sneakerDeleted) {
      return NextResponse.json(
        {
          message: "Sneaker not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json({
      sneakerDeleted,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const sneakerUpdated = await Sneaker.findByIdAndUpdate(params.is, data, {
      new: true,
    });
    return NextResponse.json({
      sneakerUpdated,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
