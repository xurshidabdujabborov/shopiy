import React from "react";
import { Container, Grid } from "@mui/material";
import car3 from "../../assets/card 3.png";
import "./Bottom.css";

function Bottom() {
  return (
    <div className="Bottom">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={6} sm={12} xs={12}>
            <div className="text">
              <span className="uno">CREATIVE PROCESS</span>
              <h2 className="title">Know your ads inside & out-perform</h2>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </Grid>
          <Grid items md={6} sm={1} xs={1}>
            <div className="img">
              <img src={car3} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Bottom;
