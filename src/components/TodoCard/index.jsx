import { Checkbox } from "pretty-checkbox-react";
import React from "react";
import "@djthoms/pretty-checkbox";
import { Check } from "react-feather";

/** TodoCard: Card Componennt That After Save Todo
 * props
 *
 */
const TodoCard = (props) => {
  return (
    <div className="todo-card-wrapper">
      <div className="check-col" color="info-o">
        <Checkbox
          className="todo-checkbox"
          animation="pulse"
          shape="round"
          color="danger"
          icon={<Check className="svg" data-type="svg" />}
          bigger
        />
      </div>
      <div className="description-col">
        <p>{props.children}</p>
      </div>
      <div className="trash-col">Trash</div>
    </div>
  );
};

export default TodoCard;
