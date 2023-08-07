import { useMemo } from 'react'

const useFeaturedHouse = (allHouses) => {
  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const index = Math.floor(allHouses.length * Math.random())
      return allHouses[index]
    }
  },[allHouses]);
  return featuredHouse
}
 
export default useFeaturedHouse;