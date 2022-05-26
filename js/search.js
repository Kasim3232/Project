$('.head-one__search-btn').on('click', function (event) {
  event.preventDefault();
  $('.head-one__search-form').toggleClass('search-active')
  $('.head-one__search-form-btn').toggleClass('search-active')
  $('.head-one__search-btn').toggleClass('search-active')
  $(document).mouseup(function (e){
    var div = $('.head-one__search-form');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
          div.removeClass("search-active")
    }
  });
  $(document).mouseup(function (e){
    var div = $('.head-one__search-btn');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
          div.removeClass("search-active")
    }
  });
});

let podcastsBtn = document.querySelector('.podcasts__btn');
let podcasts = document.querySelectorAll('.podcasts__item');

podcastsBtn.addEventListener('click',

function(){

  podcasts.forEach(function(el) {
    el.classList.add('podcasts__item--visible')
  });

  podcastsBtn.closest('.podcasts__box').classList.add('podcasts__box--hidden')

})

$(function() {
  $("#" + $("#select option:selected").val()).show();
  $("#select").change(function(){
      $(".transfers__tab").hide();
      $("#" + $(this).val()).show();
  });
});

$('.accordion').accordion({
	heightStyle: 'content'
});


let tabsOption = document.querySelectorAll('.guests__tabs-nav-btn');
let tabsItem = document.querySelectorAll('.guests__tabs-item');

tabsOption.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsOption.forEach(function(btn){
      btn.classList.remove('guests__tabs-nav-btn--active')});
    e.currentTarget.classList.add('guests__tabs-nav-btn--active');

    tabsItem.forEach(function(element){
      element.classList.remove('guests__tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('guests__tabs-item--active');
    $('.guests__link').on('click', function (event) {
      event.preventDefault();
      $('.guests__tabs-nav-btn').removeClass("guests__tabs-nav-btn--active")
    });
  });
});

let tabs = document.querySelectorAll('.guests__link');
let tabsIt = document.querySelectorAll('.guests__tabs-item');

tabs.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabs.forEach(function(btn){
      btn.classList.remove('guests__link--active')});
    e.currentTarget.classList.add('guests__link--active');

    tabsIt.forEach(function(element){
      element.classList.remove('guests__tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('guests__tabs-item--active');
  });
});

$(function() {
  $("#" + $(".radio:checked").val()).show();
  $(".playlists__genre").change(function(){
      $(".playlists__blocks").hide();
      $("#" + $(this).val()).show();
  });
});

new JustValidate('.o-nas__form', {
  rules: {
    text: {
      required: true,
      minLength: 4,
      maxLength: 1000
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 25
    },
    myField: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    checkbox: {
      required: true
    },
  },

});

document.querySelector(".head-one__btn-open").addEventListener("click", function() {
  document.querySelector(".head-one__nav-burg").classList.add("active");
})
document.querySelector(".head-one__close").addEventListener("click", function() {
  document.querySelector(".head-one__nav-burg").classList.remove("active");
})

document.querySelector(".head-one__btn-open").addEventListener("click", function() {
  document.querySelector(".head-one__search-btn").classList.add("active");
})
document.querySelector(".head-one__close").addEventListener("click", function() {
  document.querySelector(".head-one__search-btn").classList.remove("active");
})

document.querySelector(".head-one__btn-open").addEventListener("click", function() {
  document.querySelector(".head-one__nav-burg-bottom").classList.add("active");
})
document.querySelector(".head-one__close").addEventListener("click", function() {
  document.querySelector(".head-one__nav-burg-bottom").classList.remove("active");
})
document.querySelector(".head-one__btn-open").addEventListener("click", function() {
  document.querySelector(".head-two__accordion").classList.remove("active");
})

var acc = document.getElementsByClassName("accordion");
var i;

let radioSelector = '.playlists__items input[type="radio"]';

$(document).on('change', radioSelector, function() {
  $(radioSelector).closest('.playlists__item').removeClass('btn-radio');
  $(this).closest('.playlists__item').addClass('btn-radio');
});

$(radioSelector).each(function() {
  if ($(this).prop('checked'))
      $(this).closest('.playlists__item').addClass('btn-radio');
});

$('.head-two__accordion').click(function(){
	if ( document.querySelector('.head-three__panel').style.display == "block" ) {
		$(".head-three__panel").slideUp('slow');
	}
	else{
		$(".head-three__panel").slideDown('slow');
	}
});

$('.head-two__accordion').on('click', function (event) {
  event.preventDefault();
  $('.head-two__accordion').toggleClass('active')
  $('.head-two').toggleClass('act')
});

$('.head-one__btn-open').on('click', function (event) {
  event.preventDefault();
  $('.head-three__panel').toggleClass('none')
});
document.querySelector(".head-one__close").addEventListener("click", function() {
  document.querySelector(".head-three__panel").classList.remove("none");
})
