
import express from "express";
import {
  getInvestigadores,
  getInvestigador,
  createInvestigador,
  updateInvestigador,
  deleteInvestigador,
} from "../controllers/InvestigadorController.js";

const router = express.Router();

router.route("/").get(getInvestigadores).post(createInvestigador);
router.route("/:id").get(getInvestigador).put(updateInvestigador).delete(deleteInvestigador);

export default router;
