import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
            <img src={pic02} alt="" />
          </span>
          
          <p>
          <a href="https://www.laineenterprises.ca/">www.laineenterprises.ca</a>
          </p>
          <p>
          This is a website that I did for the owner of a driveway sealing company. The client asked for a site that was stunning to look at with detailed information 
          explaining what services they performed, what the company stood for, and all the ways to get in contact with them. In the end, 
          the client was very happy with the finished product, and so was I. 
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
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
      
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
