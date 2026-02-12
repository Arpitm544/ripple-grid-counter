import React, { useState } from 'react'

const App = () => {

    const [grid,setGrid]=useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
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
            
            if(col+1<3 && newGrid[row][col]<15){
            let updatedValue=1;
            newGrid[row][col+1]-=updatedValue
            }
           }
           //% by 5 then add +2
           if(updatedValue%5===0){

            if(row+1<3 && newGrid[row][col]<15){
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
                rowArr.map((value,col)=>(
                    <button className='w-20 h-20 bg-white  border-2 border-gray-400 rounded-xl hover:bg-blue-300 transition duration-500 ' key={`${row}-${col}`} onClick={()=>handleClick(row,col)}>{value}</button>
                ))
            )}
        </div>
    </div>
  )
};


export default App