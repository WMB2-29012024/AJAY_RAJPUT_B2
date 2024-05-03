const Task = () => {
    const randomnumber=Math.floor(Math.random()*100);
    console.log(randomnumber);
   
  return (
    <div className="Task">
       {
        !!((randomnumber%2)===0)&&<h1>  This is a Even number{randomnumber}</h1>}
        {
        !(randomnumber%2===0)&& <h1>This is a Odd {randomnumber}  Number</h1>
       }
    </div>
  );
};
export default Task;
