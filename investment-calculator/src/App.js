//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ResultTable from './components/ResultTable/ResultTable';
import UserInput from './components/UseInput.js/UserInput';

function App() {
  const[userInput,setUserResult] =useState(null)

  const calculateHandler =(userInput) =>{
      setUserResult(userInput)
  }
    // yearly calc
    const yearlyData =[]; // per year data
    //const yearlyInterest;

    let currentSavings =userInput['current-saving'];
    let yearlyContribution = userInput['yearly-contribution'];
    let expectedReturn = userInput['expected-return'];
    let duration = userInput.duration;

    for(let i=0;i<duration ;i++){
      yearlyData.push({
        const yearlyInterest =currentSavings * expectedReturn;
        currentSavings =currentSavings+ yearlyInterest +yearlyContribution

        yearlyData.push({
          year: i+1,
          yearlyInterest: yearlyInterest,
          saving:currentSavings,
          yearlyContribution:yearlyContribution
        })
      })
    }

  
  return (
    <div>
      <Header />
      <UserInput onCalculate ={calculateHandler}/>
      <ResultTable />
    </div>
  );
}

export default App;
