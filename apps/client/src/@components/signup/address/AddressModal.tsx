import DaumPostcode, { Address } from "react-daum-postcode";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/@components/ui/dialog";
import { XIcon } from "lucide-react";

interface AddressModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleComplete: (address: Address) => void;
}

const AddressModal = ({
  isOpen,
  setIsOpen,
  handleComplete,
}: AddressModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[calc(100vw-1rem)]  max-w-2xl max-h-[95vh] sm:max-h-[90vh] p-0 rounded-2xl border-0 shadow-2xl bg-background flex flex-col"
      >
        {/* Header with Close Button */}
        <div className="relative flex items-center justify-end px-4 sm:px-6 pt-4 sm:pt-6 pb-3 flex-shrink-0">
          <DialogHeader className="absolute left-4 sm:left-6 top-4 sm:top-6">
            <DialogTitle className="sr-only">주소 검색</DialogTitle>
          </DialogHeader>
          <DialogClose className="rounded-full p-1.5 hover:bg-muted/80 active:bg-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none group">
            <XIcon
              className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"
              strokeWidth={5}
            />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Postcode Content */}
        <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="w-full [&>iframe]:w-full [&>iframe]:h-[500px] sm:[&>iframe]:h-[600px] [&>iframe]:border-0 [&>iframe]:rounded-lg">
            <DaumPostcode
              onComplete={handleComplete}
              style={{
                width: "100%",
                height: "500px",
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
