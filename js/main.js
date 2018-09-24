$(document).ready(function() {
  let w = window.innerWidth
  let duration = 0
  console.log(w)
  if (w < 990) {
    duration = 1100
  } else {
    duration = '100%'
  }
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller()

  // loop through each .listen element
  $('.listen').each(function() {
    // buld a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      //duration: '90%',
      //   reverse: false,
      triggerHook: 0.9,
    })
      .setClassToggle(this, 'fade-in') // add class 'fade-in' to elements with class 'listen'
      // .addIndicators({
      //   name: 'fade in',
      // })
      .addTo(controller)
  })

  $('.main-container').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec0',
      duration: duration,
    })
      .setClassToggle('#button-cero', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'triggerElements',
      // })
      .addTo(controller)
  })

  $('#sec1').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec1',
      duration: duration,
    })
      .setClassToggle('#button-one', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'sec1',
      // })
      .addTo(controller)
  })

  $('#sec2').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec2',
      duration: duration,
    })
      .setClassToggle('#button-two', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'sec2',
      // })
      .addTo(controller)
  })

  $('#sec3').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec3',
      duration: duration,
    })
      .setClassToggle('#button-three', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'sec3',
      // })
      .addTo(controller)
  })

  $('#sec4').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec4',
      duration: duration,
    })
      .setClassToggle('#button-four', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'sec4',
      // })
      .addTo(controller)
  })

  $('#sec5').each(function() {
    new ScrollMagic.Scene({
      triggerElement: '#sec5',
      duration: '100%',
    })
      .setClassToggle('#button-five', 'active') // add class 'active' to button-one
      // .addIndicators({
      //   name: 'sec5',
      // })
      .addTo(controller)
  })
})
// document ready ends
