import React from "react";
import styled from "styled-components";

import perfil from "../assets/perfil.jpeg";
import post from "../assets/post.jpg";

import { TbDots } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";

const PostStyled = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  border-radius: 20px;
  background-color: #ffffff;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .perfil-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid #b05ac0;
  }
  .info-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .title {
    display: flex;
    flex-direction: column;
  }

  .Spa {
    color: blue;
  }

  .name {
    display: flex;
    gap: 0.5rem;
  }

  .name h3 {
    font-size: 0.9rem;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Spa {
    font-size: 0.8rem;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  span {
    font-size: 0.6rem;
    font-weight: bold;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .sp {
    color: #999;
  }

  .post-text {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    line-height: 22px;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .image-post {
    width: 96%;
    border-radius: 20px;
  }

  .image-post img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .Colocar {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid grey;
  }

  .Dis {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
  }

  .Dis p {
    font-size: 1rem;
    color: #999;
    font-weight: bold;

    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-family: "Rubik", sans-serif;
  }

  .Dis p:hover {
    color: #cc3153;
  }

  .Das {
    font-size: 1.5rem;
    margin-right: 2px;
    color: #999;
  }

  @media screen and (max-width: 900px) {
    .Dis {
      padding-top: 0.5rem;
      display: block;
      text-align: center;
    }
  }
`;

const Post = () => {
  return (
    <PostStyled>
      <div className="info">
        <div className="info-title">
          <img src={perfil} alt="" className="perfil-img" />
          <div className="title">
            <div className="name">
              <h3>john dou</h3> • <span className="Spa">Follow</span>
            </div>
            <span className="sp">25 minutes ago</span>
          </div>
        </div>
        <TbDots size="2rem" />
      </div>
      <p className="post-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, voluptas
        possimus! Molestias hic suscipit, mollitia obcaecati veniam expedita
        dolor quam illum distinctio aliquam voluptas corporis maxime porro ab
        quia reprehenderit.
      </p>
      <div className="image-post">
        <img src={post} alt="" />
      </div>

      <div className="Colocar">
        <div className="One Dis">
          <BsHeart className="Das" />
          <p>1.5k Love</p>
        </div>
        <div className="Two Dis">
          <FaRegComment className="Das" />
          <p>345 Comment</p>
        </div>
        <div className="Thre Dis">
          <RiShareForwardLine className="Das" />
          <p>125x Share</p>
        </div>
        <div className="For Dis">
          <AiOutlineEye className="Das" />
          <p>17.5k Viwes</p>
        </div>
      </div>
    </PostStyled>
  );
};

export default Post;
