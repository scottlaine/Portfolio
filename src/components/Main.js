import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Hi, my name is Scott Laine. I am a passionate front end developer who just graduated with a Bachelor of Technology looking for a career in developing or designing applications and websites.
          <br></br>
          <br></br>
          In my free time, I like to stay active and always on the move. I try to go to the gym almost every day. I like to bike almost everywhere I go and I also swim whenever I get some free time.
          <br></br>
          <br></br>
          For vacations, I enjoy the outdoors. Camping and cottages are some of my favorite destinations. Campfires, canoeing, hiking, fishing, and especially swimming are a few examples of what I like to do while I'm out there. 
          <br></br>
          <br></br>
          When at home, I like to play videogames. Most of the time I prefer to play online multiplayer games but I like to play some single-player games too. When I am almost finished playing a game I like to install mods onto it to try and make the game better and get a bit more enjoyment out of the game.  
          <br></br>
          <br></br>
           
          </p>
         
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work </h2>
          <span className="image main">
          <h3>Laine Enterprises</h3>
          <a href="https://www.laineenterprises.ca/" target="_blank"><img src={pic02} alt="" /></a>
          </span>
          
          <p>
          <a href="https://www.laineenterprises.ca/" target="_blank" >www.laineenterprises.ca</a>
          </p>
          <p>
          This is a website that I did for the owner of a driveway sealing company. For this project I decided to use Gatsby 
          (a React-based open source framework) because of it's performance, scalability and security built-in.
          The client asked for a site that was stunning to look at with detailed information 
          explaining what services they performed, what the company stood for, and all the ways to get in contact with them. In the end, 
          the client was very happy with the finished product, and so was I. 
          </p>
          

          <span className="image main">
          <h3>Seneca</h3>
          <a href="https://www.senecacollege.ca/programs/byareaofstudy.html" target="_blank"><img src={pic04} alt="" /></a>
          </span>
          
          <p>
          <a href="https://www.senecacollege.ca/programs/byareaofstudy.html" target="_blank" >www.senecacollege.ca/programs</a>
          </p>
          <p>
          While working at Seneca I was given the opportunity to work on many of their webpages. Using AEM (Adobe Experience Manager) 
          I was to create a section and individual pages for their business, health and wellness, hospitality and tourism, and summer institute programs 
          with content I helped to create. I was also tasked with managing a large variety of content utilizing thier Content Management System.
          </p>




          <span className="image main">
          <h3>Toronto District School Board </h3>
          <a href="https://www.tdsb.on.ca/" target="_blank"><img src={pic05} alt="" /></a>
          </span>
          
          <p>
          <a href="https://www.tdsb.on.ca/" target="_blank" >www.tdsb.on.ca</a>
          </p>
          <p>
          At TDSB it was my job to handle all requests for new pages to be added to the website and updating the homepage. 
          I would work closely with TDSB representatives responsible for each section of the website 
          to make sure that every detail on all the pages was to their liking. 
          </p>


          <span className="image main">
          <h3>Ace Web Design</h3>
          <a href="https://adarmygroup.com/web-design/" target="_blank"><img src={pic07} alt="" /></a>
          </span>
          
          <p>
          <a href="https://adarmygroup.com/web-design/" target="_blank" >adarmygroup.com/web-design</a>
          </p>
          <p>
          At Ad Army Group's Ace Web Design we created custom websites for clients using our own studios for content creation. 
          We would sit down with the client and discuss what it is they wanted to get out of the website and what 
          tools we had to bring their vision to life. Using our photo studios, content writers, PhotoShop, and WordPress we 
          would do everything we could to exceed the client's expectations.
          </p>

          <span className="image main">
          <h3>Toronto Biker </h3>
          <img src={pic06} alt="" />
          </span>
          
          <p>
          
          </p>
          <p>
          What I aimed to create with Toronto Biker is Toronto’s only app aimed to help bikers get around the city better, 
          find spots to park their bikes, find bike trails, and locate them to the nearest bike shop If the need should arise.
          As a biker myself, I wanted to create an app to help me while I was out biking and I chose android studio to help me bring my idea to life. 
          </p>



          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          I am a creative software developer seeking full or part-time employment to enhance my advanced computer knowledge, 
          debugging capabilities, innovative problem-solving skills, and dedication to quality.
          <br></br>
          <br></br>
I recently graduated from Seneca with an Honours Bachelor of Technology – Software Development. I also graduated from the Digital Media Arts Diploma program. 
<br></br>
          <br></br>
I have previous work experience working at Toronto District School Board's Web Services, Seneca's Web Development Team, Ace Web Design, and through personal and client projects. For these I have used Adobe Experience Manager, Gatsby, WordPress, DNN and Dreamweaver 
<br></br>
          <br></br>
In my schooling and through my personal projects I have used many programming languages and tools to assist me. I currently like to use JavaScript but I am familiar 
with C, C++, C#, Java, HTML, XHTML, ASP, CSS, PHP, Dreamweaver, Photoshop, Adobe Creative Suite, SQL, Oracle, Unity, Unreal Engine, Flash Software Tools, and many more. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <h3>Email</h3>
           <a href="mailto:scottmlaine@gmail.com">ScottMLaine@gmail.com</a> <br></br> <br></br>
          <h3>Phone</h3>
          <a href="tel:6476257725">Call me at 647-625-7725</a> <br></br><br></br>
          <h3>Location</h3>
          <p>Greater Toronto Area<br></br></p>
          <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/scott-laine/" target="_blank" >Scott Laine's LinkedIn</a>
        
        


          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
