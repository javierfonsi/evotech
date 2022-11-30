import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Carrusel = () => {
  return (
    <Carousel autoPlay infiniteLoop={true} showStatus={false} showThumbs={false} >
    <div>
      <img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_1x850_mlh3ck.jpg" />
      {/*<img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669668652/evotech/sz-m/rbh-m_1_qqywcf.jpg" />*/}
      {/*<img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669669569/evotech/sz-xs/rbh-xs_2_zzhkz0.jpg" />*/}
      {/*<p className="legend">Legend 1</p>*/}
    </div>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_2x850_nwxrmp.jpg" />
      {/*<img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669668652/evotech/sz-m/rbh-m_2_i6rwnv.jpg" />*/}
      {/*<img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669669568/evotech/sz-xs/rbh-xs_1_et1d8h.jpg" />*/}
      {/*<p className="legend">Legend 2</p>*/}
    </div>
    <div>
      <img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/scanner_h1x850_oa9nzc.jpg" />
      {/*<img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669668652/evotech/sz-m/scanner-m_h1_de71m5.jpg" />*/}
      {/*<img alt="" src="https://res.cloudinary.com/dzkp92nfz/image/upload/v1669669568/evotech/sz-xs/scanner-xs_h1_ylady3.jpg" />*/}
      {/*<p className="legend">Legend 3</p>*/}
    </div>
  </Carousel>
  )
}

export default Carrusel
