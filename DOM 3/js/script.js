const rgbBtn = document.querySelector("#rgbBtn");
const rgbInput = document.querySelector("#rgbInput");
const hexBtn = document.querySelector("#hexBtn");
const hexInput = document.querySelector("#hexInput");
const rgbCopy = document.querySelector("#rgbCopy");
const hexCopy = document.querySelector("#hexCopy");

// RGB color
  rgbBtn.addEventListener("click", () => {
    const rgb = rgbColor();
    document.querySelector("#rgb").style.backgroundColor = rgb;
    rgbInput.value = rgb;

    // copy to clipboard
    rgbCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(rgbInput.value);
    });
  });

  const rgbColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };

// HEX color
  hexBtn.addEventListener("click", () => {
    const hex = hexColor();
    document.querySelector("#hex").style.backgroundColor = hex;
    hexInput.value = hex;

    // Copy to clipboard
    hexCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(hexInput.value);
    });
  });

  const hexColor = () => {
    const h = (Math.floor(Math.random() * 255)).toString(16);
    const e = (Math.floor(Math.random() * 255)).toString(16);
    const x = (Math.floor(Math.random() * 255)).toString(16);

    return `#${h}${e}${x}`;
  };
