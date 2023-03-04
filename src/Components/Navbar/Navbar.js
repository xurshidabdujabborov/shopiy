import React from "react";
import { Container, Grid } from "@mui/material";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={3} sm={12} xs={12}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Grid>
          <Grid items md={5} sm={12} xs={12}>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={4} sm={12} xs={12}>
            <div className="right">
              <button>Sign in</button>
              <a href="#">Try Free</a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Navbar;
