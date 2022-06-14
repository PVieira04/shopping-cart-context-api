import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";

function Navbar() {

    const { items } = useContext(CartContext);
    console.log(items);

    return (
        <nav className="nav">
            <div className="navleft">
                <div className="leftside">
                    <Link to={"/"}>
                        <h1>Wear</h1>
                    </Link>
                </div>
            </div>
            <div className="navright">
                <div className="rightside">
                    <Link to={"/checkout"}>
                        <div className="cart">
                            <AiFillShopping />
                            <span>{ items.length }</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;