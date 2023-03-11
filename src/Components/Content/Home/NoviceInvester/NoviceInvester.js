import React from 'react'
import './NoviceInvester.css'

export default function NoviceInvester() {
  return (
    <div>
      <div className="row Investerrow p-3">
      <h2 className='text-white ml-auto mb-5'>ARE YOU A NOVICE INVESTER ?</h2>
        <div className="col-sm-6">
            <img  src="https://portal.tradebrains.in/static/media/noviceImgDark.8f24d645feef310ffc91.png" alt="" />
        </div>
        <div className="col-sm-6 text-white">
        
            <ul>
                <li className='shadow p-3 mb-5 bg-dark  rounded'>
                    <h6>Register Yourself</h6>
                </li>
                <li className='shadow p-3 mb-5  rounded'>
                    <h6>Search for favourite stocks</h6>
                </li>
                <li className='shadow p-3 mb-5 rounded'>
                    <h6>Learn from our Tutorial</h6>
                </li>
                <li className='shadow p-3 mb-5 rounded'>
                    <h6>Find easy to understand visual charts and datas</h6>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
