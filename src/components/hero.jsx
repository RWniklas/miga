import React from "react";

function Hero() {
  const imageBoxStyle = {
    width: '140px',
    height: '140px',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const labelStyle = {
    position: 'absolute',
    bottom: '-24px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '0.8rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };

  return (
    <div className="row justify-content-between gx-3 px-3 py-5">
      {/* Image 1 */}
      <div className="col d-flex justify-content-center">
        <div style={imageBoxStyle}>
          <img src="images/homepage/hero1.png" alt="Image 1" style={imageStyle} />
        </div>
      </div>

      {/* Image 2 with offset */}
      <div className="col d-flex justify-content-center" style={{ transform: 'translateY(170px)' }}>
        <div style={imageBoxStyle}>
          <img src="images/homepage/hero2.png" alt="Image 2" style={imageStyle} />
        </div>
      </div>

      {/* Image 3 - Value */}
      <div className="col d-flex justify-content-center">
        <div style={imageBoxStyle}>
          <img src="images/homepage/values.png" alt="Value" style={imageStyle} />
          <div style={labelStyle}>01&nbsp;&nbsp;Value</div>
        </div>
      </div>

      {/* Image 4 - Archive */}
      <div className="col d-flex justify-content-center">
        <div style={imageBoxStyle}>
          <img src="images/homepage/archive.png" alt="Archive" style={imageStyle} />
          <div style={labelStyle}>02&nbsp;&nbsp;Archive</div>
        </div>
      </div>

      {/* Image 5 - Studios */}
      <div className="col d-flex justify-content-center">
        <div style={imageBoxStyle}>
          <img src="images/homepage/studio.png" alt="Studios" style={imageStyle} />
          <div style={labelStyle}>03&nbsp;&nbsp;Studios</div>
        </div>
      </div>

      {/* Image 6 with offset */}
      <div className="col d-flex justify-content-center" style={{ transform: 'translateY(-140px)' }}>
        <div style={imageBoxStyle}>
          <img src="images/homepage/hero3.png" alt="Image 6" style={imageStyle} />
        </div>
      </div>

      {/* Image 7 */}
      <div className="col d-flex justify-content-center">
        <div style={imageBoxStyle}>
          <img src="images/homepage/hero4.png" alt="Image 7" style={imageStyle} />
        </div>
      </div>
    </div>
  );
}

export default Hero;