



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
  const [squares,setSquares] = useState(Array(9).fill(null));
 
  function handleClick(i){
    console.log("salam")
    const nextSquare = squares.slice();
    nextSquare[i]="X";
    setSquares(nextSquare);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick(0)} />
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
      </div>
      <div className="board-row">
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
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

  return <button  className='square' onclick={onSquareClick}>{value}</button>
}

//remarque : on peut penser que le Board a besoin de « demander » à chaque Square quel est son état interne.  
// Même si une telle approche est techniquement possible en React, nous la déconseillons car elle engendre du 
// code difficile à comprendre, difficile à remanier et fortement sujet aux bugs.  
// La meilleure approche consiste plutôt à stocker l’état du jeu dans le composant parent Board, 
// plutôt qu’éparpillé dans chaque Square.
