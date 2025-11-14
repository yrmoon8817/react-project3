import React from 'react';
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from './pages/OrderPage';
import * as MyRouter from './libs/MyRouter';
import * as MyLayout from './libs/MyLayout';

const App = () => (
  <MyLayout.Layout>
    <MyRouter.Router>
      <MyRouter.Routes>
        <MyRouter.Route path="/cart" element={<CartPage />} />
        <MyRouter.Route path="/order" element={<OrderPage />} />
        <MyRouter.Route path="/" element={<ProductPage />} />
      </MyRouter.Routes>
    </MyRouter.Router>
  </MyLayout.Layout>
)
export default App;

// const countContext = MyReact.createContext({});
// const CountProvider = ({children})=>{
//   const [count, setCount] = React.useState(0);
//   const value = {count, setCount}
//   return <countContext.Provider value={value}>{children}</countContext.Provider>
// }

// const Count = () =>{
//   const {count} = MyReact.useContext(countContext);
//   return <div>{count}</div>
// }

// const PlusButton = () =>{
//   const {count, setCount} = MyReact.useContext(countContext);
//   const handleClick = () => setCount(count + 1);
//   return <button onClick={handleClick}>카운트 증가</button>;
// }
// export default () => (<CountProvider>
//   <Count/>
//   <PlusButton/>
// </CountProvider>)

// import MyReact from "./libs/MyReact";
// function NameField (){
//   const [firstname, setFirstname] = MyReact.useState("사용자1");
//   const [lastname, setLastname] = MyReact.useState("김");

//   const handleChangeFirstname = e =>{
//     setFirstname(e.target.value);
//   }
//   const handleChangeLastname = e =>{
//     setLastname(e.target.value);
//   }

//   return (<>
//     <input value={firstname} onChange={handleChangeFirstname} />
//     <input value={lastname} onChange={handleChangeLastname} />
//   </>)
  
// }

// export default () => <NameField/>;

// import MyReact from "./libs/MyReact";
// const Counter = () =>{
//   MyReact.resetCursor();
//   const [count, setCount] = React.useState(0);
//   const [name, setName] = React.useState("");
//   const handleClick=()=>setCount(count + 1);
//   const handleChangeName=(e)=>{
//     return setName(e.target.value)
//   }
//   MyReact.useEffect(()=>{
//     document.title = `count: ${count} | name: ${name}`;
//     console.log("effect1");
//     return function cleanup(){
//       document.title='';
//       console.log('effect1 cleanup')
//     }
//   }, [count, name])
//   MyReact.useEffect(()=>{
//     localStorage.setItem("name", name);
//     console.log("effect2");
//   }, [name])
//   MyReact.useEffect(()=>{
//     setName(localStorage.getItem("name")||"");
//      console.log("effect3");
//   },[])
//   console.log("Counter rendered")
//   return <>
//   <button onClick={handleClick}>더하기</button>
//   <input value={name} onChange={handleChangeName}/>
//   </>
// }
// export default ()=>{
//   const [mounted, setMounted] = React.useState(false);
//   const handleToggle = () =>{
//     const nextMounted = !mounted
//     if(!nextMounted) MyReact.cleanupEffects();
//     setMounted(nextMounted);
//   }
//   return <>
//   <button onClick={handleToggle}>컴포넌트 토글</button>
//   {mounted && <Counter/>}
//   </>;
// }