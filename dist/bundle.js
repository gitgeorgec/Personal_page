/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// background bubble
var I18N = {
  'en': __webpack_require__(1),
  'zh-tw': __webpack_require__(2)
};
var canvas = document.querySelector('#back');
var ctx = canvas.getContext('2d');
var circles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
setInterval(function () {
  mouse.x = undefined, mouse.y = undefined;
}, 1000);
var mouse = {
  x: undefined,
  y: undefined
};
canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.offsetX, mouse.y = e.offsetY;
});
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.cancelAnimationFrame(raf);
  init();
});

function Circle(x, y, dx, dy, radius) {
  var colors = ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', // Blue 50->900
  '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00' // Amber 50->900
  ];
  var maxRadius = 40;
  var minRadius = 0;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colors[Math.floor(Math.random() * colors.length)];

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.update = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 5;
      }
    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(function (circle) {
    circle.update();
  });
  raf = window.requestAnimationFrame(animate);
}

function init() {
  circles = [];

  for (var i = 0; i < 1000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var dx = Math.random() * (Math.round(Math.random()) * 2 - 1) * 3;
    var dy = Math.random() * (Math.round(Math.random()) * 2 - 1) * 3;
    circles.push(new Circle(x, y, dx, dy, 1));
  }

  animate();
}

init(); //
//background change

$('.projects').click(function () {
  $('#sloped-back').removeClass('slop-change1');
  $('body').removeClass('body-back1');
  $('#sloped-back').removeClass('slop-change2');
  $('body').removeClass('body-back2');
  $('#sloped-back').removeClass('slop-change3');
  $('body').removeClass('body-back3');
}); // $('.projects').click(()=>{
//     $('#sloped-back').addClass('slop-change1')
//     $('body').addClass('body-back1')
//     $('#sloped-back').removeClass('slop-change2')
//     $('body').removeClass('body-back2')
//     $('#sloped-back').removeClass('slop-change3')
//     $('body').removeClass('body-back3')
// })

$('.experiences').click(function () {
  $('#sloped-back').removeClass('slop-change1');
  $('body').removeClass('body-back1');
  $('#sloped-back').addClass('slop-change2');
  $('body').addClass('body-back2');
  $('#sloped-back').removeClass('slop-change3');
  $('body').removeClass('body-back3');
});
$('.skills').click(function () {
  $('#sloped-back').removeClass('slop-change1');
  $('body').removeClass('body-back1');
  $('#sloped-back').removeClass('slop-change2');
  $('body').removeClass('body-back2');
  $('#sloped-back').addClass('slop-change3');
  $('body').addClass('body-back3');
}); //
//materialize setting

$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.modal').modal({
    'onOpenEnd': initCarouselModal
  });
  $('.tabs').tabs({
    'onShow': initCarouselModal
  }); // $('.carousel').carousel()
  // $('.carousel.carousel-slider').carousel();

  function initCarouselModal() {
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  }
}); //
//lang change

$('.lang').click(function (e) {
  $('#title').text(I18N[e.target.dataset.lang].Title);
  $('#introduction').text(I18N[e.target.dataset.lang].Introduction);
  $('.projects-title').text(I18N[e.target.dataset.lang].projectsTitle);
  $('.experiences-title').text(I18N[e.target.dataset.lang].experiencesTitle);
  $('#experience1').text(I18N[e.target.dataset.lang].experience1);
  $('#experience1-title').text(I18N[e.target.dataset.lang].experience1Title);
  $('#experience1-content').text(I18N[e.target.dataset.lang].experience1Content);
  $('#experience2').text(I18N[e.target.dataset.lang].experience2);
  $('#experience2-title').text(I18N[e.target.dataset.lang].experience2Title);
  $('#experience2-content').text(I18N[e.target.dataset.lang].experience2Content);
  $('#experience3').text(I18N[e.target.dataset.lang].experience3);
  $('#experience3-title').text(I18N[e.target.dataset.lang].experience3Title);
  $('#experience3-content').text(I18N[e.target.dataset.lang].experience3Content);
  $('.skill-title').text(I18N[e.target.dataset.lang].skillTitle);
  $('#skill1-title').text(I18N[e.target.dataset.lang].skill1Title);
  $('#skill2-title').text(I18N[e.target.dataset.lang].skill2Title);
  $('#skill3-title').text(I18N[e.target.dataset.lang].skill3Title);
}); //
//shadow effect

