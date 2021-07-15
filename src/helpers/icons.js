import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faTimesCircle,
  faSpinner,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faTimesCircle,
    faSpinner,
    faPlusSquare
  );
};

export default Icons;
