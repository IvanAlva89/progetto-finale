import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../utilities/products";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { getAllCategories } from "../utilities/categories";

const Search = () => {
    const products = useRef(getAllProducts());
    const categories = useRef(getAllCategories());
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState(searchParams.get("q")?.replace(/\+/ig, " ") || "");
    const [category, setCategory] = useState(searchParams.get("c")?.replace(/\+/ig, " ") || "");
    const [results, setResults] = useState([]);

    const handleInput = ({ target: { value } }) => {
        setQuery(value);
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), q: value.replace(/\s/ig, "+") });
    }

    const handleChange = ({ target: { value } }) => {
        setCategory(value);
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), c: value.replace(/\s/ig, "+") });
    }

    useEffect(() => {
        if (query == "") { 
            searchParams.delete("q");
            setSearchParams(searchParams);
        }

        if (category == "") { 
            searchParams.delete("c");
            setSearchParams(searchParams);
        }

        if (query.length > 0 && category.length == 0) {
            // Filter array
            setResults(() => 
                products.current.filter((prod) => 
                    prod.name.match(new RegExp(query, "ig"))
                    || prod.category.name == category
                )
            );
        } else if (category.length > 0 && query.length == 0) {
            setResults(() => 
                products.current.filter((prod) => prod.category.name == category)
            );
        } else if (query.length > 0 && category.length > 0) {
            setResults(() => 
                products.current.filter((prod) => 
                    prod.name.match(new RegExp(query, "ig"))
                    && prod.category.name == category
                )
            );
        } else {
            setResults([]);
        }
    }, [query, category]);

    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col items-center bg-[#2196f3] py-12">
                <div className="flex flex-col items-center gap-8 justify-center p-4 max-w-[1280px]">
                    <div className="w-full flex gap-2 max-w-md min-w-[340px]">
                        <div className="relative">
                            <svg className="w-5 h-5 text-gray-500 absolute top-3.5 left-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                            </svg>
                            <input
                                type="search"
                                value={query}
                                placeholder="Scrivi per cercare..."
                                onInput={handleInput}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-[#1e90ff]-500"
                            />
                        </div>
                        <select value={category} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-[#1e90ff]-500">
                            <option value="">Nessuna categoria</option>
                            {
                                categories.current.map(c => (
                                    <option key={c.id} value={c.name}>{c.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 mt-12">
                {
                    results.length == 0 && query == "" && (
                        <>
                            <p className="w-full p-12">Effettua la ricerca.</p>
                        </>
                    )
                }
                {
                    results.length == 0 && query != "" && (
                        <>
                            <p className="w-full p-12">Nessun risultato trovato per "<b>{query}</b>".</p>
                        </>
                    )
                }
                {
                    results.map(p => (
                        <ProductCard product={p} key={p.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Search

