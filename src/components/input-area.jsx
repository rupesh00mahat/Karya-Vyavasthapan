import { useContext, useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { TaskContext } from "../context/taskContext";
import { v4 as uuidv4 } from "uuid";

function InputArea() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { state, dispatch } = useContext(TaskContext);

  const [taskItem, setTaskItem] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskLabel, setTaskLabel] = useState("ns");
  const [editableValue, setEditableValue] = useState("");

  useEffect(() => {
    if (state.openModal.openState === true) {
      if (
        state.openModal.type != undefined &&
        state.openModal.type === "EDIT"
      ) {
        const result = state.tasks.find(
          (item) => item.id == state.openModal.id
        );
        setTaskItem(result.task);

        setTaskCategory(result.category);

        setTaskLabel(result.label);
      }

      onOpen();
    } else {
      onClose();
    }
  }, [state.openModal.openState]);

  const AddTask = () => {
    console.log("state");
    console.log(state);
    if (state.payload.type === "EDIT") {
      dispatch({ type: "EDIT", payload: id });
      return;
    }
    let newTask = {
      id: uuidv4(),
      task: taskItem,
      category: taskCategory,
      label: taskLabel,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  return (
    <>
      <Button
        onClick={() => {
          dispatch({
            type: "TOGGLE_MODAL",
            payload: { openState: true, type: "ADD_NEW" },
          });
        }}
      >
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>Task Name</FormLabel>
                <Input
                  type="text"
                  value={taskItem}
                  onChange={(e) => {
                    setTaskItem(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Task Category</FormLabel>
                <Input
                  type="text"
                  value={taskCategory}
                  onChange={(e) => {
                    setTaskCategory(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  placeholder="Select option"
                  size="md"
                  value={taskLabel}
                  onChange={(e) => {
                    setTaskLabel(e.target.value);
                  }}
                >
                  <option value="ns">Not Started</option>
                  <option value="og">OnGoing</option>
                  <option value="complete">Completed</option>
                </Select>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                AddTask();
              }}
              width={{ base: "100%" }}
            >
              Create Task
            </Button>

            <Button
              width={{ base: "100%" }}
              colorScheme="blue"
              mr={3}
              onClick={() => {
                dispatch({
                  type: "TOGGLE_MODAL",
                  payload: { openState: false, type: "ADD_NEW" },
                });
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InputArea;
