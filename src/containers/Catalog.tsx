import {  useSelector } from "react-redux";

import CatalogTable from "../components/catalog/CatalogTable";
import ErrorBackdrop from "../components/errors/ErrorBackdrop";

import { RootStateType } from "../configureStore";
import { useEffect } from "react";

const Catalog:React.FC<{visibleHeader:(value:boolean)=>void}> = ({visibleHeader}) => {
  const error = useSelector((state: RootStateType) => state.errorReducer);

  useEffect(()=>{
    let isVisible=true;
    let isNotVisible=false;
    
    visibleHeader(isVisible);
    return ()=>{
      visibleHeader(isNotVisible);
    } 

  },[])
  return (
    <>
      <CatalogTable />
      {error && <ErrorBackdrop message={error} />}{" "}
    </>
  );
};
export default Catalog;
