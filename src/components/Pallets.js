import React,{useState} from 'react';
function Pallets(props) {
  const [colorCurrent, setColorCurrent] = useState('dark'); // Set the initial color to 'primary'

  const handleColorChange = (color) => {
    setColorCurrent(color);
  };

  return (

    <div class={`d-flex justify-content-evenly bd-highlight bg-${colorCurrent}`} >
    <div class="p-2 btn bd-highlight text-light" onClick={() => handleColorChange('primary')}>Primary</div>
    <div class="p-2 btn bd-highlight text-light " onClick={() => handleColorChange('danger')}>Danger</div>
    <div class="p-2 btn bd-highlight text-light " onClick={() => handleColorChange('warning')}>Warning</div>
    <div class="p-2 btn bd-highlight text-light " onClick={() => handleColorChange('success')}>Success </div>
    <div class="p-2 btn bd-highlight text-light" onClick={() => handleColorChange('info')}>Info</div>
    <div class="p-2 btn bd-highlight text-light"  onClick={() => handleColorChange('secondary')}>Secondary</div>
    
  </div>

  );
}

export default Pallets