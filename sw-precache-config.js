module.exports = {
	//내 작업물 폴더에 맞게 수정하기!
	staticFileGlobs: ["css/*.css", "*.html", "img/*.*", "js/*.js"],
	stripPrefix: "app/",
	runtimeCaching: [
		{
			urlPattern: /this\\.is\\.a\\.regex/,
			handler: "networkFirst",
		},
	],
};
