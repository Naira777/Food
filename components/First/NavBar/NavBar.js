import React from "react";
import * as Styled from "./styled";
import {  NavLink } from "react-router-dom";
import HeaderFirst from "../Header/HeaderFirst";

const NavBar = () => {
  return (
    <>
      {" "}
      <Styled.Box>
        <Styled.Link>
          <NavLink
            to={"/home"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            HOME
          </NavLink>
        </Styled.Link>
        <Styled.Link>
          <NavLink
            to={"/about"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            ABOUT
          </NavLink>
        </Styled.Link>

        <Styled.Link>
          <NavLink
            to={"/foodmenu"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            FOOD MENU
          </NavLink>
        </Styled.Link>

        <Styled.Link>
          <NavLink
            to={"/blog"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            BLOG
          </NavLink>
        </Styled.Link>

        <Styled.Link>
          <NavLink
            to={"/pages"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            PAGES
          </NavLink>{" "}
        </Styled.Link>

        <Styled.Link>
          <NavLink
            to={"/reservation"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            RESERVATION
          </NavLink>
        </Styled.Link>

        <Styled.Link>
          <NavLink
            to={"/contact"}
            activeStyle={{ color: "#FD2E55" }}
            style={{ color: "white", textDecoration: "none" }}
          >
            CONTACT
          </NavLink>
        </Styled.Link>

        <Styled.Svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#FD2E55"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </Styled.Svg>
        <Styled.Line></Styled.Line>

        <Styled.Cart
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="white"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </Styled.Cart>
        <Styled.Red> </Styled.Red>
      </Styled.Box>
      <HeaderFirst />
    </>
  );
};
export default NavBar;
