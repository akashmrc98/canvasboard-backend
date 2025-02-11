var express = require("express");
var router = express.Router();

const { isAuthenticated } = require("../middlewares/auth");

const { createFolder } = require("../controllers/folder/addFolder");
const { renameFolderAttributes } = require("../controllers/folder/renameFolder");
const { removeFolder } = require("../controllers/folder/removeFolder");
const { viewUserFolders } = require("../controllers/folder/viewFolders");
const { createChildFolder } = require("../controllers/folder/addChildFolder");
const { removeChildFolder } = require("../controllers/folder/removeChildFolder");
const { viewChildFolders } = require("../controllers/folder/viewChildFolders");

// * Folder Routes

router.post("/user/create-folder", isAuthenticated, createFolder);
router.post("/user/rename-folder", isAuthenticated, renameFolderAttributes);
router.delete("/user/remove-folder", isAuthenticated, removeFolder);
router.get("/user/view-folders", isAuthenticated, viewUserFolders);
router.post("/user/create-nested-folder", createChildFolder);
router.delete("/user/remove-nested-folder", isAuthenticated, removeChildFolder);
router.get("/user/view-nested-folders/", isAuthenticated, viewChildFolders);

module.exports = router;
