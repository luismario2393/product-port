import { useTranslation } from "react-i18next";
import firebase, { FirebaseContext } from "./firebase";
import useAuthentication from "./hooks/useAutentication";

function App() {
  const user = useAuthentication();
  const { t } = useTranslation();

  return (
    <FirebaseContext.Provider value={{ firebase, user }}>
      <div className="App">
        <h1>{t("hola")}</h1>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
