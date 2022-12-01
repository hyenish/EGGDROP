//메뉴버튼 누르면 GNB창 뜨게
$(document).ready(function () {
	$(".gnb_open").click(function () {
		$("#gnb").show();
		return false;
	});
	$(".gnb_close").click(function () {
		$("#gnb").hide();
		return false;
	});
});

//GNB에서 메뉴리스트 누르면 하위 메뉴 토글되게
$(document).ready(function () {
	$("#gnb li.menu").click(function () {
		$("#gnb li.menu ul.hide").toggleClass("show");
	});
	$("#gnb li.about").click(function () {
		$("#gnb li.about ul.hide").toggleClass("show");
	});
	$("#gnb li.contact").click(function () {
		$("#gnb li.contact ul.hide").toggleClass("show");
	});
});

$(document).ready(function () {
	//스크롤 메뉴 슬릭적용
	$("#menu .scrollmenu").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: false,
		nextArrow: false,
		variableWidth: true,
	});
});

/*******************
  NEW_INFO
*********************/
$(document).ready(function () {
	$(".menu_new .new1").click(function () {
		$(".menu_new .new1 .info_content").css("background-color", "#FFCDB4");
		$(".menu_new .new1 .info").toggleClass("hide");
	});
	$(".menu_new .new3").click(function () {
		$(".menu_new .new3 .info_content").css("background-color", "#F2D5B5");
		$(".menu_new .new3 .info").toggleClass("hide");
	});
	$(".menu_new .new4").click(function () {
		$(".menu_new .new4 .info_content").css("background-color", "#F6D0D9");
		$(".menu_new .new4 .info").toggleClass("hide");
	});
	$(".menu_new .new6").click(function () {
		$(".menu_new .new6 .info_content").css("background-color", "#FCE8BD");
		$(".menu_new .new6 .info").toggleClass("hide");
	});
	$(".menu_new .new7").click(function () {
		$(".menu_new .new7 .info_content").css("background-color", "#FBE7B4");
		$(".menu_new .new7 .info").toggleClass("hide");
	});
	$(".menu_new .new9").click(function () {
		$(".menu_new .new9 .info_content").css("background-color", "#B4E2CC");
		$(".menu_new .new9 .info").toggleClass("hide");
	});
});

/*******************
	CHOICE_INFO
 *********************/
$(document).ready(function () {
	$(".menu_choice .choice1").click(function () {
		$(".menu_choice .choice1 .info_content").css("background-color", "#f593b3");
		$(".menu_choice .choice1 .info").toggleClass("hide");
	});
	$(".menu_choice .choice2").click(function () {
		$(".menu_choice .choice2 .info_content").css("background-color", "#ffd8c5");
		$(".menu_choice .choice2 .info").toggleClass("hide");
	});
	$(".menu_choice .choice3").click(function () {
		$(".menu_choice .choice3 .info_content").css("background-color", "#f7f6c7");
		$(".menu_choice .choice3 .info").toggleClass("hide");
	});
	$(".menu_choice .choice4").click(function () {
		$(".menu_choice .choice4 .info_content").css("background-color", "#ddf2bf");
		$(".menu_choice .choice4 .info").toggleClass("hide");
	});
	$(".menu_choice .choice5").click(function () {
		$(".menu_choice .choice5 .info_content").css("background-color", "#c8e9f1");
		$(".menu_choice .choice5 .info").toggleClass("hide");
	});
	$(".menu_choice .choice6").click(function () {
		$(".menu_choice .choice6 .info_content").css("background-color", "#fdced6");
		$(".menu_choice .choice6 .info").toggleClass("hide");
	});
	$(".menu_choice .choice7").click(function () {
		$(".menu_choice .choice7 .info_content").css("background-color", "#c3eed9");
		$(".menu_choice .choice7 .info").toggleClass("hide");
	});
	$(".menu_choice .choice8").click(function () {
		$(".menu_choice .choice8 .info_content").css("background-color", "#f7d1ea");
		$(".menu_choice .choice8 .info").toggleClass("hide");
	});
	$(".menu_choice .choice9").click(function () {
		$(".menu_choice .choice9 .info_content").css("background-color", "#a3efe9");
		$(".menu_choice .choice9 .info").toggleClass("hide");
	});
	$(".menu_choice .choice10").click(function () {
		$(".menu_choice .choice10 .info_content").css(
			"background-color",
			"#f4e6e7",
		);
		$(".menu_choice .choice10 .info").toggleClass("hide");
	});
	$(".menu_choice .choice11").click(function () {
		$(".menu_choice .choice11 .info_content").css(
			"background-color",
			"#f2d5b5",
		);
		$(".menu_choice .choice11 .info").toggleClass("hide");
	});
	$(".menu_choice .choice12").click(function () {
		$(".menu_choice .choice12 .info_content").css(
			"background-color",
			"#fce8bd",
		);
		$(".menu_choice .choice12 .info").toggleClass("hide");
	});
	$(".menu_choice .choice13").click(function () {
		$(".menu_choice .choice13 .info_content").css(
			"background-color",
			"#b4e2cc",
		);
		$(".menu_choice .choice13 .info").toggleClass("hide");
	});
	$(".menu_choice .choice14").click(function () {
		$(".menu_choice .choice14 .info_content").css(
			"background-color",
			"#e1e8d5",
		);
		$(".menu_choice .choice14 .info").toggleClass("hide");
	});
	$(".menu_choice .choice15").click(function () {
		$(".menu_choice .choice15 .info_content").css(
			"background-color",
			"#e1e8d5",
		);
		$(".menu_choice .choice15 .info").toggleClass("hide");
	});
	$(".menu_choice .choice16").click(function () {
		$(".menu_choice .choice16 .info_content").css(
			"background-color",
			"#e1e8d5",
		);
		$(".menu_choice .choice16 .info").toggleClass("hide");
	});
});

