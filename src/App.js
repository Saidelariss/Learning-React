



import { useState } from 'react';



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
export default function MyApp(){
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1)
  }

  return (
    <div>
      <h1>Des compteurs synchronisés</h1>
      <MyButton compteur={count} incrementCount={handleClick} />
      <MyButton compteur={count} incrementCount={handleClick} />
    </div>
  );
}

function MyButton({compteur,incrementCount}){ // compteur,incrementCount sont des props
  return(
    <button onClick={incrementCount}>cliqué {compteur} fois</button>
  )
}