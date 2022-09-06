import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Button,
  ModalFooter,
  ModalBody,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetStatus, UpdateStatus } from "../redux/profile/action_creator";

const StatusModal = ({ isOpen, onClose, statusId }) => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetStatus("12"));
  }, []);
  const updateStatus = () => {
    dispatch(UpdateStatus(1, status));
    onClose();
  };

  const statusList = useSelector((state) => state.profile.statusList);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Status</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Select variant="outline" onChange={(e) => setStatus(e.target.value)}>
            {statusList.map((status) => {
              return (
                <option
                  value={status.name}
                  key={status.id}
                  selected={status.id == statusId}>
                  {status.name}
                </option>
              );
            })}
          </Select>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            _hover={{ background: "blue.300" }}
            onClick={updateStatus}>
            Update
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatusModal;