/*******************
  SANDWICH_INFO
*********************/
$(document).ready(function () {
	$(".menu_sandwich .sandwich1").click(function () {
		$(".menu_sandwich .sandwich1 .info_content").css(
			"background-color",
			"#f2d5b5",
		);
		$(".menu_sandwich .sandwich1 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich2").click(function () {
		$(".menu_sandwich .sandwich2 .info_content").css(
			"background-color",
			"#f4e6e7",
		);
		$(".menu_sandwich .sandwich2 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich3").click(function () {
		$(".menu_sandwich .sandwich3 .info_content").css(
			"background-color",
			"#f4e6e7",
		);
		$(".menu_sandwich .sandwich3 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich4").click(function () {
		$(".menu_sandwich .sandwich4 .info_content").css(
			"background-color",
			"#f593b3",
		);
		$(".menu_sandwich .sandwich4 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich5").click(function () {
		$(".menu_sandwich .sandwich5 .info_content").css(
			"background-color",
			"#fce8bd",
		);
		$(".menu_sandwich .sandwich5 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich6").click(function () {
		$(".menu_sandwich .sandwich6 .info_content").css(
			"background-color",
			"#fdced6",
		);
		$(".menu_sandwich .sandwich6 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich7").click(function () {
		$(".menu_sandwich .sandwich7 .info_content").css(
			"background-color",
			"#b4e2cc",
		);
		$(".menu_sandwich .sandwich7 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich8").click(function () {
		$(".menu_sandwich .sandwich8 .info_content").css(
			"background-color",
			"#f7f6c7",
		);
		$(".menu_sandwich .sandwich8 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich9").click(function () {
		$(".menu_sandwich .sandwich9 .info_content").css(
			"background-color",
			"#a3efe9",
		);
		$(".menu_sandwich .sandwich9 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich10").click(function () {
		$(".menu_sandwich .sandwich10 .info_content").css(
			"background-color",
			"#fdced6",
		);
		$(".menu_sandwich .sandwich10 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich11").click(function () {
		$(".menu_sandwich .sandwich11 .info_content").css(
			"background-color",
			"#ddf2bf",
		);
		$(".menu_sandwich .sandwich11 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich12").click(function () {
		$(".menu_sandwich .sandwich12 .info_content").css(
			"background-color",
			"#c3eed9",
		);
		$(".menu_sandwich .sandwich12 .info").toggleClass("hide");
	});
	$(".menu_sandwich .sandwich13").click(function () {
		$(".menu_sandwich .sandwich13 .info_content").css(
			"background-color",
			"#f7d1ea",
		);
		$(".menu_sandwich .sandwich13 .info").toggleClass("hide");
	});
});

/*******************
  SIDE_INFO
*********************/
$(document).ready(function () {
	$(".menu_side .side1").click(function () {
		$(".menu_side .side1 .info_content").css("background-color", "#ffcdb4");
		$(".menu_side .side1 .info").toggleClass("hide");
	});
	$(".menu_side .side2").click(function () {
		$(".menu_side .side2 .info_content").css("background-color", "#f6d0d9");
		$(".menu_side .side2 .info").toggleClass("hide");
	});
	$(".menu_side .side3").click(function () {
		$(".menu_side .side3 .info_content").css("background-color", "#fbe7b4");
		$(".menu_side .side3 .info").toggleClass("hide");
	});
	$(".menu_side .side4").click(function () {
		$(".menu_side .side4 .info_content").css("background-color", "#f0ffaa");
		$(".menu_side .side4 .info").toggleClass("hide");
	});
	$(".menu_side .side5").click(function () {
		$(".menu_side .side5 .info_content").css("background-color", "#e0f2c4");
		$(".menu_side .side5 .info").toggleClass("hide");
	});
	$(".menu_side .side6").click(function () {
		$(".menu_side .side6 .info_content").css("background-color", "#e0f2c4");
		$(".menu_side .side6 .info").toggleClass("hide");
	});
});

/*******************
	COFFEE_INFO
*********************/
$(document).ready(function () {
	$(".menu_coffee .coffee1").click(function () {
		$(".menu_coffee .coffee1 .info_content").css("background-color", "#f7f6c7");
		$(".menu_coffee .coffee1 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee2").click(function () {
		$(".menu_coffee .coffee2 .info_content").css("background-color", "#ddf2bf");
		$(".menu_coffee .coffee2 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee3").click(function () {
		$(".menu_coffee .coffee3 .info_content").css("background-color", "#fdced6");
		$(".menu_coffee .coffee3 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee4").click(function () {
		$(".menu_coffee .coffee4 .info_content").css("background-color", "#ffd8c5");
		$(".menu_coffee .coffee4 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee5").click(function () {
		$(".menu_coffee .coffee5 .info_content").css("background-color", "#f7d1ea");
		$(".menu_coffee .coffee5 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee6").click(function () {
		$(".menu_coffee .coffee6 .info_content").css("background-color", "#c3eed9");
		$(".menu_coffee .coffee6 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee7").click(function () {
		$(".menu_coffee .coffee7 .info_content").css("background-color", "#f593b3");
		$(".menu_coffee .coffee7 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee8").click(function () {
		$(".menu_coffee .coffee8 .info_content").css("background-color", "#f7f6c7");
		$(".menu_coffee .coffee8 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee9").click(function () {
		$(".menu_coffee .coffee9 .info_content").css("background-color", "#ddf2bf");
		$(".menu_coffee .coffee9 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee10").click(function () {
		$(".menu_coffee .coffee10 .info_content").css(
			"background-color",
			"#fdced6",
		);
		$(".menu_coffee .coffee10 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee11").click(function () {
		$(".menu_coffee .coffee11 .info_content").css(
			"background-color",
			"#ffd8c5",
		);
		$(".menu_coffee .coffee11 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee12").click(function () {
		$(".menu_coffee .coffee12 .info_content").css(
			"background-color",
			"#f7d1ea",
		);
		$(".menu_coffee .coffee12 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee13").click(function () {
		$(".menu_coffee .coffee13 .info_content").css(
			"background-color",
			"#c3eed9",
		);
		$(".menu_coffee .coffee13 .info").toggleClass("hide");
	});
	$(".menu_coffee .coffee14").click(function () {
		$(".menu_coffee .coffee14 .info_content").css(
			"background-color",
			"#f593b3",
		);
		$(".menu_coffee .coffee14 .info").toggleClass("hide");
	});
});

/*******************
  DRINK_INFO
*********************/
$(document).ready(function () {
	$(".menu_drink .drink1").click(function () {
		$(".menu_drink .drink1 .info_content").css("background-color", "#f7f6c7");
		$(".menu_drink .drink1 .info").toggleClass("hide");
	});
	$(".menu_drink .drink2").click(function () {
		$(".menu_drink .drink2 .info_content").css("background-color", "#fdced6");
		$(".menu_drink .drink2 .info").toggleClass("hide");
	});
	$(".menu_drink .drink3").click(function () {
		$(".menu_drink .drink3 .info_content").css("background-color", "#ffd8c5");
		$(".menu_drink .drink3 .info").toggleClass("hide");
	});
	$(".menu_drink .drink4").click(function () {
		$(".menu_drink .drink4 .info_content").css("background-color", "#c8e9f1");
		$(".menu_drink .drink4 .info").toggleClass("hide");
	});
	$(".menu_drink .drink5").click(function () {
		$(".menu_drink .drink5 .info_content").css("background-color", "#c8e9f1");
		$(".menu_drink .drink5 .info").toggleClass("hide");
	});
});
