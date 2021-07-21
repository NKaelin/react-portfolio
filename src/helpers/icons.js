import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faTimesCircle,
  faSpinner,
  faPlusSquare,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faUser,
  faThumbtack,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faTimesCircle,
    faSpinner,
    faPlusSquare,
    faPhoneSquareAlt,
    faEnvelopeSquare,
    faUser,
    faThumbtack,
    faKey
  );
};

export default Icons;
