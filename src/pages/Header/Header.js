import React from "react";
import { Container, Grid } from "@mui/material";
import header from "../../assets/header.png"
import "./Header.css";

function Header() {
  return (
    <header>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={5} sm={12} xs={12}>
            <div className="card">
              <span className="uno">100% SATISFIED GUARANTEE</span>
              <h2 className="title">Power up your shopify productsz</h2>
              <p className="text">More than 90,000+ companies trust our business. Get help from a dedicated shopify developer today. </p>
              <form action="#">
                <input type="text" placeholder="Your email address" />
                <button>Sign up</button>
              </form>
            </div>
          </Grid>
          <Grid items md={7} sm={12} xs={12}>
            <div className="img">
            <img src={header} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
