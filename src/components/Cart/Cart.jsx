const Cart = () => {
    return (
        <div className="bg-gray-50 h-72 rounded-lg p-4 text-start">
            <h3 className="text-xl text-blue-700 font-bold">Credit Hour Remaining 7 hr</h3>
            <hr />
            <h2 className="font-bold text-lg py-2">Course Name</h2>
            1 Introduction to c programming
            2 Introduction to C++ for DSA
            3 Software Engineering
            <hr />
            <h4 className="text-lg py-2">  Total Credit Hour : 13</h4>
            <hr />
            <h2 className="text-lg font-medium pt-2">Total Price : 48000 USD</h2>
        </div>
    );
};

export default Cart;