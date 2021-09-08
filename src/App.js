import logo from './logo.svg';
import './App.css';
import useList from './hooks/useList'

function App() {
  const list = ['Huyen', 'Hoa', 'Hung', 'Long']
  const [selectedIndex, getItemNext, getItemPrevious] = useList(list)
  const printList = list =>{
    let listPrint = '[';
    for(let i = 0; i < list.length; i++)
      listPrint = listPrint + list[i] + ","
    listPrint = listPrint.substring(0, listPrint.length-1);
    listPrint = listPrint + "]"
    return listPrint
  }

  return (
    <div className="App" >
        <div>学生一覧：{printList(list)}</div>
        <div>位置: {selectedIndex+1}</div>
        <div>名前：{list[selectedIndex]}</div>
   
        <button type="button" onClick={getItemNext} style={{marginRight: '10px'}}>次に</button>

        <button type="button" onClick={getItemPrevious}>前に</button>

    </div>
  );
}

export default App;
