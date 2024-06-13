const WinLose = ({gas, food, drink, activity, time}) => {

  return (
    <div id="resultmsg">
      {gas === 0 || food === 0 || drink === 0 || activity == 0 ? <h1>Your date failed...🙁</h1> : null}
      {time === 0 ? <h1>Successful date! 💗</h1> : null}  
    </div>
  )
};

export default WinLose;