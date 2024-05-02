import './App.css';

function App() {
  return (
    <div className="form">
      <form>
          <label for="stockInt" class="label" id="stock">Last Week's Price</label>
          <input type="number" name="stock" id="stockInt" placeholder="Last Week's Price" class="number"></input>
          <br></br>
          <label for="stockFin" class="label" id="stock">This Week's Price</label>
          <input type="number" name="stock" id="stockFin" placeholder="This Week's Price" class="number"></input>
          <br></br>
          <label for="stockAmt" class="label" id="stock">Number of Stocks</label>
          <input type="number" name="stock" id="stockAmt" placeholder="Number of Stocks" class="number"></input>
          <br></br>
          <input type="submit" value="Calculate" id="submit"></input>
      </form>
    </div>
  );
};

function output(amount) {
  if (amount > 0) {
    return (
      <div className="output">
        <h1>Money Made:</h1>
        <br></br>
        <h3>${amount}</h3>
      </div>
    )
  } else {
    return (
      <div className="output">
        <h1>Money Lost:</h1>
        <br></br>
        <h3>-${amount}</h3>
      </div>
    )
  }
};

const calcFuncs = { App, output };
export { calcFuncs };
