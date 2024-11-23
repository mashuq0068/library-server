import { Router } from "express";
import { memberControllers } from "./member.controller";

const router = Router();

router.post("/", memberControllers.createMemberIntoDB);
router.get("/", memberControllers.getAllMembersFromDB);
router.get("/:id", memberControllers.getSingleMemberFromDB);
router.put("/:id", memberControllers.updateMemberInDB);
router.delete("/:id", memberControllers.deleteMemberFromDB);

export const memberRoutes = router;
