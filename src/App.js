



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

// Les composants React doivent ne renvoyer qu’un unique élément JSX, et non plusieurs éléments JSX adjacents, 
export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

