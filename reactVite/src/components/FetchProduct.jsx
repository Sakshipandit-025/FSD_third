
import React, { useEffect, useState } from "react";

function FetchProduct() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const datum = await response.json();
                console.log("Products fetched:", datum.products);

                setData(datum.products);
            } catch (e) {
                console.error("Error fetching data:", e);
            } finally {
                setLoading(false);
                console.log("Fetching data completed.");
            }
        }

        fetchData();
    }, []);
    function cartData(){
        
    }

    return (
        <div className="products-page">
            <h1>Fetch Products</h1>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="products-container">
                    {data.map((ele) => (
                        <div className="product-card" key={ele.id}>
                            <img
                                src={ele.thumbnail}
                                alt={ele.title}
                                width="150"
                            />

                            <h2>{ele.title}</h2>

                            <p>{ele.description}</p>

                            <h3>Price: ${ele.price}</h3>

                            <button
                                onClick={() =>
                                    alert(`${ele.title} added to cart!`)
                                }
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FetchProduct;
