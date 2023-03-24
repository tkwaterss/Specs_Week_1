import React from "react";

const List = (props) => {

    let peopleDisplay = props.people.map((person, index) => {
        return (
          <div>
            <h3>
              {person.name}, age {person.age}
            </h3>
            {person.creditScore < 600 ? (
              <h4 className="bad-score">You have a bad credit score</h4>
            ) : (
              <h4 className="good-score">You have a real nice score!</h4>
            )}
          </div>
        );
      });

  return (
    <div>
      <h1>{peopleDisplay}</h1>
    </div>
  );
};

export default List;
