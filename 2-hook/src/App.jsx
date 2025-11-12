// const App = () => <>2-hook</>;

// export default App;
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

import React from 'react';
import MyReact from "./libs/MyReact";
const Counter = () =>{
  MyReact.resetCursor();
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  const handleClick=()=>setCount(count + 1);
  const handleChangeName=(e)=>{
    return setName(e.target.value)
  }
  MyReact.useEffect(()=>{
    document.title = `count: ${count} | name: ${name}`;
    console.log("effect1");
    return function cleanup(){
      document.title='';
      console.log('effect1 cleanup')
    }
  }, [count, name])
  MyReact.useEffect(()=>{
    localStorage.setItem("name", name);
    console.log("effect2");
  }, [name])
  MyReact.useEffect(()=>{
    setName(localStorage.getItem("name")||"");
     console.log("effect3");
  },[])
  console.log("Counter rendered")
  return <>
  <button onClick={handleClick}>더하기</button>
  <input value={name} onChange={handleChangeName}/>
  </>
}
export default ()=>{
  const [mounted, setMounted] = React.useState(false);
  const handleToggle = () =>{
    const nextMounted = !mounted
    if(!nextMounted) MyReact.cleanupEffects();
    setMounted(nextMounted);
  }
  return <>
  <button onClick={handleToggle}>컴포넌트 토글</button>
  {mounted && <Counter/>}
  </>;
}