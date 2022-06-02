import userEvent from "@testing-library/user-event"
import React, { useState, useMemo } from "react"
import "../../style/Reviews.css"
export default function Reviews({ comments }) {
  const [curPage, setCurPage] = useState(1)
  const [curItems, setCurItems] = useState([
    comments[curPage - 1],
    comments[curPage],
    comments[curPage + 1],
  ])
  let memoizedCurItems = useMemo(() => {
    setCurItems([
      comments[curPage - 1],
      comments[curPage],
      comments[curPage + 1],
    ])
  }, [curPage])
  function pagePrevHandle() {
    if (curPage > 1) {
      setCurPage(curPage - 1)
    }
  }
  function pageNextHandle() {
    if (curPage + 1 < comments.length - 1) {
      setCurPage(curPage + 1)
    }
  }
  return (
    <div id="reviewsBlockWrapper">
      <h1 id="reviewsHeader">Отзывы о нашей работе</h1>
      <div id="reviewsWrapper">
        <img
          src="/assets/chevronLeft.png"
          alt="swipe left"
          id="pagePrev"
          onClick={pagePrevHandle}
        />
        {curItems.map((item) => {
          return (
            <div className="commentBlock" key={item.id}>
              <img
                src={`/assets/${item.avatar}`}
                alt="avatar"
                className="avatar"
              />
              <h1 className="name">{item.name}</h1>
              <p className="comment">{item.body}</p>
            </div>
          )
        })}
        <img
          src="/assets/chevronRight.png"
          alt="swipe right"
          id="pageNext"
          onClick={pageNextHandle}
        />
      </div>
      <span id="reviewsPagination">
        Отзывы:{" "}
        <input
          type={"number"}
          min="1"
          max={comments.length - 2}
          defaultValue={1}
          id="reviewsPaginationInput"
          onChange={(e) => {
            if (e.target.value >= 1 && e.target.value <= comments.length) {
              setCurPage(parseInt(e.target.value))
            }
            if (e.target.value == "") {
              e.target.value = ""
            } else {
              if (e.target.value < 1) {
                setCurPage(1)
                e.target.value = 1
              }
              if (e.target.value > 13) {
                setCurPage(13)
                e.target.value = 13
              }
            }
          }}
        />
        - {curPage + 2} из {comments.length}
      </span>
    </div>
  )
}