$('body').on('mousemove', function (e) {
  $('#MyPhoto').css("box-shadow", "".concat(-(e.clientX - canvas.width / 2) / 50, "px ").concat(-(e.clientY - canvas.height / 2) / 50, "px 0 rgba(0,0,0, 0.6)"));
  $('#MyPhoto').css("transform", "skewX(".concat((e.clientX - canvas.width / 2) / 200, "deg) skewY(").concat((e.clientX - canvas.height / 2) / 200, "deg"));
}); //project hover effect

$('#project1').hover(function () {
  $('#project1 .project-introduction').toggleClass('transparent transparent-text');
});
$('#project2').hover(function () {
  $('#project2 .project-introduction').toggleClass('transparent transparent-text');
});
$('#project3').hover(function () {
  $('#project3 .project-introduction').toggleClass('transparent transparent-text');
}); //open project websit on new tab

$('#movieBlog-link').click(function () {
  var win = window.open('https://evening-earth-94594.herokuapp.com/', '_blank');

  if (win) {
    win.focus();
  } else {
    alert('Please allow popups for this website');
  }
});
$('#musicStore-link').click(function () {
  var win = window.open('https://gitgeorgec.github.io/music-store/', '_blank');

  if (win) {
    win.focus();
  } else {
    alert('Please allow popups for this website');
  }
});
$('#rentHouse-link').click(function () {
  var win = window.open('https://gitgeorgec.github.io/rent-house/', '_blank');

  if (win) {
    win.focus();
  } else {
    alert('Please allow popups for this website');
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// en
module.exports = {
  Title: 'CHANG CHIA CHE',
  Introduction: 'hi I am Change Chia Che, want to find a fontend-developer job.',
  projectsTitle: "PROJECTS",
  experiencesTitle: "EXPERIENCES",
  experience1: "2009 SEPTEMBER - 2014 JULY",
  experience1Title: "Department of Civil Engineering in National Chiao Tung University 交通大學土木工程結構組",
  experience1Content: "Department of Civil Engineering in National Chiao Tung University 交通大學土木工程結構組",
  experience2: "2016 APRIL - 2018 MARCH",
  experience2Title: "T.Y.LIN INTERNATIONAL TAIWAN BRANCH serves as structural engineer.",
  experience2Content: "T.Y.LIN INTERNATIONAL TAIWAN BRANCH serves as structural engineer.",
  experience3: "2018 MARCH - NOW",
  experience3Title: "LEARNING FRONTEND SKILLS",
  experience3Content: "LEARNING FRONTEND SKILLS",
  skillTitle: "SKILLS",
  skill1Title: "FRONTEND SKILLS",
  skill2Title: "BACKEND SKILLS",
  skill3Title: "LANGUAGE"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// zh-tw
module.exports = {
  Title: '張佳哲',
  Introduction: '我是張佳哲',
  projectsTitle: '作品集',
  experiencesTitle: '經歷',
  experience1: "2009 年 9 月 - 2014 年 7 月",
  experience1Title: "交通大學土木工程學系 交通大學土木工程結構組",
  experience1Content: "交通大學土木工程學系 交通大學土木工程結構組",
  experience2: "2016 年 4 月 - 2018 年 3 月",
  experience2Title: "T.Y.LIN 美商同棪國際工程顧問股份公司台灣分公司，擔任結構工程師",
  experience2Content: "期間完成國道高速公路耐震補強與重慶高速公路橋樑設計兩項專案，曾協助團隊完成分析流程的自動化，團隊的工作效率因此提升，得以在的專案時程內順利完成專案．",
  experience3: "2018 年 3 月 - 至今",
  experience3Title: "自學前端技術",
  experience3Content: "使用網路資源如Udemy、codecademy、freecodecamp等自學javascript、css3、html5、React等網頁前端技術與node express mongodb等後端技術，完成多項課程，並利用所學編寫網頁專案練習，熟悉應用．",
  skillTitle: "技能",
  skill1Title: "前端技能",
  skill2Title: "後端技能",
  skill3Title: "語言"
};

/***/ })
/******/ ]);