import EvenOdd from "./components/EvenOdd";
const Task = () => {
    const randomnumber=Math.floor(Math.random()*100);
    console.log(randomnumber);
   
  return (
    <div className="Task">
        <h1>
            {randomnumber}:</h1>

           <h1> This is a </h1>
            <EvenOdd randomnumber={randomnumber}/>
         <h1> Number
        </h1>
    </div>
  );
};
export default Task;
