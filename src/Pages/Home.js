import "./Home.css";
import image from "../Images/Login/img1.png"


const Home = () => {
  return (
 
      <div class="hero">
        <div class="contenner">
          <img class="hero-image" src={image} alt="image" />
          <div class="hero-bar">
            <div class="hero-caption">
              <h1 class="">EMR</h1>
            </div>
            <div class="hero-hading">Chào Mừng Đến Với EMR</div>
            <a href="/csstable/indextable.html" class="hero-link">
              Code $ Code
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
