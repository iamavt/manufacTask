
import './App.css';

const wineData = [
  {
    Class: 1,
    Alcohol: 14.23,
    Flavanoids: 3.06,
    Ash: 2.43,
    Hue: 1.04,
    Magnesium: 127
  },
  {
    Class: 2,
    Alcohol: 13.2,
    Flavanoids: 2.76,
    Ash: 2.14,
    Hue: 1.05,
    Magnesium: 100
  },
  {
    Class: 3,
    Alcohol: 13.16,
    Flavanoids: 3.24,
    Ash: 2.67,
    Hue: 1.03,
    Magnesium: 101
  }
];

function calculateFlavanoidsMean(classNum) {
  const classData = wineData.filter((wine) => wine.Class === classNum);
  const totalFlavanoids = classData.reduce(
    (acc, wine) => acc + wine.Flavanoids,
    0
  );
  return +(totalFlavanoids / classData.length).toFixed(3);
}

function calculateFlavanoidsMedian(classNum) {
  const classData = wineData.filter((wine) => wine.Class === classNum);
  const sortedFlavanoids = classData
    .map((wine) => wine.Flavanoids)
    .sort((a, b) => a - b);
  const mid = Math.floor(sortedFlavanoids.length / 2);
  return sortedFlavanoids.length % 2 !== 0
    ? sortedFlavanoids[mid]
    : +(sortedFlavanoids[mid - 1] + sortedFlavanoids[mid]) / 2;
}

function calculateFlavanoidsMode(classNum) {
  const classData = wineData.filter((wine) => wine.Class === classNum);
  const countMap = classData.reduce((acc, wine) => {
    if (!acc[wine.Flavanoids]) {
      acc[wine.Flavanoids] = 1;
    } else {
      acc[wine.Flavanoids]++;
    }
    return acc;
  }, {});

  const mode = Object.keys(countMap).reduce((a, b) =>
    countMap[a] > countMap[b] ? a : b
  );
  return +mode;
}


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td>{calculateFlavanoidsMean(1)}</td>
            <td>{calculateFlavanoidsMean(2)}</td>
            <td>{calculateFlavanoidsMean(3)}</td>
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{calculateFlavanoidsMedian(1)}</td>
            <td>{calculateFlavanoidsMedian(2)}</td>
            <td>{calculateFlavanoidsMedian(3)}</td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{calculateFlavanoidsMode(1)}</td>
            <td>{calculateFlavanoidsMode(2)}</td>
            <td>{calculateFlavanoidsMode(3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
