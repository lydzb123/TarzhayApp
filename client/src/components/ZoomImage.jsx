import React from 'react';
import styled from 'styled-components';


const ZoomImage = () => {
  const zoomImage = (normalId, zoomedId) => {
    const normalImg = document.getElementById(normalId);
    const zoomedImg = document.getElementById(zoomedId);
    let lens = document.createElement('DIV');
    lens.setAttribute('class', 'zoomLens');
    normalImg.parentElement.insertBefore(lens, normalImg);

    const cx = zoomedImg.offsetWidth / lens.offsetWidth;
    const cy = zoomedImg.offsetHeight / lens.offsetHeight;

    zoomedImage.style.backgroundImage = `url('${normalImg.src}')`;
    zoomedImage.style.backgroundSize = `${normalImg.width * cx}px ${normalImg.height * cy}px`;

    lens.addEventListener("mousemove", moveLens);
    normalImg.addEventListener("mousemove", moveLens);

    const moveLens = (e) => {
      e.preventDefault();

      let { x, y } = getMousePosition(e);
      x = x - (lens.offsetWidth / 2);
      y = y - (lens.offsetHeight / 2);

      if (x > normalImg.width - lens.offsetWidth) {
        x = normalImg.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > normalImg.height - lens.offsetHeight) {
        y = normalImg.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }

      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    const getMousePosition = (e) => {
      let x = 0;
      let y = 0;
      const area = normalImg.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;

      return { x ,y };
    }
  }

  return (
    <div className="productImagesViewer--mainImage">
      <div className="zoomLens"></div>
      {images && <img id="normalImg" src={mainImage} className="mainImage" onMouseMove={zoomImage} />}
      {images && <img id="zoomedImg" src={mainImage} className="zoomImage" />}
    </div>
  )
};