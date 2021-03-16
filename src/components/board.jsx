import React from "react";
import "../css/board.css";
import board1 from "../images/coffee2.png";
import board2 from "../images/search1.png";
import board3 from "../images/heart.png";
import board4 from "../images/chat.png";
import { Link } from "react-router-dom";
class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="image">
          <img src={board1} alt="" />
        </div>
        <h3>자유 게시판</h3>
        <h5>
          로그인 후, 심리테스트 결과 및 인하대학교 후문
          <br />
          맛집에 대하여 자유롭게 이야기를 나눌 수 있는 게시판입니다.
        </h5>
        <div className="text">
          <div className="search">
            <Link to="board/write">
              <input type="button" className="write" value="글 작성" />
            </Link>

            <ul>
              <li>
                <input type="text" />
              </li>
              <li>
                <a href="#">
                  <img src={board2} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="index">
              <ul>
                <li className="test">NO.</li>
                <li>제목</li>
                <li>작성자</li>
                <li>
                  <img src={board3} alt="" />
                </li>
                <li>
                  <img src={board4} alt="" />
                </li>
              </ul>
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pagenum">
            [1] [2] [3] [4] ... <button>{">"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
