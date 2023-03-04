import React from "react";
import { Container, Grid } from "@mui/material";
import logo from "../../assets/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={3} sm={12} xs={12}>
            <div className="img">
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
              <FacebookIcon/>
              <TwitterIcon/>
              <InstagramIcon/>
              <TelegramIcon/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
