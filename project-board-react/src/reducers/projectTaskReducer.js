import {
  GET_PROJECT_TASKS,
  DELETE_PROJECT_TASKS,
  GET_PROJECT_TASK,
} from "../actions/types";

const initiateState = {
  project_tasks: [],
  project_task: {},
};

export default function (state = initiateState, action) {
  switch (action.type) {
    case GET_PROJECT_TASKS:
      return {
        ...state,
        project_tasks: action.payload,
      };

    case GET_PROJECT_TASK:
      return {
        ...state,
        project_task: action.payload,
      };
    case DELETE_PROJECT_TASKS:
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          (project_task) => project_task.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
