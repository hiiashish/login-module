import React from "react";
import { Modal,Button } from "react-bootstrap";



export default function Dialogue(props)  {
    const [state, setState] = React.useState({
        props
      });
    
      const handleClose = () => {
        setState({message:'' , showDialogue: false });
      };
    return (
        <>
            <Modal show={state.showMessage=== undefined ? false: state.showMessage.showDialogue} onHide={handleClose} animation={false}>
                <Modal.Body>{state.showMessage.message}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
        );
  }
  
