"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import Hero from "@/models/Hero";
import { HeroSchema } from "@/schemas/HeroSchema";

export async function getHeroes() {
  await connectDB();

  return await Hero.find().sort({ order: 1, createdAt: -1 }).lean();
}

export async function getActiveHeroes() {
  await connectDB();

  return await Hero.find({ isActive: true })
    .sort({ order: 1 })
    .lean();
}

export async function getHeroById(id: string) {
  await connectDB();

  return await Hero.findById(id).lean();
}

export async function createHero(data: unknown) {
  const validatedData = HeroSchema.parse(data);

  await connectDB();

  const hero = await Hero.create(validatedData);

  revalidatePath("/hero");

  return {
    success: true,
    message: "Hero created successfully.",
    data: hero,
  };
}