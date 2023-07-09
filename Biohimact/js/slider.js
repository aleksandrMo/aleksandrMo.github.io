$('.distrib__slider').on('breakpoint', function (event, slick, breakpoint) {
  if (breakpoint == null) $('.distrib__slider').slick('slickGoTo', 1);
  else $('.distrib__slider').slick('slickGoTo', 0);
});
$(document).ready(function () {
  $('.distrib__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    variableWidth: true,
    variableHeight: true,
    arrows: false,
    centerMode: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  });

  $('.news__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    waitForAnimate: false,
    variableWidth: true,
    variableHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  document.documentElement.style.setProperty(
    '--document-width',
    document.documentElement.clientWidth + 'px',
  );
  checkDistibSlider(document.documentElement.clientWidth);
  checkNewsSlider(document.documentElement.clientWidth);
});

$(window).resize(() => {
  document.documentElement.style.setProperty(
    '--document-width',
    document.documentElement.clientWidth + 'px',
  );
  checkDistibSlider(document.documentElement.clientWidth);
  checkNewsSlider(document.documentElement.clientWidth);
});

//for scrollBar
function checkDistibSlider(docWidth) {
  const slidedrBlocks = document.querySelectorAll('.distrib__slider__block');
  if (docWidth > 954) {
    setSliderBlockWidth(slidedrBlocks, '');
  }
  if (docWidth <= 954) {
    setSliderBlockWidth(slidedrBlocks, (docWidth - 60) / 2 + 'px');
  }
  if (docWidth <= 768) {
    setSliderBlockWidth(slidedrBlocks, '');
  }
  if (docWidth > 738) {
    setSliderBlockHeight(slidedrBlocks, '');
  }
  if (docWidth <= 738) {
    setSliderBlockWidth(slidedrBlocks, (docWidth - 60) / 2 + 'px');
    setSliderBlockHeight(slidedrBlocks, '136px');
  }
  if (docWidth <= 629) {
    setSliderBlockWidth(slidedrBlocks, docWidth - 40 + 'px');
    setSliderBlockHeight(slidedrBlocks, '112px');
  }
  if (docWidth <= 365) {
    setSliderBlockHeight(slidedrBlocks, '136px');
  }
  if (docWidth <= 329) {
    setSliderBlockHeight(slidedrBlocks, '160px');
  }
}

function checkNewsSlider(docWidth) {
  const slidedrBlocks = document.querySelectorAll('.news__slider__block');
  if (docWidth > 1290) {
    setSliderBlockWidth(slidedrBlocks, '');
  }
  if (docWidth <= 1290) {
    setSliderBlockWidth(slidedrBlocks, (docWidth - 130) / 4 + 'px');
  }
  if (window.innerWidth <= 1280) {
    setSliderBlockWidth(slidedrBlocks, '');
  }
  if (docWidth <= 1170) {
    setSliderBlockWidth(slidedrBlocks, (docWidth - 100) / 4 + 'px');
  }
  if (window.innerWidth <= 1024) {
    setSliderBlockWidth(slidedrBlocks, '');
  }
  if (docWidth <= 954) {
    setSliderBlockWidth(slidedrBlocks, (docWidth - 60) / 2 + 'px');
  }
  if (window.innerWidth <= 768) {
    setSliderBlockWidth(slidedrBlocks, '');
  }
  if (docWidth <= 738) {
    setSliderBlockWidth(slidedrBlocks, (docWidth - 60) / 2 + 'px');
  }
  if (window.innerWidth <= 499) {
    setSliderBlockWidth(slidedrBlocks, docWidth - 40 + 'px');
  }
}

function setSliderBlockWidth(blocks, width) {
  for (const block of blocks) {
    block.style.width = width;
  }
}
function setSliderBlockHeight(blocks, height) {
  for (const block of blocks) {
    block.style.height = height;
  }
}
