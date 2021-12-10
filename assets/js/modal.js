function openModal() {
  const width = window.screen.width;

  if (width > 400) {
    modalContainer.style.display = 'flex';
  }
}

function closeModal() {
  modalContainer.style.display = 'none';
}

function handleNextImageModal() {
  let nextImgSrc = '';

  imgArray.forEach((src,index) => {
    if (src.replace('-thumbnail' ,'') === highlightedImageSrc) {
      nextImgSrc = imgArray[index + 1];
    }
  }) 

  if (!nextImgSrc) {
    nextImgSrc = imgArray[0];
  }

  highlightedImageSrc = nextImgSrc.replace('-thumbnail', '');

  highlightedImage.setAttribute('src', nextImgSrc.replace('-thumbnail', ''));
  highlightedImageModal.setAttribute('src', nextImgSrc.replace('-thumbnail', ''));

  allImagesItemContainer.forEach((item) => {
    if (nextImgSrc === item.children[0].getAttribute('src')) {
      item.classList = 'image-item-highlighted';
    } else {
      item.classList = 'image-item';
    }
  })

  allImagesItemModalContainer.forEach((item) => {
    if (nextImgSrc === item.children[0].getAttribute('src')) {
      item.classList = 'image-item-modal-highlighted item-modal';
    } else {
      item.classList = 'image-item-modal item-modal';
    }
  })
}

function handleBackImageModal() {
  let backImgSrc = '';

  imgArray.forEach((src,index) => {
    if (src.replace('-thumbnail' ,'') === highlightedImageSrc) {
      backImgSrc = imgArray[index - 1];
    }
  }) 

  if (!backImgSrc) {
    backImgSrc = imgArray[imgArray.length -1];
  }

  highlightedImageSrc = backImgSrc.replace('-thumbnail', '');

  highlightedImage.setAttribute('src', backImgSrc.replace('-thumbnail', ''));
  highlightedImageModal.setAttribute('src', backImgSrc.replace('-thumbnail', ''));

  allImagesItemContainer.forEach((item) => {
    if (backImgSrc === item.children[0].getAttribute('src')) {
      item.classList = 'image-item-highlighted';
    } else {
      item.classList = 'image-item';
    }
  })

  allImagesItemModalContainer.forEach((item) => {
    if (backImgSrc === item.children[0].getAttribute('src')) {
      item.classList = 'image-item-modal-highlighted item-modal';
    } else {
      item.classList = 'image-item-modal item-modal';
    }
  })
}
