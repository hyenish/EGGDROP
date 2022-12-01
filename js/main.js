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
	//인덱스 페이지의 [section] visual의 슬릭
	$("#visual .vs_wrap").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: false,
		nextArrow: false,
		dots: true,
	});

	//스크롤메뉴 슬릭
	$("#menu .scrollmenu").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: false,
		nextArrow: false,
		variableWidth: true,
	});

	//[section] insta의 슬릭
	$("#insta .content").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		prevArrow: false,
		nextArrow: false,
	});

	//PICK 페이지의 img 슬릭
	$("#pick_content .img").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: $(".prev"),
		nextArrow: $(".next"),
		dots: true,
	});

	//BRAND 페이지의 슬릭
	$("#brand_content .img_box").slick({
		infinite: false,
		slidesToShow: 1.5,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: false,
		nextArrow: false,
	});
});

//scoll메뉴 누르면 누른 li에는 active가 추가되고, active 있던 li에는 삭제되게
$(document).ready(function () {
	$("#menu ul.scrollmenu li").click(function () {
		$("#menu ul.scrollmenu li").removeClass("active");
		$(this).toggleClass("active");
		return false;
	});
});

//해당메뉴를 누르면 그 메뉴의 div가 보이게
$(document).ready(function () {
	$("#menu ul.scrollmenu li.new").click(function () {
		$("#menu .content").addClass("hide");
		$("#menu .menu_new").removeClass("hide");
	});
	$("#menu ul.scrollmenu li.choice").click(function () {
		$("#menu .content").addClass("hide");
		$("#menu .menu_choice").removeClass("hide");
	});
	$("#menu ul.scrollmenu li.sandwich").click(function () {
		$("#menu .content").addClass("hide");
		$("#menu .menu_sandwich").removeClass("hide");
	});
	$("#menu ul.scrollmenu li.side").click(function () {
		$("#menu .content").addClass("hide");
		$("#menu .menu_side").removeClass("hide");
	});
	$("#menu ul.scrollmenu li.coffee").click(function () {
		$("#menu .content").addClass("hide");
		$("#menu .menu_coffee").removeClass("hide");
	});
	$("#menu ul.scrollmenu li.drink").click(function () {
		$("#menu .content").addClass("hide");
		$("#menu .menu_drink").removeClass("hide");
	});
});
