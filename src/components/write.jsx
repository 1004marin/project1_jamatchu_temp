import React from "react"
import "../css/write.css"
import write1 from "../images/boardLogo.png"

class Write extends React.Component {
  render() {
    return (
      <div className="write">
        <div className="subtitle">
          <ul>
            <li>
              <img src={write1} alt="" />
            </li>
            <li>
              <h2>게시판</h2>
            </li>
          </ul>
        </div>
        <div className="subline"></div>
        <form className="box">
          <ul>
            <li>제목</li>
            <li>
              <input type="text" className="enter1" name="title" />
            </li>
            <li>
              첨부파일
              <input type="button" className="file" value="파일 선택" />
            </li>
            <li>내용</li>
            <li>
              <input type="text" className="enter2" name="text" />
            </li>
          </ul>
          <div className="button">
            <input type="submit" value="글 작성" />
            <input type="button" value="취소" />
          </div>
        </form>
      </div>
    )
  }
}
export default Write
