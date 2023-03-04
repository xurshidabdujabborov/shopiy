import React from "react";
import { Container, Grid } from "@mui/material";
import car1 from "../../assets/card 1.png";
import Checkbox from "@mui/material/Checkbox";
import "./Product.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Product() {
  return (
    <div className="Product">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={5} sm={12} xs={12}>
            <div className="img">
              <img src={car1} alt="" />
            </div>
          </Grid>
          <Grid items md={7} sm={12} xs={12}>
            <div className="box">
              <span className="uno">OUR PRODUCT STORIES</span>
              <h2 className="title">Why product stories? Learn more</h2>
              <div className="flex">
                <div className="card">
                  <h3>SEO optimized, high Google work</h3>
                  <p className="text">It is a long established fact that <br /> a reader will be distracted by the readable content</p>
                </div>
                <div className="card">
                  <h3>SEO optimized, high Google work</h3>
                  <p className="text">It is a long established fact that <br /> a reader will be distracted by the readable content</p>
                </div>
                <div className="card">
                  <h3>SEO optimized, high Google work</h3>
                  <p className="text">It is a long established fact that <br /> a reader will be distracted by the readable content</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Product;
