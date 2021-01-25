const Order = ({pizza}) => {
    return (
        <div className="container order">
            <h2>Thank you for your order 🎉</h2>
            <p>You ordered a {pizza.base} pizza with the following Toppings </p>
            {pizza.toppings.map(topping => <div key={topping}>{topping} </div> )}
        </div>
    );
}
 
export default Order;