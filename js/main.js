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

// ANIMATIONS
bodymovin.loadAnimation({
  wrapper: document.getElementById('carpeta'),
  animType: 'svg',
  loop: true,
  autoplay: true,
  path:
    'https://gist.githubusercontent.com/sebasbarraud/b9229cf3b64d7b46d782f3742298b440/raw/544015d2b0e9dbef7eea10087f5f632f6303482c/carpeta.json',
})

bodymovin.loadAnimation({
  wrapper: document.getElementById('fondo_carpeta'),
  animType: 'svg',
  loop: true,
  autoplay: true,
  path:
    'https://gist.githubusercontent.com/sebasbarraud/a47c8a077ed9e9ae259ea8a208bbc5a6/raw/117ad4a80a5d938c9402f7a2651b65bb4c69fcbe/fondo_carpeta.json',
})

// nuevas

bodymovin.loadAnimation({
  wrapper: document.getElementById('segunda_animacion'),
  animType: 'svg',
  loop: true,
  autoplay: true,
  path:
    'https://gist.githubusercontent.com/sebasbarraud/9749d2667a602cd1c249578c9868f371/raw/9651c13ed9e96bde82e08da689a712c7dc2824b3/segunda_animacion.json',
})

bodymovin.loadAnimation({
  wrapper: document.getElementById('lineas'),
  animType: 'svg',
  loop: true,
  autoplay: true,
  path:
    'https://gist.githubusercontent.com/sebasbarraud/fcd68307958ff15acef9d2b9ab2ce15e/raw/e2d35e6c380ed89c2d26a81874da0e8aedba2a26/lineas.json',
})

bodymovin.loadAnimation({
  wrapper: document.getElementById('segunda_animacion2'),
  animType: 'svg',
  loop: true,
  autoplay: true,
  path:
    'https://gist.githubusercontent.com/sebasbarraud/9749d2667a602cd1c249578c9868f371/raw/9651c13ed9e96bde82e08da689a712c7dc2824b3/segunda_animacion.json',
})

bodymovin.loadAnimation({
  wrapper: document.getElementById('lineas2'),
  animType: 'svg',
  loop: true,
  autoplay: true,
  path:
    'https://gist.githubusercontent.com/sebasbarraud/fcd68307958ff15acef9d2b9ab2ce15e/raw/e2d35e6c380ed89c2d26a81874da0e8aedba2a26/lineas.json',
})
