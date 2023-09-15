/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Cart = ({selectedCourse, remaining, totalCredit, totalPrice}) => {
    // console.log(remaining, totalCredit)
    return (
        <div className="">
            <div className="bg-gray-50 rounded-lg p-4 mt-4 text-start">
            <h3 className="text-xl text-blue-700 font-bold py-2">Credit Hour Remaining {remaining} hr</h3>
            <hr />
            <h2 className="font-semibold text-2xl py-4">Course Name: {selectedCourse.length}</h2>
            {
              // eslint-disable-next-line react/prop-types
              selectedCourse.map((cours)=>(
                <li className="text-gray-600 mb-2" type="1" key={cours.id}> {cours.title}</li>
              ))
            }
            {/* 1 Introduction to c programming
            2 Introduction to C++ for DSA
            3 Software Engineering */}
            <hr />
            <h4 className="text-lg font-semibold py-4">  Total Credit Hour : {totalCredit}</h4>
            <hr />
            <h2 className="text-lg font-bold pt-4">Total Price : {totalPrice} USD</h2>
        </div>
        </div>
    );
};

export default Cart;