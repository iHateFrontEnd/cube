import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App(){
   return(
		<div id='cubeDiv' className='cubeDiv'>
			<table className='cuebTable' id='cubeTable'>
				<tr>
					<td>
						<form action=""></form>
					</td>
				</tr>

				<tr>
					<td></td>
					<td><button className='moveButtons' onClick={moveUpCol1Row1}>↑</button></td>
					<td><button className='moveButtons' onClick={moveUpCol1Row2}>↑</button></td>
					<td><button className='moveButtons' onClick={moveUpCol1Row3}>↑</button></td>
				</tr>

				<tr id='col1'>
					<td><button className="moveButtons" onClick={moveLeftCol1Row1}>←</button></td>
					<td id='col1Row1' className='cubeCell'></td>
					<td id='col1Row2' className='cubeCell'></td>
					<td id='col1Row3' className='cubeCell'></td>
					<td><button className="moveButtons" onClick={moveRightCol1Row3}>→</button></td>
				</tr>

				<tr>
					<td><button className="moveButtons" onClick={moveLeftCol2Row1}>←</button></td>
					<td id='col2Row1' className='cubeCell'></td>
					<td id='col2Row2' className='cubeCell'></td>
					<td id='col2Row3' className='cubeCell'></td>
					<td><button className="moveButtons" onClick={moveRightCol2Row3}>→</button></td>
				</tr>

				<tr>
					<td><button className="moveButtons" onClick={moveLeftCol3Row1}>←</button></td>
					<td id='col3Row1' className='cubeCell'></td>
					<td id='col3Row2' className='cubeCell'></td>
					<td id='col3Row3' className='cubeCell'></td>
					<td><button className="moveButtons" onClick={moveRightCol3Row3}>→</button></td>
				</tr>

				<tr>
					<td></td>
					<td><button className='moveButtons' onClick={moveDownCol3Row1}>↓</button></td>
					<td><button className='moveButtons' onClick={moveDownCol3Row2}>↓</button></td>
					<td><button className='moveButtons' onClick={moveDownCol3Row3}>↓</button></td>
				</tr>
			</table>
		</div>
	);
}

//layout for green side
const greenSide = {
	//column 1
	"col1Row1": "green",
	"col1Row2": "green",
	"col1Row3": "green",

	//column 2
	"col2Row1": "green",
	"col2Row2": "green",
	"col2Row3": "green",

	//column 3
	"col3Row1": "green",
	"col3Row2": "green",
	"col3Row3": "green"
}

//layout for orange 
const orangeSide = {
	//column 1
	"col1Row1": "orange",
	"col1Row2": "orange",
	"col1Row3": "orange",

	//column 2
	"col2Row1": "orange",
	"col2Row2": "orange",
	"col2Row3": "orange",

	//column 3
	"col3Row1": "orange",
	"col3Row2": "orange",
	"col3Row3": "orange",
}

//layout for blue
const blueSide = {
	//column 1
	"col1Row1": "blue",
	"col1Row2": "blue",
	"col1Row3": "blue",

	//column 2
	"col2Row1": "blue",
	"col2Row2": "blue",
	"col2Row3": "blue",

	//column 3
	"col3Row1": "blue",
	"col3Row2": "blue",
	"col3Row3": "blue"
}

//layout for white
const whiteSide = {
	//column 1
	"col1Row1": "white",
	"col1Row2": "white",
	"col1Row3": "white",

	//column 2 
	"col2Row1": "white",
	"col2Row2": "white",
	"col2Row3": "white",

	//column 3
	"col3Row1": "white",
	"col3Row2": "white",
	"col3Row3": "white",
}

//layout for yellow
const yellowSide = {
	//column 1
	"col1Row1": "blue",
	"col1Row2": "blue",
	"col1Row3": "blue",

	//column 2 
	"col2Row1": "blue",
	"col2Row2": "blue",
	"col2Row3": "blue",

	//column 3
	"col3Row1": "blue",
	"col3Row2": "blue",
	"col3Row3": "blue",
}

//layout for red 
const redLayout = {
	//column 1
	"col1Row1": "red",
	"col1Row2": "red",
	"col1Row3": "red",

	//column 2 
	"col2Row1": "red",
	"col2Row2": "red",
	"col2Row3": "red",

	//column 3
	"col3Row1": "red",
	"col3Row2": "red",
	"col3Row3": "red",
}

//function for to move up
function moveUpCol1Row1(){
}
function moveUpCol1Row2(){}
function moveUpCol1Row3(){}

//function to move left
function moveLeftCol1Row1(){}
function moveLeftCol2Row1(){}
function moveLeftCol3Row1(){}

//functions to move right
function moveRightCol1Row3(){}
function moveRightCol2Row3(){}
function moveRightCol3Row3(){}

//functions to mve down
function moveDownCol3Row1(){}
function moveDownCol3Row2(){}
function moveDownCol3Row3(){}
export default App;
