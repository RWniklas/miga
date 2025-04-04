export function Hero() {
  return (
    <div className="row justify-content-between gx-3 px-3 py-4">
      {/* Image 1 */}
      <div className="col d-flex justify-content-center">
        <img src="images/homepage/hero1.png" alt="Image 1" className="img-fluid" />
      </div>

      {/* Image 2 with offset */}
      <div className="col d-flex justify-content-center" style={{ transform: 'translateY(170px)' }}>
        <img src="images/homepage/hero2.png" alt="Image 2" className="img-fluid" />
      </div>

      {/* Image 3 - Value */}
      <div className="col d-flex justify-content-center">
        <div className="card border-0 text-center" style={{ width: '100%' }}>
          <img src="images/homepage/values.png" alt="Value" className="card-img-top img-fluid" />
          <div className="card-body p-2">
            <p className="card-text small">01&nbsp;&nbsp;&nbsp;Value</p>
          </div>
        </div>
      </div>

      {/* Image 4 - Archive */}
      <div className="col d-flex justify-content-center">
        <div className="card border-0 text-center" style={{ width: '100%' }}>
          <img src="images/homepage/archive.png" alt="Archive" className="card-img-top img-fluid" />
          <div className="card-body p-2">
            <p className="card-text small">02&nbsp;&nbsp;&nbsp;Archive</p>
          </div>
        </div>
      </div>

      {/* Image 5 - Studios */}
      <div className="col d-flex justify-content-center">
        <div className="card border-0 text-center" style={{ width: '100%' }}>
          <img src="images/homepage/studio.png" alt="Studios" className="card-img-top img-fluid" />
          <div className="card-body p-2">
            <p className="card-text small">03&nbsp;&nbsp;&nbsp;Studios</p>
          </div>
        </div>
      </div>

      {/* Image 6 with offset */}
      <div className="col d-flex justify-content-center" style={{ transform: 'translateY(-140px)' }}>
        <img src="images/homepage/hero3.png" alt="Image 6" className="img-fluid" />
      </div>

      {/* Image 7 */}
      <div className="col d-flex justify-content-center">
        <img src="images/homepage/hero4.png" alt="Image 7" className="img-fluid" />
      </div>
    </div>
  );
}

export default Hero;