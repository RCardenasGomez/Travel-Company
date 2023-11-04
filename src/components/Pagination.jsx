import React from 'react'

export const Pagination = ({total, postsPage, setPage}) => {
    let page= []
    for (let i =1 ; i<= Math.ceil(total/postsPage); i++){
        page.push(i)
    }
  return (
    <div>
      {page.map((page, index) => {
        return <button key={index} onClick={() => setPage(page)}>{page}</button>
      })}
    </div>
  )
}
export default Pagination