
import { toast } from "react-toastify";
toast.configure();
export default function HandleErrors(props) {
   const { response } = props
   let err;
   console.log("'err'", response);
   if (response.message) {
      err = response.message;
      if (err.includes("Unauthenticated")) {
         window.location.reload()
      }
   }
   if (Object.keys(response)[0] !== 'line') {
      if (response && Object.keys(response)) {
         toast.error(response[Object.keys(response)[0]][0])
      } else if (Object.keys !== 0) {
         toast.error(Object.values(response)[0])
      } else if (response.message) {
         toast.error(response.message)
      } else {
         toast.error("Something went wrong.")
      }
   }
   return err;
}