

$(document).ready(function () {
  $('.click-me').click(function () {
    $(this).css("font-size", "40px");
  });   
  //click event

  $('.dbl-click').dblclick(function () {
    $(this).css("color", "#ff0000")
  });
  //double click event

  $('.mouse-enter').mouseenter(function () {
    $(this).css('background-color', '#ff0000')
  });
  //mouse enter

  $('.mouse-leave').mouseleave(function () {
    $(this).css('background-color', '#ff0000')
  });
  //mouse leave

  $('.hover-event').hover
    (function () {
      $(this).css('background-color', '#ff0000')
    },
      function () {
        $(this).css('background-color', '#7fffd4')
      });
  //hover

  $('input').focus(function () {
    $(this).css('background-color' ,'#f0f8ff')
  });
  //focus

  $('input').blur(function () {
    $(this).css('background-color', '#808080')
  });
  //blur

  $('.on-event').on({
    mouseenter : function () {
      $(this).css('background-color', '#ff0000')
    },
    mouseleave : function () {
      $(this).css('background-color', '#7fffd4')
    },
    click:function () {
      $(this).css("font-size", "40px");
    },
    dblclick : function () {
      $(this).css("color", "yellow")
    }
  });
  //on event

  $('#hide').click(function () {
    $('.form').hide("slow")
  });
  //hide
  
  $('#show').click(function () {
    $('.form').show("slow")
  });
  //show

  $('#toggle').click(function () {
    $('.form').toggle("fast")
  });
  //toggle

  $(".fade-out").click(function () {
    $('.form').fadeOut("slow")
  });
  //fadeOut

  $(".fade-in").click(function () {
    $('.form').fadeIn("slow")
  });
  //fadeIn

  $(".fade-toggle").click(function () {
    $('.form').fadeToggle("fast")
  });
  //fadeToggle

  $(".fade-to").click(function () {
    $('.form').fadeTo("slow",0.3)
  });
  //fadeTo

  $(".slide-up").click(function () {
    $(".panel").slideUp("slow")
  });
  //slideUp

  $(".slide-down").click(function () {
    $(".panel").slideDown("slow")
  });
  //slideDown

  $(".slide-toggle").click(function () {
    $(".panel").slideToggle("fast")
  });
  //slideToggle'

  $(".show-text").click(function () {
    alert($("#test01").text());
  });
  $(".show-html").click(function () {
    alert($("#test01").html());
  });
  $(".show-value").click(function () {
    alert($("#test02").val());
  });
  //get

  $(".set-text").click(function () {
    $("#test01").text("This is a set Text")
  });
  $(".set-html").click(function () {
    $("#test01").html("This is <b>HTML</b> text")
  });
  $(".set-value").click(function () {
    $("#test02").val("mercedes")
  });
  //set

  $(".append-text").click(function () {
    $(".test-text").append(" <b>Appended text</b>")
  });
  $(".append-list").click(function () {
    $(".test-list").append(" <b>Appended list</b>")
  });
  //append

  $(".prepend-text").click(function () {
    $(".test-text").prepend(" <b>Prepended text</b>")
  });
  $(".prepend-list").click(function () {
    $(".test-list").prepend(" <b>Prepended list</b>")
  });
  //prepend

  $(".before-btn").click(function () {
    $(".bf-text").before("<b> This is before</b>")
  });
  //before

  $(".after-btn").click(function () {
    $(".bf-text").after("<b> This is after</b>")
  });
  //after

  $(".remove-btn").click(function () {
    $(".test-div").remove();
  });
  //remove
  $(".empty-btn").click(function () {
    $("button").empty();
  });
  //empty

  $(".add-class").click(function () {
    $(".panel02").addClass("panel03");
  });
  //addClass
  $(".remove-class").click(function () {
    $(".panel02").removeClass();
  });
  //removeClass
  $(".toggle-class").click(function () {
    $(".panel02").toggleClass("panel03");
  });
  //toggleClass


});