import { setEditingMode } from "./../../../../reduxFunction/PageControls/pageControls";
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const EditingActioButtons = [
  {
    title: "clear all page codes",
    icon: <MdDeleteOutline />,
    action: setEditingMode(),
  }, {
    title: "Editing Mode",
    icon: <MdOutlineEdit className="duration-300" />,
    action: null,
  }
]

export default function ToggleSwitch() {
  const open = useSelector(state => state.pageControls.isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      {open && <div className="flex space-x-1">
        {EditingActioButtons.map(actionBtn => (
          <div>
            <button
              onClick={() => dispatch(actionBtn ? actionBtn.action : null)}
              className="flex items-center space-x-2 rounded-md bg-indigo-600 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              title={actionBtn.title}
            >
              {actionBtn.icon}
            </button>
          </div>
        ))}
      </div>}
    </div>
  )
}
