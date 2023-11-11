import React from "react";

function Footer({ classname }) {
  return (
    <div className="footer--container">
      <div className="footer--cover">
        <section className="footer--first--about-section">
          <p className="footer--header">About</p>
          <p className="footer--para">Minim consectetur consectetur do laborum do velit excepteur enim cupidatat. Esse fugiat sint proident mollit ut duis anim non tempor. Consequat anim adipisicing Lorem sit ullamco culpa veniam excepteur qui Lorem excepteur aliqua tempor. Elit fugiat est laboris eu eiusmod officia dolor minim officia.</p>
        </section>
        <section className="footer--first--Social-section">
          <p className="footer--header">Reach us out</p>
          <div className="footer--icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </section>
        <section className="footer--first--contact-section">
          <p className="footer--header">Contact</p>
          <div className="footer--contact">
            <p>
              <b>Email: </b> Uriel48@gmail.com
            </p>
            <p>
              <b>Phone: </b> 1-135-896-1833 x419
            </p>
            <p>
              <b>Address: </b> North New Tannerchester, Schaden Isle, 4###3
            </p>
          </div>
        </section>
      </div>
      <div className="footer--last--section--news">
        <section className="footer--first--newspaper-section">
          <p className="footer--header">Support</p>
          <form>
            <label>Name</label>
            <input />
            <textarea />
            <button>Submit</button>
          </form>
        </section>
        <section className="footer--first--newspaper-section">
          <p className="footer--header">Subscribe</p>
          <form>
            <label>Email</label>
            <input />
            <button>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Footer;
