// background bubble
const I18N = {
    'en':require('./language/lang-en'),
    'zh-tw':require('./language/lang-zh-tw')
}
const canvas = document.querySelector('#back')
const ctx = canvas.getContext('2d');
let circles = []
canvas.width = window.innerWidth
canvas.height = window.innerHeight

setInterval(()=>{
    mouse.x=undefined,
    mouse.y=undefined
},1000)
const mouse ={
    x:undefined,
    y:undefined
}
canvas.addEventListener("mousemove",(e)=>{
    mouse.x=e.offsetX,
    mouse.y=e.offsetY
})

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    window.cancelAnimationFrame(raf)
    init()
})

function Circle(x,y,dx,dy,radius) {
    const colors = [
        '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', // Blue 50->900
        '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00' // Amber 50->900
      ];
    const maxRadius = 40
    const minRadius = 0
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = colors[Math.floor(Math.random()*colors.length)]
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color
        ctx.fill();
    }
    this.update = function(){
        this.x += this.dx
        this.y += this.dy
        if(this.x + this.radius >= canvas.width || this.x -this.radius <= 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius >= canvas.height || this.y -this.radius <= 0){
            this.dy = -this.dy
        }
        if(mouse.x -this.x < 50 && mouse.x -this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
                this.radius +=5
            }
        }else if(this.radius > minRadius){
            this.radius -=1
        }
        this.draw()
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    circles.forEach(circle=>{
        circle.update()
    })
    raf = window.requestAnimationFrame(animate);
}

function init(){
    circles = []
    for(let i = 0; i<1000; i++){
        let x = Math.random()*window.innerWidth
        let y = Math.random()*window.innerHeight
        let dx = Math.random()*(Math.round(Math.random()) * 2 - 1)*3
        let dy = Math.random()*(Math.round(Math.random()) * 2 - 1)*3
        circles.push(new Circle(x,y,dx,dy,1))
    }
    animate()
}

init()
//

//background change
$('.projects').click(()=>{
    $('#sloped-back').removeClass('slop-change1')
    $('body').removeClass('body-back1')
    $('#sloped-back').removeClass('slop-change2')
    $('body').removeClass('body-back2')
    $('#sloped-back').removeClass('slop-change3')
    $('body').removeClass('body-back3')
})
// $('.projects').click(()=>{
//     $('#sloped-back').addClass('slop-change1')
//     $('body').addClass('body-back1')
//     $('#sloped-back').removeClass('slop-change2')
//     $('body').removeClass('body-back2')
//     $('#sloped-back').removeClass('slop-change3')
//     $('body').removeClass('body-back3')
// })
$('.experiences').click(()=>{
    $('#sloped-back').removeClass('slop-change1')
    $('body').removeClass('body-back1')
    $('#sloped-back').addClass('slop-change2')
    $('body').addClass('body-back2')
    $('#sloped-back').removeClass('slop-change3')
    $('body').removeClass('body-back3')
})
$('.skills').click(()=>{
    $('#sloped-back').removeClass('slop-change1')
    $('body').removeClass('body-back1')
    $('#sloped-back').removeClass('slop-change2')
    $('body').removeClass('body-back2')
    $('#sloped-back').addClass('slop-change3')
    $('body').addClass('body-back3')
})
//

//materialize setting
$(document).ready(()=>{
    $('.sidenav').sidenav()
    $('.parallax').parallax()
    $('.tabs').tabs();
    $('.modal').modal({
        'onOpenEnd': initCarouselModal
    });
    $('.tabs').tabs({
        'onShow': initCarouselModal
    });
    // $('.carousel').carousel()
    // $('.carousel.carousel-slider').carousel();
    function initCarouselModal() {
        $('.carousel').carousel()
        $('.carousel.carousel-slider').carousel({
                    fullWidth: true,
                    indicators: true,
                })
    }
})
//
 
//lang change
$('.lang').click((e) => {
    $('#title').text(I18N[e.target.dataset.lang].Title)
    $('#introduction').text(I18N[e.target.dataset.lang].Introduction)
    $('.projects-title').text(I18N[e.target.dataset.lang].projectsTitle)
    $('.experiences-title').text(I18N[e.target.dataset.lang].experiencesTitle)
    $('#experience1').text(I18N[e.target.dataset.lang].experience1)
    $('#experience1-title').text(I18N[e.target.dataset.lang].experience1Title)
    $('#experience1-content').text(I18N[e.target.dataset.lang].experience1Content)
    $('#experience2').text(I18N[e.target.dataset.lang].experience2)
    $('#experience2-title').text(I18N[e.target.dataset.lang].experience2Title)
    $('#experience2-content').text(I18N[e.target.dataset.lang].experience2Content)
    $('#experience3').text(I18N[e.target.dataset.lang].experience3)
    $('#experience3-title').text(I18N[e.target.dataset.lang].experience3Title)
    $('#experience3-content').text(I18N[e.target.dataset.lang].experience3Content)
    $('.skill-title').text(I18N[e.target.dataset.lang].skillTitle)
    $('#skill1-title').text(I18N[e.target.dataset.lang].skill1Title)
    $('#skill2-title').text(I18N[e.target.dataset.lang].skill2Title)
    $('#skill3-title').text(I18N[e.target.dataset.lang].skill3Title)
    $('#project1Intro').html(I18N[e.target.dataset.lang].project1Intro)
    $('#project2Intro').html(I18N[e.target.dataset.lang].project2Intro)
    $('#project3Intro').html(I18N[e.target.dataset.lang].project3Intro)
})
//

//shadow effect

$('body').on('mousemove', (e)=>{
    $('#MyPhoto').css("box-shadow", `${-(e.clientX - canvas.width/2)/50}px ${-(e.clientY - canvas.height/2)/50}px 0 rgba(0,0,0, 0.6)`)
    $('#MyPhoto').css("transform", `skewX(${(e.clientX - canvas.width/2)/200}deg) skewY(${(e.clientX- canvas.height/2)/200}deg`)
})

//project hover effect
$('#project1').hover(()=>{
    $('#project1 .project-introduction').toggleClass('transparent transparent-text')
})
$('#project2').hover(()=>{
    $('#project2 .project-introduction').toggleClass('transparent transparent-text')
})
$('#project3').hover(()=>{
    $('#project3 .project-introduction').toggleClass('transparent transparent-text')
})

//open project websit on new tab
$('#movieBlog-link').click(()=>{
    var win = window.open('https://evening-earth-94594.herokuapp.com/', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
})
$('#musicStore-link').click(()=>{
    var win = window.open('https://gitgeorgec.github.io/music-store/', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
})
$('#rentHouse-link').click(()=>{
    var win = window.open('https://gitgeorgec.github.io/rent-house/', '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
})