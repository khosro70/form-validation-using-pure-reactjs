import { toast } from "react-toastify";

const tostify = (type, text) => {
  const position = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "error") {
    toast.error(text, position);
  } else {
    toast.success(text, position);
  }
};

export { tostify };
