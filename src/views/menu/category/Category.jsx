import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Header from "../../../components/header/Header.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import './Category.css';
const menuImages = require.context('../../../images/menu', true);

function Category() {
    const { short_name } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [skeletonCount, setSkeletonCount] = useState(8);

    useEffect(() => {
        // fetch('/categories.json')
        fetch(`${process.env.PUBLIC_URL}/categories.json`)
            .then(response => response.json())
            .then(data => {
                const category = data.find(cat => cat.short_name.toString() === short_name);
                if (category) {
                    setCategory(category);
                    setSkeletonCount(category.image_title.length); // Set the skeleton count dynamically
                }
                // Simulate a minimum loading time of 1 second
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.error('Error fetching category:', error);
                setLoading(false);
            });
    }, [short_name]);

    if (loading) {
        return (
            <>
                <Header />
                <h2 id="menu-categories-title" className="text-center skeleton-title"><Skeleton width={230} /></h2>
                <div className="menu-item-tile">
                    {Array(skeletonCount).fill().map((_, index) => (
                        <div key={index} className="row">
                            <div className="col-sm-5 menu-item-photo-container">
                                <div className="menu-item-photo photo-skeleton">
                                    <Skeleton height={106} width={184} />
                                </div>
                                <div className="menu-item-price">
                                    <Skeleton height={20} width={140} />
                                </div>
                            </div>
                            <div className="menu-item-description col-sm-7">
                                <h3 className="menu-item-title"><Skeleton width={230} /></h3>
                                <p className="menu-item-details"><Skeleton count={3} /></p>
                            </div>
                            <hr className="visible-xs" />
                        </div>
                    ))}
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <h2 id="menu-categories-title" className="text-center">{category.name} Menu</h2>
            <div className="text-center">{category.special_instructions}</div>

            <div className="menu-item-tile ">
                {category.image_title.map((image_title, index) => (
                    <div key={index} className="row">
                        <div className="col-sm-5 menu-item-photo-container">
                            <div className="menu-item-photo">
                                <div>{category.images[index].replace('.jpg', '')}</div>
                                <img className="img-responsive" width="250" height="150" src={menuImages(`./${category.short_name}/${category.images[index]}`)} alt={image_title} />
                            </div>
                            <div className="menu-item-price">
                                {category.pint_price && category.pint_price[index] && (<>${category.pint_price[index]}<span> pint </span></>)}
                                {category.quart_price && category.quart_price[index] && (<>${category.quart_price[index]}<span>quart</span></>)}
                                {category.large_price && category.large_price[index] && (<>${category.large_price[index]}<span>large</span></>)}
                                {category.price && category.price[index] && (<>${category.price[index]}</>)}
                            </div>
                        </div>
                        <div className="menu-item-description col-sm-7">
                            <h3 className="menu-item-title">{image_title}</h3>
                            <p className="menu-item-details">{category.description[index]}</p>
                        </div>
                        <hr className="visible-xs" />
                    </div>
                ))}

            </div>

            <Footer />
        </>
    );
}

export default Category;