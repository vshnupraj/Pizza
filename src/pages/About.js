import React from 'react';
import '../styles/About.css';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}>
        
      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit omnis voluptas ut sapiente voluptatem earum et quae possimus. Cum deserunt, reiciendis facere repudiandae id adipisci, sapiente dicta ratione libero voluptas tenetur. Ipsa iste, aliquid doloribus impedit corrupti beatae magni obcaecati, eveniet blanditiis eum doloremque aperiam ea voluptatibus harum quibusdam dolores. Veniam eos a quisquam doloribus placeat illo mollitia, dolorum, maiores magni neque soluta eveniet dolorem. At veniam voluptatibus, asperiores ipsam placeat assumenda praesentium, obcaecati rem, voluptatum illo quam. Tenetur fuga laboriosam non vitae iure! Eligendi quibusdam id dolorem optio sint earum officiis incidunt totam aspernatur voluptas, nostrum quod minus necessitatibus.

        </p>
      </div>
    </div>
  )
}

export default About
