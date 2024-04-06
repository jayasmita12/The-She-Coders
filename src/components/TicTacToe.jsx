import React, { useState } from 'react'
import { BsChatDotsFill } from "react-icons/bs";
import ChatWindow from './ChatWindow';
import  './SingleBox.css';
import ScoreCard from './ScoreCard';

const TicTacToe = () => {
  let [chatAppDisplay , setChatAppDisplay] =useState(false)
  let [boardNumber , setBoardNumber] = useState(Array(9).fill(null))
  let [xPlaying , setXplaying] = useState(true)
  let [scores , setScores] = useState({xScore : 0 , oScore:0})
  const [gameOver , setGameOver] = useState()
  let [gameWinner , setWinner] = useState(null)

  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 


  const showChatApp = () =>{
    chatAppDisplay = true
    setChatAppDisplay(chatAppDisplay)
  }
  
  const handleClick = (index) =>{
    const upadatedBoard = boardNumber.map((value , idx)=>{
      if(idx === index){
        return xPlaying ? "x" :"o"
      }
      else{
        return value;
      }
    })
    let winner = checkingWinner(upadatedBoard)

    if(winner){
      
      if(winner === "o"){
        let {oScore} = scores
        oScore += 1
        setScores({...scores , oScore})
      }
      else{
        let {xScore} = scores
        xScore += 1
        setScores({...scores , xScore})
      }
    }

    console.log(scores)
    setWinner(winner)
    setBoardNumber(upadatedBoard)
    setXplaying(!xPlaying)
  }

  const checkingWinner = (boardNumber) =>{
    for (let i = 0; i < winningCondition.length; i++) {
      const [a, b, c] = winningCondition[i];
      if (boardNumber[a] && boardNumber[a] === boardNumber[b] && boardNumber[a] === boardNumber[c]) {
        console.log(boardNumber[a])
        return boardNumber[a];
      }
    }
    return null;
  }
  
  const resetGame = () =>{
    setBoardNumber(Array(9).fill(null))
    setXplaying(true)
    setWinner(null)
  }

  const style = boardNumber ==="x" ? "box x" : "box o"

  return (
    <div className='relative h-screen  grid  sm:space-y-5 sm:place-content-center items-center m-4   '>
      <h1 className='text-center  font-bold text-3xl'>Tic Tac Toe Game</h1>
      <ScoreCard xPlaying={xPlaying}/>
    <div className="grid grid-cols-3    sm:w-[28rem]  ">
     {boardNumber.map((num , index)=>{
      return(
        <button key={index} onClick={()=> num===null && handleClick(index)} className={`h-28 sm:h-32 border-2 rounded-lg font-bold border-gray-400 text-[40px] ${style}`}>{num}</button>
      )
     })}
    </div>
   {gameWinner && <h1 className='text-center text-xl font-bold'>{gameWinner} Won the Game</h1>}
    <button onClick={resetGame} className=' py-2 bg-gradient-to-r from-cyan-500 font-bold to-pink-500 text-white'>Play Again</button>
    <button onClick={showChatApp}  className='absolute -bottom-4 sm:bottom-0 right-0 w-10 h-10 border-2 bg-gradient-to-r from-cyan-500 font-bold to-pink-500 flex justify-center place-items-center rounded-full'><BsChatDotsFill/></button>
     {chatAppDisplay && <div className='absolute  right-12 bottom-0'>
      <ChatWindow chatAppDisplay={chatAppDisplay} setChatAppDisplay={setChatAppDisplay}/>
     </div> }
    </div>

  )
}

export default TicTacToe
