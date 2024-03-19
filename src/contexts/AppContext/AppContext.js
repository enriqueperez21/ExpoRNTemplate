import { useState, createContext, useContext} from "react"

const context = createContext()

export const useUserData = () =>{
  return useContext(context)
}

export const UserDataProvider = ({children}) =>{
  const [allData, setAllData] = useState(null)
  const [category, setCategory] = useState({})
  const [subCategory, setSubCategory] = useState({})

  return (
    <context.Provider value={{
      allData,
      category,
      subCategory,
      setAllData,
      setCategory,
      setSubCategory,
    }}>
      {children}
    </context.Provider>)
  
}