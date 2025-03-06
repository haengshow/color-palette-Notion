function generateIcon() {
    const hexColor = document.getElementById('hexInput').value.trim();
    if (isValidHex(hexColor)) {
      const svgIcon = generateSvgIcon(hexColor);
      document.getElementById('svgContainer').innerHTML = svgIcon;
    } else {
      alert("Invalid Hex Code! Please enter a valid color code.");
    }
  }
  
  function generateSvgIcon(color) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
        <circle cx="25" cy="25" r="20" fill="${color}" />
      </svg>
    `;
  }
  
  function isValidHex(hex) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(hex);
  }
  