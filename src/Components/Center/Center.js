import React from "react";
import { Container, Grid } from "@mui/material";
import flex from "../../assets/flex.png"
import flex1 from "../../assets/flex 1.png"
import "./Center.css";

function Center() {
  return (
    <div className="Center">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={6} sm={12} xs={12}>
            <div className="text">
              <span className="uno">WHAT WE DO</span>
              <h2 className="title">Our creative process for your business</h2>
              <p className="text">
                As our motto, we always provide the best service <br /> especially for
                you and your company by growing your <br /> company to be better.
              </p>
            </div>
          </Grid>
          <Grid items md={6} sm={12} xs={12}>
            <div className="flex">
                <div className="box">
                    <img src={flex} alt="" />
                    <h4>Grow your traffic</h4>
                    <p className="text">We always help your company to grow with us.</p>
                </div>
                <div className="box">
                    <img src={flex1} alt="" />
                    <h4>Grow your traffic</h4>
                    <p className="text">We always help your company to grow with us.</p>
                </div>
                <div className="box">
                    <img src={flex} alt="" />
                    <h4>Grow your traffic</h4>
                    <p className="text">We always help your company to grow with us.</p>
                </div>
                <div className="box">
                    <img src={flex1} alt="" />
                    <h4>Grow your traffic</h4>
                    <p className="text">We always help your company to grow with us.</p>
                </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Center;
