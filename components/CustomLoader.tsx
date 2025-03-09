import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomLoader({ loading }: { loading: boolean }) {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility

  // Update modal open state based on loading prop
  useEffect(() => {
    if (loading) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [loading]);

  return (
    <>
    
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} isDismissable={false} 
            // @ts-expect-error: selectedKey contains fields that may be null, and we're handling them elsewhere.
      
      backdrop="static">
        <ModalContent>
          <ModalBody className="flex justify-center items-center py-12" >
            {/* Use Image as a loader */}
            <Image src="/loader/loader.gif" alt="Loading" width={150} height={150} />

            <p> Please Wait ... Story Generating</p>          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
