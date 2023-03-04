import React from "react";
import { Container, Grid } from "@mui/material";
import car from "../../assets/card.png";
import "./Storis.css";

function Storis() {
  return (
    <div className="Storis">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={5} sm={12} xs={12}>
            <div className="img">
              <img src={car} alt="" />
            </div>
          </Grid>
          <Grid items md={7} sm={12} xs={12}>
            <div className="text">
              <span className="uno">SERVICES WE PROVIDES</span>
              <h2 className="title">
                Build on both: Google web stories and AMP website format
              </h2>
              <div className="flex">
                <div className="nan">
                  <h3>5660</h3>
                  <p className="text">Product sale per day <br /> working and sales</p>
                </div>
                <div className="nan">
                  <h3>4M+</h3>
                  <p className="text">Product sale per day <br /> working and sales</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Storis;
