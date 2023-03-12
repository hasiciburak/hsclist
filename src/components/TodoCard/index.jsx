import { Checkbox, useCheckboxState } from "pretty-checkbox-react"
import { useEffect } from "react"
import "@djthoms/pretty-checkbox"
import { Check } from "react-feather"

/** TodoCard: Card Componennt That After Save Todo
 * props
 *
 */
const TodoCard = (props) => {
  let checkboxState = useCheckboxState()
  useEffect(() => {
    props.done !== undefined && checkboxState.setState(props.done)
  }, [])
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
          {...checkboxState}
        />
      </div>
      <div className="description-col">
        <p
          onClick={() => {
            checkboxState.setState(!checkboxState.state)
          }}
          className={`${checkboxState.state && "state-checked"}`}
        >
          {props.children}
        </p>
      </div>
      <div className="trash-col" onClick={() => {}}>
        Trash
      </div>
    </div>
  )
}

export default TodoCard
