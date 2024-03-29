// @ts-check
import { defineGitDependency } from "leafy-utils";

export default defineGitDependency({
	remote: {
		url: "https://github.com/Herobrine643928/Chest-UI",
		branch: "additional-features",
		path: "Without Inventory/RP",
	},
	dependencies: {
		"ui/": "/ui/",
		"textures/": "/textures/",
	},
});
