import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './Menu.css';
const menuImages = require.context('../../images/menu', true);

function Menu() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // fetch('/categories.json')
        fetch(`${process.env.PUBLIC_URL}/categories.json`)
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <>
            <Header />
            <h2 id="menu-categories-title" className="text-center">Menu Categories</h2>
            <div className="text-center">Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.</div>

            <div className="row categoriesContainer">
                {categories.map(category => (
                    <div key={category.id} className="col-md-3 col-sm-4 col-xs-6 col-xxs-12">
                        <Link to={`/category/${category.short_name}`}>
                            <div className="category-tile">
                                <img width="200" height="200" src={menuImages(`./${category.short_name}/${category.cover}`)} alt={category.name} />
                                <span>{category.name}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    )
}

export default Menu;