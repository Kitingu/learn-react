import React from "react";

const ExpenseListItem = ({ amount, description, createdAt }) => (
    <div>
        <h1>{description}</h1>
        <p>
            {amount} - {createdAt}
        </p>
    </div>
);

// const mapFiltersToProps = () => {
//   return {
//     amount: state.filters.amount,
//     description: state.filters.description,
//     createdAt: state.filters.createdAt
//   };
// };

export default ExpenseListItem;
