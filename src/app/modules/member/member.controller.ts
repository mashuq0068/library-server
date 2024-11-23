import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { memberServices } from "./member.service";

const createMemberIntoDB = catchAsync(async (req, res) => {
  const result = await memberServices.createMember(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembersFromDB = catchAsync(async (req, res) => {
  const result = await memberServices.getMembers();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getSingleMemberFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberServices.getSingleMember(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMemberInDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberServices.updateMember(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMemberFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
 await memberServices.deleteMember(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member successfully deleted",
    
  });
});

export const memberControllers = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberInDB,
  deleteMemberFromDB,
};
