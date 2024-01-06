import React from 'react'

const Quote = ({sdata}) => {
    const {quote, author} = sdata.at(0) || {quote:'lol', author:'lol lol'}
    let nick1 = author.split(' ')[0];
    let nick2 = author.split(' ')[1]
  return (
    <div className=" max-w-2xl mx-auto rounded-lg bg-opacity-80 bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        
        <div className="w-full mb-10">
            <div className="text-5xl text-indigo-500 text-left  leading-normal h-10">“</div>
            <p className="text-lg font-medium text-gray-600 text-center px-5">{quote}</p>
            <div className="text-5xl text-indigo-500 text-right leading-normal h-10 -mt-3">”</div>
        </div>
        <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">{author}</p>
            <p className="text-xs text-gray-500 text-center">@{nick1}.{nick2}</p>
        </div>
    </div>

  )
}

export default Quote
