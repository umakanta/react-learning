import { useState } from "react";

function Pagination(props) {

    const {pageNum, prevPageFn, nextPageFn} = props

    return <div className="flex justify-center items-center bg-gray-400 mt-8 h-[50px] text-white">
        <div onClick={props.prevPageFn} className="px-8 cursor-pointer"> Prev </div>
        <div> {props.pageNum}</div>
        <div onClick={props.nextPageFn} className="px-8 cursor-pointer"> Next </div>
    </div>
}

export default Pagination;
