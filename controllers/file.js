import asyncHandler from "express-async-handler";
const fileList = asyncHandler((req, res) =>
	res.render("drive", { files: true }),
);
const index = asyncHandler((req, res) =>
	res.render("drive", {
		files: true,
		shared: true,
	}),
);

export {
	fileList,
	sharedList,
	index,
};
