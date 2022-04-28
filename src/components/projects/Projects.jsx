import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>  

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/blinkit.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Blinkit(clone)</h3>
          <p>
          It is a Blinkit clone . Blinkit is an Indian instant delivery service. Customers of the company use a mobile application to order groceries and essentials online.
           </p>
          <h4>Tech Stack</h4>
          <p>JavaScript . HTML . CSS </p>
          <div className="card_btn">
            <button><a target="_blank" href="https://blinkit200.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/Tarasishbhattacharya/blinkit200"> CODE</a></button>
          </div>
        </div>
      </div>


      <div className="pcards">
        <div className="pimg">
          <img src={"assets/unsplash.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>unsplash(clone)</h3>
          <p>
          Unsplash is a website dedicated to sharing stock photography under the Unsplash license
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript  </p>
          <div className="card_btn">
            <button><a target="_blank" href="https://nervous-williams-2b9202.netlify.app/products.html">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/Tarasishbhattacharya/Unsplash-clone"> CODE</a></button>
          </div>
        </div>
          </div>
          
      

       <div className="pcards">
        <div className="pimg">
          <img src={"assets/food.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>Food app</h3>
          <p>
          About
It is a Food Recipe app. Those who want to make different items in his/her free time they can get recipe from the app and also search different type of foods.
           </p>
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Javascript . Local Storage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://fancy-sopapillas-b15093.netlify.app/index.html">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/Tarasishbhattacharya/food_app"> CODE</a></button>
          </div>
        </div>
      </div>

      

      {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/lakme.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>LAKME(clone)</h3>
          <p>
          Lakmé was the country's first cosmetic brand to introduce make up to Indian women.
        
            </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS . JavaScript . Localstorage</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://lakme-clone.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/nkil123/lakme_clone"> CODE</a></button>
          </div>
        </div>
      </div> */}


          {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/ZoomCar-homepage.png"} alt="" />
        </div>
        <div className="pinf">
        <h3>ZOOMCAR(clone)</h3>
          <p>
            A clone of Zoomcar is a self-drive car rental service.
            </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div>
          */}

         
    </div>
  );
}
