import { Member } from "@prisma/client";
import { prisma } from "../../config";

const createMember = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const getMembers = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getSingleMember = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: { memberId: id },
  });
  return result;
};

const updateMember = async (id: string, payload: Partial<Member>) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId: id },
  });

  const result = await prisma.member.update({
    where: { memberId: id },
    data: payload,
  });
  return result;
};

const deleteMember = async (id: string) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId: id },
  });
  await prisma.member.delete({
    where: { memberId: id },
  });
  
};

export const memberServices = {
  createMember,
  getMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
