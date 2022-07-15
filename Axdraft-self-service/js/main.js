window.addEventListener('load', function () {
  const sliderStyle = [
    { width: '179px', pos: '0px', color: '#249649' },
    { width: '189px', pos: '179px', color: '#009DDC' },
    { width: '148px', pos: '368px', color: '#253958' },
    { width: '236px', pos: '516px', color: '#F3CC00' },
  ];
  const contracts = this.document.querySelector('.contracts');
  const curious = this.document.querySelector('.curious');
  const workflows = this.document.querySelector('.workflows');
  const benefits = this.document.querySelector('.benefits ');
  const fuel = this.document.querySelector('.fuel');
  const automate = this.document.querySelector('.automate ');
  const guide = this.document.querySelector('.guide ');
  const infoBlocks = [[contracts, curious], [workflows], [benefits, fuel], [automate, guide]];

  const legalBtns = this.document.querySelectorAll('.legal-text-part');
  const slider = this.document.querySelector('.legal-line-slider');

  function removeActive() {
    for (const btn of legalBtns) {
      btn.classList.remove('active');
    }
  }
  function setSliderStyle(position) {
    slider.style.width = sliderStyle[position].width;
    slider.style.left = sliderStyle[position].pos;
    slider.style.background = sliderStyle[position].color;
  }
  function showBlock(index) {
    for (const block of infoBlocks) {
      for (const item of block) {
        item.style.display = 'none';
      }
    }
    for (const block of infoBlocks[index]) {
      block.style.display = 'block';
    }
  }

  for (let index = 0; index < 4; index++) {
    const target = legalBtns[index];
    target.addEventListener('click', function () {
      if (!target.classList.contains('active')) {
        removeActive();
        target.classList.add('active');
        setSliderStyle(index);
        showBlock(index);
      }
    });
  }
});
