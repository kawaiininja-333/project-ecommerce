<div className="ProductTabs">
        <div className="linkHome">
          <Link className="productLinksS" to={`/`}>
            <i className="fa-solid fa-arrow-left">
              <span>Back</span>
            </i>
          </Link>
        </div>
        <div className="ProductItem">
      <Navbar />
          <div className="ProductDetailControl">
            <div className="ProduckDetailCard">
              <div className="ProductDetailinfo">
                <div className="Name">
                  <h3>{name}</h3>
                </div>
                <div className="Short">
                  <p>{"short"}</p>
                </div>
              </div>
              <div className="ProductDetailPriceInfo">
                <div className="Discount">
                  <p> {"discount"}</p>
                </div>
                <div className="Price">
                  <p> ${price}</p>
                </div>
                <div className="Price">
                  <p> ${"productChart"}</p>
                </div>
                <div className="OriginalRate">
                  <p>
                    M.R.P.: <s>{"originalPrice"}</s>
                  </p>
                </div>
                <div className="ProductInfoTax">
                  <p>Inclusive of all taxes</p>
                </div>
                <div className="ProductEMICard">
                  <p className="EMI">EMI</p>
                  <span className="EMIInfo">{"EMI"}</span>
                  <a href="#Home">EMI options </a>
                </div>
              </div>
            </div>
            {/* product Purches info */}
          </div>
        </div>
        <div className="ProductDetailsAbout">
          <span>Product details</span>
          <p className="discription">{description}</p>
          <p className="about">{"about"}</p>
        </div>
      </div>
      <div className="ProductRecomenditionContainer">
        <p>Products related </p>
        <div className="Recomendition">
          <ProductRecomendition numaricId={"product"} />
        </div>
      </div>
      <div className="ratingContainer">
        <p>Ratings</p>
        <button className="onHover_R" onClick={"openReview"}>
          Post review
        </button>
        <div className={"rateclassName"}>
          <UserRating />
          <button className="Cancle_review_btn" onClick={"handeChangeS"}>
            Cancle
          </button>
        </div>
        <div className="AllUserreview">
          <AllUserRatings />
        </div>
      </div>