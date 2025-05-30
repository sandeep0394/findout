// Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="home-navbar">
        <div className="logo">FindOut</div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="home-main">
        <div className="home-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="home-subtitle"
          >
            <h1 class="landing-heading">
  <span class="big">Empowering</span> your ideas with 
  <span class="bold">intelligent innovation</span> 
  <span class="small"> where imagination meets technology.</span>
</h1>
<h4 className='sub-head'>powered by AI and imagination.<span>Join our platform and unlock your creative potential</span></h4>

          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="home-button"
          >
            Get Started
          </motion.button>
          <div class="circle-wrapper">
            <h1 className='circles-title'>Vision and Mission</h1>
            <h1 className='circles'>Discover futuristic solutions</h1> 
            <h1 className='circles'>Discover futuristic solutions</h1> 
            <h1 className='circles'>Discover futuristic solutions</h1> 
            <h1 className='circles'>Discover futuristic solutions</h1> 
        </div>
        </div>

        <div className="home-image">
          <img src="https://cdn-icons-png.flaticon.com/512/10169/10169718.png" alt="AI Visual" />
        </div>

      </div>
    </div>
  );
}
