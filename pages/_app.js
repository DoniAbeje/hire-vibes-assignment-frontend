import "bootstrap/dist/css/bootstrap.css";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import "react-notifications/lib/notifications.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <NotificationContainer/>
    </div>
  );
}

export default MyApp;
