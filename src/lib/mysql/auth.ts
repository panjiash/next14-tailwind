import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function register(data: {
  name: string;
  email: string;
  password: string;
  login_type: string;
}) {
  const datas = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!datas) {
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: await bcrypt.hash(data.password, 12),
      },
    });

    return {
      status: true,
      statusCode: 200,
      message: "Register Success!",
    };
  } else {
    return {
      status: false,
      statusCode: 400,
      message: "Email sudah terdaftar!",
    };
  }
}

export async function login(data: { email: string }) {
  const user = await prisma.user.findMany({
    where: {
      email: data.email,
    },
  });

  if (!user.length) {
    return null;
  } else {
    return user[0];
  }
}

export async function loginWithGoogle(data: any, callback: any) {
  const email = data.email;
  const cekEmail = await prisma.user.findMany({
    where: {
      email,
    },
  });
  if (cekEmail.length === 0) {
    await prisma.user.create({
      data: {
        name: data.name,
        email,
        login_type: "google",
        role: "user",
      },
    });
  }
  callback({ status: true, data: data });
}

export async function getAllData() {
  const datas = await prisma.user.findMany();
  return datas;
}
