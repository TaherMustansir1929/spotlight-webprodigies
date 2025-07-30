"use server";

import { User } from "@/generated/prisma";
import { prismaClient } from "@/lib/prisma_client";
import { currentUser } from "@clerk/nextjs/server";

export async function onAuthenticateUser(): Promise<{
  status: number;
  user?: User | null;
  error?: string;
}> {
  try {
    const user = await currentUser();

    if (!user)
      return {
        status: 403,
        error: "User not authenticated",
      };

    const userExists = await prismaClient.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (userExists)
      return {
        status: 200,
        user: userExists,
      };

    const newUser = await prismaClient.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
        profileImage: user.imageUrl,
      },
    });

    if (!newUser)
      return {
        status: 500,
        error: "Failed to create user",
      };

    return {
      status: 201,
      user: newUser,
    };
  } catch (error) {
    console.error("Error in onAuthenticateUser:", error);
    return {
      status: 500,
      error: "Internal Server Error",
    };
  }
}
