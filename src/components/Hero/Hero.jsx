import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll';

import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type: 'string', duration: '3'}
    const mobile = window.innerWidth <= 830 ? true : false;
  return (
      <div className="hero">
          <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />

            {/* The best ad */}
            <div className="best-ad">
                  <motion.div
                      initial={{ left: mobile? '140px': '205px' }}
                      whileInView={{ left: '8px' }}
                      transition={{ ...transition, type: 'tween' }} 
                  >
                      
                </motion.div>
                <span>the best fitness club in town </span>
            </div>

            {/*Hero heading  */}
            <div className="hero-text">
                <div><span className='stroke-text'>Shape </span><span> Your</span></div>
                <div><span>Ideal body</span></div>
            
                <div><span style={{fontSize: 16}}>In here we will help you shape and build your ideal body and live your life to the fullest</span></div>
            </div>

            {/* figures */}
            <div className="figures">
                  <div>
                      <span><NumberCounter end={175} start={100} delay='4' preFix='+' /></span>
                      <span>expert coaches</span>
                  </div>
                  <div>
                      <span><NumberCounter end={960} start={100} delay='4' preFix='+' /></span>
                      <span>members joined</span>
                  </div>
                  <div>
                      <span><NumberCounter end={50} start={1} delay='4' preFix='+' /></span>
                      <span>fitness programs</span>
                  </div>
                
            </div>
            
              {/* hero buttons */}
              <div className="hero-buttons">
                  <button className="btn">
                      <Link
                        to='join'
                        spy={true}
                        smooth={true}
                      >Get Started</Link> 
                  </button>
                  <button className="btn">
                      <Link
                        to='plans'
                        spy={true}
                        smooth={true}
                      >Learn More</Link>
                  </button>
              </div>

          </div>
          
          <div className="right-h">
              <button className='btn'>Join Now</button>

              <motion.div
                  initial={{right: '-1rem'}}
                  whileInView={{ right: '4rem' }}
                  transition={transition}
                  className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
              </motion.div>

              {/* hero images */}
              <div>
                  <img src={hero_image} alt="" className="hero-image"/>
                  <motion.img
                      initial={{ right: '11rem' }}
                      whileInView={{ right: '20rem' }}
                      transition={transition}
                      src={hero_image_back} alt="" className="hero-image-back" />
              </div>

              {/* calories */}
              <motion.div
                  initial={{ right: '37rem' }}
                  whileInView={{ right: '28rem' }}
                  transition={transition}
                  className="calories">
                  <img src={Calories} alt="" />
                  <div>
                      <span>Calories Burned</span>
                      <span>243 kcal</span>
                  </div>

              </motion.div>
        </div>
    </div>
  )
}
export default Hero