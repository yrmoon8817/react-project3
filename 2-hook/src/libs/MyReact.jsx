import React from "react";
import NameField from "../App";

const MyReact = (function MyReact(){
  const memorizedStates=[];

  const isInitialized = [];
  let cursor = 0;
  const deps=[];
  const cleanups=[];

  function useState(initialValue=""){
    const {forceUpdate} = useForceUpdate();
    if(!isInitialized[cursor]){
      memorizedStates[cursor]=initialValue;
      isInitialized[cursor]=true;
    }
    const state = memorizedStates[cursor];

    const setStateAt = (_cursor) =>(nextState)=>{
      if(state === nextState) return;
      memorizedStates[_cursor]= nextState;
      forceUpdate();
    }
    const setState = setStateAt(cursor);
    cursor= cursor +1;
    return [state, setState]
  }
  function useForceUpdate(){
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor=0;
    }
    return {forceUpdate};
  }

  function useEffect(effect,nextDeps){
    function runDeferredEffect(){
      function runEffect(){
        const cleanup = effect();
        if(cleanup) cleanups[cursor] = cleanup;
      }
      const ENOUGH_TIME_TO_RENDER =1;
      setTimeout(runEffect, ENOUGH_TIME_TO_RENDER);
    }
    if(!isInitialized[cursor]){
      isInitialized[cursor]=true;
      deps[cursor] = nextDeps;
      cursor+=1;
      runDeferredEffect();
      return;
    }
    const prevDeps= deps[cursor];
    const depsSame = prevDeps.every((prevDep, index)=> prevDep ===nextDeps[index])
    if(depsSame) {
      cursor +=1;
      return
    }
    deps[cursor] = nextDeps;
    cursor +=1;
    runDeferredEffect();
  }

  function resetCursor(){
    cursor = 0;
  }
  function cleanupEffects(){
    cleanups.forEach(cleanup => typeof cleanup === 'function' && cleanup());
  }
  return {useState, useEffect, resetCursor,cleanupEffects}
})();

export default MyReact;