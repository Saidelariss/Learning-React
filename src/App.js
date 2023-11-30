



// import { useState } from 'react';



// des buttons indépendants 
// export default function MyApp(){
//   return (
//     <div>
//     <h1>des compteurs indépendants</h1>
//     <MyButton />
//     <MyButton />
//     </div>
//     );

// }

// function MyButton(){
//   const [count,setCount] = useState(0); // 0 est la valeur initiale de count (hooks)
//   function handleClick(){
//     setCount(count+1)
//   }
//   return(
//     <button onClick={handleClick}>cliqué {count} fois</button>
//   )
// }

//Des compteurs synchronisés : On utilise les props, c'est-à-dire, on passe des informations provenant du composant parent
// export default function MyApp(){
//   const [count,setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1)
//   }

//   return (
//     <div>
//       <h1>Des compteurs synchronisés</h1>
//       <MyButton compteur={count} incrementCount={handleClick} />
//       <MyButton compteur={count} incrementCount={handleClick} />
//     </div>
//   );
// }

// function MyButton({compteur,incrementCount}){ // compteur,incrementCount sont des props
//   return(
//     <button onClick={incrementCount}>cliqué {compteur} fois</button>
//   )
// }

//jeu Tic-Tac-Toe

import { useState } from 'react';

//Le mot-clé JavaScript export rend cette fonction accessible à l’extérieur de ce fichier. 
// Le mot-clé default indique aux autres fichiers utilisant votre code qu’il s’agit là de la fonction principale de votre fichier.
// Les composants React doivent ne renvoyer qu’un unique élément JSX, et non plusieurs éléments JSX adjacents, 
export default function Board() {
  const [xIsNext,setXIsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));
 
  // Dans React, la convention de nommage consiste à utiliser onSomething pour les props qui 
  // représentent des événements et handleSomething pour les fonctions qui gèrent ces événements.
  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    console.log("Clické ! ")
    const nextSquare = squares.slice();
    if(xIsNext){
      nextSquare[i]="X";
    }
    else {
      nextSquare[i]="O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquare);
  }
  

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
      {
        return squares[a]
      }
    }
    return null;
  }  
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    console.log("winner")
    status = winner + " a gagné";
  } else {
    status = "Prochain tour " + (xIsNext ? "X":"O");
  }
  // function handleFirstClick(){
  //   handleClick(0)
  // }
  //  l'appel de handleClick(0) se fait imédiatement avant que le client clique ce qui génére une boucle infinie 
  //utilisez les fonctions fléchés
  return (
    <>
    <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />  
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}

function Square({value,onSquareClick}){
  // const [value,setValue] = useState(null);

  // function handleClick(){
  //   setValue("X")
  //   console.log("cliqué ! ")
  // }

  return <button  className='square' onClick={onSquareClick}>{value}</button>
}

//remarque : on peut penser que le Board a besoin de « demander » à chaque Square quel est son état interne.  
// Même si une telle approche est techniquement possible en React, nous la déconseillons car elle engendre du 
// code difficile à comprendre, difficile à remanier et fortement sujet aux bugs.  
// La meilleure approche consiste plutôt à stocker l’état du jeu dans le composant parent Board, 
// plutôt qu’éparpillé dans chaque Square.
