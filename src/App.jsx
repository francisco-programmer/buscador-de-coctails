
import './App.css'
import axios from "axios";
import React, { useState,  useEffect} from 'react';


function App() {
 const [data, setData] = useState([]);
 const [search, setSearch] = useState("");
 const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;

 const fetchCoctail = async () => {
  await axios.get(url).then((response) => {
   setData(response.data.drinks);
 }).catch((e) => console.log(e))
console.log(data)
}
useEffect(() =>{
  fetchCoctail();
},[fetchCoctail]);

  return (
    <div className="App ">
      <div className="bg-gray-200 p-2">
        <p className="text-center text-3xl text-sky-500 font-bold">
          Buscador de Coctails
        </p>
      </div>
      <form>
        <div className="text-center my-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="p-2 bg-gray-200 border-dotted focus:outline-none focus:ring-1  focus:ring-sky-500 rounded"
            placeholder="Buscar Coctail"
          />
        </div>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mx-10 gap-9 overflow-auto si">
        {data ? (
          data.map((items) => {
            return (
              <div>
                <img src={items.strDrinkThumb} className="rounded-3xl" />
                <div className="flex gap-2">
                  <p className="text-gray-500 text-sm ">Nombre: </p>
                  <p className="font-bold text-gray-700  sm:text-sm">
                    {items.strDrink}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-gray-500 text-sm">Vaso:</p>
                  <p className="font-bold text-gray-700 text-sm underline">
                    {items.strGlass}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-6 mt-10">
            {" "}
            <p className="text-center text-2xl text-gray-600 underline-offset-8">
              No hay Coincidencias...
            </p>
          </div>
        )}
      </div>
     
    </div>
  );
  }

export default App;
