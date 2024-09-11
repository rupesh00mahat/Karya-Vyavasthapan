import { useContext, useRef, useState } from "react";
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
import { v4 as uuidv4 } from 'uuid';


function InputArea() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {state, dispatch} = useContext(TaskContext);


console.log(state);
  const taskItem = useRef("");
  const taskCategory = useRef("");
  const [taskLabel, setTaskLabel] = useState("ns");

  const AddTask = () =>{
    let newTask = {id: uuidv4(),task: taskItem.current.value, category: taskCategory.current.value, label: taskLabel};
    dispatch({type: "ADD_TASK", payload: newTask});
  }

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>Task Name</FormLabel>
                <Input type="text" ref={taskItem} />
              </FormControl>
              <FormControl>
                <FormLabel>Task Category</FormLabel>
                <Input type="text" ref={taskCategory} />
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
            onClick={()=>{
                AddTask();
            }}
            width={{ base: "100%" }}>Create Task</Button>

            <Button
              width={{ base: "100%" }}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
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
