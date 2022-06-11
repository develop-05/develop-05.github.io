import {useState} from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../../components.css';
import './HotelCart.css';
import './Slider.css';

export const HotelCart = () => {

    const [visible, setVisible] = useState(false);

    const settings = {
        className: "slider__active",
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
      <>
        <div className="hotel__cart">
            <div className="cart__content">
                <span className="num__cart">2</span>

                <div className="cart__info">
                    <div className="cart__hotel_info">

                    <img src="/images/name_hotel.png" alt="hotel logo" />
                
                     <div>
                      <div className="price__hotel"><span className="color__blue">€250.80</span></div>
                      <div className="total__price"><img src="/images/important.svg" alt="important" /><span>Total Price</span></div>
                     </div>
                    </div>

                    <div className="hotel__icons">
                      <div className="info__price_day"><span>3</span><img className="moon__icon" src="/images/half_moon.svg" alt="moon" /></div>
                      <div className="info__price_day"><span>6</span><img src="/images/person.svg" alt="person" /></div>
                    </div>

                    <div className="about__hotel_prestige">
                        <div className="hotel__prestige_title"><span>The Westin Resort, Costa  Navarino</span></div>
                        <div className="hotel__stars">
                            <img className="blue__star" src="/images/blue_start.svg" alt="star" />
                            <img className="blue__star" src="/images/blue_start.svg" alt="star" />
                            <img className="blue__star" src="/images/blue_start.svg" alt="star" />
                        </div>
                    </div>
                </div>

                <div className="hotel__shows">
                    <div className="show__on_map"><span className="blue__text">Show on Map</span></div>
                    <div><span className="grey__text">Show Photos</span></div>
                </div>

                <div className="checks">
                  <p className="check__in">Check in</p>

                  <div className="detail__time max-w"> <span className="span__tetx_z">Thursday,29 June</span> </div>
                  <div className="dotted__line max-w300"></div>
            
                  <p className="check__in check__out">Check out</p>
                  <div className="detail__time max-w mt-t"> <span className="span__tetx_z">Thursday,29 June</span> </div>
                  <div className="dotted__line  max-w300"></div>
                </div>

            <div className="service">
              <div className="service__item">
                <div className="grey__text_hotel serv__item">Room Type</div>
                <div className="item__type"><span>Multiple</span></div>
              </div>

              <div className="service__item">
                <div className="grey__text_hotel serv__item">Board Type</div>
                <div className="item__type"><span>Bed & Breakfast</span></div>
              </div>

              <div className="service__item">
                <div className="grey__text_hotel serv__item">Canc. Policy</div>
                <div className="item__type"><span>City Center</span></div>
              </div>
            </div>

          <div className="mt-50 mb-60">
            <div className="total__info_hotel"><img className="mr-5" src="/images/important.svg" alt="important" />Rate: <span> NON,SEMI,FLX</span></div>
            <div className="total__info_hotel">Number of People:<span> 6</span></div>
            <div className="total__info_hotel">Type of Rooms:<span> Single</span></div>
          </div>

          <div className="flight__btn_block">
            <button  className="flight__btn"
            onClick={() => setVisible(!visible)}
            >Select flight</button>
            <img className={visible ? "btn__arrow__rotated" : "btn__arrow"} src="/images/black__down_arrow.svg" alt="arrow" />
          </div>

            </div>
        </div>

        <div className="slider">
        <h2 classname="slider__title">Single Room Options</h2>
        <Slider {...settings}>

        <div className="slider__item">
          <div className="cart__slider_item">
          <div className="ticket__class_choose">
              <div className="ticket__class"><span>Standard Single</span></div>

                <label htmlFor="ticket01" className="radio__item">
                  <label htmlFor="ticket01" className="radio__button radio__button_slide"></label>
                  <input className="radio__box" type="radio" id="ticket01" value="ticket01" name="radio" />
                    <span className="radio__style"></span>
                </label>

              </div>
          <div className="block__price">
          <div className="price__one_person">
                
            <div className="discount grey__text"><span>-30€</span></div>
              
            <span className="color__blue price__ticket">€1250.80</span>
            <div className="discount grey__text"><span>per night</span></div>
                
              </div>
          </div>

  <div className="ticket__list_service">

        <div className="ticket__item_service mt-5">
          <img src="/images/ban.svg" alt="ban" />
          <div className="item__text"><span>Breakfast not included</span></div>
        </div>
        <div className="ticket__item_service mt-5">
          <img src="/images/grey__check.svg" alt="check" />
          <div className="item__text"><span>Single Bed</span></div>
        </div>
        <div className="ticket__item_service mt-5">
          <img src="/images/grey__check.svg" alt="check" />
          <div className="item__text"><span>35m2</span></div>
        </div>

      </div>

        <div className="none__service">
          <img src="/images/ban.svg" alt="" />
          <h3 className="service__title">NON REFUNDABLE</h3>  
        </div>    

        </div>
        </div>
    
        <div className="slider__item">
          <div className="cart__slider_item">
          <div className="ticket__class_choose">
              <div className="ticket__class"><span>Superior Single</span></div>

                <label htmlFor="ticket02" className="radio__item">
                  <label htmlFor="ticket02" className="radio__button radio__button_slide"></label>
                  <input className="radio__box" type="radio" id="ticket02" value="ticket02" name="radio" />
                    <span className="radio__style"></span>
                </label>

              </div>
          <div className="block__price">
          <div className="price__one_person">
                
            <div className="discount grey__text"><span>-30€</span></div>
              
            <span className="color__blue price__ticket">€1550.80</span>
            <div className="discount grey__text"><span>per night</span></div>
                
              </div>
          </div>

  <div className="ticket__list_service">

        <div className="ticket__item_service mt-5">
          <img src="/images/ban.svg" alt="ban" />
          <div className="item__text"><span>Breakfast not included</span></div>
        </div>
        <div className="ticket__item_service mt-5">
          <img src="/images/grey__check.svg" alt="check" />
          <div className="item__text"><span>Single Bed</span></div>
        </div>
        <div className="ticket__item_service mt-5">
          <img src="/images/grey__check.svg" alt="check" />
          <div className="item__text"><span>35m2</span></div>
        </div>

      </div>

        <div className="none__service">
          <h3 className="service__title">SEMI-FLEXIBLE</h3>
          <img src="/images/black__down_arrow.svg" alt="" />
        </div>    
        </div>
        </div>

        <div className="slider__item">
          <div className="cart__slider_item">
          <div className="ticket__class_choose">
              <div className="ticket__class"><span>Standard Single</span></div>

                <label htmlFor="ticket03" className="radio__item">
                  <label htmlFor="ticket03" className="radio__button radio__button_slide"></label>
                  <input className="radio__box" type="radio" id="ticket03" value="ticket03" name="radio" />
                    <span className="radio__style"></span>
                </label>

              </div>
          <div className="block__price">
          <div className="price__one_person">
                
            <div className="discount grey__text"><span>-30€</span></div>
              
            <span className="color__blue price__ticket">€1550.80</span>
            <div className="discount grey__text"><span>per night</span></div>
                
              </div>
          </div>

  <div className="ticket__list_service">

        <div className="ticket__item_service mt-5">
          <img src="/images/ban.svg" alt="ban" />
          <div className="item__text"><span>Breakfast not included</span></div>
        </div>
        <div className="ticket__item_service mt-5">
          <img src="/images/grey__check.svg" alt="check" />
          <div className="item__text"><span>Single Bed</span></div>
        </div>
        <div className="ticket__item_service mt-5">
          <img src="/images/grey__check.svg" alt="check" />
          <div className="item__text"><span>35m2</span></div>
        </div>

      </div>

        <div className="none__service">
          <h3 className="service__title">SEMI-FLEXIBLE</h3>
          <img src="/images/black__down_arrow.svg" alt="" /> 
        </div>    

        </div>
        </div>

        </Slider>
      </div>

      </>
    )
}
