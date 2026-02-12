import React, { useState } from 'react'

const App = () => {

    const [grid,setGrid]=useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])

    const handleClick=(row,col)=>{
        setGrid((prevgrid)=>{
           let newGrid=prevgrid.map((r)=>[...r])

           const currentgrid=newGrid[row][col]

           if(currentgrid>=15){
            return prevgrid;
           }

           let updatedValue=currentgrid+1;
           newGrid[row][col]=updatedValue;
           
           if(updatedValue%3===0){
            
            if(col+1<3 && newGrid[row][col+1]<15){
            let updatedValue=1;
            newGrid[row][col+1]-=updatedValue
            }
           }
           //% by 5 then add +2
           if(updatedValue%5===0){

            if(row+1<3 && newGrid[row+1][col]<15){
                let updatedValue=2
                newGrid[row+1][col]+=updatedValue;
            }
           }
             return newGrid
        })
    }

return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='grid grid-cols-3 gap-4'>
            {grid.map((rowArr,row)=>
                rowArr.map((value,col)=>{
                    const isLocked=value>=15
                     return(
                    <button className={`w-20 h-20 text-xl font-bold border-2 border-black rounded-[4px] shadow-[2px_2px_0px_black] transition duration-200
                         ${isLocked? "bg-red-500 text-white cursor-not-allowed": value % 2 === 0? "bg-[#e0e0e0] text-black hover:scale-105": "bg-[#1a237e] text-white hover:scale-105"
                  }
                `} 
                    key={`${row}-${col}`} 
                    disabled={isLocked}
                    onClick={()=>handleClick(row,col)}>{value}</button>
                )})
            )}
        </div>
    </div>
  )
};


export default App